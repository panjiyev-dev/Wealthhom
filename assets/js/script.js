'use strict'

const $navbar = document.querySelector('[data-navbar]');
const $navToggle = document.querySelector('[data-nav-toggler]');

$navToggle.addEventListener('click', () => {
    $navbar.classList.toggle('active');
})

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', e => {
    $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
})

const $toggleBtns = document.querySelectorAll('[data-toggle-btn]');

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener('click', () => {
        $toggleBtn.classList.toggle('active');
    })
})

const $navbarActive = document.querySelectorAll('.navbar-link')

$navbarActive.forEach(navbarLink => {
    navbarLink.addEventListener('click', () => {
        if (navbarLink.classList.contains('active')) {
            $navbarActive.forEach(navRemoveClass => {
                navRemoveClass.classList.remove('active')
            }
            )
        } else {
            $navbarActive.forEach(navRemoveClass => {
                navRemoveClass.classList.remove('active')
            }
            )
            navbarLink.classList.add('active')
        }
        // console.log(navbarLink)
    })
})