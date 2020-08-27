/* 
=================================
* SIGN UP
=================================
*/

let form = document.querySelector('.form')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let nameValue = [];
let emailValue = [];
let user;


form.addEventListener('submit', e => {
    e.preventDefault()

    nameValue.unshift(name.value)
    emailValue.unshift(email.value)

    user = `${nameValue[0]} ${emailValue[0]}`
})