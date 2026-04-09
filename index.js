let buttonCatalog = document.querySelector('.bcatalog');
let buttonBalance = document.querySelector('.bbalance');
let buttonCabinet = document.querySelector('.bcabinet');
let buttonMainSite = document.querySelector('.bmainSite');

let mainSite = document.querySelector('.mainSite');
let catalog = document.querySelector('.catalog');
let balance = document.querySelector('.balance');
let cabinet = document.querySelector('.cabinet');

buttonCatalog.addEventListener('click', function(){
    mainSite.style.display = 'none'
    catalog.style.display = 'block'
})