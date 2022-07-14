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


function solution2() {
  let num1 = Math.round(Math.random() * 100);
  let num2 = Math.round(Math.random() * 100);
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  console.log(min, max);

  // increment min to the next odd number if it is lower than max
  if (!(min % 2) && min + 1 < max) {
    min++;
  }

  for (let i = min; i <= max; i += 2) {
    console.log(i);
  }
}

solution2()