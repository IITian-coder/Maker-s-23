function addNewEQField() {
    let newNode = document.createElement("div")
    // newNode.setAttribute("border", '3px solid black');
    newNode.classList.add('border');
    newNode.classList.add('border-light');
    newNode.classList.add('my-3');
    newNode.classList.add('p-3');


    let degl = document.createElement("label");

    degl.innerHTML = ("Degree/Examination")
    degl.classList.add('form-label')



    let degi = document.createElement("input");
    degi.type = ("text");
    degi.classList.add('form-control');
    degi.classList.add('degField')


    newNode.appendChild(degl);
    newNode.appendChild(degi);


    //---------------------------------------------------------------------------
    let gradyrl = document.createElement("label");
    gradyrl.innerHTML = ("Graduation Year")
    gradyrl.classList.add('form-label')

    let gradyri = document.createElement("input");
    gradyri.type = ("number");
    gradyri.classList.add('form-control');
    gradyri.classList.add('gradyrField');


    newNode.appendChild(gradyrl);
    newNode.appendChild(gradyri);
    // ----------------------------------------------------------
    let instl = document.createElement("label");
    instl.innerHTML = ("Institute/Board")
    instl.classList.add('form-label')

    let insti = document.createElement("input");
    insti.type = ("text");
    insti.classList.add('form-control');
    insti.classList.add('clgField');


    newNode.appendChild(instl);
    newNode.appendChild(insti);
    // --------------------------------------------------------------

    let cgpl = document.createElement("label");
    cgpl.innerHTML = ("CGPA/Percentage")
    cgpl.classList.add('form-label')

    let cgpi = document.createElement("input");
    cgpi.type = ("text");
    cgpi.classList.add('form-control');
    cgpi.classList.add('cgpaField');


    newNode.appendChild(cgpl);
    newNode.appendChild(cgpi);
    // ---------------------------------------------------------------
    let eqOB = document.getElementById('eq');
    let eqAddButtonOB = document.getElementById("eqAddButton");
    eqOB.insertBefore(newNode, eqAddButtonOB);

}

function addNewWEField() {
    let newNode = document.createElement("div")
    // newNode.setAttribute("border", '3px solid black');
    newNode.classList.add('border');
    newNode.classList.add('border-light');
    newNode.classList.add('my-3');
    newNode.classList.add('p-3');


    let cnamel = document.createElement("label");
    cnamel.classList.add('form-label');
    cnamel.innerHTML = ("Company's name");


    let cnamei = document.createElement("input");
    cnamei.type = ("text");
    cnamei.classList.add('form-control');
    cnamei.classList.add('weCNameField');


    newNode.appendChild(cnamel);
    newNode.appendChild(cnamei);
    // ---------------Starting Date--------------------------------------

    let weduration = document.createElement("div");
    weduration.classList.add('row');

    let startcol = document.createElement("div");
    startcol.classList.add('col');

    let endcol = document.createElement("div");
    endcol.classList.add('col');


    let startdatel = document.createElement("label");
    startdatel.innerHTML = ("Joining Month");
    startdatel.classList.add('form-label');

    let startdatei = document.createElement("input");
    startdatei.type = ("month");
    startdatei.classList.add('form-control');
    startdatei.classList.add('weStartDateField');


    // --------------------Ending date---------------------------------

    let enddatel = document.createElement("label");
    enddatel.innerHTML = ("Ending Month");
    enddatel.classList.add('form-label');

    let enddatei = document.createElement("input");
    enddatei.type = ("month");
    enddatei.classList.add('form-control');
    enddatei.classList.add('weEndDateField');

    startcol.appendChild(startdatel);
    startcol.appendChild(startdatei);
    endcol.appendChild(enddatel);
    endcol.appendChild(enddatei);

    weduration.appendChild(startcol);
    weduration.appendChild(endcol);
    newNode.appendChild(weduration);
    // ---------------------Post------------------------------

    let postl = document.createElement("label");
    postl.innerHTML = ("Position");
    postl.classList.add('form-label');

    let posti = document.createElement("input");
    posti.type = ("text");
    posti.classList.add('form-control');
    posti.classList.add('wePostField');


    newNode.appendChild(postl);
    newNode.appendChild(posti);

    // ---------------------Description---------------------------------

    let wedesl = document.createElement("label");
    wedesl.innerHTML = ("Description");
    wedesl.classList.add('form-label');

    let wedesi = document.createElement("input");
    wedesi.type = ("text");
    wedesi.classList.add('form-control');
    wedesi.classList.add('weDesField');


    newNode.appendChild(wedesl);
    newNode.appendChild(wedesi);

    // -------------------------------------------------------------

    let weOB = document.getElementById('we');
    let weAddButtonOB = document.getElementById("weAddButton");
    weOB.insertBefore(newNode, weAddButtonOB);
}

