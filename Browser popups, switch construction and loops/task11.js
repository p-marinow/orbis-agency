/* 
    TODO: Да се въведе от потребителя число N от 1 до 10 и да се изкара следния триъгълник с височина N:

     *
    ***
   *****
  *******
  
    * Допълнително: нарисувайте същия триъгълник но незапълнен. 

     *
    * *
   *   *
  *******
*/

function solution(h) {
  for(let i = 1; i <= h; i++) {
    let output = '';
    for(let j = 1; j <= h - i; j++) {
      output += ' ';
    }
    let firstCol = 2 * i - 1;
    for(let k = 0; k < firstCol; k++) {
      if(k === 0 || k === firstCol - 1 || i === h) {
        output += '*';
      } else {
        output += ' ';
      }
    }
    console.log(output);
  }
}

solution(8);
