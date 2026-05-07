import { balanceUser } from './indexCommonVariables.js';

document.getElementById('balance').innerHTML = 'Ваш баланс: ' + balanceUser.toString() + '₽';

let payBalanceButton = document.querySelector('.bpaybalance');
payBalanceButton.addEventListener('click', function() {

})