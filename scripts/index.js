const buttonCtrl = document.querySelector('#hamburger')
const aside = document.querySelector('aside')
const menuHeader = document.querySelector('.menu-header')
const profilePic = document.querySelector('.profile-pic')
const menuLogo = document.querySelector('#logo')
const itemDesc = document.querySelectorAll('.item-desc')

buttonCtrl.addEventListener('click', () => {
    const isCollapsed = aside.classList === 'collapse'
    
    if (!isCollapsed) {
        // aside.style.width = 'unset'
        aside.classList.add('collapse')
        profilePic.classList.add('show-hide')
        itemDesc.forEach((span) => {
            span.classList.add('show-hide')
        })
        menuLogo.classList.add('show-hide')
    } else {
        aside.classList.remove('collapse')
        profilePic.classList.remove('show-hide')
        itemDesc.forEach((span) => {
            span.classList.remove('show-hide')
        })
        menuLogo.classList.remove('show-hide')
    }
})