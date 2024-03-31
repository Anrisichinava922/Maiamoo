const surati = document.querySelector('.photo')
const h2 = document.querySelector('h2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn1.addEventListener('click', () =>{
    surati.classList.add('pirveli')
    h2.classList.add('remove')
})
btn2.addEventListener('click', () =>{
    surati.classList.add('pirveli2')
    h2.classList.add('remove')
})