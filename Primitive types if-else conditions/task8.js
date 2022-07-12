/* 
  TODO: Задача 8: Създайте 2 различни променливи с произволни стойности и ги разпечатайте в нарастващ ред.
  TODO: Приемете, че променливите се въвеждат и могат да бъдат с всякакви стойности.
*/

function solution1() {
  function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  let a = randomNumber();
  let b = randomNumber();
  if (a > b) {
    console.log(a, b);
  } else {
    //! a < b
    console.log(b, a);
  }
}

function solution2(...params) {
  const result = params.sort((x, y) => x - y);
  result.forEach(e => console.log(e));
}

solution1();
solution2(6, -4);
