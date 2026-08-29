        const tabBtn = document.querySelectorAll('.tab-btn');
        tabBtn.forEach(btn => {
            btn.addEventListener('click', ()=>{
                if(btn.id == "ordersTab"){
                    document.querySelector('#search-form').classList.remove('d-none')
                }else{
                    document.querySelector('#search-form').classList.add('d-none')
                }
            })
        })
