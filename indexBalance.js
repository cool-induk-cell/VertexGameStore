function getCookies(){
    let cookie = document.cookie.split('; ')
    for (i = 0; i < cookie.length; i++){
        let c = cookie[i].split('=')
        if (c[0] == 'userBalance'){
            return c[1]
        }
    }
}

balanceUser = getCookies()

document.getElementById('balance').innerHTML = 'Ваш баланс: ' + balanceUser.toString() + '₽';

let payBalanceButton = document.querySelector('.bpaybalance');

payBalanceButton.addEventListener('click', function() {
    let plusSum = document.querySelector('.sum').value;
    let plusSumInput = document.querySelector('.sum');
    if (plusSum <= 0) {
        plusSumInput.value = 'Ввести корректную сумму пополнения!'
    }
    else if (plusSum > 0) {
        balanceUser += plusSum.value;
        plusSumInput.value = 'Пополнение баланса прошло успешно!'
    }
    else {
        plusSumInput.value = 'Используйте ЦЕЛОЕ ЧИСЛО!'
    }
})

setInterval(function(){
    document.cookie = `\`userBalance=${balanceUser}\`; userName=Пользователь; userId=0; max-age=100000;`
}, 1000)