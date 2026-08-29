                          // Toggle produk (opsional, jika ingin hide/show produk)
                          document.addEventListener('DOMContentLoaded', function() {
                            const btn = document.getElementById('toggleProductBtn');
                            const table = btn.closest('.card-body').querySelector('table');
                            let hidden = false;
                            btn.addEventListener('click', function() {
                              hidden = !hidden;
                              table.style.display = hidden ? 'none' : '';
                              btn.textContent = hidden ? 'Show Product' : 'Hide Product';
                            });
                          });
