        const sendButton = document.querySelector('#send');
        function checkValue(){
            const name = document.getElementById('name').value
            const phone = document.getElementById('phone').value
            const email = document.getElementById('email').value
            const message = document.getElementById('message').value
            if(!name || !phone || !message || !message){
                return false
            }else{
                return true
            }
        }

        sendButton.addEventListener('click', function(e){
            e.preventDefault()
            if(!checkValue()){
                document.querySelector('#info-selected-all').classList.remove('d-none')
                sendButton.classList.add('disabled')
                return
            }
            location.reload();
        })

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    sendButton.classList.remove('disabled')
                }
            })
        })
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    sendButton.classList.remove('disabled')
                }
            })
        })
