function checkForSpam(message) {
  let lowerCaseMessage = message.toLowerCase(); //обращаем строку к нижнему регистру
  let lineSpam = lowerCaseMessage.includes('spam'); //проверяем наличие нужной подстроки в строке
  let lineSale = lowerCaseMessage.includes('sale'); //проверяем наличие нужной подстроки в строке

  return lineSpam || lineSale; //возвращаем значение true или false
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
