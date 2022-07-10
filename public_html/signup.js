function signUp() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    
    if(firstname != '' && lastname != '' && email != '' && password1 != '' && password2 != '') {
        if(password1 == password2) {
            if(confirm("Welcome " + firstname + " " + lastname + " . A verification email is sent to your email."));
                window.open('https://www.google.com/gmail/', '_blank');
                document.location = "homepage.html";
        } else {
            alert("Password is not match !");
            document.location = "signup.html";
        }
    } else {
        alert("Please enter your information !");
    } 
}