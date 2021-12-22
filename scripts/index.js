const buttonCtrl = document.querySelector('#hamburger')
const aside = document.querySelector('aside')
const menuHeader = document.querySelector('.menu-header')
const profilePic = document.querySelector('.profile-pic')
const menuLogo = document.querySelector('#logo')
const itemDesc = document.querySelectorAll('.item-desc')
const menuItem = document.querySelectorAll('.menu-item')

buttonCtrl.addEventListener('click', () => {
    handleItemsVisibility()
})

function handleItemsVisibility() {
    aside.classList.toggle('collapse')
    itemDesc.forEach((span) => {
        span.classList.toggle('show-hide')
    })
    menuItem.forEach((li) => {
        li.classList.toggle('collapse')
    })
    menuLogo.classList.toggle('show-hide')
    profilePic.classList.toggle('show-hide')
    menuHeader.classList.toggle('justify-center')
}