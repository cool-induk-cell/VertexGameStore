import { userIdNumber, balanceUser } from './indexCommonVariables.js';

document.getElementById('userId').innerHTML = 'Ваш ID:' + userIdNumber.toString();
document.getElementById('balance').innerHTML = 'Ваш баланс: ' + balanceUser.toString() + '₽';