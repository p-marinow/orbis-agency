/* 
    TODO: Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа от по-малкото до по-голямото.
*/

function solution(x, y) {
  if (x > y) {
    for (let i = y; i <= x; i++) {
      console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
  console.log(`Numbers are: ${x} & ${y}`);
}

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
solution(x, y);
