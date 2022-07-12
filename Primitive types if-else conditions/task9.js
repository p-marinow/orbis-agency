/* 
  TODO: Задача 9: Създайте 3 различни променливи и ги разпечатайте в низходящ ред.
  TODO: Приемете, че променливите се въвеждат и могат да бъдат с всякакви стойности.
*/

function solution1() {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  let a = randomNumber();
  let b = randomNumber();
  let c = randomNumber();

  if (a > b) {
    if (a > c) {
      if (b > c) {
        console.log(a, b, c);
      } else {
        //! b < c
        console.log(a, c, b);
      }
    } else {
      //! a < c
      console.log(b, c, a);
    }
  } else {
    //! a < b
    if (b > c) {
      if (a > c) {
        console.log(b, a, c);
      } else {
        //! a < c
        console.log(b, c, a);
      }
    } else {
      //! b < c
      console.log(c, b, a);
    }
  }
}

function solution2(...params) {
  const result = params.sort((x, y) => y - x);
  result.forEach(e => console.log(e));
}

solution1();
//solution2(1, 3, -7);
