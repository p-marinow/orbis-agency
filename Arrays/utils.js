const utils = {
	createRandomArray: function(length, min, max) {
		min = min || 0; // use 0 as default value
		max = max || 100; // use 100 as default value
		const arr = new Array(length);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = min + Math.round(Math.random() * (max - min));
		}
		return arr;
	},
	createRandomUniqueArray: function(length, min, max) {
		min = min || 0; // use 0 as default value
		max = max || 100; // use 100 as default value
		const values = [];
		for (let i = min; i <= max; i++) {
			values.push(i);
		}
		const arr = new Array();
		for (let i = 0, len = length; i < len; i++) {
			if (!values.length) {
				break;
			}
			arr[i] = values.splice(Math.floor(Math.random() * values.length), 1)[0];
		}
		return arr;
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
	}
};