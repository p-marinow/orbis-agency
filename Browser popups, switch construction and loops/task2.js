/* 
    TODO: Да се изведат на екрана числата от едно произволно целочислено число до друго произволно целочислено число
    TODO: - използвайте Math.random.
*/

function solution() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  if (x > y) {
    for (let i = y; i <= x; i++) {
      console.log(i);
    }
  } else {
    //! cover case: num1 === num2
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
  console.log(`Numbers are: ${x} & ${y}`);
}

solution();