function addNewProjField() {
    let projnewNode = document.createElement("div")
    projnewNode.classList.add('border');
    projnewNode.classList.add('border-light');
    projnewNode.classList.add('my-3');
    projnewNode.classList.add('p-3');


    let pnamel = document.createElement("label");
    pnamel.classList.add('form-label');
    pnamel.innerHTML = ("Project's Name");

    let pnamei = document.createElement("input");
    pnamei.type = ("text");
    pnamei.classList.add('form-control');
    pnamei.classList.add('projwePostField');

    projnewNode.appendChild(pnamel);
    projnewNode.appendChild(pnamei);
    // ---------------------------------------------------------------

    let projduration = document.createElement("div");
    projduration.classList.add('row');

    let pstartcol = document.createElement("div");
    pstartcol.classList.add('col');

    let pendcol = document.createElement("div");
    pendcol.classList.add('col');


    let pstartdatel = document.createElement("label");
    pstartdatel.innerHTML = ("Joining Month");
    pstartdatel.classList.add('form-label');

    let pstartdatei = document.createElement("input");
    pstartdatei.type = ("month");
    pstartdatei.classList.add('form-control');
    pstartdatei.classList.add('projweStartDateField');

    // -----------------------------------------------------------------

    let penddatel = document.createElement("label");
    penddatel.innerHTML = ("Ending Month");
    penddatel.classList.add('form-label');

    let penddatei = document.createElement("input");
    penddatei.type = ("month");
    penddatei.classList.add('form-control');
    penddatei.classList.add('projweEndDateField');


    pstartcol.appendChild(pstartdatel);
    pstartcol.appendChild(pstartdatei);
    pendcol.appendChild(penddatel);
    pendcol.appendChild(penddatei);

    projduration.appendChild(pstartcol);
    projduration.appendChild(pendcol);
    projnewNode.appendChild(projduration);
    // ----------------------------------------------------------------

    let porgnamel = document.createElement("label");
    porgnamel.innerHTML = ("Company/Organisation's name");
    porgnamel.classList.add('form-label');

    let porgnamei = document.createElement("input");
    porgnamei.type = ("text");
    porgnamei.classList.add('form-control');
    porgnamei.classList.add('projweCNameField');


    projnewNode.appendChild(porgnamel);
    projnewNode.appendChild(porgnamei);

    // ---------------------------------------------------------------

    let projdesl = document.createElement("label");
    projdesl.classList.add('form-label')
    projdesl.innerHTML = ("Project Description")

    let projdesi = document.createElement("input");
    projdesi.type = ("text");
    projdesi.classList.add('form-control');
    projdesi.classList.add('projweDesField');


    projnewNode.appendChild(projdesl);
    projnewNode.appendChild(projdesi);

    // -------------------------------------------------------------

    let projOB = document.getElementById('proj');
    let projAddButtonOB = document.getElementById("projAddButton");
    projOB.insertBefore(projnewNode, projAddButtonOB);
}

