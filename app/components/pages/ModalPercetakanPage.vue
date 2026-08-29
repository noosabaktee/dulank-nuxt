<script setup lang="ts">
useLegacyPage({
  "title": "Bootstrap 5 Modals",
  "styles": [
    "/css/pages/modal-percetakan.css"
  ],
  "scripts": [],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-modal-percetakan">

<div class="container">
<h1 class="mb-4">Bootstrap 5 Modal Examples</h1>
<div class="demo-buttons">
<button class="btn btn-primary" data-bs-target="#modal1" data-bs-toggle="modal" type="button">Modal 1: Input Ukuran Kertas Baru</button>
<button class="btn btn-primary" data-bs-target="#modal2" data-bs-toggle="modal" type="button">Modal 2: Input Ukuran Kertas Baru dengan Tabel</button>
<button class="btn btn-primary" data-bs-target="#modal3" data-bs-toggle="modal" type="button">Modal 3: Input Harga Kertas Baru</button>
<button class="btn btn-primary" data-bs-target="#modal4" data-bs-toggle="modal" type="button">Modal 4: Group Acuan Kertas</button>
</div>

<div aria-hidden="true" aria-labelledby="modal1Label" class="modal fade" id="modal1" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="modal1Label">modal visitor</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<form>
<h5>Input Ukuran Kertas Baru</h5>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="satuanUkuran1">Pilih Satuan Ukuran</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="satuanUkuran1">
<option selected="">Centimeter</option>
<option>Inch</option>
<option>Millimeter</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="namaMesin1">Masukan Nama Mesin</label>
</div>
<div class="col-md-7">
<input class="form-control" id="namaMesin1" type="text" value="Mesin SM 52 4 Warna"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label">Ukuran Area Kertas</label>
</div>
<div class="col-md-7">
<div class="row">
<div class="col-2 text-center">P</div>
<div class="col-4">
<input class="form-control" type="text" value="52"/>
</div>
<div class="col-2 text-center">L</div>
<div class="col-4">
<input class="form-control" type="text" value="37"/>
</div>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="lebarJepitan1">Lebar Jepitan</label>
</div>
<div class="col-md-7">
<input class="form-control" id="lebarJepitan1" type="text" value="1.2"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaMinimum1">Harga Minimum</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaMinimum1" type="text" value="240.000"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="qtyMinimum1">Qty Minimum</label>
</div>
<div class="col-md-7">
<input class="form-control" id="qtyMinimum1" type="text" value="1.000"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaDruck1">Harga Druck</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaDruck1" type="text" value="60"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaPlat1">Harga Plat</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaPlat1" type="text" value="80.000"/>
<button class="btn btn-primary" type="submit">Simpan</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modal2Label" class="modal fade" id="modal2" tabindex="-1">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="modal2Label">modal user</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<div class="accordion mb-3" id="accordionUkuranKertas">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button aria-controls="collapseUkuranKertas" aria-expanded="true" class="accordion-button" data-bs-target="#collapseUkuranKertas" data-bs-toggle="collapse" type="button">
                                        + Input Ukuran Kertas Baru
                                    </button>
</h2>
<div aria-labelledby="headingOne" class="accordion-collapse collapse show" data-bs-parent="#accordionUkuranKertas" id="collapseUkuranKertas">
<div class="accordion-body">
<form>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="satuanUkuran1-2">Pilih Satuan Ukuran</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="satuanUkuran1-2">
<option selected="">Centimeter</option>
<option>Inch</option>
<option>Millimeter</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="namaMesin1-2">Masukan Nama Mesin</label>
</div>
<div class="col-md-7">
<input class="form-control" id="namaMesin1-2" type="text" value="Mesin SM 52 4 Warna"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label">Ukuran Area Kertas</label>
</div>
<div class="col-md-7">
<div class="row">
<div class="col-2 text-center">P</div>
<div class="col-4">
<input class="form-control" type="text" value="52"/>
</div>
<div class="col-2 text-center">L</div>
<div class="col-4">
<input class="form-control" type="text" value="37"/>
</div>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="lebarJepitan1-2">Lebar Jepitan</label>
</div>
<div class="col-md-7">
<input class="form-control" id="lebarJepitan1-2" type="text" value="1.2"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaMinimum1-2">Harga Minimum</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaMinimum1-2" type="text" value="240.000"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="qtyMinimum1-2">Qty Minimum</label>
</div>
<div class="col-md-7">
<input class="form-control" id="qtyMinimum1-2" type="text" value="1.000"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaDruck1-2">Harga Druck</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaDruck1-2" type="text" value="60"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaPlat1-2">Harga Plat</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaPlat1-2" type="text" value="80.000"/>
<button class="btn btn-primary" type="submit">Simpan</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th>No</th>
<th>Nama Mesin</th>
<th>Panjang Area</th>
<th>Lebar Area</th>
<th>Lebar Jepitan</th>
<th>Harga Min</th>
<th>Qty Min</th>
<th>Druck</th>
<th>Harga Plat</th>
<th>Status</th>
<th>Aksi</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>GTO 52 4 Warna</td>
<td>52</td>
<td>35</td>
<td>1.2</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>2</td>
<td>SM 52 4 Warna</td>
<td>52</td>
<td>37</td>
<td>1.2</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>3</td>
<td>SM 72 4 Warna</td>
<td>72</td>
<td>37</td>
<td>1.2</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>4</td>
<td>SM 102 4 Warna</td>
<td>102</td>
<td>72</td>
<td>1.5</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="text-center my-3">
<a class="generate-button" href="#">Generate Data Harga Aktual</a>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modal3Label" class="modal fade" id="modal3" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="modal3Label">modal visitor</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<form>
<h5>Input Harga Kertas Baru</h5>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="satuanUkuran3">Pilih Satuan Ukuran</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="satuanUkuran3">
<option selected="">Centimeter</option>
<option>Inch</option>
<option>Millimeter</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="namaKertas3">Nama Kertas</label>
</div>
<div class="col-md-7">
<input class="form-control" id="namaKertas3" type="text"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label">Ukuran</label>
</div>
<div class="col-md-7">
<div class="row">
<div class="col-2 text-center">P</div>
<div class="col-4">
<input class="form-control" type="text" value="65"/>
</div>
<div class="col-2 text-center">L</div>
<div class="col-4">
<input class="form-control" type="text" value="100"/>
</div>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaPerRim3">Harga Per Rim</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaPerRim3" type="text" value="850.000"/>
<button class="btn btn-primary" type="submit">Simpan</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modal4Label" class="modal fade" id="modal4" tabindex="-1">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="modal4Label">modal user regist</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<div class="accordion mb-3" id="satuanUkuran">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne-2">
<button aria-controls="collapseSatuanUkuran" aria-expanded="true" class="accordion-button" data-bs-target="#collapseSatuanUkuran" data-bs-toggle="collapse" type="button">
                                        + Harga Group Acuan Kertas per Rim
                                    </button>
</h2>
<div aria-labelledby="headingOne-2" class="accordion-collapse collapse show" data-bs-parent="#satuanUkuran" id="collapseSatuanUkuran">
<div class="accordion-body">
<form>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="satuanUkuran4">Pilih Satuan Ukuran</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="satuanUkuran4">
<option selected="">Centimeter</option>
<option>Inch</option>
<option>Millimeter</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="pilihGroup4">Pilih Group Kertas</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="pilihGroup4">
<option selected="">Art Carton</option>
<option>Art Paper</option>
<option>HVS</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label">Ukuran</label>
</div>
<div class="col-md-7">
<div class="row">
<div class="col-2 text-center">P</div>
<div class="col-4">
<input class="form-control" type="text" value="65"/>
</div>
<div class="col-2 text-center">L</div>
<div class="col-4">
<input class="form-control" type="text" value="100"/>
</div>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="gramatur4">Gramatur/Gsm</label>
</div>
<div class="col-md-7">
<input class="form-control" id="gramatur4" type="text" value="230"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="hargaPerRim4">Harga Per Rim</label>
</div>
<div class="col-md-7">
<input class="form-control" id="hargaPerRim4" type="text" value="850.000"/>
<button class="btn btn-primary mb-4" type="submit">Simpan</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h6>Tabel Harga Acuan Kertas Per Rim dalam Group</h6>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th>No</th>
<th>Group Kertas</th>
<th>Gsm</th>
<th>Panjang</th>
<th>Lebar</th>
<th>Harga</th>
<th>Status</th>
<th>Aksi</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Art Paper</td>
<td>100</td>
<td>65</td>
<td>100</td>
<td>450.000</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>2</td>
<td>Art Carton</td>
<td>260</td>
<td>79</td>
<td>109</td>
<td>1850.000</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>3</td>
<td>Duplex</td>
<td>310</td>
<td>79</td>
<td>109</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>4</td>
<td>Hvs/paper</td>
<td>100</td>
<td>70</td>
<td>100</td>
<td>0</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="text-center my-3">
<a class="generate-button" href="#">Generate Harga Aktual</a>
</div>
<div class="accordion mb-3" id="accordionHargaGroup">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne-3">
<button aria-controls="collapseHargaGroup" aria-expanded="true" class="accordion-button" data-bs-target="#collapseHargaGroup" data-bs-toggle="collapse" type="button">
                                        + Jenis Kertas Baru berdasarkan group kertas
                                    </button>
</h2>
<div aria-labelledby="headingOne-3" class="accordion-collapse collapse show" data-bs-parent="#accordionHargaGroup" id="collapseHargaGroup">
<div class="accordion-body">
<form>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="pilihGroup4-2">Pilih Group Kertas</label>
</div>
<div class="col-md-7">
<div class="input-group">
<select class="form-select" id="pilihGroup4-2">
<option selected="">Art Carton</option>
<option>Art Paper</option>
<option>HVS</option>
</select>
</div>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label" for="gramatur4-2">Masukan Gramatur</label>
</div>
<div class="col-md-7">
<input class="form-control" id="gramatur4-2" type="text" value="230"/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-5">
<label class="form-label">Pilih Ukuran Plano</label>
</div>
<div class="col-md-7">
<div class="form-check mb-2">
<input checked="" class="form-check-input" id="size1" type="checkbox" value=""/>
<label class="form-check-label" for="size1">
                                                                90 x 120
                                                            </label>
</div>
<div class="form-check mb-2">
<input class="form-check-input" id="size2" type="checkbox" value=""/>
<label class="form-check-label" for="size2">
                                                                79 x 109
                                                            </label>
</div>
<div class="form-check mb-2">
<input class="form-check-input" id="size3" type="checkbox" value=""/>
<label class="form-check-label text-muted" for="size3">
                                                                70 x 100 (cocok untuk ukuran A4/A3 genap)
                                                            </label>
</div>
<div class="form-check mb-2">
<input class="form-check-input" id="size4" type="checkbox" value=""/>
<label class="form-check-label" for="size4">
                                                                65 x 90
                                                            </label>
</div>
<div class="form-check mb-2">
<input class="form-check-input" id="size5" type="checkbox" value=""/>
<label class="form-check-label" for="size5">
                                                                61 x 92
                                                            </label>
</div>
<div class="form-check mb-2">
<input class="form-check-input" id="size6" type="checkbox" value=""/>
<label class="form-check-label" for="size6">
                                                                61 x 86
                                                            </label>
</div>
<button class="btn btn-primary mb-4" type="submit">Simpan</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h6>Tabel Jenis Kertas</h6>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th>No</th>
<th>Group Kertas</th>
<th>Gsm</th>
<th>Panjang</th>
<th>Lebar</th>
<th>Status</th>
<th>Aksi</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Art Paper</td>
<td>150</td>
<td>79</td>
<td>109</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>2</td>
<td>Art Paper</td>
<td>150</td>
<td>65</td>
<td>100</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>3</td>
<td>Art Paper</td>
<td>150</td>
<td>65</td>
<td>90</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>4</td>
<td>Art Paper</td>
<td>150</td>
<td>61</td>
<td>92</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>5</td>
<td>Art Carton</td>
<td>210</td>
<td>79</td>
<td>109</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>6</td>
<td>Art Carton</td>
<td>210</td>
<td>65</td>
<td>100</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
<tr>
<td>7</td>
<td>Art Carton</td>
<td>210</td>
<td>61</td>
<td>92</td>
<td>Aktif</td>
<td>
<button class="icon-button" type="button"><i class="bi bi-pencil-square"></i></button>
<button class="icon-button" type="button"><i class="bi bi-trash"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>



</div>
</template>
