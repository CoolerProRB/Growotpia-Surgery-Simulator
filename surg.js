//Site: 1 -Unsanitary, 2- unclean, 3- Not Sanitized, 4 - Clean
//Fever: 1 - Normal, 2 - Climbing, 3 - Climbing Rapidly
let sick = [
    {
        case: 'Bird Flu',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 0,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 104.6,
        feverRate: 10,
        fever: 3,
        hard: 0,
        heartStop: 0,
        blood: 0
    },
    {
        case: 'Turtle Flu',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 0,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 101.6,
        feverRate: 10,
        fever: 3,
        hard: 0,
        heartStop: 0,
        blood: 0
    },
    {
        case: 'Monkey Flu',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 0,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 107.6,
        feverRate: 10,
        fever: 3,
        hard: 0,
        heartStop: 0,
        blood: 0
    },
    {
        case: 'Heart Attack',
        pulse: 3,
        Status: 1,
        site: 3,
        incisionFix: 2,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 101.2,
        feverRate: 1,
        fever: 1,
        hard: 0,
        heartStop: 0,
        blood: 0
    },
    {
        case: 'Broken Arm',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 0,
        incision: 0,
        sickSplint: 1,
        sickShattered: 0,
        sickTemp: 98.6,
        feverRate: 0,
        fever: 1,
        hard: 0,
        heartStop: 0,
        blood: 1
    },
    {
        case: 'Broken Leg',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 1,
        incision: 0,
        sickSplint: 1,
        sickShattered: 1,
        sickTemp: 98.6,
        feverRate: 0,
        fever: 1,
        hard: 0,
        heartStop: 0,
        blood: 1
    },
    {
        case: 'Nose Job',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 1,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 98.6,
        feverRate: 0,
        fever: 1,
        hard: 0,
        heartStop: 0,
        blood: 0
    },
    {
        case: 'Massive Trauma',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 3,
        incision: 0,
        sickSplint: 2,
        sickShattered: 2,
        sickTemp: 98.6,
        feverRate: 1,
        fever: 1,
        hard: 3,
        heartStop: 0,
        blood: 3
    },
    {
        case: 'Brain Tumor',
        pulse: 4,
        Status: 1,
        site: 3,
        incisionFix: 5,
        incision: 0,
        sickSplint: 0,
        sickShattered: 0,
        sickTemp: 98.6,
        feverRate: 0.5,
        fever: 1,
        hard: 0,
        heartStop: 0,
        blood: 0
    }
];


function reopen(){
    let surgBox = document.getElementById("surg");
    surgBox.classList.remove("openSurg");

    surgBox.style.height = "0vh";
    let height = 0;
    let run = setInterval(animate,1);

    function animate(){
        if(height <=85){
            surgBox.style.height = height + 'vh';
            height++;
        }
        else{
            clearInterval(run);
        }
    }
}

//Defining tools html element
let def = document.getElementById("def");
let sponge = document.getElementById("sponge");
let anes = document.getElementById("anes");
let stit = document.getElementById("stit");
let scal = document.getElementById("scal");
let ultra = document.getElementById("ultra");
let antisep = document.getElementById("antisep");
let fix = document.getElementById("fix");
let lab = document.getElementById("lab");
let antibio = document.getElementById("antibio");
let trans = document.getElementById("trans");
let splint = document.getElementById("splint");
let pins = document.getElementById("pins");
let clamp = document.getElementById("clamp");

//Surg info
let caseData = document.getElementById("case");
let pulseData = document.getElementById("pulse");
let statusData = document.getElementById("status");
let tempData = document.getElementById("temp");
let siteData = document.getElementById("site");
let incisionData = document.getElementById("incision");
let bones = document.getElementById("bones");

let process = document.getElementById("process");
let feverText = document.getElementById("fever");
let feverSpeed = document.getElementById("speed");
let bloodText = document.getElementById("blood");
let bloodSpeed = document.getElementById("losing");
let hardText = document.getElementById("hard");

//Surg result
let fail = false;
let failMsg = "";
let success = false;
let successMsg = "";
let caseMsg;
let incisionReached = false;
let wasSleep = false;
let uselessScal = false;
let antibioEffect = false;
let usedScal = false;

