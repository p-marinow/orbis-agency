/*
    TODO: Да се въведат от потребителя 2 числа А и В. Да се изведат всички числа от А до В на степен 2(разделени с запетая).
    TODO: Ако някое число е кратно на 3, да се изведе съобщение че числото се пропуска „skip 3“.Ако сумата от всички изведени TODO: числа (без пропуснатите) стане по-голяма от 200, да се прекрати извеждането.

    * A = 1
    * B = 107
    * 1, 4, skip 3, 16, 25, skip 6, 49, 64, skip 9, 100
*/

function solution(x, y) {
  let result = 0;
  let log = '';
  for (let i = x; i <= y; i++) {
    if (i ** 2 % 3 === 0) {
      log += `skip ${i}`;
    } else {
      result += i ** 2;
      log += i ** 2;
    }

    if (result >= 200) {
      break;
    }
    log += ', ';
  }
  console.log(log);
}

let x = Math.floor(Math.random() * 1) + 1;
let y = Math.floor(Math.random() * 10) + 1;
solution(x, y);
