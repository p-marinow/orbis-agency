/*
    TODO: Да се въведе от потребителя 1 число и да се изведе сбора на всички числа между 1 и въведеното число.
*/

let x = Math.floor(Math.random() * 10) + 1;

function solution(x) {
  console.log('number is: ', x);
  let result = 0;
  for (let i = x; i > 0; i--) {
    result += i;
  }

  console.log(result);
}

solution(x);

function solution2(x) {
  let num1 = x;
  let num2 = 1;
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let sum = 0;

  console.log((num1 + num2) * (Math.abs(num1 - num2) + 1) / 2);
}

solution2(x);