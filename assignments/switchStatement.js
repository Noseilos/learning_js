const day = 'snday';

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if (day === 'friday'){
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}
'use strict';

const language = 'chinese';

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too 👌');
}