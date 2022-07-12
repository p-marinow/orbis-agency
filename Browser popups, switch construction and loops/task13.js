/*
    TODO: Да се състави програма, която извежда всички естествени трицифрени числа, които имат сбор на цифрите равен на дадено произволно число.
    * Числото ако е 26
    * Изход: 899, 989, 998.
*/

function solution(x) {
  let number = 0;
  let result = [];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        if (i + j + k === x) {
          result.push(number);
        }
        number++;
      }
    }
  }
  console.log(result);
  console.log(`Random number is: ${x}`);
}

let x = Math.floor(Math.random() * 10) + 10;
solution(x);
