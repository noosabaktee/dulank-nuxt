      const carousel = document.getElementById('carousel'); // pakai ID, bukan querySelector('.carousel')
      const next = document.getElementById('next');
      const prev = document.getElementById('prev');
    
      const scrollAmount = 300; // Sesuaikan dengan lebar itemz + margin/gap
    
      next.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    
      prev.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
