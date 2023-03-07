
// =========== Cambio de fondo header ===========

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');


}

window.addEventListener('scroll', scrollHeader)



// =========== Ocultar menu en dispositivos menos a 1023px ===========

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById('menu').classList.remove('nav__menu-hidden');
    }
    else {
        document.getElementById('menu').classList.add('nav__menu-hidden');
    }
    ubicacionPrincipal = desplazamiento;
}



// =========== NOSOTROS ACCORDION ===========

const accordionItems = document.querySelectorAll('.nosotros__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.nosotros__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.nosotros__accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}




// =========== SCROLL SECTION ACTIVE ICONO AND LINK ===========

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



// =========== SCROLLREVEAL ===========
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})


sr.reveal(`.home__title, .footer__content, .cita__content, .inicio__contariner-title, .juegos__container`)
sr.reveal(`.home__description`, { delay: 500 })
sr.reveal(`.home__data`, { delay: 600 })
sr.reveal(`.nosotros__images`, { origin: 'left' })
sr.reveal(`.nosotros__content`, { origin: 'right' })

// sr.reveal(`.form`, { origin: 'bottom' })

sr.reveal(`.inicio__ci`, { distance: '0px' })
sr.reveal(`.inicio__contariner-title`, { distance: '10px' })
sr.reveal(`.inicio__img`, { origin: 'left' })
sr.reveal(`.inicio__datos-ci`, { origin: 'right' })
sr.reveal(`.descargar`, { distance: '0px', delay: 1000 })








