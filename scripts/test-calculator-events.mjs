import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')

function classes(...initial) {
 const values = new Set(initial)
 return {
  contains: value => values.has(value),
  toggle(value, force = !values.has(value)) {
   if (force) values.add(value)
   else values.delete(value)
   return force
  },
 }
}

class SpecControl extends EventTarget {
 constructor({ selected = false, vue = false, input = null } = {}) {
  super()
  this.classList = classes('btn-spec', ...(selected ? ['selected'] : []))
  this.ribbon = { classList: classes(...(selected ? [] : ['d-none'])) }
  this.vue = vue
  this.input = input
 }
 querySelector(selector) { return selector === '.ribbon' ? this.ribbon : this.input }
 closest(selector) { return this.vue && selector === '[data-dulank-spec-owner="vue"]' ? {} : null }
 click() { return this.dispatchEvent(new Event('click', { cancelable: true })) }
}

function specificationRuntime(controls, multiple = true) {
 const group = { children: controls, classList: classes(...(multiple ? ['multiple-select'] : [])) }
 controls.forEach(control => { control.parentElement = group })
 const context = vm.createContext({
  window: {}, Event, WeakSet,
  document: { querySelectorAll: () => controls, addEventListener() {} },
 })
 return () => vm.runInContext(`(function () { ${read('public/js/component.js')}\ninitSpecificationControls(); })()`, context)
}

test('reloading legacy scripts still toggles a multi-select option exactly once per click', () => {
 const controls = [new SpecControl(), new SpecControl({ selected: true })]
 const initialize = specificationRuntime(controls)
 initialize()
 initialize()
 controls[0].click()
 assert.equal(controls[0].classList.contains('selected'), true)
 assert.equal(controls[0].ribbon.classList.contains('d-none'), false)
 assert.equal(controls[1].classList.contains('selected'), true)
 controls[0].click()
 assert.equal(controls[0].classList.contains('selected'), false)
 assert.equal(controls[0].ribbon.classList.contains('d-none'), true)
})

test('legacy initialization leaves Vue-managed calculator choices and ribbons alone', () => {
 const controls = [new SpecControl({ selected: true, vue: true }), new SpecControl({ vue: true })]
 const initialize = specificationRuntime(controls)
 initialize()
 // Vue queues its render after the event; a legacy handler must not alter that DOM first.
 controls[0].click()
 assert.equal(controls[0].classList.contains('selected'), true)
 assert.equal(controls[0].ribbon.classList.contains('d-none'), false)
 controls[1].click()
 assert.equal(controls[1].classList.contains('selected'), false)
})

test('single-select labels emit one change even after repeated legacy initialization', () => {
 const inputs = [new EventTarget(), new EventTarget()]
 const controls = inputs.map((input, index) => new SpecControl({ input, selected: index === 0 }))
 let changes = 0
 inputs[1].addEventListener('change', () => { changes++ })
 const initialize = specificationRuntime(controls, false)
 initialize()
 initialize()
 assert.equal(controls[1].click(), false)
 assert.equal(changes, 1)
 assert.equal(inputs[0].checked, false)
 assert.equal(inputs[1].checked, true)
 assert.equal(controls[0].ribbon.classList.contains('d-none'), true)
 assert.equal(controls[1].ribbon.classList.contains('d-none'), false)
})

test('a newly rendered option is initialized even when its sibling already has a listener', () => {
 const controls = [new SpecControl()]
 const initialize = specificationRuntime(controls)
 initialize()
 const added = new SpecControl()
 added.parentElement = controls[0].parentElement
 controls.push(added)
 initialize()
 added.click()
 assert.equal(added.classList.contains('selected'), true)
 assert.equal(added.ribbon.classList.contains('d-none'), false)
})

test('legacy action buttons do not change selections or ribbons', () => {
 const controls = [new SpecControl({ selected: true }), new SpecControl()]
 controls[1].classList.toggle('custom-size-btn', true)
 specificationRuntime(controls)()
 controls[1].click()
 assert.equal(controls[0].classList.contains('selected'), true)
 assert.equal(controls[1].classList.contains('selected'), false)
})

function deferred() {
 let resolve
 const promise = new Promise(done => { resolve = done })
 return { promise, resolve }
}

function legacyRuntime(fetch) {
 let hooks
 const window = { evaluations: [], initialized: [] }
 const addEventListener = () => {}
 const document = { addEventListener }
 const context = vm.createContext({
  exports: {}, window, document, fetch, Event, console,
  useHead() {},
  onMounted(callback) { hooks.mount.push(callback) },
  onBeforeUnmount(callback) { hooks.unmount.push(callback) },
 })
 const javascript = ts.transpileModule(read('app/composables/useLegacyPage.ts'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
 }).outputText
 vm.runInContext(javascript, context)
 return {
  window, document, addEventListener,
  page(scripts) {
   hooks = { mount: [], unmount: [] }
   context.exports.useLegacyPage({ title: 'Calculator regression', scripts })
   const lifecycle = hooks
   return {
    mount: () => Promise.all(lifecycle.mount.map(callback => callback())),
    unmount: () => lifecycle.unmount.forEach(callback => callback()),
   }
  },
 }
}

const response = name => ({ ok: true, text: async () => `window.evaluations.push('${name}'); document.addEventListener('DOMContentLoaded', () => window.initialized.push('${name}'));` })

test('leaving a page while its script loads prevents it from initializing the next calculator page', async () => {
 const pending = deferred()
 const runtime = legacyRuntime(() => pending.promise)
 const previous = runtime.page(['/slow.js'])
 const mounted = previous.mount()
 previous.unmount()
 const calculator = runtime.page([])
 await calculator.mount()
 pending.resolve(response('previous'))
 await mounted
 assert.deepEqual(runtime.window.evaluations, [])
 assert.deepEqual(runtime.window.initialized, [])
 assert.equal(runtime.document.addEventListener, runtime.addEventListener)
})

test('one page waiting for a download does not capture or delay another page initialization', async () => {
 const pending = deferred()
 const runtime = legacyRuntime(url => url === '/slow.js' ? pending.promise : Promise.resolve(response('current')))
 const previous = runtime.page(['/slow.js'])
 const previousMount = previous.mount()
 assert.equal(runtime.document.addEventListener, runtime.addEventListener)
 const current = runtime.page(['/current.js'])
 await current.mount()
 assert.deepEqual(runtime.window.initialized, ['current'])
 previous.unmount()
 pending.resolve(response('previous'))
 await previousMount
 assert.deepEqual(runtime.window.initialized, ['current'])
 assert.equal(runtime.document.addEventListener, runtime.addEventListener)
})

test('active pages still execute cached scripts and replay their callbacks in order on each visit', async () => {
 const fetched = []
 const runtime = legacyRuntime(async url => { fetched.push(url); return response(url) })
 for (let visit = 0; visit < 2; visit++) {
  const page = runtime.page(['/first.js', '/second.js'])
  await page.mount()
  page.unmount()
 }
 assert.deepEqual(fetched, ['/first.js', '/second.js'])
 assert.deepEqual(runtime.window.evaluations, ['/first.js', '/second.js', '/first.js', '/second.js'])
 assert.deepEqual(runtime.window.initialized, ['/first.js', '/second.js', '/first.js', '/second.js'])
 assert.equal(runtime.document.addEventListener, runtime.addEventListener)
})
