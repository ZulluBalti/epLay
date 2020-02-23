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

// Monday 1stSlot
nS.mon1st("402", "BCE", "4A", "NC");
nS.mon1st("407", "BCE", "6A", "Water Supply");
nS.mon1st("Hydraulic Lab", "BCE", "6B", "Water Supply Lab");
nS.mon1st("406", "BCE", "8A", "Entrepreneurship");
nS.mon1st("401", "BCE", "8B", "Engg Economics");
nS.mon1st("Hydraulics Lab", "BCE", "10A", "Water Supply Lab");

nS.mon1st("LH-108", "BCS", "1A", "Eng. Comp. & Composition");
nS.mon1st("LH-303", "BCS", "1B", "Cal. And Ana. Geo.");
nS.mon1st("LH-404", "BCS", "2A", "Prof. Practices IT");
nS.mon1st("Lab 5", "BCS", "3A", "OOP(Lab)");
nS.mon1st("DLD Lab", "BCS", "3C", "DLD(Lab)");
nS.mon1st("LH-408", "BCS", "3D", "Linear Algebra");
nS.mon1st("Lab 2", "BCS", "4A", "Data Struc. and Algo.(Lab)");
nS.mon1st("Lab 6", "BCS", "4B", "Data Comm. and Comp. Net.(Lab)");
nS.mon1st("LH-109", "BCS", "5A", "Operating Systems");
nS.mon1st("LH-109", "BCS", "5C", "Operating Systems");
nS.mon1st("LH-102", "BCS", "6A", "Theory of Automata");
nS.mon1st("LH-502", "BCS", "6B", "Web Technologies");
nS.mon1st("Lab 7", "BCS", "6C", "HCI (Lab)");
nS.mon1st("Lab 7", "BCS", "6E", "HCI (Lab)");
nS.mon1st("LH-107", "BCS", "7A", "Compiler Construction");
nS.mon1st("LH-107", "BCS", "7B", "Compiler Construction");

nS.mon1st("LH-205", "BEE", "2A", "ECA 1");
nS.mon1st("LH-204", "BEE", "2C", "ODE");
nS.mon1st("LH-201", "BEE", "4C", "PRobability");
nS.mon1st("LH-203", "BEE", "6B", "Wireless Communication Systems");
nS.mon1st("LH-208", "BEE", "6C", "Tutorial 6C");
nS.mon1st("LH-202", "BEE", "8A", "Tutorial 8A");
nS.mon1st("LH-203", "BEE", "8B", "Wireless Communication Systems");


nS.mon1st("Workshop Lab", "BME", "2A", "Workshop Practice");
nS.mon1st("LH-603", "BME", "4A", "Circuits And Electronics");

nS.mon1st("LH-101", "BSE", "2B", "ECA 1");
nS.mon1st("LH-105", "BSE", "2C", "Multi. Calculas");
nS.mon1st("Lab 3", "BSE", "3B", "Intro. To Soft. Engr. (Lab)");
nS.mon1st("LH-301 ", "BSE", "4A", "Object Orient. Soft. Engr.");
nS.mon1st("LH-304", "BSE", "4B", "Object Orient. Soft. Engr.");
nS.mon1st("Lab 4", "BSE", "5A", "Operating Systems (Lab)");
nS.mon1st("LH-104", "BSE", "5B", "Diffrential Equations");
nS.mon1st("LH-501", "BSE", "6A", "Soft. Pro.t Mgt");
nS.mon1st("Lab 1", "BSE", "6B", "Artificial Intelligence (Lab)");

// Monday 2nd Slot 
nS.mon2nd("402", "BCE", "2A", "Differential Equations");
nS.mon2nd("Computer Lab 7", "BCE", "4A", "NC Lab");
nS.mon2nd("401", "BCE", "4B", "Basic Structural");
nS.mon2nd("407", "BCE", "6A", "RCD 1");
nS.mon2nd("Hydraulics Lab", "BCE", "6B", "Water Supply lab");
nS.mon2nd("403", "BCE", "8A", "Engg Economics");
nS.mon2nd("406", "BCE", "8B", "Irrigation");
nS.mon2nd("Hydraulics Lab", "BCE", "10A", "Water Supply Lab");
nS.mon2nd("407", "BCE", "12", "RCD 1");

