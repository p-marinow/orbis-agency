/*
    TODO: Да се състави програма, чрез която се въвеждат две числа от интервала [1 … 9].
    TODO: Програмата да извежда таблицата за умножение. Максималната стойност на множителите е определена от по-голямото число.
    * Пример:
    * Числа: 3, 5
        Резултат:
        3x1 = 3
        3x2 = 6
        3x3 = 9
        3x4 = 12
        3x5 = 15
        5x1 = 5
        5x2 = 10
        5x3 = 15
        5x4 = 20
        5x5 = 25
*/

function solution(x, y) {
    x > y ? [x, y] = [y, x] : '';
    let result = 0;
    for(let i = x; i <= y; i++) {
        for(let j = 1; j <= y; j++) {
            result = i * j
            console.log(`${i}x${j} = ${result}`);
        }
        console.log('\n');
    }
    console.log(`Numbers are: ${x} and ${y}`);
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

solution(randomNumber(1, 9), randomNumber(1, 9))