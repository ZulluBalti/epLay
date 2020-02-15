class Schedule {
    constructor(){
        this.mon = [[],[],[],[],[]];
        this.tue = [[],[],[],[],[]];
        this.wed = [[],[],[],[],[]];
        this.thu = [[],[],[],[],[]];
        this.fri = [[],[],[],[],[]];
    }

    mon1st(roomNumber, faculty, year, section, lecture, address) {
        this.mon[0].push({roomNumber, faculty, year, section, lecture, address});
    }
    mon2nd(roomNumber, faculty, year, section, lecture, address) {
        this.mon[1].push({roomNumber, faculty, year, section, lecture, address});
    }
    mon3rd(roomNumber, faculty, year, section, lecture, address) {
        this.mon[2].push({roomNumber, faculty, year, section, lecture, address});
    }
    mon4th(roomNumber, faculty, year, section, lecture, address) {
        this.mon[3].push({roomNumber, faculty, year, section, lecture, address});
    }
    mon5th(roomNumber, faculty, year, section, lecture, address) {
        this.mon[4].push({roomNumber, faculty, year, section, lecture, address});
    }

    // Tuesday

    tue1st(roomNumber, faculty, year, section, lecture, address) {
        this.tue[0].push({roomNumber, faculty, year, section, lecture, address});
    }
    tue2nd(roomNumber, faculty, year, section, lecture, address) {
        this.tue[1].push({roomNumber, faculty, year, section, lecture, address});
    }
    tue3rd(roomNumber, faculty, year, section, lecture, address) {
        this.tue[2].push({roomNumber, faculty, year, section, lecture, address});
    }
    tue4th(roomNumber, faculty, year, section, lecture, address) {
        this.tue[3].push({roomNumber, faculty, year, section, lecture, address});
    }
    tue5th(roomNumber, faculty, year, section, lecture, address) {
        this.tue[4].push({roomNumber, faculty, year, section, lecture, address});
    }

    // Webnesday
    wed1st(roomNumber, faculty, year, section, lecture, address) {
        this.wed[0].push({roomNumber, faculty, year, section, lecture, address});
    }
    wed2nd(roomNumber, faculty, year, section, lecture, address) {
        this.wed[1].push({roomNumber, faculty, year, section, lecture, address});
    }
    wed3rd(roomNumber, faculty, year, section, lecture, address) {
        this.wed[2].push({roomNumber, faculty, year, section, lecture, address});
    }
    wed4th(roomNumber, faculty, year, section, lecture, address) {
        this.wed[3].push({roomNumber, faculty, year, section, lecture, address});
    }
    wed5th(roomNumber, faculty, year, section, lecture, address) {
        this.wed[4].push({roomNumber, faculty, year, section, lecture, address});
    }
    
    // Thursday
    thu1st(roomNumber, faculty, year, section, lecture, address) {
        this.thu[0].push({roomNumber, faculty, year, section, lecture, address});
    }
    thu2nd(roomNumber, faculty, year, section, lecture, address) {
        this.thu[1].push({roomNumber, faculty, year, section, lecture, address});
    }
    thu3rd(roomNumber, faculty, year, section, lecture, address) {
        this.thu[2].push({roomNumber, faculty, year, section, lecture, address});
    }
    thu4th(roomNumber, faculty, year, section, lecture, address) {
        this.thu[3].push({roomNumber, faculty, year, section, lecture, address});
    }
    thu5th(roomNumber, faculty, year, section, lecture, address) {
        this.thu[4].push({roomNumber, faculty, year, section, lecture, address});
    }

    // Friday
    fri1st(roomNumber, faculty, year, section, lecture, address) {
        this.fri[0].push({roomNumber, faculty, year, section, lecture, address});
    }
    fri2nd(roomNumber, faculty, year, section, lecture, address) {
        this.fri[1].push({roomNumber, faculty, year, section, lecture, address});
    }
    fri3rd(roomNumber, faculty, year, section, lecture, address) {
        this.fri[2].push({roomNumber, faculty, year, section, lecture, address});
    }
    fri4th(roomNumber, faculty, year, section, lecture, address) {
        this.fri[3].push({roomNumber, faculty, year, section, lecture, address});
    }
    fri5th(roomNumber, faculty, year, section, lecture, address) {
        this.fri[4].push({roomNumber, faculty, year, section, lecture, address});
    }
}

const nS = new Schedule();

// Yeah Aik Example Hey
// First slot kay mon1st, 2nd slot mon2nd
// Tuesday 1st slot kay liyeah tue1st kyerna hey

// RoomNumer, faculty, year, section, lecture, address (floor b likhna hey)


// Fist Slot - Monday
nS.mon1st("144", "bcs", "fa19", "d", "ict");
nS.mon1st("145", "bcs", "fa19", "d", "ict");
nS.mon1st("146", "ee", "sp19", "a", "pf");
nS.mon1st("147", "ee", "sp20", "a", "ict");
nS.mon1st("148", "ee", "fa18", "c", "ppit");

// Second Slot - Monday
nS.mon2nd("144", "bcs", "fa19", "d", "cag");
nS.mon2nd("144", "bcs", "fa19", "a", "ict");
nS.mon2nd("144", "bcs", "fa19", "f", "ap");
nS.mon2nd("144", "bcs", "fa19", "e", "ict");
nS.mon2nd("144", "bcs", "fa19", "c", "emo");

// Hey Haris 
// Is kay nichay shurukar do data dalna

// Friday 
nS.fri1st('', '', '', '', '');

console.log(nS.mon);