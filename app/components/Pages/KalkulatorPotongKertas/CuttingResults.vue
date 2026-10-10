<template>
  <div>
    <div class="empty-form align-items-center d-flex h-100">
      <div class="text-center w-100">
        <i class="bi bi-journal fs-1 mb-4"></i>
        <h6>Please select the specification</h6>
        <p class="text-muted text-standard mb-4">
          You have not selected product specifications
        </p>
      </div>
    </div>
    <div class="form d-none">
      <h3 class="fs-6">Hasil Hitungan Potongan</h3>
      <p>Hasil Perhitungan 1 ukuran kertas</p>
      <table class="table">
        <thead class="bg-light">
          <tr>
            <th>Ukuran Plano</th>
            <th>Hasil Potongan</th>
            <th>Area</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plano 650 x 900 Min</td>
            <td>9 Lembar</td>
            <td>98%</td>
            <td>
              <span
                class="text-primary text-standard"
                data-bs-target="#generatePatternModal"
                data-bs-toggle="modal"
                role="button"
                >Generate</span
              >
            </td>
          </tr>
          <tr>
            <td>Plano 650 x 1.000 Min</td>
            <td>10 Lembar</td>
            <td>97%</td>
            <td>
              <span class="text-primary text-standard" role="button"
                >Generate</span
              >
            </td>
          </tr>
          <tr>
            <td>Plano 720 x 1.000 Min</td>
            <td>12 Lembar</td>
            <td>96%</td>
            <td>
              <span class="text-primary text-standard" role="button"
                >Generate</span
              >
            </td>
          </tr>
          <tr>
            <td>Plano 610 x 860 Min</td>
            <td>7 Lembar</td>
            <td>96%</td>
            <td>
              <span class="text-primary text-standard" role="button"
                >Generate</span
              >
            </td>
          </tr>
          <tr>
            <td>Plano 610 x 920 Min</td>
            <td>8 Lembar</td>
            <td>96%</td>
            <td>
              <span class="text-primary text-standard" role="button"
                >Generate</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-muted small">
        Klik Generate untuk memilih ukuran plano dengan potongan
      </p>
    </div>
  </div>
</template>
