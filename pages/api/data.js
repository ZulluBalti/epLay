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

nS.mon1st("108", "BCS", "1A", "Eng. Comp. & Composition");
nS.mon1st("303", "BCS", "1B", "Cal. And Ana. Geo.");
nS.mon1st("404", "BCS", "2A", "Prof. Practices IT");
nS.mon1st("Lab 5", "BCS", "3A", "OOP(Lab)");
nS.mon1st("DLD Lab", "BCS", "3C", "DLD(Lab)");
nS.mon1st("408", "BCS", "3D", "Linear Algebra");
nS.mon1st("Lab 2", "BCS", "4A", "Data Struc. and Algo.(Lab)");
nS.mon1st("Lab 6", "BCS", "4B", "Data Comm. and Comp. Net.(Lab)");
nS.mon1st("109", "BCS", "5A", "Operating Systems");
nS.mon1st("109", "BCS", "5C", "Operating Systems");
nS.mon1st("102", "BCS", "6A", "Theory of Automata");
nS.mon1st("502", "BCS", "6B", "Web Technologies");
nS.mon1st("Lab 7", "BCS", "6C", "HCI (Lab)");
nS.mon1st("Lab 7", "BCS", "6E", "HCI (Lab)");
nS.mon1st("107", "BCS", "7A", "Compiler Construction");
nS.mon1st("107", "BCS", "7B", "Compiler Construction");

nS.mon1st("205", "BEE", "2A", "ECA 1");
nS.mon1st("204", "BEE", "2C", "ODE");
nS.mon1st("201", "BEE", "4C", "PRobability");
nS.mon1st("203", "BEE", "6B", "Wireless Communication Systems");
nS.mon1st("208", "BEE", "6C", "Tutorial 6C");
nS.mon1st("202", "BEE", "8A", "Tutorial 8A");
nS.mon1st("203", "BEE", "8B", "Wireless Communication Systems");


nS.mon1st("Workshop Lab", "BME", "2A", "Workshop Practice");
nS.mon1st("603", "BME", "4A", "Circuits And Electronics");

nS.mon1st("101", "BSE", "2B", "ECA 1");
nS.mon1st("105", "BSE", "2C", "Multi. Calculas");
nS.mon1st("Lab 3", "BSE", "3B", "Intro. To Soft. Engr. (Lab)");
nS.mon1st("301 ", "BSE", "4A", "Object Orient. Soft. Engr.");
nS.mon1st("304", "BSE", "4B", "Object Orient. Soft. Engr.");
nS.mon1st("Lab 4", "BSE", "5A", "Operating Systems (Lab)");
nS.mon1st("104", "BSE", "5B", "Diffrential Equations");
nS.mon1st("501", "BSE", "6A", "Soft. Pro.t Mgt");
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

nS.mon2nd("104", "BCS", "1A", "Cal. and Ana. Geo.");
nS.mon2nd("405", "BCS", "1C", "Intro. To ICT");
nS.mon2nd("EMI & Electronics (LAb)", "BCS", "2A", "Elec. , Magnetism and Optics(Lab)");
nS.mon2nd("103", "BCS", "2C", "Prof. Practices IT");
nS.mon2nd("404", "BCS", "2D", "Programming Fundamentals");
nS.mon2nd("Lab 5", "BCS", "3A", "OOP(Lab)");
nS.mon2nd("DLD Lab", "BCS", "3C", "DLD(Lab)");
nS.mon2nd("303", "BCS", "3D", "DLD");
nS.mon2nd("101", "BCS", "4A", "Computer Architecture");
nS.mon2nd("Lab 6", "BCS", "4B", "Data Comm. and Comp. Net.(Lab)");
nS.mon2nd("411", "BCS", "5A", "Microprocessor And Assembly Language");
nS.mon2nd("411", "BCS", "5C", "Microprocessor And Assembly Language");
nS.mon2nd("408", "BCS", "5D", "Dataware Housing And Data Mining");
nS.mon2nd("107", "BCS", "6A", "Pakistan Studies");
nS.mon2nd("107", "BCS", "6B", "Pakistan Studies");
nS.mon2nd("501", "BCS", "6C", "Soft. Pro. T Mgt");
nS.mon2nd("301", "BCS", "6D", "Web Technologies");
nS.mon2nd("Lab 2", "BCS", "7A", "Micro Pro. and Assembly Language (Lab)");
nS.mon2nd("Lab 2", "BCS", "7B", "Micro Pro. and Assembly Language (Lab)");
nS.mon2nd("410", "BCS", "7C", "Compiler Construction");
nS.mon2nd("410", "BCS", "7D", "Compiler Construction");
nS.mon2nd("102", "BCS", "8B", "Enterprenourship");
nS.mon2nd("102", "BCS", "8C", "Enterprenourship");

nS.mon2nd("206", "BEE", "2B", "ECA 1");
nS.mon2nd("DLD Lab", "BEE", "2C", "DLD (Lab)");
nS.mon2nd("204", "BEE", "4A", "Probability");
nS.mon2nd("203", "BEE", "4B", "S & S");
nS.mon2nd("Machines And PE", "BEE", "4C", "Machines Lab");
nS.mon2nd("205", "BEE", "6A", "tutoiral 6B");
nS.mon2nd("205", "BEE", "6B", "tutoiral 6B");
nS.mon2nd("201", "BEE", "6D", "Power Electronics");
nS.mon2nd("202", "BEE", "8A", "DIP");

nS.mon2nd("Workshop Lab", "BME", "2A", "Workshop Practice");
nS.mon2nd("601", "BME", "2B", "Engineerinfg Statics");
nS.mon2nd("Physics and Circuits Lab", "BME", "4A", "Circuits And Electronics Lab");
nS.mon2nd("Mechanics Of Material Lab", "BME", "4B", "Mechanics Of Material Lab");

nS.mon2nd("105", "BSE", "2A", "ECA 1");
nS.mon2nd("109", "BSE", "2C", "Prof. Practices IT");
nS.mon2nd("106", "BSE", "3A", "Stat. and Prob. Theory");
nS.mon2nd("Lab 3", "BSE", "3B", "Intro. To Soft. Engr. (Lab)");
nS.mon2nd("302 ", "BSE", "4A", "Data Comm. and Comp. Net.");
nS.mon2nd("502", "BSE", "4B", "Data Struct. and Algo.");
nS.mon2nd("Lab 4", "BSE", "5A", "Operating Systems (Lab)");
nS.mon2nd("108", "BSE", "6A", "S/W Design and Archi");
nS.mon2nd("Lab 1", "BSE", "6B", "Artificial Intelligence (Lab)");
nS.mon2nd("304 ", "BSE", "8A", "Formal Method in SE");

// Monday 3rd Slot
nS.mon3rd("403", "BCE", "2B", "Differential Equations");
nS.mon3rd("Computer Lab 7", "BCE", "4A", "NC Lab");
nS.mon3rd("401", "BCE", "4B", "Geotech");
nS.mon3rd("407", "BCE", "6A", "Engg Hydrology(F)");
nS.mon3rd("407", "BCE", "8A", "Engg Hydrology(F)");
nS.mon3rd("402", "BCE", "8B", "Entrepreneurship");
nS.mon3rd("407", "BCE", "10A", "Engg Hydrology(F)");

nS.mon3rd("EMI & Electronics (LAb)", "BCS", "2A", "Elec. , Magnetism and Optics(Lab)");
nS.mon3rd("410", "BCS", "2B", "Elecricity,Magnetism And Optics");
nS.mon3rd("303", "BCS", "2C", "Discrete Structures");
nS.mon3rd("108", "BCS", "3A", "Entro. 2 Bio Informatics");
nS.mon3rd("405", "BCS", "3B", "Linear Algebra");
nS.mon3rd("106", "BCS", "4A", "Stat. And Prob. Theory");
nS.mon3rd("101", "BCS", "4B", "Computer Archetecture");
nS.mon3rd("Lab 1", "BCS", "6B", "Web Technologies (Lab)");
nS.mon3rd("Lab 2", "BCS", "7A", "Micro Pro. and Assembly Language (Lab)");
nS.mon3rd("Lab 2", "BCS", "7B", "Micro Pro. and Assembly Language (Lab)");
nS.mon3rd("409", "BCS", "7C", "Game Development");
nS.mon3rd("109", "BCS", "8A", "Net. Security");
nS.mon3rd("304", "BCS", "8B", "HRM");

