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


console.log(utils.getRandomNumberBetween(1, 100, 1))