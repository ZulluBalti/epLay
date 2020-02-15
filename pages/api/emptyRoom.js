import mData from '../../data';
import whichSlot from '../../util';

export default function handle(req, res){
    const slot = whichSlot();

    const rooms = mData[slot];
    const freeRooms = rooms.filter((r) => r.class === '');

    res.json(freeRooms);
}