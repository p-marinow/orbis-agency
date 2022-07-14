/*
    TODO: Едно число X е палиндром, ако се чете еднакво отпред назад и отзад напред.
    TODO: Да се състави програма, която проверява дали въведено от потребителя число в интервала [10 ... 30000] е палиндром.
    ! Използвайте цикъл do-while.

    * Пример:
    * Число: 17571
    * Резултат: числото е палиндром
*/

function solution(x) {
    let flag = 0;
    x = x.toString();
    let isPalindrome = '';
    do {
        for(let i = x.length - 1; i >= 0; i--) {
            isPalindrome += x[i]
        }
        if(x === isPalindrome) {
            console.log(`Number ${x} is palindrome!`);
        } else {
            console.log(`Number ${x} is not palindrome!`);
        }   
        flag++
    } while(flag === 0)
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//solution(randomNumber(10, 30000))
//solution(5432345)

function solution2(num) {
    num = num.toString();
    let halfLength = num.length / 2;
    let index = 0;
    let palindrome = true;

    do {
        if (num[index] !== num[num.length - 1 - index]) {
            palindrome = false;
            break;
        }
    } while (index++ < halfLength);

    console.log(num + ' is ' + (palindrome ? '' : 'not ') + 'palindrome!');
}

solution2(randomNumber(10, 30000))