const opener = document.querySelector('.opener')
const modal = document.querySelector('.modal')
const closer = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

opener.addEventListener('click', ()=>{
    if (modal == null) {return}
    modal.classList.add('modal-active')
    overlay.classList.add('overlay-active')
    
})

closer.addEventListener('click', ()=>{
    modal.classList.remove('modal-active')
    overlay.classList.remove('overlay-active')
})

overlay.addEventListener('click', ()=>{
     modal.classList.remove('modal-active')
    overlay.classList.remove('overlay-active')
})
