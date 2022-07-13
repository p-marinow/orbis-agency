/* 
    TODO: Да се състави програма, която извежда всички естествени трицифрени числа,
    TODO: които нямат еднакви цифри т.е. 100,101, 606 и т.н. не се извеждат. 
    * 100 -> 999
*/

function solution() {
  let number = 0;
  let result = [];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        if ((i !== j && j !== k && i !== k) && number >= 100) {
          result.push(number);
        }
        number++;
      }
    }
  }
  console.log(result);
}

solution();
