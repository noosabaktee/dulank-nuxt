import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const sourceRoot = path.join(root, 'legacy', 'static-source')

const walk = (dir, predicate = () => true) => {
  const result = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) result.push(...walk(p, predicate))
    else if (predicate(p)) result.push(p)
  }
  return result
}

const rel = p => path.relative(root, p).replaceAll('\\', '/')
const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const sourcePages = fs.readdirSync(sourceRoot).filter(name => name.endsWith('.html'))
const pageComponents = walk(path.join(root, 'app/components/pages'), p => p.endsWith('.vue'))
const routeFiles = walk(path.join(root, 'app/pages'), p => p.endsWith('.vue'))
const sharedComponents = walk(path.join(root, 'app/components'), p => p.endsWith('.vue') && !p.includes(`${path.sep}pages${path.sep}`))
const jsFiles = walk(path.join(root, 'public/js'), p => p.endsWith('.js'))
const cssFiles = walk(path.join(root, 'public/css'), p => p.endsWith('.css'))
const images = walk(path.join(root, 'public/images'))
const jsonFiles = walk(path.join(root, 'public/json'), p => p.endsWith('.json'))

assert(sourcePages.length === 55, `Expected 55 static source pages, got ${sourcePages.length}`)
assert(pageComponents.length === 55, `Expected 55 page components, got ${pageComponents.length}`)
assert(routeFiles.length >= 55, `Expected at least 55 route files, got ${routeFiles.length}`)
assert(jsFiles.length === 56, `Expected 56 legacy feature scripts, got ${jsFiles.length}`)
assert(cssFiles.length === 63, `Expected 63 source CSS files, got ${cssFiles.length}`)
assert(images.length === 13, `Expected 13 source images, got ${images.length}`)
assert(jsonFiles.length === 3, `Expected 3 source JSON files, got ${jsonFiles.length}`)

for (const file of jsFiles) execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' })

const runtimeText = [
  ...walk(path.join(root, 'app'), p => /\.(vue|ts|css)$/.test(p)),
  path.join(root, 'nuxt.config.ts'),
  path.join(root, 'package.json'),
].map(p => fs.readFileSync(p, 'utf8')).join('\n')

assert(!/bootstrap(?:\.bundle|\.min)?\.js/i.test(runtimeText), 'Bootstrap JavaScript runtime reference found')
assert(!/bootstrap(?:\.min)?\.css/i.test(runtimeText), 'Bootstrap CSS runtime reference found')

const vueText = pageComponents.map(p => fs.readFileSync(p, 'utf8')).join('\n')
const htmlRouteRefs = [...vueText.matchAll(/(?:href|action)="([^"]+\.html(?:[?#][^"]*)?)"/g)].map(m => m[1])
assert(htmlRouteRefs.length === 0, `Found old .html routes in Vue pages: ${htmlRouteRefs.join(', ')}`)

console.log(JSON.stringify({
  ok: true,
  sourcePages: sourcePages.length,
  pageComponents: pageComponents.length,
  routeFiles: routeFiles.length,
  sharedComponents: sharedComponents.length,
  javascriptFilesChecked: jsFiles.length,
  cssFiles: cssFiles.length,
  images: images.length,
  jsonFiles: jsonFiles.length,
  bootstrapFrameworkRuntime: false,
}, null, 2))
