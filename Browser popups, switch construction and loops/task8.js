/* 
    TODO: По зададено число N от 1 до 10, да се изведе на екрана таблица по следния начин:

        Въведеното число:	1		2		  3		  4
                  __________________________________
        Резултат:		      0		11		222		3333
                              33		555		7777
                                    888		11111111
                                          15151515

*/

function solution(x) {
  for (let col = 1; col <= x; col++) {
    console.log(`Number is: ${col}`);
    for (let row = 1; row <= col; row++) {
      let colNum = (col - 1) + col * (row - 1);
      let text = '';
      for (let i = 1; i <= col; i++) {
        text += colNum;
      }
      console.log(text);
    }
  }
}

let x = Math.floor(Math.random() * 10) + 1;
solution(x);
