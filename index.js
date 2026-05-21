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

let gameId = 0

setInterval(function(){
    document.cookie = 'userBalance=0; userName=Пользователь; userId=0; max-age=100000;'
}, 1000)



// НОВЫЕ ИГРЫ
let cardsNewGames = document.querySelector('.cardsNewGames')

let picsNewGames = ['images/hytale.png', 'images/hozy.png', 'images/fh6.png', 'images/drg.png',
    'images/pawbay.png']
let namesNewGames = ['Hytale', 'Hozy', 'Forza Horizon 6', 'Deep Rock Galactic', 'Pawbay']
let pricesNewGames = ['499 р.', '199 р.', '2499 р.', '799 р.', "Скоро выйдет"]

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

    let game = document.createElement('div')
    game.className = 'game'


    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.setAttribute('id', gameId)

    gameId += 1
    cardsNewGames.appendChild(game)
}

// ПОПУЛЯРНЫЕ ИГРЫ
let cardsPopularGames = document.querySelector('.cardsPopularGames')

let picsPopularGames = ['images/minecraft.png', 'images/rust.png', 'images/helletloose.png',
    'images/limbo.png', 'images/pfobia.png']
let namesPopularGames = ['Minecraft', 'Rust', 'Hell Let Loose', 'Limbo', 'Phasmophobia']
let pricesPopularGames = ['1599 р.', '799 р.', '1999 р.', '59 р.', '399 р.']

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

    let game = document.createElement('div')
    game.className = 'game'

    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.setAttribute('id', gameId)

    gameId += 1
    cardsPopularGames.appendChild(game)
}

// БЕСПЛАТНЫЕ ИГРЫ
let cardsFreeGames = document.querySelector('.cardsFreeGames')

let picsFreeGames = ['images/apexlegends.png', 'images/warthunder.png', 'images/roblox.png', 'images/rf4.png',
    'images/stalcraftx.png', 'images/supermarkettogether.png', 'images/warface.png', 'images/r2.png',
    'images/ktw.png']
let namesFreeGames = ['Apex Legends', 'War Thunder', 'Roblox', 'Russian Fishing 4', 'Stalcraft X',
    'Supermarket Together', 'Warface', 'Redmatch 2', 'Кризис третий путь']

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

    let game = document.createElement('div')
    game.className = 'game'


    game.appendChild(img)
    game.appendChild(name)
    game.appendChild(price)
    game.setAttribute('id', gameId)

    gameId += 1
    cardsFreeGames.appendChild(game)
}

