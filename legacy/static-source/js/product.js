const btn_custom_size = document.querySelector('.custom-size-btn')
const btn_input = document.querySelectorAll('.btn-spec');
const btn_hitung = document.querySelector('#btnHitung');
const sub_total_price = document.querySelector('#subTotalPrice');
const table_list = document.querySelectorAll('.table-list');
const img_variant = document.querySelectorAll('.img-variant');
const result_el = document.querySelector('#result')
const expedisiOpt = document.querySelector('#expedisiOpt')
const grandTotal = document.querySelector('#grandTotal')
const ongkirLabel = document.querySelector('#ongkirLabel')
const share_section = document.querySelector('#share-section')
const nav_product = document.querySelectorAll('.nav-product')
const spec_el = document.querySelectorAll('.spec')
const spec_text = document.querySelector('#spec-text')
const productPageConfig = window.productPageConfig || {};
const btn_custom_content = document.querySelector('.custom-content-btn')
let qtyInput = document.querySelector('#qtyInput')
let qtyStr = '';
let qtyInt = 0;
let max1 = 109;
let max2 = 79;
let min1 = 5;
let min2 = 2;

function getNumberInputValue(selectorOrElement){
    const el = typeof selectorOrElement == 'string' ? document.querySelector(selectorOrElement) : selectorOrElement
    if(!el) return ''
    const resultInput = el.parentElement?.querySelector('.result-input')
    const value = resultInput?.value || el.value || ''
    return value.toString().replace(/\./g, '').replace(',', '.')
}

function getCustomContentInput(){
    return document.querySelector('#contentCustomInput')
}

function isCustomContentActive(){
    return btn_custom_content && btn_custom_content.textContent.trim() == 'Cancel'
}

function customContentAllowedForNav(){
    if(!btn_custom_content) return false
    const navs = (btn_custom_content.dataset.navs || '').split('|').map(nav => nav.trim()).filter(Boolean)
    return navs.length == 0 || navs.includes(selected_nav)
}

function clearCustomContentInput(){
    const input = getCustomContentInput()
    if(!input) return
    input.value = ''
    const resultInput = input.parentElement?.querySelector('.result-input')
    if(resultInput){
        resultInput.value = ''
    }
}

function updateCustomContentResult(){
    if(!isCustomContentActive()) return
    const input = getCustomContentInput()
    const value = getNumberInputValue(input)
    result['content'] = value ? `${input.value || value} Lembar` : 'Custom'
}

function setCustomContentMode(active){
    const content = document.querySelector('#content')
    const customContent = document.querySelector('#custom-content')
    if(!btn_custom_content || !content || !customContent) return

    btn_custom_content.innerHTML = active ? 'Cancel' : 'Custom'
    content.classList.toggle('d-none', active)
    customContent.classList.toggle('d-none', !active)

    if(active){
        updateCustomContentResult()
        return
    }

    clearCustomContentInput()
    const selectedContent = content.querySelector('.btn-spec.selected')?.textContent.trim()
    if(selectedContent){
        result['content'] = selectedContent
    }
}

function syncCustomContentAvailability(){
    if(!btn_custom_content) return
    const allowed = customContentAllowedForNav()
    btn_custom_content.classList.toggle('d-none', !allowed)
    if(!allowed || isCustomContentActive()){
        setCustomContentMode(false)
    }
}

let selected_nav = productPageConfig.selectedNav || "Brosur"
let spec = productPageConfig.spec || {
    "Brosur" : {
        'text': 'Ini text brosur amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
        'input': ['size','type', 'lamination','fold','side'],
    },
    "Produk Label" : {
        'text': 'Ini text produk label amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
        'input' : ['size','type','lamination','fold']
    },
    "Tiket Karcis" : {
        'text': 'Ini text tiket karcis amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
        'input' : ['size','type','lamination','fold']
    },
    "Flyer" : {
        'text': 'Ini text Flyer amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
        'input' : ['size','type','lamination','fold']
    }
}

let result = productPageConfig.result || {
    'size' : 'A4 (210x297mm)',
    'type' : 'Art paper 150gr',
    'lamination' : 'Tanpa Laminasi',
    'side': 'Cetak 1 sisi',
    'fold' : 'Tanpa Lipatan'
}

nav_product.forEach(btn => {
    btn.addEventListener('click',()=>{
        selected_nav = btn.textContent
        updateNav()
    })
})

function updateNav(){
    // Remove all spec
    spec_el.forEach(spec => {
        spec.classList.add('d-none')
    })
    // Display specific spec
    for (const [key, value] of Object.entries(spec)) {
        if(key == selected_nav){
            spec_text.textContent = value['text']
            if(value["options"]){
                for (const [inputId, options] of Object.entries(value["options"])) {
                    applyOptionSet(inputId, options)
                }
            }
            value["input"].forEach(i => {
                let el = document.getElementById(i)
                let row = el.closest('div.spec')
                row.classList.remove('d-none')
            })
        }
    }
    syncCustomContentAvailability()
}

