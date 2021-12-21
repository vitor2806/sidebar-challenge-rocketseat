const buttonCtrl = document.querySelector('#hamburger')
const aside = document.querySelector('aside')
const menuHeader = document.querySelector('.menu-header')

buttonCtrl.addEventListener('click', () => {
    const isCollapsed = aside.style.width === 'unset'

    if (isCollapsed) {
        aside.style.width = '15%'
    } else {
        aside.style.width = 'unset'
    }
})