nS.mon3rd("205", "BEE", "2B", "ODE");
nS.mon3rd("DLD Lab", "BEE", "2C", "DLD (Lab)");
nS.mon3rd("207", "BEE", "4A", "Multivariable Cal.");
nS.mon3rd("203", "BEE", "4B", "Probability");
nS.mon3rd("Machine and PE ", "BEE", "4C", "Machine Lab");
nS.mon3rd("201", "BEE", "6A", "DCCN");
nS.mon3rd("201", "BEE", "6B", "DCCN");
nS.mon3rd("204", "BEE", "6C", "Engineering Ecnomics");

nS.mon3rd("Workshop Lab", "BME", "2B", "Workshop Practice");
nS.mon3rd("Physics and Circuits Lab", "BME", "4A", "Circuits And Electronics Lab");
nS.mon3rd("Mechanics Of Material Lab", "BME", "4B", "Mechanics Of Material Lab");

nS.mon3rd("105", "BSE", "2A", "Multi. Calculas");
nS.mon3rd("116", "BSE", "3A", "OOP");
nS.mon3rd("302", "BSE", "3B", "Linear Algebra");
nS.mon3rd("502 ", "BSE", "4A", "Data Struct. and Algo");
nS.mon3rd("102", "BSE", "4B", "Data Comm. and Comp. Net.");
nS.mon3rd("104", "BSE", "5A", "Soft. Requir. Engr");
nS.mon3rd("501", "BSE", "6A", "Machine Learning");
nS.mon3rd("107", "BSE", "7A", "Intro. To Sociology");
nS.mon3rd("107", "BSE", "7B", "Intro. To Socialogy");
nS.mon3rd("103", "BSE", "8B", "Enterprenourship");

// Monday 4th Slot
nS.mon4th("Structures Lab ", "BCE", "2B", "Civil Engg Materials Lab");
nS.mon4th("407", "BCE", "4A", "Advanced FM");
nS.mon4th("Hydraulics Lab", "BCE", "4B", "Advanced FM Lab");
nS.mon4th("401", "BCE", "6A", "PPM");
nS.mon4th("406", "BCE", "6B", "RCD 1");
nS.mon4th("407", "BCE", "10A", "Advanced FM");
nS.mon4th("407", "BCE", "12", "Advanced FM");

nS.mon4th("108", "BCS", "2A", "Elec. , Magnetism and Optics");
nS.mon4th("110", "BCS", "2B", "Multi. Calculas");
nS.mon4th("411", "BCS", "2C", "Elec. , Magnetism and Optics");
nS.mon4th("405", "BCS", "2D", "Discrete Structures");
nS.mon4th("Lab 3", "BCS", "3A", "Intro. To Bio info. (Lab)");
nS.mon4th("410", "BCS", "3B", "Intro. To Bio info.");
nS.mon4th("Lab 1", "BCS", "4A", "Data struc. and Algo. (Lab)");
nS.mon4th("Lab 6", "BCS", "5A", "Operating System (Lab)");
nS.mon4th("Lab 6", "BCS", "5C", "Operating System (Lab)");
nS.mon4th("304", "BCS", "5D", "Operating Systems");
nS.mon4th("105", "BCS", "6A", "Human Comp. Inter");
nS.mon4th("301", "BCS", "6B", "Theory of Automata");
nS.mon4th("501", "BCS", "6C", "Human Comp. Inter");
nS.mon4th("408 ", "BCS", "6D", "Theory of Automata");
nS.mon4th("501", "BCS", "6E", "Human Comp. Inter");
nS.mon4th("107", "BCS", "8A", "HRM");
nS.mon4th("404", "BCS", "8C", "French");

nS.mon4th("201", "BEE", "2A", "IPE");
nS.mon4th("Adv. Electro Lab", "BEE", "2C", "ECA 1(Lab)");
nS.mon4th("205", "BEE", "4C", "Multivariable cal.");
nS.mon4th("202", "BEE", "6A", "A & DS");
nS.mon4th("PDT Lab", "BEE", "6C", "PDU Lab");
nS.mon4th("207", "BEE", "6D", "Engineering Economics");
nS.mon4th("DSP Lab", "BEE", "8D", "VLSI Lab");

nS.mon4th("601", "BME", "2A", "Thermodynamics 1");
nS.mon4th("Workshop Lab", "BME", "2B", "Workshop Practice");
nS.mon4th("603", "BME", "4B", "Circuits And Electronics");

nS.mon4th("302", "BSE", "1A", "Intro. To Mgt");
nS.mon4th("102", "BSE", "1B", "Intro. To ICT");
nS.mon4th("DLD Lab", "BSE", "3A", "DLD (Lab)");
nS.mon4th("101", "BSE", "3B", "Intro. To Soft. Engr.");
nS.mon4th("Lab 5 ", "BSE", "4A", "Data Comm. and Comp. Net. (Lab)");
nS.mon4th("Lab 4", "BSE", "5B", "Scripting Languages (Lab)");
nS.mon4th("409", "BSE", "6B", "S/W Eng. Economics");
nS.mon4th("103", "BSE", "7B", "S/W Design And Archi");
nS.mon4th("107", "BSE", "8A", "HRM");
nS.mon4th("404", "BSE", "8C", "French");


// Monday 5th Slot
nS.mon5th("Structures Lab ", "BCE", "2B", "Civil Engg Materials Lab");
nS.mon5th("407", "BCE", "4A", "Geotech");
nS.mon5th("Hydraulics Lab ", "BCE", "4B", "Advanced FM Lab");
nS.mon5th("403", "BCE", "6B", "PPM");
nS.mon5th("406", "BCE", "8A", "Irrigation Engg");
nS.mon5th("406", "BCE", "10A", "Irrigation Engg");
nS.mon5th("406", "BCE", "12", "Irrigation Engg");

nS.mon5th("109", "BCS", "2C", "Multi Calculas");
nS.mon5th("410", "BCS", "2D", "Electricity Magnetism And Optics");
nS.mon5th("Lab 3", "BCS", "3A", "Intro. To Bio info. (Lab)");
nS.mon5th("502", "BCS", "3C", "OOP");
nS.mon5th("103", "BCS", "3D", "Intro. To Bio info.");
nS.mon5th("Lab 6", "BCS", "5A", "Operating System (Lab)");
nS.mon5th("Lab 6", "BCS", "5C", "Operating System (Lab)");
nS.mon5th("411", "BCS", "5D", "Microprocessor and Assembly Language");
nS.mon5th("101", "BCS", "6B", "Human Comp. Inter");
nS.mon5th("301", "BCS", "6C", "Theory of Automata");
nS.mon5th("108 ", "BCS", "6D", "Data warehouse and Data Minig");
nS.mon5th("301", "BCS", "6E", "Theory of Automata");

nS.mon5th("Adv. Electro Lab", "BEE", "2C", "ECA 1 Lab");
nS.mon5th("PDT Lab", "BEE", "6C", "PDU Lab");
nS.mon5th("207", "BEE", "6D", "Control Sys.");
nS.mon5th("202", "BEE", "8A", "Project Management And Planning");
nS.mon5th("202", "BEE", "8B", "Project Management And Planning");
nS.mon5th("DSP Lab", "BEE", "8D", "VLSI Lab");

nS.mon5th("105", "BSE", "1B", "Intro. to Mgt");
nS.mon5th("302", "BSE", "2A", "Prof. Practices IT");
nS.mon5th("304", "BSE", "2C", "ECA 1");
nS.mon5th("DLD Lab ", "BSE", "3A", "DLD (Lab)");
nS.mon5th("Lab 1", "BSE", "3B", "OOP (Lab)");
nS.mon5th("Lab 5 ", "BSE", "4A", "Data Comm. and Comp. Net. (Lab)");
nS.mon5th("Lab 4", "BSE", "5B", "Scripting Languages (Lab)");
nS.mon5th("409", "BSE", "6B", "Artificial Intelligence");
nS.mon5th("102", "BSE", "7A", "S/W Design And Archi.");
nS.mon5th("104", "BSE", "7B", "S/W Eng. Economics");

// Tuesday 1st Slot
nS.tue1st("403", "BCE", "2B", "ITCP");
nS.tue1st("406", "BCE", "4A", "Mechanics of Solids 2");
nS.tue1st("407", "BCE", "4B", "Advanced FM");
nS.tue1st("402", "BCE", "6B", "Highway Engg");
nS.tue1st("401", "BCE", "8A", "Geometric Design");
nS.tue1st("401", "BCE", "8B", "Geometric Design");

