/*
    TODO: Да се изведат на екрана всички нечетни числа между 2 произволни числа.
*/

function solution() {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  if (x > y) {
    for (let i = y; i <= x; i++) {
      if (i % 2 === 1) {
        console.log(i);
      }
    }
  } else {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 1) {
        console.log(i);
      }
    }
  }
  console.log(`Numbers are: ${x} & ${y}`);
}

solution();
