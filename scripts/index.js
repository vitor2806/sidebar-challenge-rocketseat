const menuBtn = document.querySelector('#hamburger')
const aside = document.querySelector('aside')

menuBtn.addEventListener('click', () => {
    aside.classList.toggle('open')
})