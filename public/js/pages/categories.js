      const category_card = document.querySelectorAll('.category-card')
      const category_sale = document.querySelectorAll('.category-sale')
      category_card.forEach(img => {
        img.addEventListener('mouseover',() => {
          let category_image = img.querySelector('.category-image')
          category_image.classList.add('category-image-scale')
        })
        img.addEventListener('mouseout',() => {
          let category_image = img.querySelector('.category-image')
          category_image.classList.remove('category-image-scale')
        })
      });
      category_sale.forEach(img => {
        img.addEventListener('mouseover',() => {
          let category_sale_image = img.querySelector('.category-sale-image')
          category_sale_image.classList.add('category-sale-image-scale')
        })
        img.addEventListener('mouseout',() => {
          let category_sale_image = img.querySelector('.category-sale-image')
          category_sale_image.classList.remove('category-sale-image-scale')
        })
      });