nS.mon2nd("LH-104", "BCS", "1A", "Cal. and Ana. Geo.");
nS.mon2nd("LH-405", "BCS", "1C", "Intro. To ICT");
nS.mon2nd("EMI & Electronics (LAb)", "BCS", "2A", "Elec. , Magnetism and Optics(Lab)");
nS.mon2nd("LH-103", "BCS", "2C", "Prof. Practices IT");
nS.mon2nd("LH-404", "BCS", "2D", "Programming Fundamentals");
nS.mon2nd("Lab 5", "BCS", "3A", "OOP(Lab)");
nS.mon2nd("DLD Lab", "BCS", "3C", "DLD(Lab)");
nS.mon2nd("LH-303", "BCS", "3D", "DLD");
nS.mon2nd("LH-101", "BCS", "4A", "Computer Architecture");
nS.mon2nd("Lab 6", "BCS", "4B", "Data Comm. and Comp. Net.(Lab)");
nS.mon2nd("LH-411", "BCS", "5A", "Microprocessor And Assembly Language");
nS.mon2nd("LH-411", "BCS", "5C", "Microprocessor And Assembly Language");
nS.mon2nd("LH-408", "BCS", "5D", "Dataware Housing And Data Mining");
nS.mon2nd("LH-107", "BCS", "6A", "Pakistan Studies");
nS.mon2nd("LH-107", "BCS", "6B", "Pakistan Studies");
nS.mon2nd("LH-501", "BCS", "6C", "Soft. Pro. T Mgt");
nS.mon2nd("LH-301", "BCS", "6D", "Web Technologies");
nS.mon2nd("Lab 2", "BCS", "7A", "Micro Pro. and Assembly Language (Lab)");
nS.mon2nd("Lab 2", "BCS", "7B", "Micro Pro. and Assembly Language (Lab)");
nS.mon2nd("LH-410", "BCS", "7C", "Compiler Construction");
nS.mon2nd("LH-410", "BCS", "7D", "Compiler Construction");
nS.mon2nd("LH-102", "BCS", "8B", "Enterprenourship");
nS.mon2nd("LH-102", "BCS", "8C", "Enterprenourship");

nS.mon2nd("LH-206", "BEE", "2B", "ECA 1");
nS.mon2nd("DLD Lab", "BEE", "2C", "DLD (Lab)");
nS.mon2nd("LH-204", "BEE", "4A", "Probability");
nS.mon2nd("LH-203", "BEE", "4B", "S & S");
nS.mon2nd("Machines And PE", "BEE", "4C", "Machines Lab");
nS.mon2nd("LH-205", "BEE", "6A", "tutoiral 6B");
nS.mon2nd("LH-205", "BEE", "6B", "tutoiral 6B");
nS.mon2nd("LH-201", "BEE", "6D", "Power Electronics");
nS.mon2nd("LH-202", "BEE", "8A", "DIP");

nS.mon2nd("Workshop Lab", "BME", "2A", "Workshop Practice");
nS.mon2nd("LH-601", "BME", "2B", "Engineerinfg Statics");
nS.mon2nd("Physics and Circuits Lab", "BME", "4A", "Circuits And Electronics Lab");
nS.mon2nd("Mechanics Of Material Lab", "BME", "4B", "Mechanics Of Material Lab");

nS.mon2nd("LH-105", "BSE", "2A", "ECA 1");
nS.mon2nd("LH-109", "BSE", "2C", "Prof. Practices IT");
nS.mon2nd("LH-106", "BSE", "3A", "Stat. and Prob. Theory");
nS.mon2nd("Lab 3", "BSE", "3B", "Intro. To Soft. Engr. (Lab)");
nS.mon2nd("LH-302 ", "BSE", "4A", "Data Comm. and Comp. Net.");
nS.mon2nd("LH-502", "BSE", "4B", "Data Struct. and Algo.");
nS.mon2nd("Lab 4", "BSE", "5A", "Operating Systems (Lab)");
nS.mon2nd("LH-108", "BSE", "6A", "S/W Design and Archi");
nS.mon2nd("Lab 1", "BSE", "6B", "Artificial Intelligence (Lab)");
nS.mon2nd("LH-304 ", "BSE", "8A", "Formal Method in SE");

// Monday 3rd Slot
nS.mon3rd("403", "BCE", "2B", "Differential Equations");
nS.mon3rd("Computer Lab 7", "BCE", "4A", "NC Lab");
nS.mon3rd("401", "BCE", "4B", "Geotech");
nS.mon3rd("407", "BCE", "6A", "Engg Hydrology(F)");
nS.mon3rd("407", "BCE", "8A", "Engg Hydrology(F)");
nS.mon3rd("402", "BCE", "8B", "Entrepreneurship");
nS.mon3rd("407", "BCE", "10A", "Engg Hydrology(F)");

nS.mon3rd("EMI & Electronics (LAb)", "BCS", "2A", "Elec. , Magnetism and Optics(Lab)");
nS.mon3rd("LH-410", "BCS", "2B", "Elecricity,Magnetism And Optics");
nS.mon3rd("LH-303", "BCS", "2C", "Discrete Structures");
nS.mon3rd("LH-108", "BCS", "3A", "Entro. 2 Bio Informatics");
nS.mon3rd("LH-405", "BCS", "3B", "Linear Algebra");
nS.mon3rd("LH-106", "BCS", "4A", "Stat. And Prob. Theory");
nS.mon3rd("LH-101", "BCS", "4B", "Computer Archetecture");
nS.mon3rd("Lab 1", "BCS", "6B", "Web Technologies (Lab)");
nS.mon3rd("Lab 2", "BCS", "7A", "Micro Pro. and Assembly Language (Lab)");
nS.mon3rd("Lab 2", "BCS", "7B", "Micro Pro. and Assembly Language (Lab)");
nS.mon3rd("LH-409", "BCS", "7C", "Game Development");
nS.mon3rd("LH-109", "BCS", "8A", "Net. Security");
nS.mon3rd("LH-304", "BCS", "8B", "HRM");

