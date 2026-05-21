//import { balanceUser } from './indexBalance.js';

const userIdNumber = Math.floor(100000000 + Math.random() * 900000000);
let userName = 'Пользователь'
let userAvatar = 'backgrounds/userAvatar.png'
let balanceUser = 0


document.getElementById('userId').innerHTML = 'Ваш ID:' + userIdNumber.toString();
document.getElementById('balance').innerHTML = 'Ваш баланс: ' + balanceUser.toString() + '₽';
document.getElementById('userName').innerHTML = userName;
document.getElementById('avatarUser').src = userAvatar;


let buttonChange = document.getElementById('bChange')
buttonChange.addEventListener('click', function(){
    let profile = document.getElementById('profile');

    let inputImg = document.createElement('input')
    inputImg.setAttribute('type', 'file');
    inputImg.setAttribute('accept', 'image/png');
    userAvatar = inputImg.value

    let inputName = document.createElement('input')
    userName = inputName.value

    let divChange = document.createElement('div')

    divChange.appendChild(inputName)
    divChange.appendChild(inputImg)

    profile.appendChild(divChange)
})