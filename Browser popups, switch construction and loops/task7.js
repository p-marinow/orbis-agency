/* 
    TODO: Да се въведе от потребителя число N и започвайки от 3,
    TODO: да се изведат на екрана първите N числа които се делят на 3.
    TODO: Числата да са разделени със запетая.
*/

function solution(x) {
  console.log(`Random number is ${x}`);
  let result = '';
  while (x !== 0) {
    for (let i = 3; i > 0; i++) {
      if (i % 3 === 0) {
        result += i;
        x--;
        if(x !== 0) {
          result += ', '
        }
      } else if (x === 0) {
        break;
      }
    }
    console.log(result);
  }
}

let x = Math.floor(Math.random() * 10) + 10;
solution(x);

//! 3, 6, 9, 12, 15..