//Surg Data
let cases,pulse,status,temp,site,incision,incisionFix,incisionNeeded,sickSplint,sickShattered,fever,hard,heartStop,skillfail,heartStopped,blood,feverRates;

//For interval
let runs = 0;
let surgMsg = "";

//One-time use tools
let usedLab = false;
let usedUltra = false;
let fixed = false;

function start(){
    reopen();
    let startBtn = document.getElementById("start");
    let giveupBtn = document.getElementById("giveup");

    startBtn.style.display = "none";
    giveupBtn.style.display = "block";
    let randomSick = Math.floor(Math.random() * (sick.length));

    //Assign case value
    cases = sick[randomSick].case;
    pulse = sick[randomSick].pulse;
    status = sick[randomSick].Status;
    temp = sick[randomSick].sickTemp;
    site = sick[randomSick].site;
    incision = sick[randomSick].incision;

    incisionFix = sick[randomSick].incisionFix;
    incisionNeeded = sick[randomSick].incisionFix;
    sickSplint = sick[randomSick].sickSplint;
    sickShattered = sick[randomSick].sickShattered;
    fever = sick[randomSick].fever;
    hard = sick[randomSick].hard;
    heartStop = sick[randomSick].heartStop;
    blood = sick[randomSick].blood;
    feverRates = sick[randomSick].feverRate / 10;

    heartStopped = 0;
    skillfail = false;
    console.log(cases);
    run();
}

function giveUp(){
    location.href = "surg.php";
}

