// Panel for Tablinks

var tabLinks = document.createElement('div');
tabLinks.className = "tab";
document.body.append(tabLinks);

var buttonCreate = document.createElement('button');
buttonCreate.className = "tablink";
buttonCreate.innerHTML = "Create";
tabLinks.appendChild(buttonCreate);
buttonCreate.setAttribute('onclick', "openCity(event, 'Create')");

var buttonRead = document.createElement('button');
buttonRead.className = "tablink";
buttonRead.innerHTML = "Read";
buttonRead.id = "rbutton";
tabLinks.appendChild(buttonRead);
buttonRead.setAttribute('onclick', "openCity(event, 'Read')");

var buttonUpdate = document.createElement('button');
buttonUpdate.className = "tablink";
buttonUpdate.innerHTML = "Update";
buttonUpdate.id = "pubutton";
tabLinks.appendChild(buttonUpdate);
buttonUpdate.setAttribute('onclick', "openCity(event, 'Update')");

var buttonDelete = document.createElement('button');
buttonDelete.className = "tablink";
buttonDelete.innerHTML = "Delete";
buttonDelete.id = "pdbutton";
tabLinks.appendChild(buttonDelete);
buttonDelete.setAttribute('onclick', "openCity(event, 'Delete')");


// Creating tabs and appending it for body

var tabOnCreate = document.createElement('div');
tabOnCreate.className = "tabcontent";
tabOnCreate.id = "Create";
document.body.append(tabOnCreate);

var tabOnRead = document.createElement('div');
tabOnRead.className = "tabcontent";
tabOnRead.id = "Read";
document.body.append(tabOnRead);

var tabOnUpdate = document.createElement('div');
tabOnUpdate.className = "tabcontent";
tabOnUpdate.id = "Update";
document.body.append(tabOnUpdate);

var tabOnDelete = document.createElement('div');
tabOnDelete.className = "tabcontent";
tabOnDelete.id = "Delete";
document.body.append(tabOnDelete);


// Creating Form for Create tab

var formCreate = document.createElement('form');
formCreate.id = "formCreate";
tabOnCreate.appendChild(formCreate);

// Form Plant Name
var divPlantName = document.createElement('div');
divPlantName.className = "form-group";
var labelPlantName = document.createElement('label');
labelPlantName.innerHTML = "Plant Name";
var inputPlantName = document.createElement('input');
inputPlantName.type = "text";
inputPlantName.className = "form-control";
inputPlantName.id = "cplantName";
inputPlantName.placeholder = "Enter name of plant";
divPlantName.appendChild(labelPlantName);
divPlantName.appendChild(inputPlantName);
formCreate.appendChild(divPlantName);

// Form Discoverer
var divDiscoverer = document.createElement('div');
divDiscoverer.className = "form-group";
var labelDiscoverer = document.createElement('label');
labelDiscoverer.innerHTML = "Discoverer";
var inputDiscoverer = document.createElement('input');
inputDiscoverer.type = "text";
inputDiscoverer.className = "form-control";
inputDiscoverer.id = "cdiscoverer";
inputDiscoverer.placeholder = "Enter name of discoverer";
divDiscoverer.appendChild(labelDiscoverer);
divDiscoverer.appendChild(inputDiscoverer);
formCreate.appendChild(divDiscoverer);

// Form Plant Class
var divPlantClass = document.createElement('div');
divPlantClass.className = "form-group";
var labelPlantClass = document.createElement('label');
labelPlantClass.innerHTML = "Plant Class";
var inputPlantClass = document.createElement('input');
inputPlantClass.type = "text";
inputPlantClass.className = "form-control";
inputPlantClass.id = "cplantClass";
inputPlantClass.placeholder = "Enter class of plant";
divPlantClass.appendChild(labelPlantClass);
divPlantClass.appendChild(inputPlantClass);
formCreate.appendChild(divPlantClass);

// Form Growth Place
var divGrowthPlace = document.createElement('div');
divGrowthPlace.className = "form-group";
var labelGrowthPlace = document.createElement('label');
labelGrowthPlace.innerHTML = "Growth Place";
var inputGrowthPlace = document.createElement('input');
inputGrowthPlace.type = "text";
inputGrowthPlace.className = "form-control";
inputGrowthPlace.id = "cgrowthPlace";
inputGrowthPlace.placeholder = "Enter growth place of plant";
divGrowthPlace.appendChild(labelGrowthPlace);
divGrowthPlace.appendChild(inputGrowthPlace);
formCreate.appendChild(divGrowthPlace);

