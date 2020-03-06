class Floor {
    constructor(from, to, more){
        this.range = [from, to];
        this.more = [...more];
    }
}
class Block {
    constructor (block, info = '') {
        this.floor = [];
        this.block = block;
        this.info = info;
    }
    addFloor(to, from, more = []) {
        this.floor.push(new Floor(to, from, more));
    }
}

const list = [];

const leftMostSecB = new Block('Secondary gate left most block');
leftMostSecB.addFloor('101', '107', ['computer lab 1', 'vlsi microprocessor lab']);
// leftMostSecB.addFloor('108', '113', ['computer lab 2', 'advance electronic lab']);
// leftMostSecB.addFloor('114', '115');

list.push(leftMostSecB);

const frontSecB = new Block('Block in front of Secondary gate');
frontSecB.addFloor('201', '205', ['computer lab 3', 'communication system lab', 'auditorium']);
frontSecB.addFloor('206', '209', ['computer lab 4', 'power transmission and distribution lab,', 'electric machine and power lab']);
frontSecB.addFloor('', '', ['Graduate lab', 'digital processing lab ']);

list.push(frontSecB);

const inBetweenB = new Block('Block in between left most and block in front of Secondary gate');
inBetweenB.addFloor('116', '117');

list.push(inBetweenB);

const basketB = new Block("Block left to basket ball ground");
basketB.addFloor('301', '304');

list.push(basketB);

const mosqueB = new Block('Block in front of mosque');
mosqueB.addFloor('', '', ['Concrete lab', 'surveying lab', 'high way asqengineering lab ']);

list.push(mosqueB);

const stdyHallB = new Block('Study Hall Block');
stdyHallB.addFloor('411', '411', [
    'Computer lab 5', 
    'circuit analysis & physics lab', 
    'antenna & microwave lab',
    'control system lab',  
    'digital logic design lab', 
    'instrumentation lab'

]);

list.push(stdyHallB);

const cvilDepB = new Block('Civil department block', '408 is on the back side of the depart');
cvilDepB.addFloor('401', '410', ['computer lab 7', 'environmental engineering lab']);

list.push(cvilDepB);

const fronStdyB = new Block('Block in front of study hall');
fronStdyB.addFloor('501', '502');

list.push(fronStdyB);

const bankB = new Block("Bank Block");
bankB.addFloor('', '');
bankB.addFloor('601', '603', ['computer lab', 'engineering static lab', 'engineering dynamic lab ']);
bankB.addFloor('', '', [
    'Internal combust engine', 
    'fluid mechanics lab', 
    'heat and mass transfer',
    'refrigerator and air conditioning lab', 
    'thermodynamics lab', 
    'mechanics of machine lab',
    'mechinal vibration lab',
    'physics lab'
]);

list.push(bankB);

export default list;
