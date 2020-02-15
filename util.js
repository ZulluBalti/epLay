export default function whichSlot(){
    const time = new Date();
    const hour = time.getHours();
    // const hour = 15;
    const min = time.getMinutes();

    if (hour < 8 || hour >= 17 || (hour === 8 && min < 30) || (hour === 16 && hour > 30))
        return res.status(400).json({error: "Hey, are you even in the university?"})

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
    return slot;
}