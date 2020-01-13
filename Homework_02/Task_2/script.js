function popupRequest() {
    var username = window.prompt("Enter you username"," ");
    checkUsername(username);
}

function checkUsername(username){
    var allNumber = [0,1,2,3,4,5,6,7,8,9];
    var newUsername;
    var f = false;

    for(let i = 0; i < allNumber.length; i++){
        if (username.includes(allNumber[i])) {
            newUsername = username.split("").reverse("").join("");
            f = true;
            break;
        }
    }

    if(!f) {
        newUsername = username.split("");
        for (let i=0; i < newUsername.length; i++) {
            if (i%2 == 0) {
                newUsername[i] = newUsername[i].toUpperCase();
            } else {
               newUsername[i] = newUsername[i].toLowerCase();
            }
        }
        newUsername = newUsername.join("");
    }

    document.getElementById("username").value = newUsername;
}