nS.tue1st("107", "BCS", "1A", "Into. To ICT");
nS.tue1st("102", "BCS", "2A", "Discrete Structures");
nS.tue1st("EMI and Electronics Lab", "BCS", "2C", "Elec., Magnetism and Optics(Lab)");
nS.tue1st("Lab 5", "BCS", "3C", "OOP(Lab)");
nS.tue1st("404", "BCS", "3D", "Linear Algebra");
nS.tue1st("501", "BCS", "4B", "Stat. And Prob. Theory");
nS.tue1st("108", "BCS", "5A", "Operating Systems");
nS.tue1st("108", "BCS", "5C", "Operating Systems");
nS.tue1st("304", "BCS", "6A", "Theory of Automata");
nS.tue1st("Lab 4", "BCS", "6B", "Web Technologies (Lab)");
nS.tue1st("Lab 7", "BCS", "6C", "HCI (Lab)");
nS.tue1st("Lab 7", "BCS", "6E", "HCI (Lab)");
nS.tue1st("302", "BCS", "7A", "Compiler Construction");
nS.tue1st("302", "BCS", "7B", "Compiler Construction");
nS.tue1st("409", "BCS", "7C", "Game Development");
nS.tue1st("411", "BCS", "7D", "Computational Intelligence");
nS.tue1st("410", "BCS", "8A", "Enterpreneurship");
nS.tue1st("106", "BCS", "8C", "HRM");

nS.tue1st("208", "BEE", "2A", "ODE");
nS.tue1st("207", "BEE", "4B", "Multivariable Cal.");
nS.tue1st("203", "BEE", "4C", "Probability");
nS.tue1st("201", "BEE", "6B", "Wireless Communication Systems");
nS.tue1st("206", "BEE", "6C", "PDU");
nS.tue1st("202", "BEE", "6D", "AFD");
nS.tue1st("201", "BEE", "8B", "Wireless Communication Systems");
nS.tue1st("205", "BEE", "8C", "Tutorial 8C");
nS.tue1st("204", "BEE", "8D", "VLSI Design");

nS.tue1st("603", "BME", "2B", "Multivariable Calculus");
nS.tue1st("Physics and Circuits Lab", "BME", "4B", "Circuits And Electronics Lab");

nS.tue1st("Lab 1", "BSE", "2B", "Progr. Fundamentals (Lab)");
nS.tue1st("105", "BSE", "2C", "Multi. Calculas");
nS.tue1st("104", "BSE", "3A", "DLD");
nS.tue1st("Lab 6", "BSE", "4A", "Object Orient. Soft. Engr. (Lab)");
nS.tue1st("103", "BSE", "4B", "Object Orient. Soft. Engr.");
nS.tue1st("405", "BSE", "5A", "Operating Systems");
nS.tue1st("303", "BSE", "5B", "Diffrential Equations");
nS.tue1st("502", "BSE", "6A", "Soft. Pro.t Mgt");
nS.tue1st("101", "BSE", "6B", "S/W Design and Archi");
nS.tue1st("106", "BSE", "8B", "HRM");


// Tuesday 2nd Slot
nS.tue2nd("Structure Lab", "BCE", "2A", "Civil Engg Material Lab");
nS.tue2nd("Computer Lab 7 ", "BCE", "2B", "ITCP lab");
nS.tue2nd("401", "BCE", "4A", "Basic Structural Analysis");
nS.tue2nd("407", "BCE", "4B", "Geotech");
nS.tue2nd("406", "BCE", "6A", "Engg hydrology (F)");
nS.tue2nd("406", "BCE", "8A", "Engg hydrology (F)");
nS.tue2nd("403", "BCE", "8B", "Engg Economics");
nS.tue2nd("406", "BCE", "10A", "Engg hydrology (F)");

nS.tue2nd("106", "BCS", "1A", "App. Phy. For Engers.");
nS.tue2nd("301", "BCS", "1C", "Eng. Comp. And Composition");
nS.tue2nd("EMI and Electronics Lab", "BCS", "2C", "Elec., Magnetism and Optics(Lab)");
nS.tue2nd("303", "BCS", "3A", "Linear Algebra");
nS.tue2nd("103", "BCS", "3B", "S/W Engr. Concepts");
nS.tue2nd("Lab 5", "BCS", "3C", "OOP(Lab)");
nS.tue2nd("410", "BCS", "3D", "S/W Engr. Concepts");
nS.tue2nd("501", "BCS", "4A", "Data Comm. and Comp. Net.");
nS.tue2nd("108", "BCS", "4B", "Data Comm. and Comp. Net.");
nS.tue2nd("411", "BCS", "5D", "Operating Systems");
nS.tue2nd("302", "BCS", "6D", "Intro. to Data Science");
nS.tue2nd("302", "BCS", "6E", "Intro. to Data Science");
nS.tue2nd("408", "BCS", "7A", "Micro Pro. and Assembly Language");
nS.tue2nd("408", "BCS", "7B", "Micro Pro. and Assembly Language");
nS.tue2nd("Lab 3", "BCS", "7C", "Artificial Intelligence (Lab)");
nS.tue2nd("Lab 3", "BCS", "7D", "Artificial Intelligence (Lab)");
nS.tue2nd("104", "BCS", "8B", "Enterprenourship");
nS.tue2nd("104", "BCS", "8C", "Enterprenourship");

nS.tue2nd("208", "BEE", "2A", "DLD");
nS.tue2nd("Adv. Electro Lab", "BEE", "2B", "ECA 1 Lab");
nS.tue2nd("201", "BEE", "2C", "ECA 1");
nS.tue2nd("206", "BEE", "4A", "Probability");
nS.tue2nd("203", "BEE", "4B", "S & S");
nS.tue2nd("204", "BEE", "4C", "Electronics 2");
nS.tue2nd("209", "BEE", "6A", "DCCN");
nS.tue2nd("209", "BEE", "6B", "DCCN");
nS.tue2nd("205", "BEE", "6C", "PG");
nS.tue2nd("202", "BEE", "8A", "DLD");
nS.tue2nd("207", "BEE", "8C", "Power System Analysis");

nS.tue2nd("601", "BME", "2A", "Multivariable Calculus");
nS.tue2nd("603", "BME", "2B", "Engineering Materials");
nS.tue2nd("Mechanics Of Materials Lab", "BME", "4A", "Mechanics Of Materials Lab");
nS.tue2nd("Physics and Circuits Lab", "BME", "4B", "Circuits And Electronics Lab");

nS.tue2nd("105", "BSE", "1A", "Cal. And Ana. Geo.");
nS.tue2nd("105", "BSE", "1B", "Cal. And Ana. Geo.");
nS.tue2nd("Lab 1", "BSE", "2B", "Progr. Fundamentals (Lab)");
nS.tue2nd("Lab 4", "BSE", "2C", "Progr. Fundamentals (Lab)");
nS.tue2nd("304", "BSE", "3B", "Stat. And Prob. Theory");
nS.tue2nd("Lab 6", "BSE", "4A", "Object Orient. Soft. Engr. (Lab)");
nS.tue2nd("409", "BSE", "4B", "Data Struct. and Algo.");
nS.tue2nd("502", "BSE", "5A", "Soft. Qual. Engr.");
nS.tue2nd("109", "BSE", "5B", "Operating Systems");
nS.tue2nd("102", "BSE", "6A", "Artificial Intelligence");
nS.tue2nd("404", "BSE", "6B", "Soft. Pro.t Mgt");
nS.tue2nd("107", "BSE", "7A", "Data Minig");
nS.tue2nd("107", "BSE", "7B", "Data Minig");
nS.tue2nd("405", "BSE", "8B", "Enterprenourship");


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

nS.tue3rd("301", "BCS", "1B", "Eng. Comp. And Composition");
nS.tue3rd("Phy and Circuit Anal. Lab", "BCS", "1C", "App. Phy. For Engrs. (Lab)");
nS.tue3rd("405", "BCS", "2B", "Prof. Practices IT");
nS.tue3rd("101", "BCS", "2C", "Programming Fundamentals");
nS.tue3rd("410", "BCS", "3A", "S/W Engr. Concepts");
nS.tue3rd("411", "BCS", "3B", "Linear Algebra");
nS.tue3rd("103", "BCS", "3C", "Linear Algebra");
nS.tue3rd("Lab 1", "BCS", "4A", "Database Sys. 1(Lab)");
nS.tue3rd("408", "BCS", "5A", "Diffrential Equation");
nS.tue3rd("408", "BCS", "5C", "Diffrential Equations");
nS.tue3rd("116", "BCS", "5D", "Design And Anal. Of Algo");
nS.tue3rd("501", "BCS", "6A", "Web Eng. /Est");
nS.tue3rd("102", "BCS", "6B", "Machine Learning");
nS.tue3rd("409", "BCS", "6C", "Web Technologies");
nS.tue3rd("Lab 6", "BCS", "6D", "HCI (Lab)");
nS.tue3rd("409", "BCS", "6E", "Web Technologies");
nS.tue3rd("107", "BCS", "7A", "Artificial Intelligence");
nS.tue3rd("107", "BCS", "7B", "Artificial Intelligence");
nS.tue3rd("Lab 3", "BCS", "7C", "Artificial Intelligence (Lab)");
nS.tue3rd("Lab 3", "BCS", "7D", "Artificial Intelligence (Lab)");

