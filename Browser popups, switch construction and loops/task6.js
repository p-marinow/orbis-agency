/*
    TODO: Да се въведе от потребителя 1 число и да се изведе сбора на всички числа между 1 и въведеното число.
*/

function solution(x) {
  console.log('number is: ', x);
  let result = 0;
  for (let i = x; i > 0; i--) {
    result += x - i + 1;
  }

  console.log(result);
}

let x = Math.floor(Math.random() * 10) + 1;
solution(x);
