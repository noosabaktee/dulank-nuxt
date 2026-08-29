let provinsiData = {}, kotaData = {};
let selected = { provinsi:'', kota:'', kecamatan:'' };
let kecamatanList = []; // Diambil dari kodepos.json

// Load JSON
Promise.all([
    fetch('json/provinsi.json').then(r=>r.json()),
    fetch('json/kota-kabupaten.json').then(r=>r.json()),
    fetch('json/kodepos.json').then(r=>r.json())
]).then(([prov,kota,kodepos])=>{
    provinsiData = prov;
    kotaData = kota;
    kodeposData = kodepos;
    // Ambil list kecamatan unik dari kodepos.json
    let kecSet = {};
    Object.values(kodeposData).forEach(obj => {
    if(obj.bps && obj.nama) kecSet[obj.bps+'|'+obj.nama] = obj.nama;
    });
    kecamatanList = Object.entries(kecSet).map(([key, nama]) => {
    const [bps,] = key.split('|');
    return { bps, nama };
    });
    renderProvinsi();
});

// Render Provinsi
function renderProvinsi() {
    const ul = document.getElementById('provinsi-list');
    ul.innerHTML = '';
    Object.entries(provinsiData).forEach(([id, name]) => {
        const li = document.createElement('li');
        li.textContent = name;
        li.onclick = () => {
            selected.provinsi = id;
            selected.kota = '';
            selected.kecamatan = '';
            document.getElementById('alamat-lengkap').value = name + ', ';
            renderKota(id);
            showTab('kota');
        };
        ul.appendChild(li);
    });
}

// Render Kota
function renderKota(provId) {
    const ul = document.getElementById('kota-list');
    ul.innerHTML = '';
    Object.entries(kotaData).forEach(([id, name]) => {
        if(id.startsWith(provId)) {
            const li = document.createElement('li');
            li.textContent = name;
            li.onclick = () => {
                selected.kota = id;
                selected.kecamatan = '';
                document.getElementById('alamat-lengkap').value = provinsiData[selected.provinsi] + ', ' + name + ', ';
                renderKecamatan(id);
                showTab('kecamatan');
            };
            ul.appendChild(li);
        }
    });
}

// Render Kecamatan
function renderKecamatan(kotaId) {
    const ul = document.getElementById('kecamatan-list');
    ul.innerHTML = '';
    const bps = kotaId.substring(0,4);
    kecamatanList.filter(kec => kec.bps === bps).forEach(kec => {
        const li = document.createElement('li');
        li.textContent = kec.nama;
        li.onclick = () => {
            selected.kecamatan = kec.nama;
            document.getElementById('alamat-lengkap').value = 
                provinsiData[selected.provinsi] + ', ' +
                kotaData[selected.kota] + ', ' +
                kec.nama;
            document.getElementById('alamat-dropdown-wrapper').style.display = 'none';
        };
        ul.appendChild(li);
    });
}

// Tab logic
function showTab(tab) {
    ['provinsi','kota','kecamatan'].forEach(name=>{
        document.getElementById(name+'-tab').classList.remove('active');
        document.getElementById(name+'-pane').classList.remove('show','active');
    });
    document.getElementById(tab+'-tab').classList.add('active');
    document.getElementById(tab+'-pane').classList.add('show','active');
}

// Show dropdown on input click
// --- FITUR SEARCH ALAMAT ---
const alamatInput = document.getElementById('alamat-lengkap');
const clearAddress = document.getElementById('clear-address');
const dropdownWrapper = document.getElementById('alamat-dropdown-wrapper');
const tabNav = document.getElementById('alamatTab');
const tabContent = document.getElementById('alamatTabContent');
const searchResult = document.getElementById('alamat-search-result');
const searchList = document.getElementById('alamat-search-list');