nS.tue3rd("202", "BEE", "2A", "ECA 1");
nS.tue3rd("Adv. Electro Lab", "BEE", "2B", "ECA 1 (Lab)");
nS.tue3rd("205", "BEE", "2C", "ODE");
nS.tue3rd("204", "BEE", "4A", "Machines");
nS.tue3rd("208", "BEE", "4B", "Electronics 2");
nS.tue3rd("206", "BEE", "6A", "A & DS");
nS.tue3rd("207", "BEE", "6D", "Control Sys.");
nS.tue3rd("209", "BEE", "8A", "Pak Studies");
nS.tue3rd("209", "BEE", "8B", "Pak Studies");
nS.tue3rd("203", "BEE", "8D", "PRoject Managment And Planning");

nS.tue3rd("601", "BME", "2A", "Engineering Materials");
nS.tue3rd("Mechanics Of Materials Lab", "BME", "4A", "Mechanics Of Materials Lab");
nS.tue3rd("603", "BME", "4B", "Mechanics of Materials 2");

nS.tue3rd("304", "BSE", "1A", "Intro. To ICT");
nS.tue3rd("105 ", "BSE", "1B", "Cal. And Ana. Geo.");
nS.tue3rd("104", "BSE", "2A", "ECA 1");
nS.tue3rd("106", "BSE", "2B", "Multi. Calculas");
nS.tue3rd("Lab 4", "BSE", "2C", "Progr. Fundamentals (Lab)");
nS.tue3rd("303", "BSE", "3A", "Linear Algebra");
nS.tue3rd("502 ", "BSE", "4A", "Data Struct. and Algo.");
nS.tue3rd("Lab 5", "BSE", "4B", "Data Struct. and Algo. (Lab)");
nS.tue3rd("109", "BSE", "5B", "Soft. Requir. Engr.");
nS.tue3rd("404", "BSE", "6B", "Human Comp. Inter.");
nS.tue3rd("108", "BSE", "8A", "Enterprenourship");
nS.tue3rd("302", "BSE", "8B", "Formal Methods in SE");


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

nS.tue4th("303", "BCS", "1B", "App. Phy. For Engrs");
nS.tue4th("Phy and Circuit Anal. Lab ", "BCS", "1C", "App. Phy. For Engrs. (Lab)");
nS.tue4th("102", "BCS", "2A", "Programming Fundamentals");
nS.tue4th("109", "BCS", "2B", "Multi. Calculas");
nS.tue4th("411", "BCS", "2C", "Elec. , Magnetism and Optics");
nS.tue4th("304", "BCS", "2D", "Discrete Structures");
nS.tue4th("501", "BCS", "3A", "DLD");
nS.tue4th("302", "BCS", "3B", "Intro. To Bio info.");
nS.tue4th("Lab 4", "BCS", "3D", "Intro. To Bio info. (Lab)");
nS.tue4th("Lab 6", "BCS", "4A", "Data struct. and Algo. (Lab)");
nS.tue4th("Lab 2", "BCS", "5D", "Dataware. and Data minig (Lab)");
nS.tue4th("410", "BCS", "6A", "Human Comp. Inter");
nS.tue4th("408", "BCS", "6C", "Theory of Automata");
nS.tue4th("Lab 8 ", "BCS", "6D", "Dataware. and Data minig (Lab)");
nS.tue4th("408", "BCS", "6E", "Theory Of Automata");
nS.tue4th("108", "BCS", "7A", "Pattern Recogination");
nS.tue4th("LAb 3", "BCS", "7B", "Sys. and Net. Admin. (Lab)");
nS.tue4th("107", "BCS", "7C", "Microprocessor and Assembly Language");
nS.tue4th("107 ", "BCS", "7D", "Microprocessor and Assembly Language");
nS.tue4th("106", "BCS", "8B", "French");

nS.tue4th("Adv. Electro Lab", "BEE", "2A", "ECA 1 (Lab)");
nS.tue4th("205", "BEE", "2B", "IPE");
nS.tue4th("203", "BEE", "4A", "Electronics 2");
nS.tue4th("201", "BEE", "4B", "Probability");
nS.tue4th("207", "BEE", "6A", "Control Sys.");
nS.tue4th("207", "BEE", "6B", "Control Sys.");
nS.tue4th("204", "BEE", "6D", "Engineering Economics");
nS.tue4th("DSP Lab", "BEE", "8A", "DIPL");
nS.tue4th("208", "BEE", "8B", "Tutorial 8B");
nS.tue4th("202", "BEE", "8C", "Project Management And Planning");
nS.tue4th("206", "BEE", "8D", "Tutorial 8D");

nS.tue4th("601", "BME", "2B", "Thermodynamics 1");
nS.tue4th("603", "BME", "4A", "Engineering Fluid Mechanics 1");

nS.tue4th("EMI And Electronics Lab", "BSE", "2B", "ECA 1 (Lab)");
nS.tue4th("101", "BSE", "2C", "Prof. Practices IT");
nS.tue4th("105", "BSE", "3A", "Stat. And Prob. Theory");
nS.tue4th("DLD Lab", "BSE", "3B", "DLD (Lab)");
nS.tue4th("104 ", "BSE", "4A", "Database System 1");
nS.tue4th("Lab 5 ", "BSE", "4B", "Data Struct. and Algo. (Lab)");
nS.tue4th("109", "BSE", "5A", "Soft. Requir. Engr.");
nS.tue4th("301", "BSE", "6A", "Human Comp. Inter");
nS.tue4th("502", "BSE", "7A", "S/W Design And Archi.");
nS.tue4th("106", "BSE", "8B", "French");

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

nS.tue5th("103", "BCS", "1B", "Intro. To ICT");
nS.tue5th("105", "BCS", "2A", "Multi. Calculas");
nS.tue5th("101", "BCS", "2B", "Discrete Structures");
nS.tue5th("411", "BCS", "2D", "Electricity Magnetism And Optics");
nS.tue5th("408", "BCS", "3A", "Intro. To Bio info.");
nS.tue5th("Lab 4", "BCS", "3D", "Intro. To Bio info. (Lab)");
nS.tue5th("Lab 6 ", "BCS", "4B", "Data struct. and Algo. (Lab)");
nS.tue5th("501", "BCS", "5A", "DIP");
nS.tue5th("Lab 2", "BCS", "5D", "Dataware. and Data minig (Lab)");
nS.tue5th("410 ", "BCS", "6A", "Machine Learning");
nS.tue5th("302", "BCS", "6B", "Theory of Automata");
nS.tue5th("Lab 8 ", "BCS", "6D", "Data warehouse and Data Minig");
nS.tue5th("Lab 3", "BCS", "7B", "Sys. and Net. Admin. (Lab)");
nS.tue5th("107", "BCS", "7C", "Artificial Intelligence");
nS.tue5th("107", "BCS", "7D", "Artificial Intelligence");
nS.tue5th("109", "BCS", "8B", "HRM");

nS.tue5th("Adv. Electro Lab", "BEE", "2A", "ECA 1 Lab");
nS.tue5th("202", "BEE", "2B", "Tutorial 2B");
nS.tue5th("203", "BEE", "4A", "Tutorial 4A");
nS.tue5th("206", "BEE", "4C", "S & S");
nS.tue5th("207", "BEE", "6D", "Tutorial 6D");
nS.tue5th("DSP Lab", "BEE", "8A", "DIPL");
nS.tue5th("Auditorium", "BEE", "8C", "Pak Studies");
nS.tue5th("Auditorium", "BEE", "8D", "Pak Studies");

nS.tue5th("601", "BME", "2A", "Thermodynamics 1");

nS.tue5th("EMI And Electronics Lab", "BSE", "2B", "ECA 1 (Lab)");
nS.tue5th("108", "BSE", "2C", "Programming Fundamentals");
nS.tue5th("DLD Lab", "BSE", "3B", "DLD (Lab)");
nS.tue5th("104", "BSE", "4B", "Database System 1");
nS.tue5th("102", "BSE", "5A", "Diffrential Equations");
nS.tue5th("304", "BSE", "5B", "Scripting Languages (Lab)");
nS.tue5th("502", "BSE", "7B", "S/W Design And Archi.");


//First Slot - Wednesday

