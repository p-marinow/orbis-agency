/* 
    TODO: Да се състави програма, чрез която се въвеждат 2 естествени числа N, M от интервала [10 … 5555].
    TODO: Програмата, чрез цикъл for, да извежда всички числа от интервала, които са кратни на 50 в низходящ ред.
    * Пример:
    * Числа:25, 249
    * Изход: 200,150,100, 50.
*/

function solution(min, max) {
    min > max ? [min, max] = [max, min] : '';
    let start = max - max % 50;
    let result = [];

    for (let i = start; i >= min; i -= 50) {
        result.push(i);
    }
    console.log(result);
    console.log(`Numbers are: ${min} ${max}`);
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


solution(randomNumber(10, 5555), randomNumber(10, 5555))