nS.mon3rd("LH-205", "BEE", "2B", "ODE");
nS.mon3rd("DLD Lab", "BEE", "2C", "DLD (Lab)");
nS.mon3rd("LH-207", "BEE", "4A", "Multivariable Cal.");
nS.mon3rd("LH-203", "BEE", "4B", "Probability");
nS.mon3rd("Machine and PE ", "BEE", "4C", "Machine Lab");
nS.mon3rd("LH-201", "BEE", "6A", "DCCN");
nS.mon3rd("LH-201", "BEE", "6B", "DCCN");
nS.mon3rd("LH-204", "BEE", "6C", "Engineering Ecnomics");

nS.mon3rd("Workshop Lab", "BME", "2B", "Workshop Practice");
nS.mon3rd("Physics and Circuits Lab", "BME", "4A", "Circuits And Electronics Lab");
nS.mon3rd("Mechanics Of Material Lab", "BME", "4B", "Mechanics Of Material Lab");

nS.mon3rd("LH-105", "BSE", "2A", "Multi. Calculas");
nS.mon3rd("LH-116", "BSE", "3A", "OOP");
nS.mon3rd("LH-302", "BSE", "3B", "Linear Algebra");
nS.mon3rd("LH-502 ", "BSE", "4A", "Data Struct. and Algo");
nS.mon3rd("LH-102", "BSE", "4B", "Data Comm. and Comp. Net.");
nS.mon3rd("LH-104", "BSE", "5A", "Soft. Requir. Engr");
nS.mon3rd("LH-501", "BSE", "6A", "Machine Learning");
nS.mon3rd("LH-107", "BSE", "7A", "Intro. To Sociology");
nS.mon3rd("LH-107", "BSE", "7B", "Intro. To Socialogy");
nS.mon3rd("LH-103", "BSE", "8B", "Enterprenourship");

// Monday 4th Slot
nS.mon4th("Structures Lab ", "BCE", "2B", "Civil Engg Materials Lab");
nS.mon4th("407", "BCE", "4A", "Advanced FM");
nS.mon4th("Hydraulics Lab", "BCE", "4B", "Advanced FM Lab");
nS.mon4th("401", "BCE", "6A", "PPM");
nS.mon4th("406", "BCE", "6B", "RCD 1");
nS.mon4th("407", "BCE", "10A", "Advanced FM");
nS.mon4th("407", "BCE", "12", "Advanced FM");

nS.mon4th("LH-108", "BCS", "2A", "Elec. , Magnetism and Optics");
nS.mon4th("LH-110", "BCS", "2B", "Multi. Calculas");
nS.mon4th("LH-411", "BCS", "2C", "Elec. , Magnetism and Optics");
nS.mon4th("LH-405", "BCS", "2D", "Discrete Structures");
nS.mon4th("Lab 3", "BCS", "3A", "Intro. To Bio info. (Lab)");
nS.mon4th("LH-410", "BCS", "3B", "Intro. To Bio info.");
nS.mon4th("Lab 1", "BCS", "4A", "Data struc. and Algo. (Lab)");
nS.mon4th("Lab 6", "BCS", "5A", "Operating System (Lab)");
nS.mon4th("Lab 6", "BCS", "5C", "Operating System (Lab)");
nS.mon4th("LH-304", "BCS", "5D", "Operating Systems");
nS.mon4th("LH-105", "BCS", "6A", "Human Comp. Inter");
nS.mon4th("LH-301", "BCS", "6B", "Theory of Automata");
nS.mon4th("LH-501", "BCS", "6C", "Human Comp. Inter");
nS.mon4th("LH-408 ", "BCS", "6D", "Theory of Automata");
nS.mon4th("LH-501", "BCS", "6E", "Human Comp. Inter");
nS.mon4th("LH-107", "BCS", "8A", "HRM");
nS.mon4th("LH-404", "BCS", "8C", "French");

nS.mon4th("LH-201", "BEE", "2A", "IPE");
nS.mon4th("Adv. Electro Lab", "BEE", "2C", "ECA 1(Lab)");
nS.mon4th("LH-205", "BEE", "4C", "Multivariable cal.");
nS.mon4th("LH-202", "BEE", "6A", "A & DS");
nS.mon4th("PDT Lab", "BEE", "6C", "PDU Lab");
nS.mon4th("LH-207", "BEE", "6D", "Engineering Economics");
nS.mon4th("DSP Lab", "BEE", "8D", "VLSI Lab");

nS.mon4th("LH-601", "BME", "2A", "Thermodynamics 1");
nS.mon4th("Workshop Lab", "BME", "2B", "Workshop Practice");
nS.mon4th("LH-603", "BME", "4B", "Circuits And Electronics");