// Form Applicaton
var divApplicaton = document.createElement('div');
divApplicaton.className = "form-group";
var labelApplicaton = document.createElement('label');
labelApplicaton.innerHTML = "Applicaton";
var inputApplicaton = document.createElement('input');
inputApplicaton.type = "text";
inputApplicaton.className = "form-control";
inputApplicaton.id = "capplication";
inputApplicaton.placeholder = "Enter application";
divApplicaton.appendChild(labelApplicaton);
divApplicaton.appendChild(inputApplicaton);
formCreate.appendChild(divApplicaton);

// Form Discription
var divDiscription = document.createElement('div');
divDiscription.className = "form-group";
var labelDiscription = document.createElement('label');
labelDiscription.innerHTML = "Discription";
var inputDiscription = document.createElement('input');
inputDiscription.type = "text";
inputDiscription.className = "form-control";
inputDiscription.id = "cdiscription";
inputDiscription.placeholder = "Enter discription";
divDiscription.appendChild(labelDiscription);
divDiscription.appendChild(inputDiscription);
formCreate.appendChild(divDiscription);

// Buttond Create Object

var butCreateObj = document.createElement('button');
butCreateObj.type = "sumbit";
butCreateObj.className = "btn btn-success";
butCreateObj.id = "cbutton"
butCreateObj.innerHTML = "Create";
formCreate.appendChild(butCreateObj);


// Create Table to Read

var tableRead = document.createElement('table');
tableRead.className = "table table-striped"; 
tabOnRead.appendChild(tableRead);

var tableHead = document.createElement('thead');
tableRead.appendChild(tableHead);

// Header row
var cellID = document.createElement('th');
cellID.innerHTML = "#";
tableHead.appendChild(cellID);

var cellPlantName = document.createElement('th');
cellPlantName.innerHTML = "name";
tableHead.appendChild(cellPlantName);

var cellDiscoverer = document.createElement('th');
cellDiscoverer.innerHTML = "discoverer";
tableHead.appendChild(cellDiscoverer);

var cellPlantClass = document.createElement('th');
cellPlantClass.innerHTML = "class";
tableHead.appendChild(cellPlantClass);

var cellGrowthPlace = document.createElement('th');
cellGrowthPlace.innerHTML = "place";
tableHead.appendChild(cellGrowthPlace);

var cellApplication = document.createElement('th');
cellApplication.innerHTML = "application";
tableHead.appendChild(cellApplication);

var cellDiscription = document.createElement('th');
cellDiscription.innerHTML = "discription";
tableHead.appendChild(cellDiscription);

// Body of Table
var tableBody = document.createElement('tbody');
tableBody.id = "tmBody";
tableRead.appendChild(tableBody);


// Creating Form for Update tab

var formUpdate = document.createElement('form');
formUpdate.id = "formUpdate";
tabOnUpdate.appendChild(formUpdate);

// Form ID for Update
var udivPlantID = document.createElement('div');
udivPlantID.className = "form-group";
var ulabelPlantID = document.createElement('label');
ulabelPlantID.innerHTML = "Plant ID";
var uinputPlantID = document.createElement('input');
uinputPlantID.type = "text";
uinputPlantID.className = "form-control";
uinputPlantID.id = "uid";
uinputPlantID.placeholder = "Enter Plant ID to Update";
udivPlantID.appendChild(ulabelPlantID);
udivPlantID.appendChild(uinputPlantID);
formUpdate.appendChild(udivPlantID);

// Form Plant Name
var udivPlantName = document.createElement('div');
udivPlantName.className = "form-group";
var ulabelPlantName = document.createElement('label');
ulabelPlantName.innerHTML = "Plant Name";
var uinputPlantName = document.createElement('input');
uinputPlantName.type = "text";
uinputPlantName.className = "form-control";
uinputPlantName.id = "uplantName";
uinputPlantName.placeholder = "New Plant Name";
udivPlantName.appendChild(ulabelPlantName);
udivPlantName.appendChild(uinputPlantName);
formUpdate.appendChild(udivPlantName);

