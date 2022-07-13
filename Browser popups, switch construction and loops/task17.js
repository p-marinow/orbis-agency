/* 
    TODO: Да се състави програма, която извежда правоъгълник, чийто страни са оформени със знака *,
    TODO: а вътрешността е запълнена с въведен от потребителя знак.
    TODO: Страните на квадрата също трябва да бъде определена от потребителя. Програмата да използва цикъл for.
    
    * Пример:
    * Страни: 6, 4
    * Знак: $
    * Резултат:
    
        ******
        *$$$$*
        *$$$$*
        ******
*/

function solution(a, b, symbol) {
    for(let row = 1; row <= a; row++) {
        let result = '';
        for(let col = 1; col <= b; col++) {
            if(col <= 1 || row <= 1 || row === a || col === b) {
                result += ' ' + '*';
            } else {
                result += ' ' + symbol;
            }
        }
        console.log(result);
    }
    console.log(`Side A is: ${a}`);
    console.log(`Side B is: ${b}`);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


solution(randomNumber(3, 15), randomNumber(3, 16), '#')