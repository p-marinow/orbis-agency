/* 
    TODO: Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа от по-малкото до по-голямото.
*/

let utils = {
	isNumberBetween: function(num, num1, num2) {
		return !isNaN(num) && num > Math.min(num1, num2) && num < Math.max(num1, num2);
	},
	getNumberBetween: function(num, min, max) {
		return Math.min(Math.max(num, min), max) || min;
	},
	getRandomNumberBetween: function (min, max, round) {
		let num = min + Math.random() * (max - min);
		if (round) {
			num = Math.round(num);
		}
		return num;
	},
	getPromptNumber: function(text, error) {
		let num;
		do {
			num = +prompt((error || num !== undefined ? 'Не сте въвели валидно число!\n' : '') + (text ? text : 'Въведете число.'));
		} while (isNaN(num));
		return num;
	},
	getPromptNumberBetween: function(min, max) {
		let num;
		do {
			num = this.getPromptNumber('Въведете число между ' + min + ' и ' + max + '.', num !== undefined);
		} while(num < min || num > max)
		return +num;
	}
};

function solution(x, y) {
  if (x > y) {
    for (let i = y; i <= x; i++) {
      console.log(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  }
  console.log(`Numbers are: ${x} & ${y}`);
}

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
solution(x, y);


function solution2() {
  let num1 = utils.getPromptNumber();
  let num2 = utils.getPromptNumber();
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  console.log(min, max);

  do {
      console.log(min);
  } while (++min <= max);

  for (let i = min; i <= max; i++) {
      console.log(i);
  }

}

//solution2()