nS.mon4th("LH-302", "BSE", "1A", "Intro. To Mgt");
nS.mon4th("LH-102", "BSE", "1B", "Intro. To ICT");
nS.mon4th("DLD Lab", "BSE", "3A", "DLD (Lab)");
nS.mon4th("LH-101", "BSE", "3B", "Intro. To Soft. Engr.");
nS.mon4th("Lab 5 ", "BSE", "4A", "Data Comm. and Comp. Net. (Lab)");
nS.mon4th("Lab 4", "BSE", "5B", "Scripting Languages (Lab)");
nS.mon4th("LH-409", "BSE", "6B", "S/W Eng. Economics");
nS.mon4th("LH-103", "BSE", "7B", "S/W Design And Archi");
nS.mon4th("LH-107", "BSE", "8A", "HRM");
nS.mon4th("LH-404", "BSE", "8C", "French");


// Monday 5th Slot
nS.mon5th("Structures Lab ", "BCE", "2B", "Civil Engg Materials Lab");
nS.mon5th("407", "BCE", "4A", "Geotech");
nS.mon5th("Hydraulics Lab ", "BCE", "4B", "Advanced FM Lab");
nS.mon5th("403", "BCE", "6B", "PPM");
nS.mon5th("406", "BCE", "8A", "Irrigation Engg");
nS.mon5th("406", "BCE", "10A", "Irrigation Engg");
nS.mon5th("406", "BCE", "12", "Irrigation Engg");

nS.mon5th("LH-109", "BCS", "2C", "Multi Calculas");
nS.mon5th("LH-410", "BCS", "2D", "Electricity Magnetism And Optics");
nS.mon5th("Lab 3", "BCS", "3A", "Intro. To Bio info. (Lab)");
nS.mon5th("LH-502", "BCS", "3C", "OOP");
nS.mon5th("LH-103", "BCS", "3D", "Intro. To Bio info.");
nS.mon5th("Lab 6", "BCS", "5A", "Operating System (Lab)");
nS.mon5th("Lab 6", "BCS", "5C", "Operating System (Lab)");
nS.mon5th("LH-411", "BCS", "5D", "Microprocessor and Assembly Language");
nS.mon5th("LH-101", "BCS", "6B", "Human Comp. Inter");
nS.mon5th("LH-301", "BCS", "6C", "Theory of Automata");
nS.mon5th("LH-108 ", "BCS", "6D", "Data warehouse and Data Minig");
nS.mon5th("LH-301", "BCS", "6E", "Theory of Automata");

nS.mon5th("Adv. Electro Lab", "BEE", "2C", "ECA 1 Lab");
nS.mon5th("PDT Lab", "BEE", "6C", "PDU Lab");
nS.mon5th("LH-207", "BEE", "6D", "Control Sys.");
nS.mon5th("LH-202", "BEE", "8A", "Project Management And Planning");
nS.mon5th("LH-202", "BEE", "8B", "Project Management And Planning");
nS.mon5th("DSP Lab", "BEE", "8D", "VLSI Lab");

nS.mon5th("LH-105", "BSE", "1B", "Intro. to Mgt");
nS.mon5th("LH-302", "BSE", "2A", "Prof. Practices IT");
nS.mon5th("LH-304", "BSE", "2C", "ECA 1");
nS.mon5th("DLD Lab ", "BSE", "3A", "DLD (Lab)");
nS.mon5th("Lab 1", "BSE", "3B", "OOP (Lab)");
nS.mon5th("Lab 5 ", "BSE", "4A", "Data Comm. and Comp. Net. (Lab)");
nS.mon5th("Lab 4", "BSE", "5B", "Scripting Languages (Lab)");
nS.mon5th("LH-409", "BSE", "6B", "Artificial Intelligence");
nS.mon5th("LH-102", "BSE", "7A", "S/W Design And Archi.");
nS.mon5th("LH-104", "BSE", "7B", "S/W Eng. Economics");

// Tuesday 1st Slot
nS.tue1st("403", "BCE", "2B", "ITCP");
nS.tue1st("406", "BCE", "4A", "Mechanics of Solids 2");
nS.tue1st("407", "BCE", "4B", "Advanced FM");
nS.tue1st("402", "BCE", "6B", "Highway Engg");
nS.tue1st("401", "BCE", "8A", "Geometric Design");
nS.tue1st("401", "BCE", "8B", "Geometric Design");

nS.tue1st("LH-107", "BCS", "1A", "Into. To ICT");
nS.tue1st("LH-102", "BCS", "2A", "Discrete Structures");
nS.tue1st("EMI and Electronics Lab", "BCS", "2C", "Elec., Magnetism and Optics(Lab)");
nS.tue1st("Lab 5", "BCS", "3C", "OOP(Lab)");
nS.tue1st("LH-404", "BCS", "3D", "Linear Algebra");
nS.tue1st("LH-501", "BCS", "4B", "Stat. And Prob. Theory");
nS.tue1st("LH-108", "BCS", "5A", "Operating Systems");
nS.tue1st("LH-108", "BCS", "5C", "Operating Systems");
nS.tue1st("LH-304", "BCS", "6A", "Theory of Automata");
nS.tue1st("Lab 4", "BCS", "6B", "Web Technologies (Lab)");
nS.tue1st("Lab 7", "BCS", "6C", "HCI (Lab)");
nS.tue1st("Lab 7", "BCS", "6E", "HCI (Lab)");
nS.tue1st("LH-302", "BCS", "7A", "Compiler Construction");
nS.tue1st("LH-302", "BCS", "7B", "Compiler Construction");
nS.tue1st("LH-409", "BCS", "7C", "Game Development");
nS.tue1st("LH-411", "BCS", "7D", "Computational Intelligence");
nS.tue1st("LH-410", "BCS", "8A", "Enterpreneurship");
nS.tue1st("LH-106", "BCS", "8C", "HRM");