nS.wed1st("lab-2", "bcs" ,  "1A" , "intro to ict(lab)");
nS.wed1st("lab-5", "bcs" ,  "1B" , "intro to ict(lab)");
nS.wed1st("104","bcs","2D","prof.practice.IT");
nS.wed1st("101","bcs","3B","OOP");
nS.wed1st("106","bcs","3C","Linear algebra");
nS.wed1st("108","bcs","4A","stat and prob theory");
nS.wed1st("lab-3","bcs","4B","Data base sys.1(lab)");
nS.wed1st("102","bcs","5C","visual programming");
nS.wed1st("105","bcs","5D","differential.equation");
nS.wed1st("501","bcs","6C","soft.pro.t Mgt");
nS.wed1st("lab-6","bcs","6D","web technology(lab)");
nS.wed1st("lab-5","bcs","6E","data ware and data mining(lab)");

nS.wed1st("304","bcs","8C","net.security");
nS.wed1st("303","bse","1A","Eng. Comp. & Composition");
nS.wed1st("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
nS.wed1st("103","bse","2B","Multi. Calculus");
nS.wed1st("EMI & Electronics Lab","bse","2C","ECA I (Lab)");
nS.wed1st("409","bse","3A","DLD");
nS.wed1st("302","bse","4B","Database Systems I");
nS.wed1st("Lab-1","bse","5B","Operating Systems (Lab)");
nS.wed1st("408","bse","6A","Human Comp. Inter.");
nS.wed1st("107","bse","6B","Artificial Intelligence");

nS.wed1st("106","bse","8A","Enterpreneurship");
nS.wed1st("Lab-2","mcs","mcs-1","Intro. to ICT (Lab)");
nS.wed1st("102","mcs","mcs-3","");
nS.wed1st("501","mcs","mcs-4","Soft. Pro.t Mgt");
nS.wed1st("202","bee","2C","Tutorial 2C");
nS.wed1st("204","bee","4A","Multivariable.cal");
nS.wed1st("207","bee","4B","Multivariable.cal");
nS.wed1st("201","bee","4C","Machines");
nS.wed1st("207","bee","6C","Contorl Sys");
nS.wed1st("203","bee","6D","AFD");

nS.wed1st("WorkShop Lab","BS(ME)","2A","Workshop Practice");
nS.wed1st("603","BS(ME)","2B","Multivariable.cal");
nS.wed1st("601","BS(ME)","4A","Statistics and Probability Theory");
nS.wed1st("402","CE","2A","ITCP");
nS.wed1st("406","CE","4A","Advanced FM");
nS.wed1st("407","CE","4B","Mechanics of Solids");
nS.wed1st("401","CE","6A","Highway Engg.");
nS.wed1st("406","CE","10A","Advanced FM");
nS.wed1st("406","CE","12","Advanced FM");

//2nd slot wednesday

nS.wed2nd("Lab-2","bcs","1A","Intro. to ICT (Lab)");
nS.wed2nd("404","bcs","1C","Eng. Comp. & Composition");
nS.wed2nd("410","bcs","2B","Programming Fundamentals");
nS.wed2nd("106","bcs","2D","Multi. Calculus");
nS.wed2nd("104","bcs","3A","OOP");
nS.wed2nd("DLD Lab","bcs","3B","DLD (Lab)");
nS.wed2nd("409","bcs","3C","S/W Engr. Concepts");
nS.wed2nd("103","bcs","3D","S/W Engr. Concepts");
nS.wed2nd("102","bcs","4A","Computer Architecture");
nS.wed2nd("Lab-3","bcs","4B","Database Sys. I (Lab)");
nS.wed2nd("Lab-4","bcs","5D","Micropro. and Assembly Language (Lab)");
nS.wed2nd("408","bcs","6A","Computer Vision");
nS.wed2nd("Lab 6","bcs","6D","Lab 6");
nS.wed2nd("Lab-5","bcs","6E","Data Ware. and Data Mining (Lab)");
nS.wed2nd("303","bcs","7A","Numerical Comput.");
nS.wed2nd("303","bcs","7B","Numerical Comput.");
nS.wed2nd("302","bcs","7C","Compiler Construction");
nS.wed2nd("302","bcs","7D","Compiler Construction");
nS.wed2nd("108","bcs","8A","HRM");

nS.wed2nd("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
nS.wed2nd("304","bse","2B","Prof. Practices IT");
nS.wed2nd("EMI & Electronics Lab","bse","2C","ECA I (Lab)");
nS.wed2nd("105","bse","3B","DLD");

nS.wed2nd("502","bse","4B","Comm. Skills");
nS.wed2nd("501","bse","5A","Soft. Qual. Engr.");
nS.wed2nd("Lab-1","bse","5B","Operating Systems (Lab)");
nS.wed2nd("109","bse","6A","Artificial Intelligence");
nS.wed2nd("409","bse","6B","Human Comp. Inter.");
nS.wed2nd("107","bse","7A","Data Mining");
nS.wed2nd("107","bse","7B","Data Mining");
nS.wed2nd("108","bse","8A","HRM");

nS.wed2nd("Lab-2","mcs","mcs-1","Intro. to ICT (Lab)");
nS.wed2nd("102","mcs","mcs-3","Computer Architecture");
nS.wed2nd("109","mcs","mcs-4","Artificial Intelligence");

nS.wed2nd("208","bee","2A","DLD");
nS.wed2nd("201","bee","2B","Pak Studies");
nS.wed2nd("205","bee","2C","DLD");
nS.wed2nd("202","bee","4A","S & S");
nS.wed2nd("DSP Lab","bee","4B","S & S Lab");
nS.wed2nd("209","bee","4C","S & S");
nS.wed2nd("206","bee","6A","Contorl Sys");
nS.wed2nd("206","bee","6B","Contorl Sys");
nS.wed2nd("203","bee","6C","PG");
nS.wed2nd("Adv. Electro Lab","bee","6D","AFDL");
nS.wed2nd("207","bee","8A","Pak Studies");
nS.wed2nd("207","bee","8B","Pak Studies");

nS.wed2nd("WorkShop Lab","BS(ME)","2A","Workshop Practice");
nS.wed2nd("603","BS(ME)","4A","Circuits and Electronics"); 
nS.wed2nd("601","BS(ME)","4B","Statistics and Probability Theory");
nS.wed2nd("Computer Lab 7","CE","2A","ITCP Lab");
nS.wed2nd("402","CE","2B","Engineering Geology");
nS.wed2nd("401","CE","4A","Basic Structural Analysis");
nS.wed2nd("407","CE","4B","Geotech");
nS.wed2nd("403","CE","6A","CAD");
nS.wed2nd("403","CE","10A","CAD");

nS.wed3rd("102","bcs","1A","Eng. Comp. & Composition");
nS.wed3rd("304","bcs","1C","App. Phy. for Engrs.");
nS.wed3rd("408","bcs","2A","Prof. Practices IT");
nS.wed3rd("104","bcs","2B","Electricity, Magnetism and Optics");
nS.wed3rd("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
nS.wed3rd("303","bcs","3A","Linear Algebra");
nS.wed3rd("108","bcs","3B","OOP");
nS.wed3rd("102","bcs","3C","S/W Engr. Concepts");
nS.wed3rd("411","bcs","4B","Database Systems I");
nS.wed3rd("301","bcs","5A","Differential Equations");
nS.wed3rd("301","bcs","5C","Differential Equations");
nS.wed3rd("404","bcs","5D","Differential Equations");
nS.wed3rd("408","bcs","6B","Computer Vision");
nS.wed3rd("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
nS.wed3rd("116","bcs","6D","Human Comp. Inter.");
nS.wed3rd("302","bcs","6E","Intro. to Data Science");
nS.wed3rd("301","bcs","7A","Artificial Intelligence");
nS.wed3rd("301","bcs","7B","Artificial Intelligence");
nS.wed3rd("501","bcs","8A","French");
nS.wed3rd("101","bse","1A","Intro. to ICT");
nS.wed3rd("108","bse","1B","Eng. Comp. & Composition");
nS.wed3rd("106","bse","2A","Multi. Calculus");
nS.wed3rd("405","bse","2B","Discrete Structures");
nS.wed3rd("502","bse","2C","Discrete Structures");
nS.wed3rd("105","bse","3B","OOP");
nS.wed3rd("304","bse","4A","Database Systems I");
nS.wed3rd("Lab-1","bse","4B","Object Orient. Soft. Engr.(Lab)");
nS.wed3rd("Lab-5","bse","5A","Scripting Languages (Lab)");
nS.wed3rd("405","bse","6A","Machine Learning");
nS.wed3rd("Lab-5","bse","6B","HCI (Lab)");
nS.wed3rd("107","bse","7A","Data Mining");
nS.wed3rd("107","bse","7B","Data Mining");
nS.wed3rd("501","bse","8A","French");
nS.wed3rd("409","bse","8C","Formal Methods in SE");

nS.wed3rd("411","mcs","mcs-2","Microprocessor and Assembly Language");
nS.wed3rd("116","mcs","mcs-4","Mobile Application Development");
nS.wed3rd("204","bee","2A","IPE");
nS.wed3rd("202","bee","2B","DLD");
nS.wed3rd("DSP Lab","bee","4B","S & S Lab");
nS.wed3rd("201","bee","6A","Engineering Economics");

nS.wed3rd("Adv. Electro Lab","bee","6D","AFDL");
nS.wed3rd("209","bee","8A","Project Managment & Planning");
nS.wed3rd("209","bee","8B","Project  Managment & Planning");
nS.wed3rd("Auditorium","bee","8C","Pak Studies");
nS.wed3rd("Auditorium","bee","8D","Pak Studies");
nS.wed3rd("603","BS(ME)","2A","Engineering Statics");
nS.wed3rd("WorkShop Lab","BS(ME)","2B","Workshop Practice");

nS.wed3rd("Computer Lab 7","CE","2A","ITCP Lab");
nS.wed3rd("401","CE","2B","Communication Skills");
nS.wed3rd("Geotech","CE","4A","Geotech Lab");
nS.wed3rd("403","CE","4B","NC");
nS.wed3rd("402","CE","6A","PPM");
nS.wed3rd("407","CE","6B","402");
nS.wed3rd("FYP","CE","8A","FYP");
nS.wed3rd("FYP","CE","8B","FYP");
nS.wed3rd("407","CE","10A","Water Supply");

nS.wed4th("EMI & Electronics Lab","bcs","1B","App. Phy. for Engrs.(Lab)");
nS.wed4th("Lab 6","bcs","1C","Intro. to ICT (Lab)");
nS.wed4th("101","bcs","2A","Multi. Calculus");
nS.wed4th("Lab-4","bcs","2B","Progr. Fundamentals (Lab)");
nS.wed4th("105","bcs","2C","Discrete Structures");
nS.wed4th("102","bcs","3C","DLD");
nS.wed4th("405","bcs","4A","Comm. Skills");
nS.wed4th("502","bcs","5A","DIP");
nS.wed4th("Lab 7","bcs","6A","HCI (Lab)");
nS.wed4th("Lab-2","bcs","6C","Web Technologies (Lab)");
nS.wed4th("502","bcs","6D","Pakistan Studies");
nS.wed4th("109","bcs","7B","Systems and Networks Administration");
nS.wed4th("107","bcs","7C","Numerical Comput.");
nS.wed4th("107","bcs","7D","Numerical Comput.");
nS.wed4th("106","bcs","8B","French");

nS.wed4th("108","bse","1B","Intro. to ICT");
nS.wed4th("116","bse","2A","Multi. Calculus");
nS.wed4th("409","bse","3B","Linear Algebra");
nS.wed4th("302","bse","4A","Comm. Skills");

nS.wed4th("Lab-5","bse","5A","Scripting Languages (Lab)");
nS.wed4th("304","bse","6A","S/W Design and Archi");
nS.wed4th("301","bse","7A","S/W Eng. Economics");
nS.wed4th("404","bse","8C","HRM");
nS.wed4th("105","mcs","mcs-1","Discrete Structures");
nS.wed4th("206","bee","2A","Pak Studies");
nS.wed4th("201","bee","2B","Pak Studies");
nS.wed4th("201","bee","2C","Pak Studies");
nS.wed4th("Adv.Electro Lab","bee","4B","Electronics II Lab");
nS.wed4th("DSP Lab ","bee","4C","S & S Lab");
nS.wed4th("control & Inst. Lab","bee","6A","Control Lab");
nS.wed4th("control & Inst. Lab","bee","6B","Control Lab");
nS.wed4th("208","bee","6C","Engineering Economics");
nS.wed4th("202","bee","6D","Power Electronics");
nS.wed4th("203","bee","8C","Project Managment & Planning");
nS.wed4th("204","bee","8D","VLSI Design");
nS.wed4th("WorkShop Lab","BS(ME)","2B","Workshop Practice");
nS.wed4th("603","BS(ME)","4A","Mechanics of Materials II");
nS.wed4th("601","BS(ME)","4B","Circuits andElectronics");

nS.wed4th("403","CE","2A","Communication Skills");
nS.wed4th("407","CE","2B","Civil Engineering Materials");
nS.wed4th("Geotech","CE","4A","Geotech Lab");
nS.wed4th("406","CE","4B","Advanced Surveying");
nS.wed4th("Hydraulics Lab","CE","6A","Water Supply Lab");
nS.wed4th("Highway Engg Lab","CE","6B","Highway Lab");
nS.wed4th("401","CE","8A","PPM");
nS.wed4th("FYP","CE","8B","FYP");
nS.wed4th("FYP","CE","10A","FYP");
nS.wed4th("402","CE","12","Matrix Analysis of Structures(R)");

nS.wed5th("EMI & Electronics Lab","bcs","1B","App. Phy. for Engrs.(Lab)");
nS.wed5th("Lab 6","bcs","1C","Intro. to ICT (Lab)");
nS.wed5th("Lab-4","bcs","2B","Progr. Fundamentals (Lab)");
nS.wed5th("105","bcs","2C","Multi. Calculus");
nS.wed5th("DLD Lab","bcs","3B","DLD (Lab)");
nS.wed5th("408","bcs","3C","Intro. to Bioinformatics");
nS.wed5th("501","bcs","3D","Intro. to Bioinformatics");
nS.wed5th("104","bcs","4B","Comm. Skills");

nS.wed5th("411","bcs","5D","Microprocessor and Assembly Language");
nS.wed5th("Lab-2","bcs","6A","HCI (Lab)");
nS.wed5th("101","bcs","6B","Pakistan Studies");
nS.wed5th("101","bcs","6E","Pakistan Studies");
nS.wed5th("109","bcs","7B","Systems and Networks Administration");
nS.wed5th("302","bcs","7C","Artificial Intelligence");
nS.wed5th("302","bcs","7D","Artificial Intelligence");

nS.wed5th("108","bse","1A","Intro. to Mgt");
nS.wed5th("116","bse","2A","Discrete Structures");
nS.wed5th("301","bse","2B","Programming Fundamentals");
nS.wed5th("410","bse","2C","ECA I");
nS.wed5th("Lab-1","bse","3A","OOP (Lab)");
nS.wed5th("Lab-5","bse","4B","Database Sys. I (Lab)");
nS.wed5th("102","bse","6B","S/W Design and Archi");
nS.wed5th("206","bee","2A","Tutorial 2A");
nS.wed5th("Adv. Electro Lab","bee","4B","Electronics II Lab");
nS.wed5th("DSP Lab","bee","4C","S & S Lab");
nS.wed5th("control & Inst. Lab","bee","6A","Control Lab");
nS.wed5th("control & Inst. Lab","bee","6B","Control Lab");
nS.wed5th("208","bee","6C","Engineering Economics");
nS.wed5th("202","bee","6D","Power Electronics");
nS.wed5th("201","bee","8C","Power System Analysis");
nS.wed5th("202","bee","8D","Project Managment & Planning");

nS.wed5th("402","CE","2A","Engg Mech(F)");
nS.wed5th("402","CE","2B","Engg Mech(F)");
nS.wed5th("406","CE","4A","Advanced Surveying");
nS.wed5th("407","CE","4B","Advanced FM");
nS.wed5th("Highway Engg Lab","CE","6A","Highway Lab");
nS.wed5th("406","CE","10A","Advanced Surveying");
nS.wed5th("403","CE","12","Matrix Analysis of Structures(R)");


nS.thu1st("303","bcs","1A","Cal. and Ana. Geo.");
nS.thu1st("Lab-5","bcs","1B","Intro. to ICT (Lab)");
nS.thu1st("EMI & Electronics Lab","bcs","2B","El;c., Magnetism & Optics (Lab)");
nS.thu1st("102","bcs","2D","Prof. Practices I");
nS.thu1st("DLD Lab","bcs","3A","DLD (Lab)");
nS.thu1st("Lab-1","bcs","3B","Intro. to Bioinfo. (Lab)");
nS.thu1st("502","bcs","3D","OOP");
nS.thu1st("103","bcs","4A","Database Systems I");
nS.thu1st("408","bcs","4B","Stat. & Prob. Theory");
nS.thu1st("104","bcs","5C","Visual Programming");


nS.thu1st("404","bcs","6D","Web Technologies");
nS.thu1st("109","bcs","6E","Data Warehousing and Data Mining");
nS.thu1st("302","bcs","7A","Microprocessor and Assembly Language");
nS.thu1st("302","bcs","7B","Microprocessor and Assembly Language");
nS.thu1st("Lab-8","bcs","7C","Compiler Const. (Lab)");
nS.thu1st("Lab-8","bcs","7D","Compiler Const. (Lab)");
nS.thu1st("405","bcs","8B","Net. Security");
nS.thu1st("101","bse","1A","Eng. Comp. & Composition");
nS.thu1st("405","bse","3A","Intro. to Soft. Engr.");
nS.thu1st("105","bse","3B","Stat. & Prob. Theory");
nS.thu1st("108","bse","4A","Data Comm. and Comp. ");
nS.thu1st("Lab 7","bse","4B","Object Orient. Soft. Engr. (Lab)");
nS.thu1st("Lab-4","bse","6A","Artificial Intelligence (Lab)"); 
nS.thu1st("410","bse","6B","Soft. Pro.t Mgt");
nS.thu1st("103","mcs","mcs-1","Database Systems I");
nS.thu1st("405","mcs","mcs-2","Intro. to Soft. Engr.");
nS.thu1st("104","mcs","mcs-3","Visual Programming");
nS.thu1st("Lab-4","mcs","mcs-4","Artificial Intelligence (Lab)");
nS.thu1st("202","bee","2B","IPE");
nS.thu1st("Drawing Hall","bee","2C","ED");
nS.thu1st("203","bee","4A","S & S");
nS.thu1st("Adv. Electro Lab","bee","4C","Electronics II Lab");
nS.thu1st("Computer Lab-3","bee","6A","A&DS Lab");
nS.thu1st("603","bs(me)","2A","Multivariable Calculus");
nS.thu1st("601","bs(me)","4A","Mechanics of Materials II");
nS.thu1st("401","CE","2A","ITCP");
nS.thu1st("Hydraulics Lab","CE","4A","Advanced FM Lab");
nS.thu1st("403","CE","4B","NC");
nS.thu1st("406","CE","6A","Water Supply");
nS.thu1st("402","CE","6B","Highway Engg.");
nS.thu1st("407","CE","8B","Entrepreneurship");
nS.thu1st("Hydraulics Lab","CE","10A","Advanced FM Lab"); 
nS.thu1st("Hydraulics Lab","CE","12","Advanced FM Lab");
nS.thu2nd("108","bcs","1A","App. Phy. for Engrs.");
nS.thu2nd("Lab-5","bcs","1B","Intro. to ICT (Lab)");
nS.thu2nd("303","bcs","1C","Cal. and Ana. Geo.");
nS.thu2nd("EMI & Electronics Lab","bcs","2B","Elec., Magnetism & Optics (Lab)");
nS.thu2nd("105","bcs","2D","Multi. Calculus");
nS.thu2nd("104","bcs","3A","OOP");
nS.thu2nd("Lab-1","bcs","3B","Intro. to Bioinfo. (Lab)");
nS.thu2nd("101","bcs","3D","DLD");
nS.thu2nd("Lab-2","bcs","4A","Data Comm. and Comp. Net. (Lab)");
nS.thu2nd("405","bcs","4B","Data Comm. and Comp.Net.");
nS.thu2nd("502","bcs","5A","Design & Anal. of Algo.");
nS.thu2nd("502","bcs","5C","Design & Anal. of Algo.");
nS.thu2nd("404","bcs","5D","Data Warehousing and Data Mining");

nS.thu2nd("Lab-3","bcs","7A","Artificial Intelligence (Lab)");
nS.thu2nd("Lab-3","bcs","7B","Artificial Intelligence (Lab)");
nS.thu2nd("Lab-8","bcs","7C","Compiler Const. (Lab)");
nS.thu2nd("Lab-8","bcs","7D","Compiler Const. (Lab)");
nS.thu2nd("302","bcs","8A", "HRM");
nS.thu2nd("109","bse","2A","PF / ITCP");
nS.thu2nd("103","bse","2B","Prof. Practices IT");
nS.thu2nd("408","bse","2C","Programming Fundamentals");
nS.thu2nd("304","bse","3A","OOP");
nS.thu2nd("Lab 6","bse","4A","Data Struc. and Algo. (Lab)");
nS.thu2nd("301","bse","4B","Data Comm. and Comp.Net.");
nS.thu2nd("501","bse","5A","Soft. Qual. Engr.");
nS.thu2nd("410","bse","5B","Soft. Qual. Engr.");
nS.thu2nd("Lab-4","bse","6A","Artificial Intelligence (Lab)");
nS.thu2nd("409","bse","6B","Machine Learning");
nS.thu2nd("411","bse","8A","Formal Methods in SE");
nS.thu2nd("109","mcs","mcs-1","PF / ITCP");
nS.thu2nd("Lab 6","mcs","mcs-2","Data Struc. and Algo. (Lab)");
nS.thu2nd("301","mcs","mcs-3","Data Comm. and Comp.Net.");
nS.thu2nd("Lab-4","mcs","mcs-4","Artificial Intelligence (Lab)");

nS.thu2nd("201","bee","2A","Pak Studies");
nS.thu2nd("204","bee","2B","DLD");
nS.thu2nd("Drawing Hall","bee","2C","ED");
nS.thu2nd("202","bee","4A","Machines");
nS.thu2nd("dv. Electro Lab","bee","4C","Electronics II Lab");
nS.thu2nd("Computer Lab-3","bee","6A","A&DS Lab");
nS.thu2nd("207","bee","6C","Contorl Sys");
nS.thu2nd("Control & Inst. Lab","bee","6D","Control Lab");


nS.thu2nd("603","bs(me)","2B","Engineering Statics");
nS.thu2nd("601","bs(me)","4B","Engineering Fluid Mechanics I");
nS.thu2nd("403","CE","2A","ITCP");
nS.thu2nd("402","CE","2B","Civil Engineering Materials");
nS.thu2nd("401","CE","4A","Basic  analysis Analysis");
nS.thu2nd("Geotech","CE","4B","Geotech Lab");
nS.thu2nd("Hydraulics Lab","CE","6A","Water Supply Lab");
nS.thu2nd("Computer Lab 7","CE","6B","CAD Lab");
nS.thu2nd("406","CE","8A","Engg Economics");
nS.thu2nd("407","CE","8B","Irrigation Engg");

nS.thu3rd("304","bcs","1C","App. Phy. for Engrs.");
nS.thu3rd("408","bcs","2A","Prof. Practices IT");
nS.thu3rd("104","bcs","2B","Electricity, Magnetism and Optics");
nS.thu3rd("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
nS.thu3rd("303","bcs","3A","Linear Algebra");
nS.thu3rd("ree108","bcs","3B","OOP");
nS.thu3rd("409","bcs","3C","S/W Engr. Concepts");
nS.thu3rd("Lab-2","bcs","4A","Data Comm. and Comp. Net. (Lab)");
nS.thu3rd("102","bcs","4B","Database Systems I");
nS.thu3rd("301","bcs","5A","Differential Equations");
nS.thu3rd("301","bcs","5C","Differential Equations");
nS.thu3rd("501","bcs","6A","Web Eng. / ESD");
nS.thu3rd("101","bcs","6B","Machine Learning");
nS.thu3rd("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
nS.thu3rd("404","bcs","6D","Human Comp. Inter.");
nS.thu3rd("Lab-3","bcs","7A","Artificial Intelligence (Lab)");
nS.thu3rd("Lab-3","bcs","7B","Artificial Intelligence (Lab)");
nS.thu3rd("302","bcs","8A", "HRM");

nS.thu3rd("106","bse","1A","Cal. and Ana. Geo.");
nS.thu3rd("Phy & Circuit Anal. Lab","bse","2A","ECA I (Lab)");
nS.thu3rd("105","bse","2B","Discrete Structures");
nS.thu3rd("116","bse","2C","Discrete Structures");
nS.thu3rd("502","bse","3B","Intro. to Soft. Engr.");
nS.thu3rd("Lab 6","bse","4A","Data Struc. and Algo. (Lab)");
nS.thu3rd("109","bse","4B","Comm. Skills");
nS.thu3rd("410","bse","5A","Differential Equations");
nS.thu3rd("405","bse","6A","Machine Learning");
nS.thu3rd("Lab-5","bse","6B","HCI (Lab)");  
nS.thu3rd("107","bse","7A","Intro. to Sociology"); 
nS.thu3rd("107","bse","7B","Intro. to Sociology");
nS.thu3rd("411","bse","8C","Formal Methods in SE");

nS.thu3rd("Lab 6","mcs","mcs-2","Data Struc. and Algo. (Lab)");
nS.thu3rd("501","mcs","mcs-3","Web Eng. / ESD");
nS.thu3rd("302","mcs","mcs-4","Net. Security");


nS.thu3rd("204","bee","2B","Pak Studies");
nS.thu3rd("201","bee","2C","IPE");
nS.thu3rd("203","bee","4A","Electronics II");
nS.thu3rd("205","bee","4B","Eletronics II");
nS.thu3rd("207","bee","4C","Multivariable Cal");
nS.thu3rd("202","bee","6A","Engineering Economics");
nS.thu3rd("202","bee","6B","engeenering Economics");

nS.thu3rd("Control & Inst. Lab","bee","6D","Control Lab");
nS.thu3rd("601","bs(me)","4A","Engineering Fluid Mechanics I");
nS.thu3rd("603","bs(me)","4B","Mechanics of Materials II");
nS.thu3rd("407","CE","2A","Communication Skills");
nS.thu3rd("406","CE","2B","Engineering Geology");
nS.thu3rd("402","CE","4A","Advanced Surveying");
nS.thu3rd("Geotech","CE","4B","Geotech Lab");
nS.thu3rd("Hydraulics Lab","CE","6A","Water Supply Lab");
nS.thu3rd("407","CE","6B","Water Supply");
nS.thu3rd("401","CE","8A","Entrepreneurship");
nS.thu3rd("402","CE","10A","Advanced Surveying");


nS.thu4th("101","bcs","1B","App. Phy. for Engrs.");
nS.thu4th("103","bcs","2A","Electricity, Magnetism and Optics");
nS.thu4th("Lab-4","bcs","2C","Progr. Fundamentals (Lab)");
nS.thu4th("405","bcs","2D","Discrete Structures");
nS.thu4th("Lab-1","bcs","3B","OOP (Lab)");
nS.thu4th("DLD Lab","bcs","3D","DLD (Lab)");
nS.thu4th("106","bcs","4A","Comm. Skills");
nS.thu4th("Lab-3","bcs","5A","Micropro. and Assembly Language (Lab)");
nS.thu4th("Lab-3","bcs","5C","Micropro. and Assembly Language (Lab)");
nS.thu4th("105","bcs","5D","Differential Equations");
nS.thu4th("107","bcs","6A","Pakistan Studies");
nS.thu4th("107","bcs","6B","Pakistan Studies");
nS.thu4th("Lab-8","bcs","6C","Mobile App. Dev. (Lab)");
nS.thu4th("502","bcs","6D","Pakistan Studies");

nS.thu4th("Lab 6","bse","2A","PF / ITCP (Lab)");
nS.thu4th("109","bse","3B","OOP");
nS.thu4th("302","bse","4A","Comm. Skills");
nS.thu4th("Lab-2","bse","4B","Data Comm. and Comp. Net. (Lab)");
nS.thu4th("404","bse","5B","Scripting Languages");
nS.thu4th("Lab 7","bse","6A","Soft. Pro.t Mgt (Lab)");
nS.thu4th("Lab-5","bse","6B","HCI (Lab)"); 
nS.thu4th("301","bse","7A","S/W Eng. Economics"); 

nS.thu4th("104","bse","8C","HRM");
nS.thu4th("Lab 6","mcs","mcs-1","PF / ITCP (Lab)");
nS.thu4th("Lab-3","mcs","mcs-2","Micropro. and Assembly Language (Lab)");
nS.thu4th("Lab-2","mcs","mcs-3","Data Comm. and Comp. Net. (Lab)");

nS.thu4th("Drawing Hall","bee","2A","ED");
nS.thu4th("204","bee","2C","Pak Studies");
nS.thu4th("Adv. Electro Lab","bee","4A","Electronics II Lab");
nS.thu4th("201","bee","4B","Machines");
nS.thu4th("201","bee","4C","Machines");
nS.thu4th("DSP Lab","bee","6A","DCCN Lab");
nS.thu4th("DSP Lab","bee","6B","DCCN Lab");
nS.thu4th("Control & Inst. Lab","bee","6C","Control Lab");
nS.thu4th("Machines & PE","bee","6D","PE Lab");
nS.thu4th("603","bs(me)","2A","Engineering Statics");
nS.thu4th("601","bs(me)","2B","Thermodynamics I");

nS.thu4th("403","CE","2A","Engineering Geology");
nS.thu4th("407","CE","2B","Communication Skills");
nS.thu4th("Surveying Lab","CE","4A","Advanced Surveying Lab");

nS.thu4th("402","CE","6B","CAD");
nS.thu4th("406","CE","8A","RCD II (F)");
nS.thu4th("406","CE","8B","RCD II (F)");
nS.thu4th("Surveying Lab","CE","10A","Advanced Surveying Lab");

nS.thu5th("411","bcs","1C","Intro. to ICT");
nS.thu5th("104","bcs","2D","Programming Fundamentals");
nS.thu5th("Lab-1","bcs","3B","OOP (Lab)");
nS.thu5th("101","bcs","3C","Intro. to Bioinformatics");
nS.thu5th("DLD Lab","bcs","3D","DLD (Lab)");
nS.thu5th("106","bcs","4B","Comm. Skills");
nS.thu5th("Lab-3","bcs","5A","Micropro. and Assembly Language (Lab)");
nS.thu5th("Lab-3","bcs","5C","Micropro. and Assembly Language (Lab)");
nS.thu5th("502","bcs","5D","Design & Anal. of Algo.");
nS.thu5th("108","bcs","6A","Machine Learning");
nS.thu5th("Lab-8","bcs","6B","HCI (Lab)");
nS.thu5th("102","bcs","6C","Pakistan Studies");
nS.thu5th("Lab-4","bcs","6D","HCI (Lab)");
nS.thu5th("102","bcs","6E","Pakistan Studies");
nS.thu5th("304","bcs","7A","Pattern Recognition");
nS.thu5th("107","bcs","7C","Microprocessor and Assembly Language");
nS.thu5th("107","bcs","7D","Microprocessor and Assembly Language");
nS.thu5th("302","bse","1B","Intro. to Mgt");
nS.thu5th("116","bse","2A","Discrete Structures");
nS.thu5th("109","bse","2B","ECA I");
nS.thu5th("410","bse","2C","ECA I");
nS.thu5th("303","bse","3A","Linear Algebra");

nS.thu5th("Lab-2","bse","4B","Data Comm. and Comp. Net. (Lab)");
nS.thu5th("408","bse","5A","Scripting Languages");
nS.thu5th("Lab 7","bse","6A","Soft. Pro.t Mgt (Lab)");
nS.thu5th("103","bse","7A","S/W Eng. Economics"); 
nS.thu5th("409","bse","8A","Enterpreneurship");

nS.thu5th("Lab 6","mcs","mcs-1","PF / ITCP (Lab)");
nS.thu5th("Lab-3","mcs","mcs-2","Micropro. and Assembly Language (Lab)");
nS.thu5th("Lab-2","mcs","mcs-3","Data Comm. and Comp. Net. (Lab)");

nS.thu5th("Drawing Hall","bee","2A","ED");
nS.thu5th("204","bee","2B","ECA-I");
nS.thu5th("Adv. Electro Lab","bee","4A","Electronics II Lab");
nS.thu5th("205","bee","4B","Tutorial 4B");
nS.thu5th("201","bee","4C","Electronics II");
nS.thu5th("DSP Lab","bee","6A","DCCN Lab");
nS.thu5th("DSP Lab","bee","6B","DCCN Lab");
nS.thu5th("Control & Inst. Lab","bee","6C","Control Lab");
nS.thu5th("Machines & PE","bee","6D","PE Lab");
nS.thu5th("407","CE","2A","Civil Engineering Materials");
nS.thu5th("403","CE","2B","Differential Equations");
nS.thu5th("Surveying Lab","CE","4A","Advanced Surveying Lab");
nS.thu5th("402","CE","6A","Ind. Str. Analysis");
nS.thu5th("402","CE","6B","Ind. Str. Analysis");
nS.thu5th("401","CE","8A","Structural Dynamics");
nS.thu5th("406","CE","8A","Geometric Design");
nS.thu5th("401","CE","8B","Structural Dynamics");
nS.thu5th("406","CE","8B","Geometric Design");
nS.thu5th("Surveying Lab","CE","10A","Advanced Surveying Lab");

// Friday 
nS.fri1st('room', 'faculty', 'section', 'lecture name');

export default nS;