// Случайный фон
//function backgroundSwitch(){
//    let backgrounds = ['backgrounds/back.gif',
//        'backgrounds/back1.gif', 'backgrounds/back2.gif',
//        'backgrounds/back3.gif','backgrounds/back4.gif',
//        'backgrounds/back5.gif','backgrounds/back6.gif']
//    let rand = Math.floor(Math.random() * backgrounds.length);
//    let backgroundImage = backgrounds[rand];
//    document.body.style.backgroundImage = "url(" + backgroundImage + ")";
//}
//window.onload = backgroundSwitch();


let userIdNumber = Math.floor(100000000 + Math.random() * 900000000);
document.getElementById("userId").innerHTML = 'Ваш ID: ' + userIdNumber.toString();

let balanceUser = 0
document.getElementById("balance").innerHTML = 'Ваш баланс: ' + balanceUser.toString();

let balance = 0
let gameId = 0

// НОВЫЕ ИГРЫ
let cardsNewGames = document.querySelector('.cardsNewGames')

let picsNewGames = ['images/hytale.png', 'images/hozy.png']
let namesNewGames = ['Hytale', 'Hozy']
let pricesNewGames = ['499 р.', '199 р.']

for (let i = 0; i < picsNewGames.length; i+=1) {
    let img = document.createElement('img');
    img.src = picsNewGames[i]
    img.className = 'img'

    let name = document.createElement('p')
    name.innerHTML = namesNewGames[i]
    name.className = 'name'

    let price = document.createElement('p')
    price.innerHTML = pricesNewGames[i]
    price.className = 'price'
    let idCard = document.createElement('p')
    idCard.innerHTML = gameId
    idCard.className = 'price'

    let game = document.createElement('div')
    game.className = 'game'


    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.appendChild(idCard)
    game.setAttribute('id', gameId)
    console.log(game.id);

    gameId += 1
    cardsNewGames.appendChild(game)
}

// ПОПУЛЯРНЫЕ ИГРЫ
let cardsPopularGames = document.querySelector('.cardsPopularGames')

let picsPopularGames = ['images/minecraft.png', 'images/rust.png']
let namesPopularGames = ['Minecraft', 'Rust']
let pricesPopularGames = ['1599 р.', '799 р.']

for (let i = 0; i < picsPopularGames.length; i+=1) {
    let img = document.createElement('img');
    img.src = picsPopularGames[i]
    img.className = 'img'

    let name = document.createElement('p')
    name.innerHTML = namesPopularGames[i]
    name.className = 'name'

    let price = document.createElement('p')
    price.innerHTML = pricesPopularGames[i]
    price.className = 'price'
    let idCard = document.createElement('p')
    idCard.innerHTML = gameId
    idCard.className = 'price'

    let game = document.createElement('div')
    game.className = 'game'


    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.appendChild(idCard)

    gameId += 1
    cardsPopularGames.appendChild(game)
}

// БЕСПЛАТНЫЕ ИГРЫ
let cardsFreeGames = document.querySelector('.cardsFreeGames')

let picsFreeGames = ['images/apexlegends.png', 'images/warthunder.png']
let namesFreeGames = ['Apex Legends', 'War Thunder']

for (let i = 0; i < picsFreeGames.length; i+=1) {
    let img = document.createElement('img');
    img.src = picsFreeGames[i]
    img.className = 'img'

    let name = document.createElement('p')
    name.innerHTML = namesFreeGames[i]
    name.className = 'name'

    let price = document.createElement('p')
    price.innerHTML = "Бесплатно"
    price.className = 'price'
    let idCard = document.createElement('p')
    idCard.innerHTML = gameId
    idCard.className = 'price'

    let game = document.createElement('div')
    game.className = 'game'


    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.appendChild(idCard)

    gameId += 1
    cardsFreeGames.appendChild(game)
}