function run(){
    //Feverate
    feverRate();

    //Case

    //Flu
    if((cases == "Bird Flu" || cases == "Turtle Flu" || cases == "Monkey Flu") && usedLab){
        fixed = true;
        caseMsg = "Patient's is having a " + cases;
        caseData.style.color = "rgb(230, 198, 140)";
    }
    else if((cases == "Bird Flu" || cases == "Turtle Flu" || cases == "Monkey Flu") && usedLab == false){
        fixed = true;
        caseMsg = "Patient's is has not been diagnosed.";
        caseData.style.color = "red";
    }
    else if(cases == "Nose Job"){
        caseMsg = "Patient's is having a " + cases;
        caseData.style.color = "rgb(230, 198, 140)";
        usedUltra = true;
    }
    else if(usedUltra){
        caseMsg = "Patient's is having a " + cases;
        caseData.style.color = "rgb(230, 198, 140)";
    }
    else if(!usedUltra){
        caseMsg = "Patient's is has not been diagnosed.";
        caseData.style.color = "red";
    }


    //If losing blood
    switch(blood){
        case 0:
            pulse-=0;
            bloodText.innerHTML = "<span id=\"losing\"></span>";
            break;
        case 1:
            pulse-=0.125;
            bloodText.innerHTML = "Your patient is losing blood <span id=\"losing\"></span>";
            bloodSpeed = document.getElementById("losing");
            bloodSpeed.innerHTML = "slowly.";
            bloodSpeed.style.color = "blue";
            break;
        case 2:
            pulse-=0.25;
            bloodText.innerHTML = "Your patient is <span id=\"losing\"></span>";
            bloodSpeed = document.getElementById("losing");
            bloodSpeed.innerHTML = "losing blood.";
            bloodSpeed.style.color = "orange.";
            break;
        case 3:
            pulse-=0.5;
            bloodText.innerHTML = "Your patient is losing blood <span id=\"losing\"></span>";
            bloodSpeed = document.getElementById("losing");
            bloodSpeed.innerHTML = "very quickly.";
            bloodSpeed.style.color = "red";
            break;
    }

    //Pulse: 1 - Extremely Weak, 2 - Weak, 3 - Steady, 4 - Strong
    switch(true){
        case pulse >= 1 && pulse < 2:
            pulseData.innerHTML = "Extremely Weak";
            pulseData.style.color = "red";
            break;
        case pulse >= 2 && pulse < 3:
            pulseData.innerHTML = "Weak";
            pulseData.style.color = "orange";
            break;
        case pulse >= 3 && pulse < 3.75:
            pulseData.innerHTML = "Steady";
            pulseData.style.color = "blue";
            break;
        case pulse >= 3.75:
            pulseData.innerHTML = "Strong";
            pulseData.style.color = "green";
            break;
    }

    if(heartStop == 1){
        pulseData.innerHTML = "Heart Stopped!";
        pulseData.style.color = "red";
    }

    //Status: 1 - Awake, 2 - Coming to, 3 - Unconcious
    switch(true){
        case status >= 1 && status < 2:
            statusData.innerHTML = "Awake";
            statusData.style.color = "red";
            break;
        case status >= 2 && status < 3:
            statusData.innerHTML = "Coming to";
            statusData.style.color = "orange";
            break;
        case status >= 3 && status <= 4:
            statusData.innerHTML = "Unconcious";
            statusData.style.color = "green";
            break;
    }

    //Temp: 98.6 ... 100 - green, 100.01 ... 103 - blue, 103.01 ... 108 - orange , 108.01 ... 111 - red
    switch(true){
        case temp >= 98.6 && temp <= 100:
            tempData.innerHTML = temp.toFixed(1);
            tempData.style.color = "green";
            break;
        case temp >= 100.01 && temp <= 103:
            tempData.innerHTML = temp.toFixed(1);
            tempData.style.color = "blue";
            break;
        case temp >= 103.01 && temp <= 108:
            tempData.innerHTML = temp.toFixed(1);
            tempData.style.color = "orange";
            break;
        case temp >= 108.01 && temp <= 111:
            tempData.innerHTML = temp.toFixed(1);
            tempData.style.color = "red";
            break;
    }

    //Site: Unsanitary - red, unclean - orange, Not Sanitized - blue, Clean - green
    switch(site){
        case 1:
            siteData.innerHTML = "Unsanitary";
            siteData.style.color = "red";
            break;
        case 2:
            siteData.innerHTML = "unclean";
            siteData.style.color = "orange";
            break;
        case 3:
            siteData.innerHTML = "Not sanitized";
            siteData.style.color = "blue";
            break;
        case 4:
            siteData.innerHTML = "Clean";
            siteData.style.color = "green";
            break;
    }

    //Incision data
    if(incision == 0 && (incision != incisionFix)){
        incisionData.innerHTML = incision;
        incisionData.style.color = "blue";
    }
    else if(incision == 0 && (incision == incisionFix)){
        incisionData.innerHTML = incision;
        incisionData.style.color = "green";
    }
    else if(incision > 0 && (incision != incisionFix)){
        incisionData.innerHTML = incision;
        incisionData.style.color = "blue";
    }
    else if(incision > 0 && (incision == incisionFix)){
        incisionData.innerHTML = incision;
        incisionData.style.color = "green";
    }

    if(incisionFix == incision){
        incisionReached = true;
    }

    if(incisionReached && incisionNeeded != 0){
        caseMsg = "You have reached the operation organ.";
        caseData.style.color = "rgb(230, 198, 140)";
    }

    //Fever Message
    switch(fever){
        case 1:
            feverText.innerHTML = "<span id=\"speed\"></span>";
            break;
        case 2:
            feverText.innerHTML = "Your patient fever is <span id=\"speed\"></span>";
            feverSpeed = document.getElementById("speed");
            feverSpeed.innerHTML = "climbing.";
            feverSpeed.style.color = "orange";
            break;
        case 3:
            feverText.innerHTML = "Your patient fever is <span id=\"speed\"></span>";
            feverSpeed = document.getElementById("speed");
            feverSpeed.innerHTML = "climbing rapidly.";
            feverSpeed.style.color = "red";
            break;
    }

    //Bones
    if(usedUltra){
        if(sickSplint > 0 && sickShattered > 0){
            bones.innerHTML = sickSplint + " Brokens, " + sickShattered + " Shattered";
            if(sickSplint > 1){
                bones.style.color = "red";
            }
            else{
                bones.style.color = "orange";
            }

            if(sickShattered > 1){
                bones.style.color = "red";
            }
            else{
                bones.style.color = "orange";
            }
        }
        else if(sickSplint > 0){
            bones.innerHTML = sickSplint + " Brokens";
            if(sickSplint > 1){
                bones.style.color = "red";
            }
            else{
                bones.style.color = "orange";
            }
        }
        else if(sickShattered > 0){
            bones.innerHTML = sickShattered + " Shattered";
            if(sickShattered > 1){
                bones.style.color = "red";
            }
            else{
                bones.style.color = "orange";
            }
        }
        else{
            bones.innerHTML = "";
        }
    }

    //Hard to see
    switch(true){
        case hard >= 0 && hard < 1.5:
            hardText.innerHTML = "";
            break;
        case hard >= 1.5 && hard < 3:
            hardText.innerHTML = "It is becoming hard to see your work.";
            hardText.style.color = "orange";
            break;
        case 3:
            hardText.innerHTML = "You can't see what you are doing!";
            hardText.style.color = "red";
            break;
    }

    process.innerHTML = surgMsg;
    caseData.innerHTML = caseMsg;
    //Fail

    //Heartstop
    if(heartStopped >= 2){
        fail = true;
        failMsg = "Patient heart has stopped!";
    }

    //Temp
    if(temp > 110){
        fail = true;
        failMsg = "Patient overheated!";
    }

    //Status
    if(status > 4){
        fail = true;
        failMsg = "Patient has go in to a sleep forever!";
    }

    //Awake with incision
    if(status == 1 && incision > 0){
        if(wasSleep == false){
            fail = true;
            failMsg = "You cannot cut your patient while they are awake!";
        }
        else if(wasSleep){
            blood++;
        }
    }
    else if(uselessScal && status == 1){
        fail = true;
        failMsg = "You cannot cut your patient while they are awake!";
    }

    if(fail){
        alert("You have failed to save your patient from " + cases);
        window.location.replace("surg.php");
    }
    //Success
    if(fixed && temp < 100 && sickShattered == 0 && sickSplint == 0 && heartStop == 0){
        successs();
    }
    console.log(fixed + " " + temp + " " + sickShattered + " " + sickSplint);
    console.log(surgMsg);
    console.log(failMsg);
    console.log(successMsg);

    //Tools appear
    
    //Defribillator
    if(heartStop == 1 && hard != 3){
        def.innerHTML = "<span class=\"def\"></span>";
        def.setAttribute("onClick","defribillator()");
    }
    else if(heartStop == 0){
        def.innerHTML = "<span class=\"empty\"></span>";
        def.setAttribute("onClick","reopen()");
    }

    //Sponge
    sponge.innerHTML = "<span class=\"sponge\"></span>";
    sponge.setAttribute("onClick","sponges()");

    //Anesthetic
    if(hard != 3){
        anes.innerHTML = "<span class=\"anes\"></span>"
        anes.setAttribute("onClick","anesthetic()");
    }
    else{
        anes.innerHTML = "<span class=\"empty\"></span>";
        anes.setAttribute("onClick","reopen()");
    }

    //Stitches
    if(hard != 3){
        stit.innerHTML = "<span class=\"stit\"></span>";
        stit.setAttribute("onClick","stitches()");
    }
    else{
        stit.innerHTML = "<span class=\"empty\"></span>";
        stit.setAttribute("onClick","reopen()");
    }

    //Scalpel
    if(hard != 3){
        scal.innerHTML = "<span class=\"scal\"></span>";
        scal.setAttribute("onClick","scalpel()");
    }
    else{
        scal.innerHTML = "<span class=\"empty\"></span>";
        scal.setAttribute("onClick","reopen()");
    }

    //Ultrasound
    if(hard != 3 && usedUltra == false){
        ultra.innerHTML = "<span class=\"ultra\"></span>";
        ultra.setAttribute("onClick","ultrasound()");
    }
    else{
        ultra.innerHTML = "<span class=\"empty\"></span>";
        ultra.setAttribute("onClick","reopen()");
    }

    //Antiseptic
    if(hard!= 3){
        antisep.innerHTML = "<span class=\"antisep\"></span>";
        antisep.setAttribute("onClick","antiseptic()");
    }
    else{
        antisep.innerHTML = "<span class=\"empty\"></span>";
        antisep.setAttribute("onClick","reopen()");
    }

    //Fix It
    if(incisionReached && hard != 3 && usedUltra && !fixed){
        fix.innerHTML = "<span class=\"fix\"></span>";
        fix.setAttribute("onClick","fixIt()");
    }
    else{
        fix.innerHTML = "<span class=\"empty\"></span>";
        fix.setAttribute("onClick","reopen()");
    }

    //Labkit
    if(hard != 3 && !usedLab){
        lab.innerHTML = "<span class=\"lab\"></span>";
        lab.setAttribute("onClick","labkit()");
    }
    else{
        lab.innerHTML = "<span class=\"empty\"></span>";
        lab.setAttribute("onClick","reopen()");
    }

    //Antibiotic
    if(hard != 3 && usedLab){
        antibio.innerHTML = "<span class=\"antibio\"></span>";
        antibio.setAttribute("onClick","antibiotic()");
    }
    else{
        antibio.innerHTML = "<span class=\"empty\"></span>";
        antibio.setAttribute("onClick","reopen()");
    }

    //Transfusion
    if(hard != 3 && (pulse != 4 || incision > 1 || usedScal)){
        trans.innerHTML = "<span class=\"trans\"></span>";
        trans.setAttribute("onClick","transfusion()");
    }
    else{
        trans.innerHTML = "<span class=\"empty\"></span>";
        trans.setAttribute("onClick","reopen()");
    }

    //Splint
    if(hard!= 3 && usedUltra){
        splint.innerHTML = "<span class=\"splint\"></span>";
        splint.setAttribute("onClick","splints()");
    }
    else{
        splint.innerHTML = "<span class=\"empty\"></span>";
        splint.setAttribute("onClick","reopen()");
    }

    //Pins
    if(hard!= 3 && incision > 0){
        pins.innerHTML = "<span class=\"pins\"></span>";
        pins.setAttribute("onClick","pinss()");
    }
    else{
        pins.innerHTML = "<span class=\"empty\"></span>";
        pins.setAttribute("onClick","reopen()");
    }

    //Clamp
    if(hard!= 3 && incision > 0){
        clamp.innerHTML = "<span class=\"clamp\"></span>";
        clamp.setAttribute("onClick","clamps()");
    }
    else{
        clamp.innerHTML = "<span class=\"empty\"></span>";
        clamp.setAttribute("onClick","reopen()");
    }
}

