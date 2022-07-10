function userLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username != '' && password != '') {
        if(confirm("Welcome " + username + " ! You have successfully login")) {
            document.location = "homepage.html";
        } else {
            document.location = "membership.html";
        }
    } else {
        alert("Please enter your information !");
    }
}

function loginProblem() {
    alert("We are sorry. Our service is temporary down\n Please try again later");
}