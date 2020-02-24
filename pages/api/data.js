class Schedule {
    constructor(){
        this.mon = [[],[],[],[],[]];
        this.tue = [[],[],[],[],[]];
        this.wed = [[],[],[],[],[]];
        this.thu = [[],[],[],[],[]];
        this.fri = [[],[],[],[],[]];
    }

    mon1st(roomNumber, faculty, section, lecture) {
        this.mon[0].push({roomNumber, faculty, section, lecture});
    }
    mon2nd(roomNumber, faculty, section, lecture) {
        this.mon[1].push({roomNumber, faculty, section, lecture});
    }
    mon3rd(roomNumber, faculty, section, lecture) {
        this.mon[2].push({roomNumber, faculty, section, lecture});
    }
    mon4th(roomNumber, faculty, section, lecture) {
        this.mon[3].push({roomNumber, faculty, section, lecture});
    }
    mon5th(roomNumber, faculty, section, lecture) {
        this.mon[4].push({roomNumber, faculty, section, lecture});
    }

    // Tuesday

    tue1st(roomNumber, faculty, section, lecture) {
        this.tue[0].push({roomNumber, faculty, section, lecture});
    }
    tue2nd(roomNumber, faculty, section, lecture) {
        this.tue[1].push({roomNumber, faculty, section, lecture});
    }
    tue3rd(roomNumber, faculty, section, lecture) {
        this.tue[2].push({roomNumber, faculty, section, lecture});
    }
    tue4th(roomNumber, faculty, section, lecture) {
        this.tue[3].push({roomNumber, faculty, section, lecture});
    }
    tue5th(roomNumber, faculty, section, lecture) {
        this.tue[4].push({roomNumber, faculty, section, lecture});
    }

    // Webnesday
    wed1st(roomNumber, faculty, section, lecture) {
        this.wed[0].push({roomNumber, faculty, section, lecture});
    }
    wed2nd(roomNumber, faculty, section, lecture) {
        this.wed[1].push({roomNumber, faculty, section, lecture});
    }
    wed3rd(roomNumber, faculty, section, lecture) {
        this.wed[2].push({roomNumber, faculty, section, lecture});
    }
    wed4th(roomNumber, faculty, section, lecture) {
        this.wed[3].push({roomNumber, faculty, section, lecture});
    }
    wed5th(roomNumber, faculty, section, lecture) {
        this.wed[4].push({roomNumber, faculty, section, lecture});
    }
    
    // Thursday
    thu1st(roomNumber, faculty, section, lecture) {
        this.thu[0].push({roomNumber, faculty, section, lecture});
    }
    thu2nd(roomNumber, faculty, section, lecture) {
        this.thu[1].push({roomNumber, faculty, section, lecture});
    }
    thu3rd(roomNumber, faculty, section, lecture) {
        this.thu[2].push({roomNumber, faculty, section, lecture});
    }
    thu4th(roomNumber, faculty, section, lecture) {
        this.thu[3].push({roomNumber, faculty, section, lecture});
    }
    thu5th(roomNumber, faculty, section, lecture) {
        this.thu[4].push({roomNumber, faculty, section, lecture});
    }

    // Friday
    fri1st(roomNumber, faculty, section, lecture) {
        this.fri[0].push({roomNumber, faculty, section, lecture});
    }
    fri2nd(roomNumber, faculty, section, lecture) {
        this.fri[1].push({roomNumber, faculty, section, lecture});
    }
    fri3rd(roomNumber, faculty, section, lecture) {
        this.fri[2].push({roomNumber, faculty, section, lecture});
    }
    fri4th(roomNumber, faculty, section, lecture) {
        this.fri[3].push({roomNumber, faculty, section, lecture});
    }
    fri5th(roomNumber, faculty, section, lecture) {
        this.fri[4].push({roomNumber, faculty, section, lecture});
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


//First Slot - Wednesday

nS.wed1st("lab-2", "bcs" ,  "1A" , "intro to ict(lab)");
nS.wed1st("lab-5", "bcs" ,  "1B" , "intro to ict(lab)");
ns.wed1st("104","bcs","2D","prof.practice.IT");
ns.wed1st("101","bcs","3B","OOP");
ns.wed1st("106","bcs","3C","Linear algebra");
ns.wed1st("108","bcs","4A","stat and prob theory");
ns.wed1st("lab-3","bcs","4B","Data base sys.1(lab)");
ns.wed1st("102","bcs","5C","visual programming");
ns.wed1st("105","bcs","5D","differential.equation");
ns.wed1st("501","bcs","6C","soft.pro.t Mgt");
ns.wed1st("lab-6","bcs","6D","web technology(lab)");
ns.wed1st("lab-5","bcs","6E","data ware and data mining(lab)");

ns.wed1st("304","bcs","8C","net.security");
ns.wed1st("303","bse","1A","Eng. Comp. & Composition");
ns.wed1st("bse","1B","");
ns.wed1st("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
ns.wed1st("103","bse","2B","Multi. Calculus");
ns.wed1st("EMI & Electronics Lab","bse","2C","ECA I (Lab)");
ns.wed1st("409","bse","3A","DLD");
ns.wed1st("302","bse","4B","Database Systems I");
ns.wed1st("Lab-1","bse","5B","Operating Systems (Lab)");
ns.wed1st("408","bse","6A","Human Comp. Inter.");
ns.wed1st("107","bse","6B","Artificial Intelligence");

ns.wed1st("106","bse","8A","Enterpreneurship");
ns.wed1st("Lab-2","mcs","mcs-1","Intro. to ICT (Lab)");
ns.wed1st("102","mcs","mcs-3","");
ns.wed1st("501","mcs","mcs-4","Soft. Pro.t Mgt");
ns.wed1st("LH-202","bee","2C","Tutorial 2C");
ns.wed1st("LH-204","bee","4A","Multivariable.cal");
ns.wed1st("LH-207","bee","4B","Multivariable.cal");
ns.wed1st("LH-201","bee","4C","Machines");
ns.wed1st("LH-207","bee","6C","Contorl Sys");
ns.wed1st("LH-203","bee","6D","AFD");

ns.wed1st("WorkShop Lab","BS(ME)","2A","Workshop Practice");
ns.wed1st("603","BS(ME)","2B","Multivariable.cal");
ns.wed1st("601","BS(ME)","4A","Statistics and Probability Theory");
ns.wed1st("402","CE","2A","ITCP");
ns.wed1st("406","CE","4A","Advanced FM");
ns.wed1st("407","CE","4B","Mechanics of Solids");
ns.wed1st("401","CE","6A","Highway Engg.");
ns.wed1st("406","CE","10A","Advanced FM");
ns.wed1st("406","CE","12","Advanced FM");

//2nd slot wednesday

nS.wed2nd("Lab-2","bcs","1A","Intro. to ICT (Lab)");
nS.wed2nd("LH-404","bcs","1C","Eng. Comp. & Composition");
nS.wed2nd("LH-410","bcs","2B","Programming Fundamentals");
nS.wed2nd("LH-106","bcs","2D","Multi. Calculus");
nS.wed2nd("LH-104","bcs","3A","OOP");
nS.wed2nd("DLD Lab","bcs","3B","DLD (Lab)");
nS.wed2nd("LH-409","bcs","3C","S/W Engr. Concepts");
nS.wed2nd("LH-103","bcs","3D","S/W Engr. Concepts");
nS.wed2nd("LH-102","bcs","4A","Computer Architecture");
nS.wed2nd("Lab-3","bcs","4B","Database Sys. I (Lab)");
nS.wed2nd("Lab-4","bcs","5D","Micropro. and Assembly Language (Lab)");
nS.wed2nd("LH-408","bcs","6A","Computer Vision");
nS.wed2nd("Lab 6","bcs","6D","Lab 6");
nS.wed2nd("Lab-5","bcs","6E","Data Ware. and Data Mining (Lab)");
nS.wed2nd("LH-303","bcs","7A","Numerical Comput.");
nS.wed2nd("LH-303","bcs","7B","Numerical Comput.");
nS.wed2nd("LH-302","bcs","7C","Compiler Construction");
nS.wed2nd("LH-302","bcs","7D","Compiler Construction");
nS.wed2nd("LH-108","bcs","8A","HRM");

nS.wed2nd("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
nS.wed2nd("LH-304","bse","2B","Prof. Practices IT");
nS.wed2nd("EMI & Electronics Lab","bse","2C","ECA I (Lab)");
nS.wed2nd("LH-105","bse","3B","DLD");

nS.wed2nd("LH-502","bse","4B","Comm. Skills");
nS.wed2nd("LH-501","bse","5A","Soft. Qual. Engr.");
nS.wed2nd("Lab-1","bse","5B","Operating Systems (Lab)");
nS.wed2nd("LH-109","bse","6A","Artificial Intelligence");
nS.wed2nd("LH-409","bse","6B","Human Comp. Inter.");
nS.wed2nd("LH-107","bse","7A","Data Mining");
nS.wed2nd("LH-107","bse","7B","Data Mining");
nS.wed2nd("LH-108","bse","8A","HRM");

nS.wed2nd("Lab-2","mcs","mcs-1","Intro. to ICT (Lab)");
nS.wed2nd("LH-102","mcs","mcs-3","Computer Architecture");
nS.wed2nd("LH-109","mcs","mcs-4","Artificial Intelligence");

ns.wed2nd("LH-208","bee","2A","DLD");
ns.wed2nd("LH-201","bee","2B","Pak Studies");
ns.wed2nd("LH-205","bee","2C","DLD");
ns.wed2nd("LH-202","bee","4A","S & S");
ns.wed2nd("DSP Lab","bee","4B","S & S Lab");
ns.wed2nd("LH-209","bee","4C","S & S");
ns.wed2nd("LH-206","bee","6A","Contorl Sys");
ns.wed2nd("LH-206","bee","6B","Contorl Sys");
ns.wed2nd("LH-203","bee","6C","PG");
ns.wed2nd("Adv. Electro Lab","bee","6D","AFDL");
ns.wed2nd("LH-207","bee","8A","Pak Studies");
ns.wed2nd("LH-207","bee","8B","Pak Studies");

ns.wed2nd("WorkShop Lab","BS(ME)","2A","Workshop Practice");
ns.wed2nd("603","BS(ME)","4A","Circuits and Electronics"); 
ns.wed2nd("601","BS(ME)","4B","Statistics and Probability Theory");
ns.wed2nd("Computer Lab 7","CE","2A","ITCP Lab");
ns.wed2nd("402","CE","2B","Engineering Geology");
ns.wed2nd("401","CE","4A","Basic Structural Analysis");
ns.wed2nd("407","CE","4B","Geotech");
ns.wed2nd("403","CE","6A","CAD");
ns.wed2nd("403","CE","10A","CAD");

nS.wed3rd("LH-102","bcs","1A","Eng. Comp. & Composition");
nS.wed3rd("LH-304","bcs","1C","App. Phy. for Engrs.");
nS.wed3rd("LH-408","bcs","2A","Prof. Practices IT");
nS.wed3rd("LH-104","bcs","2B","Electricity, Magnetism and Optics");
nS.wed3rd("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
nS.wed3rd("LH-303","bcs","3A","Linear Algebra");
nS.wed3rd("LH-108","bcs","3B","OOP");
nS.wed3rd("LH-102","bcs","3C","S/W Engr. Concepts");
nS.wed3rd("LH-411","bcs","4B","Database Systems I");
nS.wed3rd("LH-301","bcs","5A","Differential Equations");
nS.wed3rd("LH-301","bcs","5C","Differential Equations");
nS.wed3rd("LH-404","bcs","5D","Differential Equations");
nS.wed3rd("LH-408","bcs","6B","Computer Vision");
nS.wed3rd("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
nS.wed3rd("LH-116","bcs","6D","Human Comp. Inter.");
nS.wed3rd("LH-302","bcs","6E","Intro. to Data Science");
nS.wed3rd("LH-301","bcs","7A","Artificial Intelligence");
nS.wed3rd("LH-301","bcs","7B","Artificial Intelligence");
nS.wed3rd("LH-501","bcs","8A","French");
nS.wed3rd("LH-101","bse","1A","Intro. to ICT");
nS.wed3rd("LH-108","bse","1B","Eng. Comp. & Composition");
nS.wed3rd("LH-106","bse","2A","Multi. Calculus");
nS.wed3rd("LH-405","bse","2B","Discrete Structures");
nS.wed3rd("LH-502","bse","2C","Discrete Structures");
nS.wed3rd("LH-105","bse","3B","OOP");
nS.wed3rd("LH-304","bse","4A","Database Systems I");
nS.wed3rd("Lab-1","bse","4B","Object Orient. Soft. Engr.(Lab)");
nS.wed3rd("Lab-5","bse","5A","Scripting Languages (Lab)");
nS.wed3rd("LH-405","bse","6A","Machine Learning");
nS.wed3rd("Lab-5","bse","6B","HCI (Lab)");
nS.wed3rd("LH-107","bse","7A","Data Mining");
nS.wed3rd("LH-107","bse","7B","Data Mining");
nS.wed3rd("LH-501","bse","8A","French");
nS.wed3rd("LH-409","bse","8C","Formal Methods in SE");

nS.wed3rd("LH-411","mcs","mcs-2","Microprocessor and Assembly Language");
nS.wed3rd("LH-116","mcs","mcs-4","Mobile Application Development");
ns.wed3rd("LH-204","bee","2A","IPE");
ns.wed3rd("LH-202","bee","2B","DLD");
ns.wed3rd("DSP Lab","bee","4B","S & S Lab");
ns.wed3rd("LH-201","bee","6A","Engineering Economics");

ns.wed3rd("Adv. Electro Lab","bee","6D","AFDL");
ns.wed3rd("LH-209","bee","8A","Project Managment & Planning");
ns.wed3rd("LH-209","bee","8B","Project  Managment & Planning");
ns.wed3rd("Auditorium","bee","8C","Pak Studies");
ns.wed3rd("Auditorium","bee","8D","Pak Studies");
ns.wed3rd("603","BS(ME)","2A","Engineering Statics");
ns.wed3rd("WorkShop Lab","BS(ME)","2B","Workshop Practice");

ns.wed3rd("Computer Lab 7","CE","2A","ITCP Lab");
ns.wed3rd("401","CE","2B","Communication Skills");
ns.wed3rd("Geotech","CE","4A","Geotech Lab");
ns.wed3rd("403","CE","4B","NC");
ns.wed3rd("402","CE","6A","PPM");
ns.wed3rd("407","CE","6B","402");
ns.wed3rd("FYP","CE","8A","FYP");
ns.wed3rd("FYP","CE","8B","FYP");
ns.wed3rd("407","CE","10A","Water Supply");

nS.wed4th("EMI & Electronics Lab","bcs","1B","App. Phy. for Engrs.(Lab)");
nS.wed4th("Lab 6","bcs","1C","Intro. to ICT (Lab)");
nS.wed4th("LH-101","bcs","2A","Multi. Calculus");
nS.wed4th("Lab-4","bcs","2B","Progr. Fundamentals (Lab)");
nS.wed4th("LH-105","bcs","2C","Discrete Structures");
nS.wed4th("LH-102","bcs","3C","DLD");
nS.wed4th("LH-405","bcs","4A","Comm. Skills");
nS.wed4th("LH-502","bcs","5A","DIP");
nS.wed4th("Lab 7","bcs","6A","HCI (Lab)");
nS.wed4th("Lab-2","bcs","6C","Web Technologies (Lab)");
nS.wed4th("LH-502","bcs","6D","Pakistan Studies");
nS.wed4th("LH-109","bcs","7B","Systems and Networks Administration");
nS.wed4th("LH-107","bcs","7C","Numerical Comput.");
nS.wed4th("LH-107","bcs","7D","Numerical Comput.");
nS.wed4th("LH-106","bcs","8B","French");

nS.wed4th("bse","1A","");
nS.wed4th("LH-108","bse","1B","Intro. to ICT");
nS.wed4th("LH-116","bse","2A","Multi. Calculus");
nS.wed4th("Lab-1","bse","3A","");
nS.wed4th("LH-409","bse","3B","Linear Algebra");
nS.wed4th("LH-302","bse","4A","Comm. Skills");

nS.wed4th("Lab-5","bse","5A","Scripting Languages (Lab)");
nS.wed4th("LH-304","bse","6A","S/W Design and Archi");
nS.wed4th("LH-301","bse","7A","S/W Eng. Economics");
nS.wed4th("LH-404","bse","8C","HRM");
nS.wed4th("LH-105","mcs","mcs-1","Discrete Structures");
ns.wed4th("LH-206","bee","2A","Pak Studies");
ns.wed4th("LH-201","bee","2B","Pak Studies");
ns.wed4th("LH-201","bee","2C","Pak Studies");
ns.wed4th("Adv.Electro Lab","bee","4B","Electronics II Lab");
ns.wed4th("DSP Lab ","bee","4C","S & S Lab");
ns.wed4th("control & Inst. Lab","bee","6A","Control Lab");
ns.wed4th("control & Inst. Lab","bee","6B","Control Lab");
ns.wed4th("LH-208","bee","6C","Engineering Economics");
ns.wed4th("LH-202","bee","6D","Power Electronics");
ns.wed4th("LH-203","bee","8C","Project Managment & Planning");
ns.wed4th("LH-204","bee","8D","VLSI Design");
ns.wed4th("WorkShop Lab","BS(ME)","2B","Workshop Practice");
ns.wed4th("603","BS(ME)","4A","Mechanics of Materials II");
ns.wed4th("601","BS(ME)","4B","Circuits andElectronics");

ns.wed4th("403","CE","2A","Communication Skills");
ns.wed4th("407","CE","2B","Civil Engineering Materials");
ns.wed4th("Geotech","CE","4A","Geotech Lab");
ns.wed4th("406","CE","4B","Advanced Surveying");
ns.wed4th("Hydraulics Lab","CE","6A","Water Supply Lab");
ns.wed4th("Highway Engg Lab","CE","6B","Highway Lab");
ns.wed4th("401","CE","8A","PPM");
ns.wed4th("FYP","CE","8B","FYP");
ns.wed4th("FYP","CE","10A","FYP");
ns.wed4th("402","CE","12","Matrix Analysis of Structures(R)");

nS.wed5th("EMI & Electronics Lab","bcs","1B","App. Phy. for Engrs.(Lab)");
nS.wed5th("Lab 6","bcs","1C","Intro. to ICT (Lab)");
nS.wed5th("Lab-4","bcs","2B","Progr. Fundamentals (Lab)");
nS.wed5th("LH-105","bcs","2C","Multi. Calculus");
nS.wed5th("DLD Lab","bcs","3B","DLD (Lab)");
nS.wed5th("LH-408","bcs","3C","Intro. to Bioinformatics");
nS.wed5th("LH-501","bcs","3D","Intro. to Bioinformatics");
nS.wed5th("LH-104","bcs","4B","Comm. Skills");

nS.wed5th("LH-411","bcs","5D","Microprocessor and Assembly Language");
nS.wed5th("Lab-2","bcs","6A","HCI (Lab)");
nS.wed5th("LH-101","bcs","6B","Pakistan Studies");
nS.wed5th("LH-101","bcs","6E","Pakistan Studies");
nS.wed5th("LH-109","bcs","7B","Systems and Networks Administration");
nS.wed5th("LH-302","bcs","7C","Artificial Intelligence");
nS.wed5th("LH-302","bcs","7D","Artificial Intelligence");

nS.wed5th("LH-108","bse","1A","Intro. to Mgt");
nS.wed5th("bse","1B","");
nS.wed5th("LH-116","bse","2A","Discrete Structures");
nS.wed5th("LH-301","bse","2B","Programming Fundamentals");
nS.wed5th("LH-410","bse","2C","ECA I");
nS.wed5th("Lab-1","bse","3A","OOP (Lab)");
nS.wed5th("Lab-5","bse","4B","Database Sys. I (Lab)");
nS.wed5th("LH-102","bse","6B","S/W Design and Archi");
ns.wed5th("LH-206","bee","2A","Tutorial 2A");
ns.wed5th("Adv. Electro Lab","bee","4B","Electronics II Lab");
ns.wed5th("DSP Lab","bee","4C","S & S Lab");
ns.wed5th("control & Inst. Lab","bee","6A","Control Lab");
ns.wed5th("control & Inst. Lab","bee","6B","Control Lab");
ns.wed5th("LH-208","bee","6C","Engineering Economics");
ns.wed5th("LH-202","bee","6D","Power Electronics");
ns.wed5th("LH-201","bee","8C","Power System Analysis");
ns.wed5th("LH-202","bee","8D","Project Managment & Planning");

ns.wed5th("402","CE","2A","Engg Mech(F)");
ns.wed5th("402","CE","2B","Engg Mech(F)");
ns.wed5th("406","CE","4A","Advanced Surveying");
ns.wed5th("407","CE","4B","Advanced FM");
ns.wed5th("Highway Engg Lab","CE","6A","Highway Lab");
ns.wed5th("406","CE","10A","Advanced Surveying");
ns.wed5th("403","CE","12","Matrix Analysis of Structures(R)");


ns.thu1st("LH-303","bcs","1A","Cal. and Ana. Geo.");
ns.thu1st("Lab-5","bcs","1B","Intro. to ICT (Lab)");
ns.thu1st("EMI & Electronics Lab","bcs","2B","El;c., Magnetism & Optics (Lab)");
ns.thu1st("LH-102","bcs","2D","Prof. Practices I");
ns.thu1st("DLD Lab","bcs","3A","DLD (Lab)");
ns.thu1st("Lab-1","bcs","3B","Intro. to Bioinfo. (Lab)");
ns.thu1st("LH-502","bcs","3D","OOP");
ns.thu1st("LH-103","bcs","4A","Database Systems I");
ns.thu1st("LH-408","bcs","4B","Stat. & Prob. Theory");
ns.thu1st("LH-104","bcs","5C","Visual Programming");


ns.thu1st("LH-404","bcs","6D","Web Technologies");
ns.thu1st("LH-109","bcs","6E","Data Warehousing and Data Mining");
ns.thu1st("LH-302","bcs","7A","Microprocessor and Assembly Language");
ns.thu1st("LH-302","bcs","7B","Microprocessor and Assembly Language");
ns.thu1st("Lab-8","bcs","7C","Compiler Const. (Lab)");
ns.thu1st("Lab-8","bcs","7D","Compiler Const. (Lab)");
ns.thu1st("LH-405","bcs","8B","Net. Security");
ns.thu1st("LH-101","bse","1A","Eng. Comp. & Composition");
ns.thu1st("LH-405","bse","3A","Intro. to Soft. Engr.");
ns.thu1st("LH-105","bse","3B","Stat. & Prob. Theory");
ns.thu1st("LH-108","bse","4A","Data Comm. and Comp. ");
ns.thu1st("Lab 7","bse","4B","Object Orient. Soft. Engr. (Lab)");
ns.thu1st("Lab-4","bse","6A","Artificial Intelligence (Lab)"); 
ns.thu1st("LH-410","bse","6B","Soft. Pro.t Mgt");
ns.thu1st("LH-411","bse","8A","");
ns.thu1st("LH-103","mcs","mcs-1","Database Systems I");
ns.thu1st("LH-405","mcs","mcs-2","Intro. to Soft. Engr.");
ns.thu1st("LH-104","mcs","mcs-3","Visual Programming");
ns.thu1st("Lab-4","mcs","mcs-4","Artificial Intelligence (Lab)");
ns.thu1st("LH-202","bee","2B","IPE");
ns.thu1st("Drawing Hall","bee","2C","ED");
ns.thu1st("LH-203","bee","4A","S & S");
ns.thu1st("Adv. Electro Lab","bee","4C","Electronics II Lab");
ns.thu1st("Computer Lab-3","bee","6A","A&DS Lab");
ns.thu1st("603","bs(me)","2A","Multivariable Calculus");
ns.thu1st("601","bs(me)","4A","Mechanics of Materials II");
ns.thu1st("401","CE","2A","ITCP");
ns.thu1st("Hydraulics Lab","CE","4A","Advanced FM Lab");
ns.thu1st("403","CE","4B","NC");
ns.thu1st("406","CE","6A","Water Supply");
ns.thu1st("402","CE","6B","Highway Engg.");
ns.thu1st("407","CE","8B","Entrepreneurship");
ns.thu1st("Hydraulics Lab","CE","10A","Advanced FM Lab"); 
ns.thu1st("Hydraulics Lab","CE","12","Advanced FM Lab");
ns.thu2nd("LH-108","bcs","1A","App. Phy. for Engrs.");
ns.thu2nd("Lab-5","bcs","1B","Intro. to ICT (Lab)");
ns.thu2nd("LH-303","bcs","1C","Cal. and Ana. Geo.");
ns.thu2nd("EMI & Electronics Lab","bcs","2B","Elec., Magnetism & Optics (Lab)");
ns.thu2nd("LH-105","bcs","2D","Multi. Calculus");
ns.thu2nd("LH-104","bcs","3A","OOP");
ns.thu2nd("Lab-1","bcs","3B","Intro. to Bioinfo. (Lab)");
ns.thu2nd("LH-101","bcs","3D","DLD");
ns.thu2nd("Lab-2","bcs","4A","Data Comm. and Comp. Net. (Lab)");
ns.thu2nd("LH-405","bcs","4B","Data Comm. and Comp.Net.");
ns.thu2nd("LH-502","bcs","5A","Design & Anal. of Algo.");
ns.thu2nd("LH-502","bcs","5C","Design & Anal. of Algo.");
ns.thu2nd("LH-404","bcs","5D","Data Warehousing and Data Mining");

ns.thu2nd("Lab-3","bcs","7A","Artificial Intelligence (Lab)");
ns.thu2nd("Lab-3","bcs","7B","Artificial Intelligence (Lab)");
ns.thu2nd("Lab-8","bcs","7C","Compiler Const. (Lab)");
ns.thu2nd("Lab-8","bcs","7D","Compiler Const. (Lab)");
ns.thu2nd("LH-302","bcs","8A", "HRM");
ns.thu2nd("LH-109","bse","2A","PF / ITCP");
ns.thu2nd("LH-103","bse","2B","Prof. Practices IT");
ns.thu2nd("LH-408","bse","2C","Programming Fundamentals");
ns.thu2nd("LH-304","bse","3A","OOP");
ns.thu2nd("Lab 6","bse","4A","Data Struc. and Algo. (Lab)");
ns.thu2nd("LH-301","bse","4B","Data Comm. and Comp.Net.");
ns.thu2nd("LH-501","bse","5A","Soft. Qual. Engr.");
ns.thu2nd("LH-410","bse","5B","Soft. Qual. Engr.");
ns.thu2nd("Lab-4","bse","6A","Artificial Intelligence (Lab)");
ns.thu2nd("LH-409","bse","6B","Machine Learning");
ns.thu2nd("LH-411","bse","8A","Formal Methods in SE");
ns.thu2nd("LH-109","mcs","mcs-1","PF / ITCP");
ns.thu2nd("Lab 6","mcs","mcs-2","Data Struc. and Algo. (Lab)");
ns.thu2nd("LH-301","mcs","mcs-3","Data Comm. and Comp.Net.");
ns.thu2nd("Lab-4","mcs","mcs-4","Artificial Intelligence (Lab)");

ns.thu2nd("LH-201","bee","2A","Pak Studies");
ns.thu2nd("LH-204","bee","2B","DLD");
ns.thu2nd("Drawing Hall","bee","2C","ED");
ns.thu2nd("LH-202","bee","4A","Machines");
ns.thu2nd("dv. Electro Lab","bee","4C","Electronics II Lab");
ns.thu2nd("Computer Lab-3","bee","6A","A&DS Lab");
ns.thu2nd("LH-207","bee","6C","Contorl Sys");
ns.thu2nd("Control & Inst. Lab","bee","6D","Control Lab");


ns.thu2nd("603","bs(me)","2B","Engineering Statics");
ns.thu2nd("601","bs(me)","4B","Engineering Fluid Mechanics I");
ns.thu2nd("403","CE","2A","ITCP");
ns.thu2nd("402","CE","2B","Civil Engineering Materials");
ns.thu2nd("401","CE","4A","Basic  analysis Analysis");
ns.thu2nd("Geotech","CE","4B","Geotech Lab");
ns.thu2nd("Hydraulics Lab","CE","6A","Water Supply Lab");
ns.thu2nd("Computer Lab 7","CE","6B","CAD Lab");
ns.thu2nd("406","CE","8A","Engg Economics");
ns.thu2nd("407","CE","8B","Irrigation Engg");

ns.thu3rd("LH-304","bcs","1C","App. Phy. for Engrs.");
ns.thu3rd("LH-408","bcs","2A","Prof. Practices IT");
ns.thu3rd("LH-104","bcs","2B","Electricity, Magnetism and Optics");
ns.thu3rd("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
ns.thu3rd("LH-303","bcs","3A","Linear Algebra");
ns.thu3rd("LH-ree108","bcs","3B","OOP");
ns.thu3rd("LH-409","bcs","3C","S/W Engr. Concepts");
ns.thu3rd("Lab-2","bcs","4A","Data Comm. and Comp. Net. (Lab)");
ns.thu3rd("LH-102","bcs","4B","Database Systems I");
ns.thu3rd("LH-301","bcs","5A","Differential Equations");
ns.thu3rd("LH-301","bcs","5C","Differential Equations");
ns.thu3rd("LH-501","bcs","6A","Web Eng. / ESD");
ns.thu3rd("LH-101","bcs","6B","Machine Learning");
ns.thu3rd("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
ns.thu3rd("LH-404","bcs","6D","Human Comp. Inter.");
ns.thu3rd("Lab-3","bcs","7A","Artificial Intelligence (Lab)");
ns.thu3rd("Lab-3","bcs","7B","Artificial Intelligence (Lab)");
ns.thu3rd("LH-302","bcs","8A", "HRM");

ns.thu3rd("LH-106","bse","1A","Cal. and Ana. Geo.");
ns.thu3rd("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
ns.thu3rd("LH-105","bse","2B","Discrete Structures");
ns.thu3rd("LH-116","bse","2C","Discrete Structures");
ns.thu3rd("LH-502","bse","3B","Intro. to Soft. Engr.");
ns.thu3rd("Lab 6","bse","4A","Data Struc. and Algo. (Lab)");
ns.thu3rd("LH-109","bse","4B","Comm. Skills");
ns.thu3rd("LH-410","bse","5A","Differential Equations");
ns.thu3rd("LH-405","bse","6A","Machine Learning");
ns.thu3rd("Lab-5","bse","6B","HCI (Lab)");  
ns.thu3rd("LH-107","bse","7A","Intro. to Sociology"); 
ns.thu3rd("LH-107","bse","7B","Intro. to Sociology");
ns.thu3rd("LH-411","bse","8C","Formal Methods in SE");

ns.thu3rd("Lab 6","mcs","mcs-2","Data Struc. and Algo. (Lab)");
ns.thu3rd("LH-501","mcs","mcs-3","Web Eng. / ESD");
ns.thu3rd("LH-302","mcs","mcs-4","Net. Security");


ns.thu3rd("LH-204","bee","2B","Pak Studies");
ns.thu3rd("LH-201","bee","2C","IPE");
ns.thu3rd("LH-203","bee","4A","Electronics II");
ns.thu3rd("LH-205","bee","4B","Eletronics II");
ns.thu3rd("LH-207","bee","4C","Multivariable Cal");
ns.thu3rd("LH-202","bee","6A","Engineering Economics");
ns.thu3rd("LH-202","bee","6B","engeenering Economics");

ns.thu3rd("Control & Inst. Lab","bee","6D","Control Lab");
ns.thu3rd("601","bs(me)","4A","Engineering Fluid Mechanics I");
ns.thu3rd("603","bs(me)","4B","Mechanics of Materials II");
ns.thu3rd("407","CE","2A","Communication Skills");
ns.thu3rd("406","CE","2B","Engineering Geology");
ns.thu3rd("402","CE","4A","Advanced Surveying");
ns.thu3rd("Geotech","CE","4B","Geotech Lab");
ns.thu3rd("Hydraulics Lab","CE","6A","Water Supply Lab");
ns.thu3rd("407","CE","6B","Water Supply");
ns.thu3rd("401","CE","8A","Entrepreneurship");
ns.thu3rd("402","CE","10A","Advanced Surveying");


ns.thu4rth("LH-101","bcs","1B","App. Phy. for Engrs.");
ns.thu4rth("LH-103","bcs","2A","Electricity, Magnetism and Optics");
ns.thu4rth("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
ns.thu4rth("LH-405","bcs","2D","Discrete Structures");
ns.thu4rth("Lab-1","bcs","3B","OOP (Lab)");
ns.thu4rth("DLD Lab","bcs","3D","DLD (Lab)");
ns.thu4rth("LH-106","bcs","4A","Comm. Skills");
ns.thu4rth("Lab-3","bcs","5A","Micropro. and Assembly Language (Lab)");
ns.thu4rth("Lab-3","bcs","5C","Micropro. and Assembly Language (Lab)");
ns.thu4rth("LH-105","bcs","5D","Differential Equations");
ns.thu4rth("LH-107","bcs","6A","Pakistan Studies");
ns.thu4rth("LH-107","bcs","6B","Pakistan Studies");
ns.thu4rth("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
ns.thu4rth("LH-502","bcs","6D","Pakistan Studies");

ns.thu4rth("LH-102","bse","1B","");
ns.thu4rth("Lab 6","bse","2A","PF / ITCP (Lab)");
ns.thu4rth("LH-109","bse","3B","OOP");
ns.thu4rth("LH-302","bse","4A","Comm. Skills");
ns.thu4rth("Lab-2","bse","4B","Data Comm. and Comp. Net. (Lab)");
ns.thu4rth("LH-404","bse","5B","Scripting Languages");
ns.thu4rth("Lab 7","bse","6A","Soft. Pro.t Mgt (Lab)");
ns.thu4rth("Lab-5","bse","6B","HCI (Lab)"); 
ns.thu4rth("LH-301","bse","7A","S/W Eng. Economics"); 

ns.thu4rth("LH-104","bse","8C","HRM");
ns.thu4rth("Lab 6","mcs","mcs-1","PF / ITCP (Lab)");
ns.thu4rth("Lab-3","mcs","mcs-2","Micropro. and Assembly Language (Lab)");
ns.thu4rth("Lab-2","mcs","mcs-3","Data Comm. and Comp. Net. (Lab)");

ns.thu4rth("Drawing Hall","bee","2A","ED");
ns.thu4rth("LH-204","bee","2C","Pak Studies");
ns.thu4rth("Adv. Electro Lab","bee","4A","Electronics II Lab");
ns.thu4rth("LH-201","bee","4B","Machines");
ns.thu4rth("LH-201","bee","4C","Machines");
ns.thu4rth("DSP Lab","bee","6A","DCCN Lab");
ns.thu4rth("DSP Lab","bee","6B","DCCN Lab");
ns.thu4rth("Control & Inst. Lab","bee","6C","Control Lab");
ns.thu4rth("Machines & PE","bee","6D","PE Lab");
ns.thu4rth("603","bs(me)","2A","Engineering Statics");
ns.thu4rth("601","bs(me)","2B","Thermodynamics I");

ns.thu4rth("403","CE","2A","Engineering Geology");
ns.thu4rth("407","CE","2B","Communication Skills");
ns.thu4rth("Surveying Lab","CE","4A","Advanced Surveying Lab");

ns.thu4rth("402","CE","6B","CAD");
ns.thu4rth("406","CE","8A","RCD II (F)");
ns.thu4rth("406","CE","8B","RCD II (F)");
ns.thu4rth("Surveying Lab","CE","10A","Advanced Surveying Lab");

ns.thu5th("LH-411","bcs","1C","Intro. to ICT");
ns.thu5th("LH-104","bcs","2D","Programming Fundamentals");
ns.thu5th("Lab-1","bcs","3B","OOP (Lab)");
ns.thu5th("LH-101","bcs","3C","Intro. to Bioinformatics");
ns.thu5th("DLD Lab","bcs","3D","DLD (Lab)");
ns.thu5th("LH-106","bcs","4B","Comm. Skills");
ns.thu5th("Lab-3","bcs","5A","Micropro. and Assembly Language (Lab)");
ns.thu5th("Lab-3","bcs","5C","Micropro. and Assembly Language (Lab)");
ns.thu5th("LH-502","bcs","5D","Design & Anal. of Algo.");
ns.thu5th("LH-108","bcs","6A","Machine Learning");
ns.thu5th("Lab-8","bcs","6B","HCI (Lab)");
ns.thu5th("LH-102","bcs","6C","Pakistan Studies");
ns.thu5th("Lab-4","bcs","6D","HCI (Lab)");
ns.thu5th("LH-102","bcs","6E","Pakistan Studies");
ns.thu5th("LH-304","bcs","7A","Pattern Recognition");
ns.thu5th("LH-107","bcs","7C","Microprocessor and Assembly Language");
ns.thu5th("LH-107","bcs","7D","Microprocessor and Assembly Language");
ns.thu5th("LH-302","bse","1B","Intro. to Mgt");
ns.thu5th("LH-116","bse","2A","Discrete Structures");
ns.thu5th("LH-109","bse","2B","ECA I");
ns.thu5th("LH-410","bse","2C","ECA I");
ns.thu5th("LH-303","bse","3A","Linear Algebra");

ns.thu5th("Lab-2","bse","4B","Data Comm. and Comp. Net. (Lab)");
ns.thu5th("LH-408","bse","5A","Scripting Languages");
ns.thu5th("Lab 7","bse","6A","Soft. Pro.t Mgt (Lab)");
ns.thu5th("LH-103","bse","7A","S/W Eng. Economics"); 
ns.thu5th("LH-409","bse","8A","Enterpreneurship");

ns.thu5th("Lab 6","mcs","mcs-1","PF / ITCP (Lab)");
ns.thu5th("Lab-3","mcs","mcs-2","Micropro. and Assembly Language (Lab)");
ns.thu5th("Lab-2","mcs","mcs-3","Data Comm. and Comp. Net. (Lab)");

ns.thu5th("Drawing Hall","bee","2A","ED");
ns.thu5th("LH-204","bee","2B","ECA-I");
ns.thu5th("Adv. Electro Lab","bee","4A","Electronics II Lab");
ns.thu5th("LH-205","bee","4B","Tutorial 4B");
ns.thu5th("LH-201","bee","4C","Electronics II");
ns.thu5th("DSP Lab","bee","6A","DCCN Lab");
ns.thu5th("DSP Lab","bee","6B","DCCN Lab");
ns.thu5th("Control & Inst. Lab","bee","6C","Control Lab");
ns.thu5th("Machines & PE","bee","6D","PE Lab");
ns.thu5th("407","CE","2A","Civil Engineering Materials");
ns.thu5th("403","CE","2B","Differential Equations");
ns.thu5th("Surveying Lab","CE","4A","Advanced Surveying Lab");
ns.thu5th("402","CE","6A","Ind. Str. Analysis");
ns.thu5th("402","CE","6B","Ind. Str. Analysis");
ns.thu5th("401","CE","8A","Structural Dynamics");
ns.thu5th("406","CE","8A","Geometric Design");
ns.thu5th("401","CE","8B","Structural Dynamics");
ns.thu5th("406","CE","8B","Geometric Design");
ns.thu5th("Surveying Lab","CE","10A","Advanced Surveying Lab");


// Friday 
nS.fri1st('room', 'faculty', 'section', 'lecture name');

// console.log(nS.mon);

export default () => console.log("Thor");