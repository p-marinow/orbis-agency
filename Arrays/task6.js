/*
    TODO: Да се въведат от потребителя 2 масива с по 3 елемента и след това да се определи дали стойностите на двата масива са еднакви.
*/

function solution(arr1, arr2) {
    let flag = true;
    //! set flag as true, because when is false values of Arrays are NOT equal
    for(let i = 0; i < 3; i++) {
        //! check if Arrays's values on index i are NOT equal 
        if(arr1[i] !== arr2[i]) {
            flag = false;
            break;
        }
    }
    
    console.log(flag === true
                    ? `Yes`
                    : `No`, arr1, arr2);
}

function solution2() {
    var arr1 = new Array(3),
    arr2 = new Array(3);
    let sameValues = true;

    for (let i = 0, len = arr1.length; i < len; i++) {
        arr1[i] = utils.getPromptNumber();
    }

    for (let i = 0, len = arr2.length; i < len; i++) {
        arr2[i] = utils.getPromptNumber();
    }

    console.log('arr1: ' + arr1);
    console.log('arr2: ' + arr2);

    for (let i = 0, len = arr1.length, index; i < len; i++) {
        //! iterate through full size of Array
        
        index = arr2.indexOf(arr1[i]);
        //! set index with second Array's indexOf value from first Array on current index     

        if (index !== -1) {
            //! if there is any index 

            arr2.splice(index, 1);
            //! splice 1 element from second Array's indexOf value from first Array on current index 
        } else {
            //! if there is not value in first Array on current index
            //! set false and break
            sameValues = false;
            break;
        }
    }

    console.log('sameValues: ' + sameValues);
}


function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}

solution(inputSeed(3), inputSeed(3));
//solution2();

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}