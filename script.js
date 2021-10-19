function addNewWeField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("my-2")
    newNode.classList.add("wexpField")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")
    
    let we_obj = document.getElementById("we")
    let weAddButton_obj = document.getElementById("weAddButton");
    we_obj.insertBefore(newNode,weAddButton_obj);
    
}

function addaq(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acqField")
    newNode.classList.add("my-2")
    newNode.setAttribute("placeholder","Enter here")
    newNode.setAttribute("rows","3")

    let aq_obj = document.getElementById("aq");
    let acqAddButton_obj = document.getElementById("acqAddButton");
    aq_obj.insertBefore(newNode, acqAddButton_obj);
}

// generate resume 

function generateResume(){
    //name
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameTemplate1")
    nameT1.innerHTML = nameField;
    document.getElementById("nameTemplate2").innerHTML = nameField;
    
    // contact 
    document.getElementById("contactTemplate").innerHTML = document.getElementById("contactField").value;

    // address 
    let addressField  = document.getElementById("addressField").value;
    console.log(addressField)
    document.getElementById("addressTemplate").innerText = addressField;

    // links
    document.getElementById("fbT").innerText = document.getElementById("fbField").value;
    document.getElementById("iT").innerText = document.getElementById("igField").value;
    document.getElementById("lT").innerText = document.getElementById("lField").value;

    // objective
    document.getElementById("objectiveTemplate").innerHTML = document.getElementById("objectiveField").value;

    // we
    let we = document.getElementsByClassName("wexpField")

    let str = ""

    for(let e of we){
        str = str + `<li>${e.value}</li>`
    }

    document.getElementById("weTemplate").innerHTML = str;

    let aq = document.getElementsByClassName("acqField");
    str = ""
    for(let e of aq){
        str = str+ `<li>${e.value}</li>`
    }
    document.getElementById("aqTemplate").innerHTML = str;

    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";

    // take image
    let file = document.getElementById("profile").files[0];
    console.log(file);

    let reader = new FileReader()
    reader.readAsDataURL(file);

    console.log(reader.result);
    
    //set image
    reader.onloadend = function(){
        document.getElementById("imageTemplate").src = reader.result;
    }
}

function printResume(){
    document.getElementById("print").style.display="none";
    window.print();
}