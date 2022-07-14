/* 
    TODO: Дадено е наредено тесте карти. Наредбата по тежест на карта е: 2,3,4,5,6,7,8,9,10,J,Q,K,А.
    TODO: Наредбата по цвят на картите е: спатия, каро, купа, пика.
    TODO: Да се създаде програма, чрез която се въвежда N - число от интервала [0 … 51]
    TODO: и се извеждат въведения номер карта и останалите по-големи карти от тестето.
    * Пример:
    * Число: 47
    * Резултат: K купа, K пика, A спатия, A каро, A купа, A пика
    
    * 1: 2 Спатия; 2: 2 Каро; 3: 2 Купа
    ! Math.floor(i % 4) => kind
    ! Math.floor(i / 4) + 2 => card
*/

function solution(x) {
    let output = [];
    for(let i = x; i <= 51; i++) {
        let result = '';
        let algorithm = Math.floor(i / 4);
        if(algorithm < 9) {
            result += algorithm + 2 + ' ';
        }
        switch (algorithm) {
            case 9:
                result += 'J'
                break;  
            case 10:
                result += 'Q'
                break;        
            case 11:
                result += 'K'
                break;        
            case 12:
                result += 'A'
                break;                     
        }

        let kind = Math.floor(i % 4);
        result += kind < 1 
                ? ' Clubs'
                : kind < 2
                ? ' Diamonds'
                : kind < 3
                ? ' Hearths'
                : kind < 4
                ? ' Spades'
                : '';

        output.push(result)
    }
    console.log(output);
    console.log(`\n Starting number is: ${x} -> ${output[0]}`);
}

function solution2() {
    const solution = 2;
    let num = Math.floor(Math.random() * 52);

    console.log('card: ' + num);

    switch (solution) {
        case 1: // using just switch
            switch (num) {
                case 0: console.log('2 спатия');
                case 1: console.log('3 спатия');
                case 2: console.log('4 спатия');
                case 3: console.log('5 спатия');
                case 4: console.log('6 спатия');
                case 5: console.log('7 спатия');
                case 6: console.log('8 спатия');
                case 7: console.log('9 спатия');
                case 8: console.log('10 спатия');
                case 9: console.log('J спатия');
                case 10: console.log('Q спатия');
                case 11: console.log('K спатия');
                case 12: console.log('A спатия');
                case 13: console.log('2 каро');
                case 14: console.log('3 каро');
                case 15: console.log('4 каро');
                case 16: console.log('5 каро');
                case 17: console.log('6 каро');
                case 18: console.log('7 каро');
                case 19: console.log('8 каро');
                case 20: console.log('9 каро');
                case 21: console.log('10 каро');
                case 22: console.log('J каро');
                case 23: console.log('Q каро');
                case 24: console.log('K каро');
                case 25: console.log('A каро');
                case 26: console.log('2 купа');
                case 27: console.log('3 купа');
                case 28: console.log('4 купа');
                case 29: console.log('5 купа');
                case 30: console.log('6 купа');
                case 31: console.log('7 купа');
                case 32: console.log('8 купа');
                case 33: console.log('9 купа');
                case 34: console.log('10 купа');
                case 35: console.log('J купа');
                case 36: console.log('Q купа');
                case 37: console.log('K купа');
                case 38: console.log('A купа');
                case 39: console.log('2 пика');
                case 40: console.log('3 пика');
                case 41: console.log('4 пика');
                case 42: console.log('5 пика');
                case 43: console.log('6 пика');
                case 44: console.log('7 пика');
                case 45: console.log('8 пика');
                case 46: console.log('9 пика');
                case 47: console.log('10 пика');
                case 48: console.log('J пика');
                case 49: console.log('Q пика');
                case 50: console.log('K пика');
                case 51: console.log('A пика');
                    break;
                default:
                    console.log('Bad Number: ' + num);
            }
            break;

        case 2: // using do-while and switch
            console.log('solution2');
            let char = '';
            do {
                let sign = Math.floor(num / 4);
                if (sign < 9) {
                    char = sign + 2;
                } else {
                    switch (sign) {
                        case 9:
                            char = 'J';
                            break;
                        case 10:
                            char = 'Q';
                            break;
                        case 11:
                            char = 'K';
                            break;
                        case 12:
                            char = 'A';
                            break;
                        default:
                            console.log('Unexpected index: ' + sign);
                    }
                }            
                let suit = '';
                switch (Math.floor(num % 4)) {
                    case 0:
                        suit = 'спатия';
                        break;
                    case 1:
                        suit = 'каро';
                        break;
                    case 2:
                        suit = 'купа';
                        break;
                    case 3:
                        suit = 'пика';
                        break;
                    default:
                        console.log('Unexpected suit: ' + (num % 4));
                }
                console.log(char + ' ' + suit);
                num++;
            } while (num < 52)
            break;

        case 3: // using arrays
            console.log('solution3');
            const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
            const suits = ['спатия', 'каро', 'купа', 'пика'];
            do {
                //console.log(cards[num % cards.length] + ' ' + suits[Math.floor(num / cards.length)]);
                console.log(cards[Math.floor(num / suits.length)] + ' ' + suits[num % suits.length]);
            } while (++num < 52)
            break;

        case 4: // using two for cycles and switch
            for (let i = Math.floor(num / 4); i < 13; i++) {
                for (let j = 0; j < 4; j++) {
                    if (i * 4 + j >= num) {
                        let suit;
                        switch (j) {
                            case 0:
                                suit = 'спатия';
                                break;
                            case 1:
                                suit = 'каро';
                                break;
                            case 2:
                                suit = 'купа';
                                break;
                            case 3:
                                suit = 'пика';
                                break;
                        }
                        let card = i + 2;
                        if (card > 10) {
                            switch (card) {
                                case 11:
                                    card = 'J';
                                    break;
                                case 12:
                                    card = 'Q';
                                    break;
                                case 13:
                                    card = 'K';
                                    break;
                                case 14:
                                    card = 'A';
                                    break;
                            }
                        }
                        console.log(`${card} ${suit}`);
                    }
                }
            }
            break;

        default:
            console.log('Bad solution: ' + solution);
    }
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

solution(randomNumber(0, 51))
//solution2()

