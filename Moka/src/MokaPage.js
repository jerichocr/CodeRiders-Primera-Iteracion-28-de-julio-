const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Codigo Jerico para hacer cambio de imagenes

function cambio() {
    hotelImagen.src="../public/img/fondoHotel02.jpeg";
    }

setInterval("cambio();",4000)

function cambio2() {
    hotelImagen.src="../public/img/fondoHotel.jpeg";
    }

setInterval("cambio2();",8000)