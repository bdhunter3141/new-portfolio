// Select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const footer = document.querySelector('#main-footer')

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navItems.forEach(item => item.classList.add('show'))

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))

    // Set Menu State
    showMenu = false;
  }
}

// Dynamic Footer Year
const year = new Date().getFullYear()

footer.innerHTML = `Copyright &copy; ${year}`

// Trigger Modal

var modalList = document.querySelectorAll(".modal");
var triggerList = document.querySelectorAll(".trigger");
var closeButtonList = document.querySelectorAll(".close-button");


triggerList.forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    const modalNumber = e.target.getAttribute('data-number');
    toggleModal(modalNumber)
  })
})
closeButtonList.forEach(closeButton => {
  closeButton.addEventListener("click", (e) => {
    const modalNumber = e.target.getAttribute('data-number');
    toggleModal(modalNumber)
  })
})

function toggleModal(modalNumber) {
    modalList[modalNumber].classList.toggle("show-modal");
}

function windowOnClick(event) {
  const modalNumber = event.target.getAttribute('data-number');
    if (event.target === modalList[modalNumber]) {
        toggleModal(modalNumber);
    }
}

window.addEventListener("click", windowOnClick);