// Form Discoverer
var udivDiscoverer = document.createElement('div');
udivDiscoverer.className = "form-group";
var ulabelDiscoverer = document.createElement('label');
ulabelDiscoverer.innerHTML = "Discoverer";
var uinputDiscoverer = document.createElement('input');
uinputDiscoverer.type = "text";
uinputDiscoverer.className = "form-control";
uinputDiscoverer.id = "udiscoverer";
uinputDiscoverer.placeholder = "New Discoverer";
udivDiscoverer.appendChild(ulabelDiscoverer);
udivDiscoverer.appendChild(uinputDiscoverer);
formUpdate.appendChild(udivDiscoverer);

// Form Plant Class
var udivPlantClass = document.createElement('div');
udivPlantClass.className = "form-group";
var ulabelPlantClass = document.createElement('label');
ulabelPlantClass.innerHTML = "Plant Class";
var uinputPlantClass = document.createElement('input');
uinputPlantClass.type = "text";
uinputPlantClass.className = "form-control";
uinputPlantClass.id = "uplantClass";
uinputPlantClass.placeholder = "New Class";
udivPlantClass.appendChild(ulabelPlantClass);
udivPlantClass.appendChild(uinputPlantClass);
formUpdate.appendChild(udivPlantClass);

// Form Growth Place
var udivGrowthPlace = document.createElement('div');
udivGrowthPlace.className = "form-group";
var ulabelGrowthPlace = document.createElement('label');
ulabelGrowthPlace.innerHTML = "Growth Place";
var uinputGrowthPlace = document.createElement('input');
uinputGrowthPlace.type = "text";
uinputGrowthPlace.className = "form-control";
uinputGrowthPlace.id = "ugrowthPlace";
uinputGrowthPlace.placeholder = "New Growth Place";
udivGrowthPlace.appendChild(ulabelGrowthPlace);
udivGrowthPlace.appendChild(uinputGrowthPlace);
formUpdate.appendChild(udivGrowthPlace);

// Form Applicaton
var udivApplicaton = document.createElement('div');
udivApplicaton.className = "form-group";
var ulabelApplicaton = document.createElement('label');
ulabelApplicaton.innerHTML = "Applicaton";
var uinputApplicaton = document.createElement('input');
uinputApplicaton.type = "text";
uinputApplicaton.className = "form-control";
uinputApplicaton.id = "uapplication";
uinputApplicaton.placeholder = "New Application";
udivApplicaton.appendChild(ulabelApplicaton);
udivApplicaton.appendChild(uinputApplicaton);
formUpdate.appendChild(udivApplicaton);

// Form Discription
var udivDiscription = document.createElement('div');
udivDiscription.className = "form-group";
var ulabelDiscription = document.createElement('label');
ulabelDiscription.innerHTML = "Discription";
var uinputDiscription = document.createElement('input');
uinputDiscription.type = "text";
uinputDiscription.className = "form-control";
uinputDiscription.id = "udiscription";
uinputDiscription.placeholder = "New Discription";
udivDiscription.appendChild(ulabelDiscription);
udivDiscription.appendChild(uinputDiscription);
formUpdate.appendChild(udivDiscription);

// Button Update Object

var butUpdateObj = document.createElement('button');
butUpdateObj.type = "sumbit";
butUpdateObj.className = "btn btn-success";
butUpdateObj.id = "ubutton"
butUpdateObj.innerHTML = "Update";
formUpdate.appendChild(butUpdateObj);


// Form Delete Object

var formDelete = document.createElement('form');
formDelete.id = "formDelete";
tabOnDelete.appendChild(formDelete);

var divPlantID = document.createElement('div');
divPlantID.className = "form-group";
var labelPlantID = document.createElement('label');
labelPlantID.innerHTML = "Plant ID";
var inputPlantID = document.createElement('input');
inputPlantID.type = "text";
inputPlantID.className = "form-control";
inputPlantID.id = "did";
inputPlantID.placeholder = "Enter Plant ID to Delete";
divPlantID.appendChild(labelPlantID);
divPlantID.appendChild(inputPlantID);
formDelete.appendChild(divPlantID);

var butDeleteObj = document.createElement('button');
butDeleteObj.type = "sumbit";
butDeleteObj.className = "btn btn-success";
butDeleteObj.id = "dbutton"
butDeleteObj.innerHTML = "Delete";
formDelete.appendChild(butDeleteObj);


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }