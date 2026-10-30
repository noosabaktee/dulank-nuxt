import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'
import * as Vue from 'vue'
import * as SSR from 'vue/server-renderer'
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
function evaluate(source, extra = {}) {
 const js = ts.transpileModule(source.replaceAll('import.meta.dev', String(extra.testDev ?? false)), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
 const context = { exports: {}, ...Vue, ...extra, require: name => { if (name === 'vue') return Vue; if (name === 'vue/server-renderer') return SSR; if (name === '~/utils/merchant-routes' || name === './merchant-routes') return merchantRouteHelpers; if (name === '~/utils/auth-routes') return authRouteHelpers; if (name === '~/utils/manualPaperLayout') return manualHelpers; if (name === '~/utils/planoCalculator' || name === './planoCalculator') return planoHelpers; if (name === '~/utils/planoSvg') return svgHelpers; if (name === '~/utils/actionToast') return { showActionToast() {} }; throw new Error(`Unexpected import ${name}`) } }
 vm.runInNewContext(js, context); return context.exports
}
function source(file) { return fs.readFileSync(file, 'utf8') }
const merchantRouteHelpers = evaluate(source('app/utils/merchant-routes.ts'))
const authRouteHelpers = evaluate(source('app/utils/auth-routes.ts'))
const planoHelpers = evaluate(source('app/utils/planoCalculator.ts'))
const svgHelpers = evaluate(source('app/utils/planoSvg.ts'))
const manualHelpers = evaluate(source('app/utils/manualPaperLayout.ts'))
const { buildManualPaperLayout, manualFormFromResult, paperDimensionFields } = manualHelpers
test('manual preview preserves original grid count and rotated remainder controls', () => {
 const form = { canvasX: 100, canvasY: 80, cutX: 20, cutY: 10, position: 'Landscape', columns: 4, rows: 8, remainderDirection: 'Kanan', remainderPosition: 'Portrait', remainderColumns: 1, remainderRows: 4 }
 const result = buildManualPaperLayout(form, { name: 'Plano', sizeId: 1 })
 assert.equal(result.count, 36); assert.equal(result.placements.length, 36)
 assert.ok(result.placements.every(piece => piece.x >= 0 && piece.y >= 0 && piece.x + piece.width <= 100 && piece.y + piece.height <= 80))
 assert.throws(() => buildManualPaperLayout({ ...form, rows: 10000 }, result), /5.000/)
 assert.throws(() => buildManualPaperLayout({ ...form, canvasX: 0 }, result), /Ukuran/)
})
test('cutting request enforces API access and uses the final Excel model for its result table', async () => {
 const calls = []; const response = [{ sizeId: 7, width: 650, height: 900, count: 54, placements: [] }]
 const exports = evaluate(source('app/composables/usePaperCutting.ts'), {
  useApi: url => ({ data: Vue.ref(url.includes('paper-sizes') ? [{ id: 7 }] : {}), pending: Vue.ref(false), error: Vue.ref(null) }),
  useNuxtApp: () => ({ $api: async (url, options) => { calls.push({ url, ...options }); return { data: response } } })
 })
 const effect = Vue.effectScope(); const calculator = effect.run(() => exports.usePaperCutting())
 calculator.form.cutWidth = 10; calculator.form.cutHeight = 10; calculator.form.gap = .1
 await Vue.nextTick(); await calculator.calculate()
 assert.equal(calculator.results.value[0].displayUnit, 'cm'); assert.equal(calculator.results.value[0].cutWidth, 100); assert.equal(calculator.results.value[0].gap, 1)
 assert.equal(calls[0].body.cutWidth, 100); assert.equal(calls[0].body.gap, 1)
 assert.deepEqual([...calls[0].body.sizeIds], [7]); assert.equal(calculator.results.value[0].count, 48)
 calculator.form.cutWidth = 20; await Vue.nextTick(); assert.equal(calculator.results.value.length, 0)
 effect.stop()
})
test('merchant state from an old login cannot be shown to another account', () => {
 const auth = Vue.reactive({ token: 'active-token', user: { id: 2 } })
 const data = Vue.ref({ viewerId: 1, access: { active: true }, merchant: { name: 'Usaha Lama' } })
 const exports = evaluate(source('app/composables/useMerchantProfile.ts'), { useAuthStore: () => auth, useNuxtApp: () => ({ $api: async () => ({}) }), useAsyncData: () => ({ data, refresh: async () => {} }) })
 const profile = exports.useMerchantProfile()
 assert.equal(profile.state.value, null)
 data.value.viewerId = 2; assert.equal(profile.state.value.merchant.name, 'Usaha Lama')
 auth.token = null; assert.equal(profile.state.value, null)
})

test('paper weight keeps the original accumulated results and clear/add workflow with API calculations', async () => {
 const calls = []
 const exports = evaluate(source('app/composables/usePaperWeight.ts'), {
  useApi: () => ({ data: Vue.ref([{ id: 7, width: 21, length: 29.7, unit: 'cm' }]) }),
  useNuxtApp: () => ({ $api: async (url, options) => { calls.push({ url, ...options }); return { data: { grams: 2494.8 } } } })
 })
 const scope = Vue.effectScope(); const calculator = scope.run(() => exports.usePaperWeight())
 calculator.form.sizeId = '7'; await Vue.nextTick()
 calculator.form.quantityUnit = 'rim'; calculator.form.quantity = 1
 await Vue.nextTick(); await calculator.calculate()
 assert.equal(calls[0].body.width, 210); assert.equal(calls[0].body.height, 297); assert.equal(calls[0].body.quantity, 500)
 assert.equal(calculator.totalGrams.value, 2494.8)
 calculator.clear(false); await Vue.nextTick(); assert.equal(calculator.history.value.length, 1)
 Object.assign(calculator.form, { width: 210, height: 297, unit: 'mm', gsm: 80, quantity: 500, quantityUnit: 'lembar' })
 await Vue.nextTick(); await calculator.calculate(); assert.equal(calculator.totalGrams.value, 4989.6)
 calculator.clear(); assert.equal(calculator.history.value.length, 0); assert.equal(calculator.totalGrams.value, 0)
 scope.stop()
})

test('merchant profile initializes the account before rendering a direct page reload', async () => {
 let loader
 const auth = Vue.reactive({ token: 'store-token', user: null, initialize: async () => { auth.user = { id: 2 } } })
 const data = Vue.ref(null)
 const exports = evaluate(source('app/composables/useMerchantProfile.ts'), {
  useAuthStore: () => auth,
  useNuxtApp: () => ({ $api: async () => ({ data: { viewerId: 2, access: { active: true }, merchant: { name: 'Usaha Terhubung' } } }) }),
  useAsyncData: (key, handler) => { loader = handler; return { data } }
 })
 const profile = exports.useMerchantProfile()
 data.value = await loader()
 assert.equal(profile.state.value.merchant.name, 'Usaha Terhubung')
})
function compileComponent(file, extra = {}) {
 const { descriptor } = parse(source(file))
 const script = compileScript(descriptor, { id: 'merchant-test' })
 const template = compileTemplate({ source: descriptor.template.content, filename: file, id: 'merchant-test', ssr: true, ssrCssVars: [], compilerOptions: { bindingMetadata: script.bindings } })
 assert.deepEqual(template.errors, [])
 const compiled = evaluate(`${script.content}\n${template.code}\nexports.default.ssrRender = exports.ssrRender`, extra)
 return compiled.default
}
const renderRegionPicker = evaluate(source('app/composables/useMerchantRegionPicker.ts'), { useApi: () => ({ data: Vue.ref([]), pending: Vue.ref(false), error: Vue.ref(null) }) }).useMerchantRegionPicker
async function render(file, props, extra = {}) {
 extra = { useMerchantRegionPicker: renderRegionPicker, ...extra }
 const app = Vue.createSSRApp(compileComponent(file, extra), props)
 app.component('CommonRegionAddressInput', compileComponent('app/components/Common/RegionAddressInput.vue', extra))
 app.component('NuxtLink', { props: ['to'], template: '<a :href="to"><slot /></a>' })
 app.component('CommonCalculatorIntroduction', { props: ['fallback'], template: '<p>{{ fallback }}</p>' })
 app.component('PagesKalkulatorPotongKertasPatternManualControls', { template: '<div>Manual controls</div>' })
 const context = {}; const html = await SSR.renderToString(app, context)
 return html + (context.teleports?.body ?? '')
}
test('Generate rows and SVG preview display actual result quantities and positions', async () => {
 const result = { sizeId: 7, name: 'Plano Database', width: 100, height: 80, count: 2, utilization: 25, placements: [{ x: 0, y: 0, width: 50, height: 20 }, { x: 50, y: 0, width: 50, height: 20 }] }
 const rows = await render('app/components/Pages/KalkulatorPotongKertas/CuttingResults.vue', { results: [result] })
 assert.match(rows, /Plano Database/); assert.match(rows, /2 Lembar/); assert.match(rows, /25%/)
 const modal = await render('app/components/Pages/KalkulatorPotongKertas/PatternGeneratorModal.vue', { result })
 assert.match(modal, /viewBox="0 0 120 115.2"/); assert.match(modal, /x='60'/); assert.match(modal, /Download SVG/); assert.match(modal, /Manual controls/)
})


test('custom paper dimensions replace all preset choices and Cancel restores the default state', async () => {
 const form = { unit: 'cm', cutWidth: 10, cutHeight: 10, gap: 0, selected: [7], custom: false, width: 65, height: 90 }
 const props = { form, sizes: [{ id: 7, name: 'Plano Database', width: 65, length: 90, unit: 'cm' }], title: 'Hitung Potong Kertas', introduction: '', busy: false }
 for (const custom of [false, true, false]) {
  form.custom = custom
  const html = await render('app/components/Pages/KalkulatorPotongKertas/CuttingSpecificationForm.vue', props)
  assert.equal(html.includes('id="ukuran-plano-custom"'), custom)
  assert.equal(html.includes('id="ukuran-plano"'), !custom)
  assert.equal(html.includes('Lihat ukuran yang tersedia'), !custom)
  assert.equal(html.includes('Plano Database'), !custom)
  assert.match(html, custom ? /Cancel/ : /Custom/)
 }
})

test('merchant address cascades by canonical IDs rather than ambiguous city labels', () => {
 const urls = []
 const exports = evaluate(source('app/composables/useMerchantRegionPicker.ts'), { useApi: url => { urls.push(url); return { data: Vue.ref([]), pending: Vue.ref(false), error: Vue.ref(null) } } })
 const form = Vue.reactive({})
 const picker = exports.useMerchantRegionPicker(form)
 picker.choose({ id: 32, name: 'Provinsi dengan nama panjang' }, 0)
 picker.choose({ id: 175, name: 'Kab. Karawang' }, 1)
 assert.match(urls[1](), /province=32$/)
 assert.match(urls[2](), /regency=175$/)
 picker.choose({ id: 998, name: 'Cikampek' }, 2)
 assert.equal(form.district, 'Cikampek'); assert.equal(picker.open.value, false)
 picker.choose({ id: 33, name: 'Jawa Tengah' }, 0)
 assert.equal(form.city, ''); assert.equal(form.district, '')
 assert.match(urls[2](), /regency=__none__$/)
})

test('legacy product Custom mode explicitly swaps presets and inputs in both directions', () => {
 const file = source('public/js/product.js')
 const tree = ts.createSourceFile('product.js', file, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS)
 const names = ['setCustomControlVisibility', 'setCustomSizeMode']
 const functions = tree.statements.filter(node => ts.isFunctionDeclaration(node) && names.includes(node.name?.text)).map(node => node.getText(tree)).join('\n')
 function node() { const classes = new Set(); const style = new Map(); return { classes, styles: style, classList: { toggle: (key, state) => state ? classes.add(key) : classes.delete(key) }, style: { removeProperty: key => style.delete(key), setProperty: (key,value,priority) => style.set(key, [value,priority]) } } }
 const preset=node(), custom=node(), button={ textContent: 'Custom' }
 const context = { btn_custom_size: button, document: { querySelector: selector => selector === '#size' ? preset : custom } }
 vm.createContext(context); vm.runInContext(functions, context)
 for(const active of [false,true,false]) {
  context.setCustomSizeMode(active)
  assert.equal(button.textContent,active ? 'Cancel' : 'Custom')
  assert.equal(preset.classes.has('d-none'),active)
  assert.equal(custom.classes.has('d-none'),!active)
  assert.equal(preset.styles.has('display'),active)
  assert.equal(custom.styles.has('display'),!active)
 }
})

test('store API action feedback uses one success toast and an error toast without notifying reads or calculations', () => {
 let hooks; const notices=[]; let resets=0
 const context={ exports: {}, defineNuxtPlugin: fn=>fn, useRuntimeConfig:()=>({public:{apiBase:'/api/v1'}}), useAuthStore:()=>({reset:()=>resets++}), $fetch:{create:options=>{hooks=options;return ()=>{}}}, require:()=>({showActionToast:(...args)=>notices.push(args)}) }
 vm.runInNewContext(ts.transpileModule(source('app/plugins/api.ts'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,context)
 context.exports.default()
 hooks.onResponse({ request:'/merchant-profile', options:{method:'GET'}, response:{ok:true,_data:{success:true}} })
 hooks.onResponse({ request:'/calculator/paper-cutting', options:{method:'POST'}, response:{ok:true,_data:{success:true}} })
 assert.equal(notices.length,0)
 hooks.onResponse({ request:'/merchant-profile', options:{method:'PUT'}, response:{ok:true,_data:{success:true}} })
 assert.equal(notices.length,1); assert.equal(notices[0][1],'success')
 hooks.onResponseError({request:'/merchant-profile',options:{method:'PUT'},response:{status:422,_data:{message:'Nama wajib diisi'}}})
 assert.equal(notices[1][0],'Nama wajib diisi'); assert.equal(notices[1][1],'error')
 hooks.onResponseError({request:'/merchant-profile',options:{method:'GET'},response:{status:401}})
 assert.equal(resets,1); assert.equal(notices.length,2)
})


test('preview keeps entered orientation and converts mm geometry back to cm in both input groups', () => {
 const result = { name: 'Custom', sizeId: null, width: 1000, height: 1000, cutWidth: 500, cutHeight: 1000, displayUnit: 'cm', count: 2, placements: [{x:0,y:0,width:1000,height:500},{x:0,y:500,width:1000,height:500}] }
 const form = Vue.reactive(manualFormFromResult(result))
 const fields = paperDimensionFields(form, () => 'cm')
 assert.equal(form.position, 'Landscape'); assert.equal(form.columns, 1); assert.equal(form.rows, 2)
 assert.equal(fields.cutX, 50); assert.equal(fields.cutY, 100); assert.equal(fields.canvasX, 100)
 fields.cutX = 49.5; assert.equal(form.cutX, 495)
 form.canvasY = 650; assert.equal(fields.canvasY, 65)
 const mm = paperDimensionFields(form, () => 'mm'); assert.equal(mm.cutX, 495)
})

test('manual Generate uses Excel orientation, row-major numbering and preserves the requested gap', () => {
 const form={canvasX:100,canvasY:100,cutX:10,cutY:20,position:'Portrait',columns:4,rows:3,remainderDirection:'Kanan',remainderPosition:'Landscape',remainderColumns:1,remainderRows:2}
 const result=buildManualPaperLayout(form,{name:'Plano',sizeId:1,gap:2})
 assert.equal(result.count,14)
 assert.equal(result.placements[1].x,12); assert.equal(result.placements[1].y,0)
 assert.equal(result.placements[4].x,0); assert.equal(result.placements[4].y,22)
 assert.equal(result.placements[12].x,48); assert.equal(result.placements[12].width,20)
 assert.equal(result.placements[13].y,12)
 assert.throws(()=>buildManualPaperLayout({...form,remainderDirection:'-'},result),/arah/)
})

test('Qty PCS is an output of the original grid formula and does not clip the preview', async () => {
 const result={name:'Plano',sizeId:1,width:100,height:80,cutWidth:50,cutHeight:20,displayUnit:'cm',count:2,placements:[{x:0,y:0,width:50,height:20},{x:50,y:0,width:50,height:20}]}
 const modal=await render('app/components/Pages/KalkulatorPotongKertas/PatternGeneratorModal.vue',{result})
 assert.match(modal, /x='60'/); assert.doesNotMatch(modal, /kapasitas susunan/)
 const form=manualFormFromResult(result)
 const controls=await render('app/components/Pages/KalkulatorPotongKertas/PatternManualControls.vue',{result,form,dimensions:paperDimensionFields(form,()=> 'cm'),count:2,unit:'cm'})
 assert.match(controls,/id="qty"[^>]*value="2"/); assert.match(controls,/id="qty"[^>]*readonly/)
})


test('all groups use the Excel orientation colors and retain separate manual controls', async () => {
 for (const position of ['Portrait','Landscape']) {
  const form={canvasX:1000,canvasY:2000,cutX:250,cutY:500,position,columns:2,rows:2,remainderDirection:'Bawah',remainderPosition:position,remainderColumns:2,remainderRows:2}
  const result=buildManualPaperLayout(form,{name:'Plano',sizeId:1,displayUnit:'cm'})
  assert.equal(result.count,8)
  assert.equal(result.placements.filter(p=>p.isRemainder).length,4)
  const modal=await render('app/components/Pages/KalkulatorPotongKertas/PatternGeneratorModal.vue',{result})
  const fill = position === 'Landscape' ? '#EFF6FF' : '#F0FDF4'
  assert.equal((modal.match(new RegExp(`fill='${fill}'`, 'g'))||[]).length,8)
  const inferred=manualFormFromResult(result)
  assert.equal(inferred.remainderRows,2); assert.equal(inferred.remainderColumns,2)
 }
})


test('all calculator headers show the owner business even when displayOn has another calculator only', async () => {
 const state=Vue.ref({access:{active:true},merchant:{id:1,name:'Grafika Karawang',avatar:'/storage/merchants/logo.png',calculatorTitle:'Kalkulator Grafika',displayOn:['paper_weight']}})
 const profile={state}
 const html=await render('app/components/Layout/CalculatorHeader.vue',{}, {useMerchantProfile:()=>profile})
 assert.match(html,/Grafika Karawang/); assert.match(html,/src="\/storage\/merchants\/logo.png"/); assert.doesNotMatch(html,/tab.png|>Dulank</)
 state.value={access:{active:true},merchant:null}
 const empty=await render('app/components/Layout/CalculatorHeader.vue',{}, {useMerchantProfile:()=>profile})
 assert.match(empty,/Percetakan Anda/); assert.doesNotMatch(empty,/Grafika Karawang/)
})

test('inline calculator introduction saves the chosen page and preserves a failed draft and account isolation', async () => {
 const props={page:'paper_weight',fallback:'Pengantar umum'}
 const calls=[]
 const profile={state:Vue.ref({access:{active:true,features:['merchant_profile']},merchant:{id:1,introductions:{paper_weight:'Pengantar milik usaha'}}}),busy:Vue.ref(false),saveIntroduction:async(page,text)=>{calls.push({page,text})}}
 const file='app/components/Common/CalculatorIntroduction.vue'
 const initial=await render(file,props,{useMerchantProfile:()=>profile})
 assert.match(initial,/Pengantar milik usaha/); assert.match(initial,/Ubah teks pengantar/)
 const {descriptor}=parse(source(file)); const script=compileScript(descriptor,{id:'inline-test'})
 const component=evaluate(script.content,{useMerchantProfile:()=>profile}).default
 const scope=Vue.effectScope()
 const form=scope.run(()=>component.setup(props,{expose(){}}))
 form.edit(); assert.equal(form.draft.value,'Pengantar milik usaha')
 form.draft.value='Pengantar baru'; await form.save()
 assert.equal(calls[0].page,'paper_weight'); assert.equal(calls[0].text,'Pengantar baru'); assert.equal(form.editing.value,false)
 profile.saveIntroduction=async()=>{throw Error('Gagal')}
 form.edit(); form.draft.value='Draft belum tersimpan'; await form.save()
 assert.equal(form.editing.value,true); assert.equal(form.draft.value,'Draft belum tersimpan')
 profile.state.value.merchant={id:2,introductions:{}}; await Vue.nextTick()
 assert.equal(form.editing.value,false); assert.equal(form.draft.value,'')
 profile.state.value.access.active=false
 const denied=await render(file,props,{useMerchantProfile:()=>profile})
 assert.doesNotMatch(denied,/Ubah teks pengantar/)
 scope.stop()
})

test('the three account shortcuts are local development only and select different fixture users', async () => {
 const file='app/components/Pages/Login/LoginForm.vue'
 const extra={testDev:true,useRoute:()=>({query:{}}),useAuthStore:()=>({}),useRequestURL:()=>({hostname:'localhost'})}
 const local=await render(file,{},extra)
 assert.match(local,/Akun 1/); assert.match(local,/Akun 2/); assert.match(local,/Akun 3/)
 for (const context of [{...extra,testDev:false},{...extra,useRequestURL:()=>({hostname:'dulank.id'})}]) {
  const html=await render(file,{},context); assert.doesNotMatch(html,/Akun 1|Akun 2|Akun 3/)
 }
 const {descriptor}=parse(source(file)); const script=compileScript(descriptor,{id:'login-helper'})
 const component=evaluate(script.content,extra).default
 const form=component.setup({}, {expose(){}})
 form.fillLocalAccount(1); assert.equal(form.email.value,'raka@grafikakarawang.test')
 form.fillLocalAccount(2); assert.equal(form.email.value,'dimas@ruangcetak.test')
 form.fillLocalAccount(3); assert.equal(form.email.value,'sinta@belanjacetak.test')
})


test('every private calculator workspace route redirects a newcomer to registration, while shopping and public stores remain accessible', async () => {
 const auth={isAuthenticated:true,user:{id:2},initialize:async()=>{}}
 let state={viewerId:2,merchant:null,access:{active:true,features:['merchant_profile','paper_cutting','paper_weight','catalog_manage']}}
 const extra={defineNuxtRouteMiddleware:fn=>fn,useAuthStore:()=>auth,useNuxtApp:()=>({$api:async()=>({data:state})}),navigateTo:to=>to,createError:options=>Object.assign(Error(options.statusMessage),options)}
 const guard=evaluate(source('app/middleware/merchant.global.ts'),extra).default
 for (const path of merchantRouteHelpers.merchantRoutes) {
  for (const variant of [path, path.toUpperCase(), path+'/', path+'.html']) {
   assert.equal(await guard({path:variant,fullPath:variant}),'/daftar-percetakan',variant)
   assert.equal(authRouteHelpers.isProtectedRoute(variant),true,variant)
  }
 }
 for (const path of ['/','/product-list','/cart','/store','/store-kertas','/profile']) assert.equal(await guard({path,fullPath:path}),undefined,path)
 assert.equal(await guard({path:'/daftar-percetakan',fullPath:'/daftar-percetakan'}),undefined)
 state.merchant={id:1}
 for (const path of merchantRouteHelpers.merchantRoutes) assert.equal(await guard({path,fullPath:path}),undefined,path)
 assert.equal(await guard({path:'/daftar-percetakan',fullPath:'/daftar-percetakan'}),'/profile-merchant')
 state.access.active=false
 assert.equal(await guard({path:'/kalkulator-berat-kertas',fullPath:'/kalkulator-berat-kertas'}),'/profile-merchant?access=restricted')
 assert.equal(await guard({path:'/profile-merchant',fullPath:'/profile-merchant'}),undefined)
 state.access.active=true; state.access.features=['paper_weight']
 assert.equal(await guard({path:'/kalkulator-potong-kertas',fullPath:'/kalkulator-potong-kertas'}),'/profile-merchant?access=restricted')
 assert.equal(await guard({path:'/kalkulator-berat-kertas',fullPath:'/kalkulator-berat-kertas'}),undefined)
 auth.isAuthenticated=false
 assert.equal(await guard({path:'/kalkulator-percetakan',fullPath:'/kalkulator-percetakan'}),'/login?redirect=%2Fkalkulator-percetakan')
})

test('calculator guard fails closed when profile lookup fails and never trusts a profile from another login', async () => {
 const auth={isAuthenticated:true,user:{id:2}}
 const extra={defineNuxtRouteMiddleware:fn=>fn,useAuthStore:()=>auth,useNuxtApp:()=>({$api:async()=>{throw Error('Offline')}}),navigateTo:to=>to,createError:options=>Object.assign(Error(options.statusMessage),options)}
 const page={path:'/kalkulator-potong-kertas',fullPath:'/kalkulator-potong-kertas'}
 const guard=evaluate(source('app/middleware/merchant.global.ts'),extra).default
 await assert.rejects(()=>guard(page),error=>error.statusCode===503)
 extra.useNuxtApp=()=>({$api:async()=>({data:{viewerId:99,merchant:{id:1},access:{active:true}}})})
 await assert.rejects(()=>evaluate(source('app/middleware/merchant.global.ts'),extra).default(page),error=>error.statusCode===503)
})

test('registration form submits only business fields with an optional photo and navigates to merchant profile', async () => {
 const calls=[],routes=[]
 const profile={state:Vue.ref({access:{active:true,features:['merchant_profile']},merchant:null}),busy:Vue.ref(false),pending:Vue.ref(false),error:Vue.ref(null),register:async body=>{calls.push(body)}}
 const file='app/components/Pages/DaftarPercetakan/BusinessRegistrationForm.vue'
 const extra={useMerchantProfile:()=>profile,onBeforeUnmount(){},FormData,URL,navigateTo:path=>{routes.push(path)}}
 const html=await render(file,{},extra)
 assert.match(html,/Daftarkan Percetakan Anda/); assert.match(html,/Nama Percetakan/); assert.match(html,/Alamat Percetakan/); assert.match(html,/Nomor WhatsApp/)
 assert.match(html,/id="merchant-photo"/); assert.doesNotMatch(html,/<input[^>]*id="merchant-photo"[^>]*required/)
 const {descriptor}=parse(source(file)); const script=compileScript(descriptor,{id:'registration-test'})
 const form=evaluate(script.content,extra).default.setup({}, {expose(){}})
 Object.assign(form.form,{name:'  Grafika Baru  ',address:'  Jalan Niaga 12  ',whatsapp:'081234567890',province:'Jawa Barat',city:'Karawang',district:'Cikampek'})
 await form.submit()
 assert.equal(calls[0].get('name'),'Grafika Baru'); assert.equal(calls[0].get('address'),'Jalan Niaga 12'); assert.equal(calls[0].get('file'),null)
 assert.equal(calls[0].get('province'),'Jawa Barat'); assert.equal(calls[0].get('city'),'Karawang'); assert.equal(calls[0].get('district'),'Cikampek')
 assert.equal(routes[0],'/profile-merchant')
 profile.register=async()=>{throw {data:{errors:{name:['Nama wajib diisi.']}}}}
 await form.submit(); assert.equal(form.errorMessage.value,'Nama wajib diisi.'); assert.equal(form.form.name,'  Grafika Baru  ')
 profile.state.value.access.active=false
 const blocked=await render(file,{},extra)
 assert.match(blocked,/Anda tetap dapat berbelanja/); assert.match(blocked,/<button[^>]*type="submit"[^>]*disabled/)
 const previous=calls.length; await form.submit(); assert.equal(calls.length,previous)
})


test('profile and registration share the same cascading address input with independent IDs', async () => {
 const file='app/components/Common/RegionAddressInput.vue'
 const form=Vue.reactive({province:'',city:'',district:'',address:''})
 let picker
 const usePicker=value=>{picker=renderRegionPicker(value); return picker}
 const extra={useMerchantRegionPicker:usePicker,onMounted(){},onBeforeUnmount(){}}
 const profile=await render(file,{form},extra)
 const registration=await render(file,{form,inputId:'merchant-address',idPrefix:'registration',required:true},extra)
 for (const html of [profile,registration]) {
  assert.match(html,/Provinsi/); assert.match(html,/Kota/); assert.match(html,/Kecamatan/)
  assert.match(html,/placeholder="Provinsi, Kota, Kecamatan"/)
 }
 assert.match(profile,/id="alamat-lengkap"/); assert.match(registration,/id="merchant-address"/)
 assert.match(registration,/id="registration-alamat-dropdown-wrapper"/)
 const {descriptor}=parse(source(file)); const script=compileScript(descriptor,{id:'region-address-test'})
 const props=Vue.reactive({form,disabled:false,inputId:'merchant-address',idPrefix:'registration'})
 const scope=Vue.effectScope(); const field=scope.run(()=>evaluate(script.content,extra).default.setup(props,{expose(){}}))
 field.choose({id:32,name:'Jawa Barat'},0); field.choose({id:175,name:'Karawang'},1); field.choose({id:22,name:'Cikampek'},2)
 assert.equal(form.address,'Jawa Barat, Karawang, Cikampek'); assert.equal(form.district,'Cikampek')
 assert.equal(picker.open.value,false)
 props.disabled=true; await Vue.nextTick(); field.clear(); assert.equal(form.city,'Karawang')
 props.disabled=false; field.clear(); assert.equal(form.address,''); assert.equal(form.province,''); assert.equal(form.city,''); assert.equal(form.district,'')
 field.choose({id:32,name:'Jawa Barat'},0); form.address=''; field.search({target:{value:''}})
 assert.equal(form.province,''); assert.equal(picker.tab.value,0)
 scope.stop()
})
