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
  let row = '';
  for (let i = 1; i <= h; i++) {
    if (i === 1) {
      row = '*';
      console.log('   ' + row + '   ');
      continue;
    } else if (i === 2) {
      row = '* *';
      console.log('  ' + row + '  ');
    } else if (i === 3) {
      row = '*   *';
      console.log(' ' + row + ' ');
    } else if (i === 4) {
      row = '*******';
      console.log(row);
    }
  }
}


solution(4);