nS.tue1st("LH-208", "BEE", "2A", "ODE");
nS.tue1st("LH-207", "BEE", "4B", "Multivariable Cal.");
nS.tue1st("LH-203", "BEE", "4C", "Probability");
nS.tue1st("LH-201", "BEE", "6B", "Wireless Communication Systems");
nS.tue1st("LH-206", "BEE", "6C", "PDU");
nS.tue1st("LH-202", "BEE", "6D", "AFD");
nS.tue1st("LH-201", "BEE", "8B", "Wireless Communication Systems");
nS.tue1st("LH-205", "BEE", "8C", "Tutorial 8C");
nS.tue1st("LH-204", "BEE", "8D", "VLSI Design");

nS.tue1st("LH-603", "BME", "2B", "Multivariable Calculus");
nS.tue1st("Physics and Circuits Lab", "BME", "4B", "Circuits And Electronics Lab");

nS.tue1st("Lab 1", "BSE", "2B", "Progr. Fundamentals (Lab)");
nS.tue1st("LH-105", "BSE", "2C", "Multi. Calculas");
nS.tue1st("LH-104", "BSE", "3A", "DLD");
nS.tue1st("Lab 6", "BSE", "4A", "Object Orient. Soft. Engr. (Lab)");
nS.tue1st("LH-103", "BSE", "4B", "Object Orient. Soft. Engr.");
nS.tue1st("LH-405", "BSE", "5A", "Operating Systems");
nS.tue1st("LH-303", "BSE", "5B", "Diffrential Equations");
nS.tue1st("LH-502", "BSE", "6A", "Soft. Pro.t Mgt");
nS.tue1st("LH-101", "BSE", "6B", "S/W Design and Archi");
nS.tue1st("LH-106", "BSE", "8B", "HRM");


// Tuesday 2nd Slot
nS.tue2nd("Structure Lab", "BCE", "2A", "Civil Engg Material Lab");
nS.tue2nd("Computer Lab 7 ", "BCE", "2B", "ITCP lab");
nS.tue2nd("401", "BCE", "4A", "Basic Structural Analysis");
nS.tue2nd("407", "BCE", "4B", "Geotech");
nS.tue2nd("406", "BCE", "6A", "Engg hydrology (F)");
nS.tue2nd("406", "BCE", "8A", "Engg hydrology (F)");
nS.tue2nd("403", "BCE", "8B", "Engg Economics");
nS.tue2nd("406", "BCE", "10A", "Engg hydrology (F)");

nS.tue2nd("LH-106", "BCS", "1A", "App. Phy. For Engers.");
nS.tue2nd("LH-301", "BCS", "1C", "Eng. Comp. And Composition");
nS.tue2nd("EMI and Electronics Lab", "BCS", "2C", "Elec., Magnetism and Optics(Lab)");
nS.tue2nd("LH-303", "BCS", "3A", "Linear Algebra");
nS.tue2nd("LH-103", "BCS", "3B", "S/W Engr. Concepts");
nS.tue2nd("Lab 5", "BCS", "3C", "OOP(Lab)");
nS.tue2nd("LH-410", "BCS", "3D", "S/W Engr. Concepts");
nS.tue2nd("LH-501", "BCS", "4A", "Data Comm. and Comp. Net.");
nS.tue2nd("LH-108", "BCS", "4B", "Data Comm. and Comp. Net.");
nS.tue2nd("LH-411", "BCS", "5D", "Operating Systems");
nS.tue2nd("LH-302", "BCS", "6D", "Intro. to Data Science");
nS.tue2nd("LH-302", "BCS", "6E", "Intro. to Data Science");
nS.tue2nd("LH-408", "BCS", "7A", "Micro Pro. and Assembly Language");
nS.tue2nd("LH-408", "BCS", "7B", "Micro Pro. and Assembly Language");
nS.tue2nd("Lab 3", "BCS", "7C", "Artificial Intelligence (Lab)");
nS.tue2nd("Lab 3", "BCS", "7D", "Artificial Intelligence (Lab)");
nS.tue2nd("LH-104", "BCS", "8B", "Enterprenourship");
nS.tue2nd("LH-104", "BCS", "8C", "Enterprenourship");

