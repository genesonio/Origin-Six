// abre e fecha o menu quando clicar no icone: risquinhos e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// acrescentar sombra no header quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Testimonials carousel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1200: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

// ScrollReval: Mostrar conteúdo quando der scroll
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
footer .brand, footer .social
`,
  { interval: 10 }
)

// Back to Top Button
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

// Menu ativo conforme a seção visíel na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const start = checkpoint >= sectionTop
    const end = checkpoint <= sectionTop + sectionHeight

    if (start && end) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
