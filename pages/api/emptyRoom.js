import mData from "./data";
import whichSlot, { whichDay } from "../../util";
import blocks from "./rooms";

export default function handle(req, res) {
  // This will return current slot and day according to current time
  let slot = whichSlot();
  slot = 1;
  let day = whichDay();
  day = "mon";

  const result = { error: false, msg: "", data: [] };
  if (!day) {
    result.error = true;
    result.msg = "Dude, Today's off.";
  } else if (!slot) {
    result.error = true;
    result.msg = "Dude, Are you sure you are in the university?";
  } else {
    // console.log(mData);
    const lectures = mData[day][slot];
    // lectures = [ {roomNumber: 34}, {roomNumber: 32}]

    // blocks = [
    //      { block: 'name",
    //        floor: [{range: 108-110, more: [140, 141]}],
    //        info: ''
    //        }
    // ]

    blocks.forEach(block => {
      block.floor.forEach((f, fI) => {
        // f.range[to], f.range[from], f.more[]
        if (f.range[0]) {
          for (let room = f.range[0]; room <= f.range[1]; room++) {
            const hasIt = lectures.filter(
              l => parseInt(l.roomNumber) === parseInt(room)
            );
            if (hasIt.length === 0) {
              result.data.push({
                roomNumber: room,
                block: block.block,
                floor: fI + 1,
                info: block.info
              });
            }
          }
        }
        for (let room = 0; room < f.more.length; room++) {
          const hasIt = lectures.filter(
            l => parseInt(l.roomNumber) === parseInt(f.more[room])
          );
          if (hasIt.length === 0) {
            result.data.push({
              roomNumber: f.more[room],
              block: block.block,
              floor: fI + 1,
              info: block.info
            });
          }
        }
      });
    });
  }

  res.json(result);
}
