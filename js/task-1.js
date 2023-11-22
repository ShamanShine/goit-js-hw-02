function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid; //введём переменную, чтоб узнать общую цену всех заказов
  if (totalPrice > customerCredits) {
    // проверка, хватит ли средств у клиента для оплаты заказа
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
