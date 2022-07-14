/*
    TODO: Да се изведат на екрана числата от 10 до 1 в обратен ред.
*/

function solution() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

//solution();

function solution2() {
  let x = 10;
  while (x-- >= 1) {
    console.log(x);
  }
}

//solution2();

function solution3() {
  for (let i = 10; i; i--) {
    console.log(i);
  }
}

solution3();