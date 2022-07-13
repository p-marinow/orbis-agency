/* 
    TODO: Дадено е наредено тесте карти. Наредбата по тежест на карта е: 2,3,4,5,6,7,8,9,10,J,Q,K,А.
    TODO: Наредбата по цвят на картите е: спатия, каро, купа, пика.
    TODO: Да се създаде програма, чрез която се въвежда N - число от интервала [0 … 51]
    TODO: и се извеждат въведения номер карта и останалите по-големи карти от тестето.
    * Пример:
    * Число: 47
    * Резултат: K купа, K пика, A спатия, A каро, A купа, A пика
    ! x / 13 => kind
    ! x % 13 => card
*/

function solution(x) {
    let result = '';
    for(let i = x; i <= 51; i++) {
        result = '';
            switch (i % 13) {
                case 10:
                    result += 'Q '
                    break;        
                case 11:
                    result += 'K '
                    break;        
                case 12:
                    result += 'A '
                    break;   
                case 0:
                    result += '2 '
                    break;
                case 1:
                    result += '3 '
                    break; 
                case 2:
                    result += '4 '
                    break;
                case 3:
                    result += '5 '
                    break;        
                case 4:
                    result += '6 '
                    break;        
                case 5:
                    result += '7 '
                    break;        
                case 6:
                    result += '8 '
                    break;        
                case 7:
                    result += '9 '
                    break;        
                case 8:
                    result += '10 '
                    break;        
                case 9:
                    result += 'J '
                    break;             
            }

            if(i / 13 < 1) {
                result += 'Clubs';
            } else if(i / 13 >= 1 && i / 13 < 2) {
                result += 'Diamonds';
            } else if(i / 13 >= 2 && i / 13 < 3) {
                result += 'Hearths';
            } else if(i / 13 >= 3 && i / 13 < 4) {
                result += 'Spades'
            }
            
            console.log(result);
        }
        console.log(`\n Starting number is: ${x}`);
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

solution(randomNumber(0, 51))