function generateCV() {
    // Personal info
    let nameField = document.getElementById("nameField").value;
    tempName.innerHTML = nameField

    tempYr.innerHTML = document.getElementById("yrField").value;
    tempSem.innerHTML = document.getElementById("semField").value;
    tempBranch.innerHTML = document.getElementById("branchField").value;
    tempContact.innerHTML = document.getElementById("contactField").value;
    tempEmail.innerHTML = document.getElementById("emailField").value;
    tempEnrollno.innerHTML = document.getElementById("enrollnoField").value;

    // Area of intrest
    tempIntrest.innerHTML = document.getElementById("intrestField").value;

    // Educational qualifications (Dynamically adding table)

    // forming array of data 

    let degField = document.getElementsByClassName("degField");
    let degarr = [];
    for (let e of degField) {
        degarr.push(e.value);
    }


    let gradyrField = document.getElementsByClassName("gradyrField");
    let gradyrarr = [];
    for (let e of gradyrField) {
        gradyrarr.push(e.value);
    }


    let cgpaField = document.getElementsByClassName("cgpaField");
    let cgpaarr = [];
    for (let e of cgpaField) {
        cgpaarr.push(e.value);
    }


    let clgField = document.getElementsByClassName("clgField");
    let clgarr = [];
    for (let e of clgField) {
        clgarr.push(e.value);
    }

    // adding data array to table

    for (var count = 0; count < degarr.length; count++) {
        var newRow = tempEq.insertRow();
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);

        newCell1.innerHTML = gradyrarr[count];
        newCell2.innerHTML = degarr[count];
        newCell3.innerHTML = clgarr[count];
        newCell4.innerHTML = cgpaarr[count];
    }


    // work Expirence/ Interships

    // ---------------alloting variables to make we dynamically------------------


    // forming array of data from the form
    sdatearr = [];
    edatearr = [];
    compnamearr = [];
    positionarr = [];
    desparr = [];


    let weStartDateField = document.getElementsByClassName("weStartDateField");
    let weEndDateField = document.getElementsByClassName("weEndDateField");
    let weCNameField = document.getElementsByClassName("weCNameField");
    let wePostField = document.getElementsByClassName("wePostField");
    let weDesField = document.getElementsByClassName("weDesField");


    for (let e of weStartDateField) {
        sdatearr.push(e.value);
    }

    for (let e of weEndDateField) {
        edatearr.push(e.value);
    }

    for (let e of weCNameField) {
        compnamearr.push(e.value);
    }

    for (let e of wePostField) {
        positionarr.push(e.value);
    }

    for (let e of weDesField) {
        desparr.push(e.value);
    }


    // forming new sections
    for (count = 0; count < sdatearr.length; count++) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("m-0");

        let col1 = document.createElement("div")
        col1.classList.add("col-md-6");

        let span1 = document.createElement("span");
        span1.classList.add("chead");

        let span2 = document.createElement("span");
        span2.classList.add("company");

        let col2 = document.createElement("div");
        col2.classList.add("col-md-6");

        let para1 = document.createElement("p");
        para1.classList.add("resumedate");

        let spanStartDate = document.createElement("span");

        let spanEndDate = document.createElement("span");

        let verticalLine = document.createElement("span");
        verticalLine.id= "vLine";
        verticalLine.innerHTML = " &#124; ";

        let hyphen = document.createElement("span");
        hyphen.innerHTML = " to ";
        
        let horizontalLine = document.createElement("Span");
        horizontalLine.innerHTML = "&#126;";


        let para2 = document.createElement("p");

        // structurizing the template
        col1.appendChild(span1);
        col1.appendChild(verticalLine);
        col1.appendChild(span2);
        para1.appendChild(horizontalLine);
        para1.appendChild(spanStartDate);
        para1.appendChild(hyphen);
        para1.appendChild(spanEndDate);
        col2.appendChild(para1);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(para2);

        span1.innerHTML = positionarr[count];
        spanStartDate.innerHTML = sdatearr[count];
        spanEndDate.innerHTML = edatearr[count];
        span2.innerHTML = compnamearr[count];
        para2.innerHTML = desparr[count];

        let newWediv = document.getElementById("wetemplate");
        let weEnd = document.getElementById("weEnd");
        newWediv.insertBefore(row, weEnd);
    }


    // Projects

    // forming array of data from the form
    projsdatearr = [];
    projedatearr = [];
    projcompnamearr = [];
    projpositionarr = [];
    projdesparr = [];


    let projweStartDateField = document.getElementsByClassName("projweStartDateField");
    let projweEndDateField = document.getElementsByClassName("projweEndDateField");
    let projweCNameField = document.getElementsByClassName("projweCNameField");
    let projwePostField = document.getElementsByClassName("projwePostField");
    let projweDesField = document.getElementsByClassName("projweDesField");


    for (let e of projweStartDateField) {
        projsdatearr.push(e.value);
    }

    for (let e of projweEndDateField) {
        projedatearr.push(e.value);
    }

    for (let e of projweCNameField) {
        projcompnamearr.push(e.value);
    }

    for (let e of projwePostField) {
        projpositionarr.push(e.value);
    }

    for (let e of projweDesField) {
        projdesparr.push(e.value);
    }


    // forming new sections
    for (count = 0; count < projpositionarr.length; count++) {

        let prow = document.createElement("div");
        prow.classList.add("row");
        prow.classList.add("m-0");

        let pcol1 = document.createElement("div")
        pcol1.classList.add("col-md-6");


        let pspan1 = document.createElement("span");
        pspan1.classList.add("chead");

        let pspan2 = document.createElement("span");
        pspan2.classList.add("company");

        let pcol2 = document.createElement("div");
        pcol2.classList.add("col-md-6");

        let ppara1 = document.createElement("p");
        ppara1.classList.add("resumedate");

        let pspanStartDate = document.createElement("span");

        let pspanEndDate = document.createElement("span");

        let pverticalLine = document.createElement("span");
        pverticalLine.id= "vLine";
        pverticalLine.innerHTML = " &#124; ";

        let phyphen = document.createElement("span");
        phyphen.innerHTML = " to ";
        
        let phorizontalLine = document.createElement("Span");
        phorizontalLine.innerHTML = "&#126;";


        let ppara2 = document.createElement("p");

        // structurizing the template
        pcol1.appendChild(pspan1);
        pcol1.appendChild(pverticalLine);
        pcol1.appendChild(pspan2);
        ppara1.appendChild(phorizontalLine);
        ppara1.appendChild(pspanStartDate);
        ppara1.appendChild(phyphen);
        ppara1.appendChild(pspanEndDate);
        pcol2.appendChild(ppara1);
        prow.appendChild(pcol1);
        prow.appendChild(pcol2);
        prow.appendChild(ppara2);

        pspan1.innerHTML = projpositionarr[count];
        pspanStartDate.innerHTML = projsdatearr[count];
        pspanEndDate.innerHTML = projedatearr[count];
        pspan2.innerHTML = projcompnamearr[count];
        ppara2.innerHTML = projdesparr[count];

        let projnewWediv = document.getElementById("projTemplate");
        let proEnd = document.getElementById("projEnd");
        projnewWediv.insertBefore(prow, proEnd);
    }

    // skills & Achievement

    let skills = document.getElementById("tempSkills");
    let inputskill = document.getElementById("skills");
    skills.innerHTML = inputskill.value;

    let tempAchievement = document.getElementById("tempAchievement");
    let achieve = document.getElementById("achieve");
    tempAchievement.innerHTML = achieve.value;

    // fetching Image

    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result)

    // setting image
    
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("printbutton").style.display = "block";

}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