nS.tue2nd("LH-208", "BEE", "2A", "DLD");
nS.tue2nd("Adv. Electro Lab", "BEE", "2B", "ECA 1 Lab");
nS.tue2nd("LH-201", "BEE", "2C", "ECA 1");
nS.tue2nd("LH-206", "BEE", "4A", "Probability");
nS.tue2nd("LH-203", "BEE", "4B", "S & S");
nS.tue2nd("LH-204", "BEE", "4C", "Electronics 2");
nS.tue2nd("LH-209", "BEE", "6A", "DCCN");
nS.tue2nd("LH-209", "BEE", "6B", "DCCN");
nS.tue2nd("LH-205", "BEE", "6C", "PG");
nS.tue2nd("LH-202", "BEE", "8A", "DLD");
nS.tue2nd("LH-207", "BEE", "8C", "Power System Analysis");

nS.tue2nd("LH-601", "BME", "2A", "Multivariable Calculus");
nS.tue2nd("LH-603", "BME", "2B", "Engineering Materials");
nS.tue2nd("Mechanics Of Materials Lab", "BME", "4A", "Mechanics Of Materials Lab");
nS.tue2nd("Physics and Circuits Lab", "BME", "4B", "Circuits And Electronics Lab");

nS.tue2nd("LH-105", "BSE", "1A", "Cal. And Ana. Geo.");
nS.tue2nd("LH-105", "BSE", "1B", "Cal. And Ana. Geo.");
nS.tue2nd("Lab 1", "BSE", "2B", "Progr. Fundamentals (Lab)");
nS.tue2nd("Lab 4", "BSE", "2C", "Progr. Fundamentals (Lab)");
nS.tue2nd("LH-304", "BSE", "3B", "Stat. And Prob. Theory");
nS.tue2nd("Lab 6", "BSE", "4A", "Object Orient. Soft. Engr. (Lab)");
nS.tue2nd("LH-409", "BSE", "4B", "Data Struct. and Algo.");
nS.tue2nd("LH-502", "BSE", "5A", "Soft. Qual. Engr.");
nS.tue2nd("LH-109", "BSE", "5B", "Operating Systems");
nS.tue2nd("LH-102", "BSE", "6A", "Artificial Intelligence");
nS.tue2nd("LH-404", "BSE", "6B", "Soft. Pro.t Mgt");
nS.tue2nd("LH-107", "BSE", "7A", "Data Minig");
nS.tue2nd("LH-107", "BSE", "7B", "Data Minig");
nS.tue2nd("LH-405", "BSE", "8B", "Enterprenourship");


// Tuesday 3rd Slot
nS.tue3rd("Structure Lab", "BCE", "2A", "Civil Engg Material Lab");
nS.tue3rd("Computer Lab 7", "BCE", "2B", "ITCP Lab");
nS.tue3rd("403", "BCE", "4A", "Geotech");
nS.tue3rd("406", "BCE", "4B", "Mechanic of Solid 2");
nS.tue3rd("402", "BCE", "6A", "Highway Engg");
nS.tue3rd("407", "BCE", "6B", "RCD 1");
nS.tue3rd("401", "BCE", "8A", "Irrigation Engg");
nS.tue3rd("401", "BCE", "10A", "Irrigation Engg");
nS.tue3rd("401", "BCE", "12", "Irrigation Engg");

nS.tue3rd("LH-301", "BCS", "1B", "Eng. Comp. And Composition");
nS.tue3rd("Phy and Circuit Anal. Lab", "BCS", "1C", "App. Phy. For Engrs. (Lab)");
nS.tue3rd("LH-405", "BCS", "2B", "Prof. Practices IT");
nS.tue3rd("LH-101", "BCS", "2C", "Programming Fundamentals");
nS.tue3rd("LH-410", "BCS", "3A", "S/W Engr. Concepts");
nS.tue3rd("LH-411", "BCS", "3B", "Linear Algebra");
nS.tue3rd("LH-103", "BCS", "3C", "Linear Algebra");
nS.tue3rd("Lab 1", "BCS", "4A", "Database Sys. 1(Lab)");
nS.tue3rd("LH-408", "BCS", "5A", "Diffrential Equation");
nS.tue3rd("LH-408", "BCS", "5C", "Diffrential Equations");
nS.tue3rd("LH-116", "BCS", "5D", "Design And Anal. Of Algo");
nS.tue3rd("LH-501", "BCS", "6A", "Web Eng. /Est");
nS.tue3rd("LH-102", "BCS", "6B", "Machine Learning");
nS.tue3rd("LH-409", "BCS", "6C", "Web Technologies");
nS.tue3rd("Lab 6", "BCS", "6D", "HCI (Lab)");
nS.tue3rd("LH-409", "BCS", "6E", "Web Technologies");
nS.tue3rd("LH-107", "BCS", "7A", "Artificial Intelligence");
nS.tue3rd("LH-107", "BCS", "7B", "Artificial Intelligence");
nS.tue3rd("Lab 3", "BCS", "7C", "Artificial Intelligence (Lab)");
nS.tue3rd("Lab 3", "BCS", "7D", "Artificial Intelligence (Lab)");