alamatInput.addEventListener('input', function() {
    const keyword = this.value.trim().toLowerCase();
    if (keyword.length < 3) {
        clearAddress.classList.add("d-none")
        tabNav.style.display = '';
        tabContent.style.display = '';
        searchResult.style.display = 'none';
        showTab('provinsi');
        return;
    } else {
        clearAddress.classList.remove("d-none")
    }
    // Sembunyikan tab, tampilkan hasil search
    tabNav.style.display = 'none';
    tabContent.style.display = 'none';
    searchResult.style.display = 'block';
    searchList.innerHTML = '';

    // --- Pencarian hanya sampai kecamatan unik saja ---
    let results = [];
    let kotaCache = {};
    let provCache = {};
    let lowerKeyword = keyword.toLowerCase();
    let kecamatanUnik = new Set();

    for (const [kode, obj] of Object.entries(kodeposData)) {
        const kecamatan = obj.nama || '';
        const bps = obj.bps || '';
        // Cari kota
        let kota = kotaCache[bps];
        if (!kota) {
            kota = Object.entries(kotaData).find(([id]) => id.startsWith(bps))?.[1] || '';
            kotaCache[bps] = kota;
        }
        // Cari provinsi
        let provId = Object.keys(kotaData).find(id => kotaData[id] === kota) || '';
        let prov = provCache[provId?.slice(0,2)];
        if (!prov) {
            prov = provinsiData[provId?.slice(0,2)] || '';
            provCache[provId?.slice(0,2)] = prov;
        }

        // Gabungan unik: provinsi, kota, kecamatan
        let kecKey = `${prov}|${kota}|${kecamatan}`;
        if (kecamatanUnik.has(kecKey)) continue;

        // Split keyword jadi kata-kata, semua kata harus ada di kecamatan atau kota
        let allMatch = lowerKeyword.split(' ').every(kw => 
            kecamatan.toLowerCase().includes(kw) || kota.toLowerCase().includes(kw)
        );

        if (
            allMatch ||
            prov.toLowerCase().includes(lowerKeyword)
        ) {
            results.push({
                provinsi: prov,
                provId: provId?.slice(0,2),
                kota: kota,
                kotaId: provId,
                kecamatan: kecamatan,
                bps: bps
            });
            kecamatanUnik.add(kecKey);
            if (results.length >= 5) break;
        }
    }
    // Tampilkan hasil
    if (results.length === 0) {
        searchList.innerHTML = '<li class="text-muted px-2 py-1">Tidak ditemukan</li>';
    } else {
        results.forEach(item => {
            const li = document.createElement('li');
            li.className = 'alamat-search-item px-2 py-1';
            li.style.cursor = 'pointer';
            li.innerHTML = `<b>${item.provinsi}</b>, <b>${item.kota}</b>, <b>${item.kecamatan}</b>`;
            li.onclick = () => {
                selected.provinsi = item.provId;
                selected.kota = item.kotaId;
                selected.kecamatan = item.kecamatan;
                selected.kodepos = '';
                alamatInput.value = `${item.provinsi}, ${item.kota}, ${item.kecamatan}`;
                dropdownWrapper.style.display = 'none';
            };
            searchList.appendChild(li);
        });
    }
});


clearAddress.addEventListener('click', function() {
    clearAddress.classList.add("d-none")
    alamatInput.value = ""
})

// ...existing renderProvinsi, renderKota, renderKecamatan, renderKodepos, showTab, tab event, etc...

// Show dropdown on input click/focus
alamatInput.addEventListener('focus', function() {
dropdownWrapper.style.display = 'block';
if (this.value.trim().length < 3) {
    tabNav.style.display = '';
    tabContent.style.display = '';
    searchResult.style.display = 'none';
    showTab('provinsi');
}
});
alamatInput.addEventListener('click', function() {
dropdownWrapper.style.display = 'block';
if (this.value.trim().length < 3) {
    tabNav.style.display = '';
    tabContent.style.display = '';
    searchResult.style.display = 'none';
    showTab('provinsi');
}
});
// Hide dropdown if click outside
document.addEventListener('mousedown', function(e) {
if (!dropdownWrapper.contains(e.target) && e.target !== alamatInput) {
    dropdownWrapper.style.display = 'none';
}
});