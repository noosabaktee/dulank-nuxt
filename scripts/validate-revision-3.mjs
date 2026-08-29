import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = p => fs.readFileSync(path.join(root, p), 'utf8')
const checks = []
const check = (name, ok, details='') => checks.push({ name, ok: Boolean(ok), details })

const compat = read('app/assets/css/bootstrap-compat.css')
const dFlex = compat.indexOf('.d-flex{display:flex!important}')
const dNone = compat.indexOf('.d-none{display:none!important}')
check('display utility precedence', dFlex >= 0 && dNone > dFlex, `d-flex=${dFlex}, d-none=${dNone}`)
check('tab panes inactive hidden', compat.includes('.tab-content>.tab-pane{display:none}'))
check('tab pane active visible', compat.includes('.tab-content>.active{display:block}'))

const navbar = read('app/components/layout/MainNavbar.vue')
check('quote Vue dropdown state', navbar.includes('const quoteOpen = ref(false)') && navbar.includes('@click="toggleQuote"'))
check('profile Vue dropdown state', navbar.includes('const profileOpen = ref(false)') && navbar.includes('@click="toggleProfile"'))
check('calculator Vue dropdown state', navbar.includes('const calculatorOpen = ref(false)') && navbar.includes('@click="toggleCalculator"'))
check('quote menu content preserved', navbar.includes('Online Quotation') && navbar.includes('/quotation-view'))
check('profile menu content preserved', ['Akun Saya','Pesanan Saya','Beli Lagi','Billing','Alamat','Quotation','Login','Sign In','Logout'].every(x => navbar.includes(x)))

const productPages = [
  ['app/components/pages/CetakFullColorPage.vue', ['id="custom-size"']],
  ['app/components/pages/KalenderPage.vue', ['id="custom-content"','id="custom-size"']],
  ['app/components/pages/CetakBukuPage.vue', ['id="custom-size"']],
]
for (const [file, ids] of productPages) {
  const s = read(file)
  for (const id of ids) {
    const at = s.indexOf(id)
    const start = Math.max(0, s.lastIndexOf('<div', at))
    const openTag = s.slice(start, s.indexOf('>', at)+1)
    check(`${path.basename(file)} ${id} default hidden`, at >= 0 && openTag.includes('d-none'), openTag)
  }
}
const productJs = read('public/js/product.js')
check('custom size swaps preset/custom', productJs.includes("document.querySelector('#size').classList.toggle('d-none')") && productJs.includes("document.querySelector('#custom-size').classList.toggle('d-none')"))
check('custom content swaps preset/custom', productJs.includes("content.classList.toggle('d-none', active)") && productJs.includes("customContent.classList.toggle('d-none', !active)"))

const potongJs = read('public/js/pages/kalkulator-potong-kertas.js')
check('potong result shows and empty state hides', potongJs.includes("form.classList.remove('d-none')") && potongJs.includes("empty_form.classList.add('d-none')"))
const fidelity = read('app/assets/css/fidelity-fixes.css')
check('potong empty state hard hide', fidelity.includes('.dulank-page-kalkulator-potong-kertas .empty-form.d-none'))
check('profile calculator camera top-right', fidelity.includes('top: 4px;') && fidelity.includes('right: 4px;') && fidelity.includes('bottom: auto;'))
check('profile calculator positioning context 150px', fidelity.includes('.dulank-page-profile-kalkulator .profile-avatar.ratio') && fidelity.includes('width: 150px;') && fidelity.includes('height: 150px;'))

const failed = checks.filter(x => !x.ok)
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, passed: checks.length-failed.length, failed, checks }, null, 2))
if (failed.length) process.exit(1)
