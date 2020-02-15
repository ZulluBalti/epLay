import mData from '../../data';
import whichSlot from '../../util';

export default function handle(req, res){
    // const slot = whichSlot();
    const slot = 3;
    // query = {year: 'fa19', faculty: 'bcs', section: '1d'}
    const {query} = req;

    let data = [];
    let result = {
        address: '',
        class: '',
        timing: '',
        error: null,
        hasClass: true
    };

    let cSlot = slot;

    while(data.length === 0 && cSlot < mData.length) {
        data = mData[cSlot].filter(d => (
            d.info.year === query.year &&
            d.info.faculty === query.faculty &&
            d.info.section === query.section 
            )
        );
        console.log("DEBUGGING: ", data.length);
        if (data.length !== 0){
            result = {
                ...result, 
                roomNumber: data[0].roomNumber, 
                address: data[0].address, 
                class: data[0].class
            };
            if (cSlot !== slot)
                result.hasClass = false;

            switch(cSlot){
                case 0:
                    result.timing = "8:30 am";
                    break;
                case 1:
                    result.timing = "10:00 am";
                    break;
                case 2:
                    result.timing = "11:30 am";
                    break;
                case 3:
                    result.timing = "1:30 pm";
                    break;
                case 4:
                    result.timing = "3:00 pm";
                    break;
                default:
                    result.timing = "0:0 am";
            }
        }
        cSlot++;
    }

    res.json(result);
}

