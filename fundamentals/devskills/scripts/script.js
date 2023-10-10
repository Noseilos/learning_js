// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const calcTempAmplitudeBug = function (temp) {

    // introduces bug due to zero being lower than other values in the array
    let max = 0;
    let min = 0;
    let amp;

    for(let i = 0; i < temp.length; i++){

        if(temp[i] > max){

            max = temp[i];

        } else if (temp[i] < min){

            min = temp[i];
            
        };

    };
    
    console.log(min, max);

    if(min >= 0) return amp = max - min;
    if(min < 0) return amp = max + min;
    
};

console.log(calcTempAmplitudeBug(temparatures));
