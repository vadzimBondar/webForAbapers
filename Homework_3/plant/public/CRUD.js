function onCreate(ev) {
    ev.preventDefault();
   
    var data = JSON.stringify({
        "plantName": String(document.getElementById("cplantName").value),
        "discoverer": String(document.getElementById("cdiscoverer").value),
        "plantClass": String(document.getElementById("cplantClass").value),
        "growthPlace": String(document.getElementById("cgrowthPlace").value),
        "application": String(document.getElementById("capplication").value),
        "discription": String(document.getElementById("cdiscription").value)
    });

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById("dataForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://localhost:2403/plant");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    alert("Object Created");
}

function onRead() {
    
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {

        if (this.readyState === 4) {

            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');

            result.map(function(nthCPU){
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table=document.getElementById('tmBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('tmBody'));
            resultTBody.id='tmBody';

        }

    });

    xhr.open("GET", "http://localhost:2403/plant");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev){

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthCPU){
                var id=document.createElement('option');
                id.innerHTML=nthCPU['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
        }
    });
    xhrids.open("GET", "http://localhost:2403/plant");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onPrepareDelete(ev){

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthCPU){
                var id=document.createElement('option');
                id.innerHTML=nthCPU['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('did').parentElement;
            form.replaceChild(ids,document.getElementById('did'));
            ids.id='did';
        }
    });
    xhrids.open("GET", "http://localhost:2403/plant");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

   
    var data = JSON.stringify({
        "plantName": String(document.getElementById("uplantName").value),
        "discoverer": String(document.getElementById("udiscoverer").value),
        "plantClass": String(document.getElementById("uplantClass").value),
        "growthPlace": String(document.getElementById("ugrowthPlace").value),
        "application": String(document.getElementById("uapplication").value),
        "discription": String(document.getElementById("udiscription").value)
    });

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://localhost:2403/plant/"+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    alert("Object Updated");
}

function onDelete(ev) {
    ev.preventDefault();
     xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/plant/"+document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    alert("Object Deleted");
}


(function() {
    
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );

    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );


    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );

    document.getElementById('pdbutton').addEventListener(
        'click', onPrepareDelete
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );

})()

function parseCPUToTableRow(CPUs){
    var row=document.createElement('tr');

    id=document.createElement('th');
    id.innerText=CPUs['id'];
    row.appendChild(id);

    plantName=document.createElement('td');
    plantName.innerText=CPUs['plantName'];
    row.appendChild(plantName);

    discoverer=document.createElement('td');
    discoverer.innerText=CPUs['discoverer'];
    row.appendChild(discoverer);
   
    plantClass=document.createElement('td');
    plantClass.innerText=CPUs['plantClass'];
    row.appendChild(plantClass);
    
    growthPlace=document.createElement('td');
    growthPlace.innerText=CPUs['growthPlace'];
    row.appendChild(growthPlace);

    application=document.createElement('td');
    application.innerText=CPUs['application'];
    row.appendChild(application);

    discription=document.createElement('td');
    discription.innerText=CPUs['discription'];
    row.appendChild(discription);

    return row;
}


