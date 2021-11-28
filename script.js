let menuToggle=document.querySelector('.toggle')
let container=document.querySelector('.container')
menuToggle.addEventListener('click',()=> {
    menuToggle.classList.toggle('active')
    if(container.classList.contains('container')){
        container.classList.remove('container')
    }else{
        container.classList.add('container')
    }
})