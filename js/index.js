// Parallax home header
let parallax = document.querySelector('.header')
let ghibliContents = document.querySelectorAll('.ghibli__content')
let menuToggle = document.querySelector('.header__menu__toggle')
let menuLinks = document.querySelector('.header__menu__links')


window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset

    //Efecto parllax para el header
        parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`

    //Efecto fade para secciones ghibli 
    ghibliContents.forEach(ghibliContent => {
        if (scrollPosition > ghibliContent.offsetTop - window.innerHeight + 200) {
            ghibliContent.style.opacity = 1;
        }
    })
})

//SLIDER HOME 
let slideContainer = document.querySelector('.slider__container')
let slides = document.querySelectorAll('.slider__img')
let index = 0

setInterval(() => {
    let slideWidth = slides[index].clientWidth // clientWidth: Esta propiedad proporciona el tamaño del área dentro de los bordes del elemento.

    index = (index + 1) % slides.length
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`
    
}, 5000)