nS.tue3rd("LH-202", "BEE", "2A", "ECA 1");
nS.tue3rd("Adv. Electro Lab", "BEE", "2B", "ECA 1 (Lab)");
nS.tue3rd("LH-205", "BEE", "2C", "ODE");
nS.tue3rd("LH-204", "BEE", "4A", "Machines");
nS.tue3rd("LH-208", "BEE", "4B", "Electronics 2");
nS.tue3rd("LH-206", "BEE", "6A", "A & DS");
nS.tue3rd("LH-207", "BEE", "6D", "Control Sys.");
nS.tue3rd("LH-209", "BEE", "8A", "Pak Studies");
nS.tue3rd("LH-209", "BEE", "8B", "Pak Studies");
nS.tue3rd("LH-203", "BEE", "8D", "PRoject Managment And Planning");

nS.tue3rd("LH-601", "BME", "2A", "Engineering Materials");
nS.tue3rd("Mechanics Of Materials Lab", "BME", "4A", "Mechanics Of Materials Lab");
nS.tue3rd("LH-603", "BME", "4B", "Mechanics of Materials 2");

nS.tue3rd("LH-304", "BSE", "1A", "Intro. To ICT");
nS.tue3rd("LH-105 ", "BSE", "1B", "Cal. And Ana. Geo.");
nS.tue3rd("LH-104", "BSE", "2A", "ECA 1");
nS.tue3rd("LH-106", "BSE", "2B", "Multi. Calculas");
nS.tue3rd("Lab 4", "BSE", "2C", "Progr. Fundamentals (Lab)");
nS.tue3rd("LH-303", "BSE", "3A", "Linear Algebra");
nS.tue3rd("LH-502 ", "BSE", "4A", "Data Struct. and Algo.");
nS.tue3rd("Lab 5", "BSE", "4B", "Data Struct. and Algo. (Lab)");
nS.tue3rd("LH-109", "BSE", "5B", "Soft. Requir. Engr.");
nS.tue3rd("LH-404", "BSE", "6B", "Human Comp. Inter.");
nS.tue3rd("LH-108", "BSE", "8A", "Enterprenourship");
nS.tue3rd("LH-302", "BSE", "8B", "Formal Methods in SE");


// Tuesday 4th Slot
nS.tue4th("402", "BCE", "2A", "Engg Mech(F)");
nS.tue4th("402", "BCE", "2B", "Engg Mech(F)");
nS.tue4th("Computer Lab 7", "BCE", "4B", "NC");
nS.tue4th("401", "BCE", "6A", "RCD 1");
nS.tue4th("407", "BCE", "6B", "Water Supply");
nS.tue4th("406", "BCE", "8A", "RCD 2 (F)");
nS.tue4th("406", "BCE", "8B", "RCD 2 (F)");
nS.tue4th("407", "BCE", "10A", "Water Supply");
nS.tue4th("401", "BCE", "12", "RCD 1");

nS.tue4th("LH-303", "BCS", "1B", "App. Phy. For Engrs");
nS.tue4th("Phy and Circuit Anal. Lab ", "BCS", "1C", "App. Phy. For Engrs. (Lab)");
nS.tue4th("LH-102", "BCS", "2A", "Programming Fundamentals");
nS.tue4th("LH-109", "BCS", "2B", "Multi. Calculas");
nS.tue4th("LH-411", "BCS", "2C", "Elec. , Magnetism and Optics");
nS.tue4th("LH-304", "BCS", "2D", "Discrete Structures");
nS.tue4th("LH-501", "BCS", "3A", "DLD");
nS.tue4th("LH-302", "BCS", "3B", "Intro. To Bio info.");
nS.tue4th("Lab 4", "BCS", "3D", "Intro. To Bio info. (Lab)");
nS.tue4th("Lab 6", "BCS", "4A", "Data struct. and Algo. (Lab)");
nS.tue4th("Lab 2", "BCS", "5D", "Dataware. and Data minig (Lab)");
nS.tue4th("LH-410", "BCS", "6A", "Human Comp. Inter");
nS.tue4th("LH-408", "BCS", "6C", "Theory of Automata");
nS.tue4th("Lab 8 ", "BCS", "6D", "Dataware. and Data minig (Lab)");
nS.tue4th("LH-408", "BCS", "6E", "Theory Of Automata");
nS.tue4th("LH-108", "BCS", "7A", "Pattern Recogination");
nS.tue4th("LAb 3", "BCS", "7B", "Sys. and Net. Admin. (Lab)");
nS.tue4th("LH-107", "BCS", "7C", "Microprocessor and Assembly Language");
nS.tue4th("LH-107 ", "BCS", "7D", "Microprocessor and Assembly Language");
nS.tue4th("LH-106", "BCS", "8B", "French");

nS.tue4th("Adv. Electro Lab", "BEE", "2A", "ECA 1 (Lab)");
nS.tue4th("LH-205", "BEE", "2B", "IPE");
nS.tue4th("LH-203", "BEE", "4A", "Electronics 2");
nS.tue4th("LH-201", "BEE", "4B", "Probability");
nS.tue4th("LH-207", "BEE", "6A", "Control Sys.");
nS.tue4th("LH-207", "BEE", "6B", "Control Sys.");
nS.tue4th("LH-204", "BEE", "6D", "Engineering Economics");
nS.tue4th("DSP Lab", "BEE", "8A", "DIPL");
nS.tue4th("LH-208", "BEE", "8B", "Tutorial 8B");
nS.tue4th("LH-202", "BEE", "8C", "Project Management And Planning");
nS.tue4th("LH-206", "BEE", "8D", "Tutorial 8D");

