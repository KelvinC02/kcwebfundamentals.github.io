function itemSearch() {
    var search = (document.getElementById("item").value).toUpperCase();
    if(search == "ESPRESSO" || search == "LATTE" || search == "CAPPUCINO") {
        alert("You have search a type of coffee !");
        document.location = "coffee.html";
    } else if(search == "HOT CHOCOLATE" || search == "TEA LATTE" || search == "LEMON TEA") {
        alert("You have searched a type of tea and chocolate ! ");
        document.location = "tea.html";
    } else if(search == "CHOCOLATE FRAPPUCINO" ||  search == "GREEN TEA FRAPPUCINO" || search == "ESPRESSO FRAPPUCINO" || search == "FRUIT BLENDED JUICE") {
        alert("You have search a type of frappucino and blended !");
        alert("The page is currently unavailable");
        document.location = "menu.html";
    } else {
        alert("The product is not available at our stores");
        document.location = "menu.html";
    }
}

function openImg(img) {
    var src = img.src;
    window.open(src);
}