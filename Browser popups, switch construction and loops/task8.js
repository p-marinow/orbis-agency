/* 
    TODO: По зададено число N от 1 до 10, да се изведе на екрана таблица по следния начин:

        Въведеното число:	1		2		  3		  4
                  __________________________________
        Резултат:		      0		11		222		3333
                              33		555		7777
                                    888		11111111
                                          15151515

    ! print (x - 1), loop x times, increment with x += 2 
*/

function solution(x) {
  let result = '';
  let loops = 0;
  let algorith = x - 1;
  while (x > loops) {
    //! loop x times
    label: for (let i = 0; i < x; i++) {
      //! for loops for x rows
      for (let j = 1; j <= x; j++) {
        if (j === x - 1) {
          result += algorith + '';
        }
        if (j === x) {
          algorith += x;
          for (let i = 1; i <= j; i += 2) {
            result += result + '';
          }
          console.log(result);
          break label;
        }
      }
    }
    loops++;
    result = '';
  }
}

let x = Math.floor(Math.random() * 5) + 1;
solution(4);
