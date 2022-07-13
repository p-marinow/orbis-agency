/*
    TODO: Въведете число и определете дали е просто. Просто число е това което се дели САМО на 1 и на себе си.
*/

function solution(x) {
  console.log(`Number is ${x}`);
  for (let i = 1; i <= x; i++) {
    x / i === 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0
      ? console.log('Yes')
      : '';
  }
}

let x = Math.floor(Math.random() * 1000) + 1;
solution(x);