function updateSpecOption(control, label, selected) {
    const input = control.querySelector('.spec-input');
    const ribbon = control.querySelector('.ribbon');
    const textNode = [...control.childNodes].find(node => node.nodeType === Node.TEXT_NODE);

    if (textNode) {
        textNode.textContent = label;
    } else {
        control.insertBefore(document.createTextNode(label), ribbon || null);
    }

    if (input) {
        input.value = label;
        input.checked = selected;
    }

    control.classList.remove('d-none');
    control.classList.toggle('selected', selected);
    ribbon?.classList.toggle('d-none', !selected);
}

function applyOptionSet(inputId, options) {
    const container = document.getElementById(inputId);
    if (!container) return;

    const controls = container.querySelectorAll('.btn-spec');
    options.forEach((option, index) => {
        const control = controls[index];
        if (!control) return;

        const label = typeof option === 'string' ? option : option.label;
        const selected = typeof option === 'string' ? index === 0 : Boolean(option.selected);
        updateSpecOption(control, label, selected);
        if (selected) result[inputId] = label;
    });

    [...controls].slice(options.length).forEach(control => {
        control.classList.add('d-none');
        control.classList.remove('selected');
        control.querySelector('.ribbon')?.classList.add('d-none');
        const input = control.querySelector('.spec-input');
        if (input) input.checked = false;
    });
}

// First nav 
updateNav()

