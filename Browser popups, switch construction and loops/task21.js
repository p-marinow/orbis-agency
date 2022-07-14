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

function solution2(num) {
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


}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

solution(randomNumber(0, 51))

