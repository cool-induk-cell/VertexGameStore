import { balanceUser } from './indexCommonVariables.js';

document.getElementById('balance').innerHTML = 'Ваш баланс: ' + balanceUser.toString() + '₽';

let payBalanceButton = document.querySelector('.bpaybalance');

payBalanceButton.addEventListener('click', function() {
    let plusSum = document.querySelector('.sum').value;
    let plusSumInput = document.querySelector('.sum');
    if (plusSum <= 0) {
        plusSumInput.value = 'Ввести корректную сумму пополнения!'
    }
    else if (plusSum > 0) {
//        balanceUser += +plusSum
        plusSumInput.value = 'Пополнение баланса прошло успешно!'
    }
    else {
        plusSumInput.value = 'Используйте ЦЕЛОЕ ЧИСЛО!'
    }
})