function checkMinMax(){
    let widthSize = getNumberInputValue('#widthSize')
    let heightSize = getNumberInputValue('#heightSize')
    if(!(widthSize && heightSize)){
        return
    }
    let info = document.querySelector("#info-custom")
    let isMax = false;
    let isMin = false
    let res;
    info.classList.remove('d-none')
    // check max
    if(!((Math.max(widthSize,heightSize)<=Math.max(max1,max2)) && (Math.min(widthSize,heightSize)<=Math.min(max1,max2)))){
        isMax = true
    }
    // check min
    if(!((Math.max(widthSize,heightSize)>=Math.max(min1,min2)) && (Math.min(widthSize,heightSize)>=Math.min(min1,min2)))){
        isMin = true
    }
    // check min max
    if((isMax && isMin) || isMax){
        res = `Ukuran terlalu besar, ukuran maksimal ${max1}x${max2}cm`
    }else if(isMin){
        res = `Ukuran terlalu kecil, ukuran minimal ${min1}x${min2}cm`
    }else{
        info.classList.add('d-none')
    }
    info.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${res}<br>`
}

function deleteMin(el) {
    let info = document.querySelector("#info-custom")
    let positive = el.value.replace(/[^1-9\d]/g, '').replace(/^0+/, '');
    el.value = positive
    const resultInput = el.parentElement?.querySelector('.result-input')
    if(resultInput){
        resultInput.value = positive
    }
    if(checkSelectedAll()){
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
    }
    checkMinMax()
}

function convertUnit(info){
    btn_hitung.classList.remove('disabled')
    if(info.value == "cm"){
        max1 = 109;
        max2 = 79;
        min1 = 5;
        min2 = 2;
    }else{
        max1 *= 10;
        max2 *= 10;
        min1 *= 10;
        min2 *= 10;
    }
    checkMinMax()
}

function isCustomSizeActive() {
    return btn_custom_size?.textContent.trim() === 'Cancel';
}

function isSpecGroupComplete(group) {
    if (group.id === 'size' && isCustomSizeActive()) {
        return Number(getNumberInputValue('#widthSize')) > 0
            && Number(getNumberInputValue('#heightSize')) > 0;
    }

    if (group.id === 'content' && isCustomContentActive()) {
        return Number(getNumberInputValue(getCustomContentInput())) > 0;
    }

    return Boolean(group.querySelector(':scope > .btn-spec.selected'));
}

function checkSelectedAll() {
    const groups = document.querySelectorAll('.spec:not(.d-none) .list-spec');
    return [...groups].every(isSpecGroupComplete);
}


qtyInput.addEventListener('input', () => {
    if(!isNaN(qtyInput.value.slice(-1))){
        qtyInt = parseInt(qtyInput.value.replace(/\./g, ""))
    }
    qtyInt = qtyInput.value == '' ? 0 : qtyInt;
    qtyStr = qtyInt < 1 ? '' : formatRupiah(qtyInt.toString())
    qtyInput.value = qtyStr
    if(checkSelectedAll()){
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
        tableSpec("hide")
    }
})

document.getElementById('minQty').addEventListener('click',()=>{
    qtyInt = qtyInt < 1 ? 0 : qtyInt-1;
    qtyStr = qtyInt < 1 ? '' : qtyInt;
    qtyInput.value = formatRupiah(qtyStr);
    if(checkSelectedAll()){
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
        tableSpec("hide")
    }
})

document.getElementById('plusQty').addEventListener('click',()=>{
    qtyInt++;
    qtyStr = qtyInt.toString()
    qtyInput.value = formatRupiah(qtyStr);
    if(checkSelectedAll()){
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
        tableSpec("hide")
    }
})

btn_input.forEach(btns => {
    btns.addEventListener('click',()=>{
        if(btns.classList.contains('custom-size-btn') || btns.classList.contains('custom-content-btn')) return
        result[btns.parentElement.id] = btns.textContent
        // update info
        if(checkSelectedAll()){
            document.querySelector('#info-selected-all').classList.add('d-none')
            btn_hitung.classList.remove('disabled')
            tableSpec("hide")
        }
    })
})

btn_custom_content?.addEventListener('click',(e) => {
    e.stopImmediatePropagation()
    tableSpec("hide")
    const shouldOpen = btn_custom_content.textContent.trim() == 'Custom'
    setCustomContentMode(shouldOpen)

    if(!shouldOpen){
        btn_hitung.classList.remove('disabled')
    }
})

getCustomContentInput()?.addEventListener('input', () => {
    updateCustomContentResult()
    if(checkSelectedAll()){
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
        tableSpec("hide")
    }
})

nav_product.forEach(btns => {
    btns.addEventListener('click',()=>{
        // Delete all selected class from siblings element
        const siblings = btns.parentElement.childNodes;
        for (let i = 0; i < siblings.length; i++) {
            if(siblings[i].nodeName == 'P'){
                // Delete Bold
                siblings[i].classList.remove('fw-bold')
                siblings[i].classList.add('fw-light')
            }
        }
        // Add class to clicked nav
        btns.classList.add('fw-bold')
        btns.classList.remove('fw-light')
    })
})

btn_hitung.addEventListener('click',()=>{
    // Chek if all spec selected
    if(checkSelectedAll()){
        // When size custom
        let widthSize = getNumberInputValue('#widthSize')
        let heightSize = getNumberInputValue('#heightSize')
        let isCustomSize = btn_custom_size.textContent == 'Cancel' ? true : false;
        if(isCustomSize){
            let unit = document.querySelector('#unit').value
            result['size'] = `Custom (${widthSize}x${heightSize} ${unit})`
        }
        if(isCustomContentActive()){
            updateCustomContentResult()
        }
        document.querySelector('#info-selected-all').classList.add('d-none')
        btn_hitung.classList.add('disabled')
        share_section.classList.remove('share-disabled')
        tableSpec("show")
        if(result['size']){
            result['size'] = result['size'].replace('mm',' Milimeter').replace('cm', ' Centimeter')
        }
        const summaryPrefix = productPageConfig.summaryPrefix || 'Brosur Full Color'
        const configuredSummaryFields = productPageConfig.summaryFields || ['size', 'type', 'lamination', 'side', 'fold']
        const summaryFields = Array.isArray(configuredSummaryFields)
            ? configuredSummaryFields
            : configuredSummaryFields[selected_nav] || configuredSummaryFields.default || ['size', 'type', 'lamination', 'side', 'fold']
        const summaryValues = summaryFields.map(field => result[field]).filter(Boolean)
        result_el.innerHTML = `${summaryPrefix} ${summaryValues.join(', ')}`
        window.location.href = '#scrollTo'
    }else{
        btn_hitung.classList.add('disabled')
        document.querySelector('#info-selected-all').classList.remove('d-none')
    }
})

btn_custom_size.addEventListener('click',(e) => {
    e.stopImmediatePropagation()
    tableSpec("hide")
    let value_btn = btn_custom_size.textContent == "Custom" ? "Cancel" : "Custom"
    btn_custom_size.innerHTML = value_btn
    if(value_btn == "Custom"){
        document.querySelector('#info-custom').classList.add('d-none')
        btn_hitung.classList.remove('disabled')
    }
    document.querySelector('#size').classList.toggle('d-none')
    document.querySelector('#custom-size').classList.toggle('d-none')
})

img_variant.forEach(img => {
    img.addEventListener('click',()=>{
        const siblings = img.parentElement.childNodes;
        for (let i = 0; i < siblings.length; i++) {
        if(siblings[i].nodeName == 'IMG'){
            // Set text for result
            siblings[i].classList.remove('border-primary')
        } 
        }
        document.querySelector('.img-product').src = img.src
        img.classList.toggle('border-primary')
    })
})

function tableSpec(info){
    if(info == "show"){
        // Set table to default (not selected)
        // table_list.forEach(table => {
        //     table.classList.remove('table-primary')
        // })
        // document.querySelector('.table-spec').classList.remove('d-none')
        // document.querySelector('.empty-spec').classList.add('d-none')
        document.querySelectorAll(".buy-btn").forEach(btn => {
            btn.classList.remove('disabled')
        })
    }else{
        // document.querySelector('#widthSize').value = ""
        // document.querySelector('#heightSize').value = ""
        // result_el.innerHTML = "Tentukan pilihan produk yang anda inginkan pada Tabel List Harga"
        // share_section.classList.add('share-disabled')
        // document.querySelector('.table-spec').classList.add('d-none')
        // document.querySelector('.empty-spec').classList.remove('d-none')
        document.querySelectorAll(".buy-btn").forEach(btn => {
            btn.classList.add('disabled')
        })
    }
}

var tooltipEl = document.querySelectorAll('[data-bs-toggle="tooltip"]'); 
    tooltipEl.forEach(el => {
    var tooltip = new bootstrap.Tooltip(el)
})