//Tools function

function defribillator(){
    reopen();
    console.log("Defribillator");
    if(skillfail){
        heartStop = 1;
        heartStopped++;
        surgMsg = "Skill fail"
    }
    else if(skillfail == false){
        heartStop = 0;
        heartStopped = 0;
        surgMsg = "You have bring your patient back to life!";
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function sponges(){
    reopen();
    console.log("sponges");
    if(skillfail){
        hard = hard;
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        if(incision > 3){
            hard-=1;
            surgMsg = "You have mopped the site.";
        }
        else{
            hard = 0;
            surgMsg = "You have mopped the site.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function anesthetic(){
    reopen();
    console.log("anesthetic");
    if(skillfail){
        surgMsg = "Skill fail";

        if(status > 1){
            status -= 0.25;
            wasSleep = true;
        }

        if(statusData.innerHTML <= 1){
            wasSleep = false;
        }
    }
    else if(skillfail == false && status < 4){
        status = 4;
        surgMsg = "You have put your patient in to a deep sleep.";
    }
    else if(status == 4){
        status = 8;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function stitches(){
    reopen();
    console.log("stitches");
    if(skillfail){
        surgMsg = "Skill fail";
        hard+=0.5;
    }
    else if(skillfail == false){
        if(incision == 0 && blood <= 0){
            surgMsg = "You stitched up patient mouth!";
        }

        if(blood > 0){
            blood-=1;
            hard+=0.5;
            surgMsg = "You stitched up the wound.";
        }

        if(incision > 0){
            incision-=1;
            hard+=0.5;
            if(incisionReached){
                incisionFix-=1;
            }
            surgMsg = "You closed an incision.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(site > 1){
        site -=0.25;
        if(site == 3){
            site = 2;
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function scalpel(){
    reopen();
    console.log("scalpel");
    usedScal = true;
    if(incision < incisionNeeded){
        if(skillfail){
            incision+=1;
            blood++;
            hard++;
            surgMsg = "Skill fail";  
        }
        else if(skillfail == false){
            incision+=1;
            hard++;
            surgMsg = "You have made an incision.";
        }
    }
    else if(incision == incisionNeeded && incisionNeeded != 0){
        blood++;
        hard++;
        surgMsg = "Operation site is reached!";
    }
    else if(incision == incisionNeeded && incisionNeeded == 0){
        uselessScal = true;
        surgMsg = "Operation site is reached!";
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(site > 1){
        site -=0.25;
        if(site == 3){
            site = 2;
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function ultrasound(){
    reopen();
    console.log("ultrasound");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        surgMsg = "You have scanned your patient.";
        usedUltra = true;
    }

    if(cases == "Broken Arm" || cases == "Broken Leg" || cases == "Bird Flu" || cases == "Turtle Flu" || cases == "Monkey Flu"){
        surgMsg = "No fix needed";
        fixed = true;
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function antiseptic(){
    reopen();
    console.log("antiseptic");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        if(site != 1){
            site = 4;
            surgMsg = "You have sanitized the operation site.";
        }
        else if(site == 1){
            site = 2;
            surgMsg = "You have sanitized the operation site.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }
    run();
}

function fixIt(){
    reopen();
    console.log("fixIt");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        fixed = true;
        surgMsg = "You have fixed the operation site.";
    }
    
    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(site > 1){
        site -=0.25;
        if(site == 3){
            site = 2;
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

function labkit(){
    reopen();
    console.log("labkit");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        usedLab = true;
        surgMsg = "You have used labkit.";

    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

function antibiotic(){
    reopen();
    console.log("antibiotic");
    if(skillfail){
        surgMsg = "Skill fail";
        if(fever == 2){
            temp+=1.2;
        }
        else if(fever == 3){
            if(temp >= 108.5 && temp < 110){
                temp = 110;
            }
            else{
                temp += 1.72;
            }
        }
    }
    else if(skillfail == false){
        surgMsg = "You have reduced your patient temparature.";
        
        if(antibioEffect){
            temp-=0.22;
            antibioEffect = false;

        }

        antibioEffect = true;

        if(fever == 1){
            temp -= 2.22;
            if(temp < 100){
                temp = 98.6;
                fever = 1;
            }
        }
        else if(fever == 2){
            temp+=1.2;
            temp-= 2.22;
            if(temp < 100){
                temp = 98.6;
                fever = 1;
            }
            else if(temp >= 104 && temp < 106){
                fever = 2;
            }
            else if(temp >= 100 && temp < 104){
                fever = 1;
            }
        }
        else if(fever == 3){
            if(temp >= 108 && temp < 110){
                temp = 110;
                temp-= 2.22;
            }
            else{
                temp -= 2.22;
                fever = 2;
            }

            if(temp < 100){
                temp = 98.6;
                fever = 1;
            }
        }
    }
    
    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    run();
}

function transfusion(){
    reopen();
    console.log("transfusion");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        surgMsg = "Patient pulse increased.";
        pulse++;
        if(pulse >= 4){
            pulse = 4;
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

function splints(){
    reopen();
    console.log("splint");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false && usedUltra){
        if(sickSplint > 0){
            sickSplint--;
            surgMsg = "You have fixed a broken bone.";
        }
        else{
            surgMsg = "You used splint on yourself.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

function pinss(){
    reopen();
    console.log("pins");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        if(sickShattered > 0){
            surgMsg = "You pinned a shattered bones.";
            sickShattered-=1;
            sickSplint+=1;
        }
        else{
            surgMsg = "You used pins on yourself.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

function clamps(){
    reopen();
    console.log("clamp");
    if(skillfail){
        surgMsg = "Skill fail";
    }
    else if(skillfail == false){
        if(blood > 0){
            blood-=1;
            hard++;
            surgMsg = "You stopped the bleed.";
        }
    }

    if(status > 1){
        status -= 0.25;
        wasSleep = true;
    }

    if(incision > 1){
        if(site > 1){
            site -=0.25;
            if(site == 3){
                site = 2;
            }
        }
    }

    if(fever == 2){
        temp+=1.2;
    }
    else if(fever == 3){
        if(temp >= 107 && temp < 110){
            temp = 110;
        }
        else{
            temp += 1.72;
        }
    }

    if(antibioEffect){
        temp-=0.22;
        antibioEffect = false;

    }

    run();
}

//Success
function successs(){
    alert("You saved your patient from " + cases);
    window.location.replace("surg.php");
}

//Fever
function feverRate(){
    let random = Math.random();
    if(fever == 1 && !antibioEffect && runs > 3){
        if(random <= feverRates){
            fever = 2;
            temp+=1.2;
        }
    }
    else{
        if(temp >= 105 && !antibioEffect){
            fever = 3;
        }
    }
    runs++;
    console.log(random + " " + feverRates);
}