nS.tue4th("LH-601", "BME", "2B", "Thermodynamics 1");
nS.tue4th("LH-603", "BME", "4A", "Engineering Fluid Mechanics 1");

nS.tue4th("EMI And Electronics Lab", "BSE", "2B", "ECA 1 (Lab)");
nS.tue4th("LH-101", "BSE", "2C", "Prof. Practices IT");
nS.tue4th("LH-105", "BSE", "3A", "Stat. And Prob. Theory");
nS.tue4th("DLD Lab", "BSE", "3B", "DLD (Lab)");
nS.tue4th("LH-104 ", "BSE", "4A", "Database System 1");
nS.tue4th("Lab 5 ", "BSE", "4B", "Data Struct. and Algo. (Lab)");
nS.tue4th("LH-109", "BSE", "5A", "Soft. Requir. Engr.");
nS.tue4th("LH-301", "BSE", "6A", "Human Comp. Inter");
nS.tue4th("LH-502", "BSE", "7A", "S/W Design And Archi.");
nS.tue4th("LH-106", "BSE", "8B", "French");


// Tuesday Fifth Slot
nS.tue5th("407", "BCE", "2A", "Differential Equation");
nS.tue5th("Hydraulics Lab", "BCE", "4A", "Advanced FM Lab");
nS.tue5th("Computer Lab 7", "BCE", "4B", "NC Lab");
nS.tue5th("401", "BCE", "6A", "Ind. Str. Analysis");
nS.tue5th("401", "BCE", "6B", "Ind. Str. Analysis");
nS.tue5th("406", "BCE", "8A", "Structural Dynamics");
nS.tue5th("406", "BCE", "8B", "Structural Dynamics");
nS.tue5th("Hydraulics Lab", "BCE", "10A", "Advanced FM Lab");
nS.tue5th("Hydraulics Lab ", "BCE", "12", "Advanced FM Lab");

nS.tue5th("LH-103", "BCS", "1B", "Intro. To ICT");
nS.tue5th("LH-105", "BCS", "2A", "Multi. Calculas");
nS.tue5th("LH-101", "BCS", "2B", "Discrete Structures");
nS.tue5th("LH-411", "BCS", "2D", "Electricity Magnetism And Optics");
nS.tue5th("LH-408", "BCS", "3A", "Intro. To Bio info.");
nS.tue5th("Lab 4", "BCS", "3D", "Intro. To Bio info. (Lab)");
nS.tue5th("Lab 6 ", "BCS", "4B", "Data struct. and Algo. (Lab)");
nS.tue5th("LH-501", "BCS", "5A", "DIP");
nS.tue5th("Lab 2", "BCS", "5D", "Dataware. and Data minig (Lab)");
nS.tue5th("LH-410 ", "BCS", "6A", "Machine Learning");
nS.tue5th("LH-302", "BCS", "6B", "Theory of Automata");
nS.tue5th("Lab 8 ", "BCS", "6D", "Data warehouse and Data Minig");
nS.tue5th("Lab 3", "BCS", "7B", "Sys. and Net. Admin. (Lab)");
nS.tue5th("LH-107", "BCS", "7C", "Artificial Intelligence");
nS.tue5th("LH-107", "BCS", "7D", "Artificial Intelligence");
nS.tue5th("LH-109", "BCS", "8B", "HRM");

nS.tue5th("Adv. Electro Lab", "BEE", "2A", "ECA 1 Lab");
nS.tue5th("LH-202", "BEE", "2B", "Tutorial 2B");
nS.tue5th("LH-203", "BEE", "4A", "Tutorial 4A");
nS.tue5th("LH-206", "BEE", "4C", "S & S");
nS.tue5th("LH-207", "BEE", "6D", "Tutorial 6D");
nS.tue5th("DSP Lab", "BEE", "8A", "DIPL");
nS.tue5th("Auditorium", "BEE", "8C", "Pak Studies");
nS.tue5th("Auditorium", "BEE", "8D", "Pak Studies");

nS.tue5th("LH-601", "BME", "2A", "Thermodynamics 1");

nS.tue5th("EMI And Electronics Lab", "BSE", "2B", "ECA 1 (Lab)");
nS.tue5th("LH-108", "BSE", "2C", "Programming Fundamentals");
nS.tue5th("DLD Lab", "BSE", "3B", "DLD (Lab)");
nS.tue5th("LH-104", "BSE", "4B", "Database System 1");
nS.tue5th("LH-102", "BSE", "5A", "Diffrential Equations");
nS.tue5th("LH-304", "BSE", "5B", "Scripting Languages (Lab)");
nS.tue5th("LH-502", "BSE", "7B", "S/W Design And Archi.");


// Friday 
nS.fri1st('', '', '', '', '');

// console.log(nS.mon);

export default () => console.log("Thor");