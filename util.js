export default function whichSlot(){
    const day = ['1st', '2nd', '3rd', '4th', '5th'];
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();

    if (hour < 8 || hour >= 17 || (hour === 8 && min < 30) || (hour === 16 && hour > 30)){

        return false;
    }

    let slot = 0;

    switch(hour){
        case 8:
        case 9:
            slot = 0;
            break;
        case 10:
            slot = 1;
            break;
        case 11:
            if(min < 40)
                slot = 1;
            else 
                slot = 'tird';
            break;
        case 12:
            slot = 2;
            break;
        case 13:
            if (min <= 10)
                slot = 2;
            else
                slot = 3;
            break;
        case 14:
            slot = 3;
            break;
        case 15:
        case 16:
            slot = 4;
            break;
        default:
            slot = 4;
        
    }

    return day[slot];
}

export const whichDay = () => {
    const time = new Date();
    const day = time.getDay();
    const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if(day === 0 || day === 6) return false;
    return week[day];
}