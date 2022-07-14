/* 
    TODO: Да се състави програма, чрез която по въведено естествено число от интервала [10 … 99] се извежда поредица числа,
    TODO: при спазване на следните изисквания: 
    ! 1) ако предходното число е четно се извежда 0.5*числото;
    ! 2) ако предходното число е нечетно се извежда 3*числото +1. Извеждането продължава докато не се получи стойност 1.
    * Пример:
    * Число: 11
    * Резултат: 34 17 52 26 13 40 20 10 5 16 8 4 2 1
*/

function solution(x) {
    let result = '';
    for(let i = x; i > 1; ) {
        if(i % 2 === 0) {
            i /= 2;
            result += ' ' + i;
        } else {
            i = i * 3 + 1;
            result += ' ' + i;
        }
    }
    console.log(result);
    console.log(`Number is: ${x}`);
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//solution(11)
//solution(randomNumber(10, 99))


function solution2(num) {
    let text = '';

    do {
        num = num % 2 ? num * 3 + 1 : num / 2;
        text += num + ', ';
    } while (num > 1);

    console.log(text.slice(0, -2));

}

solution2(randomNumber(10, 99))