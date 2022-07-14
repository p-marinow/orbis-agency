/* 
    TODO: Да се състави програма, чрез която се извежда квадрат от цифри.
    TODO: Сумите от елементите на произволен ред или колона са равни на 45.

    * Пример:
    1 2 3 4 5 6 7 8 9
    2 3 4 5 6 7 8 9 1
    3 4 5 6 7 8 9 1 2
    4 5 6 7 8 9 1 2 3
    5 6 7 8 9 1 2 3 4
    6 7 8 9 1 2 3 4 5
    7 8 9 1 2 3 4 5 6
    8 9 1 2 3 4 5 6 7
    9 1 2 3 4 5 6 7 8
*/

function solution() {
    let result = 0;
    let output = '';
    let x = 45;
    for( let z = 1; z <= 9; z++) {
        result = 0;
        for(let i = z; i <= 9; i++) {
            output = '';
            result = 0;
            if(result <= x) { 
                for(let k = z; k <= 9; k++) {
                    result += k;
                    output += k + ' ';               
                }
                if(result < x) {
                    for(let k = 1; k < z; k++) {
                        result += k;
                        output += k + ' ';
                    }
                }
            }
        }
        console.log(output);  
    }
}

solution()