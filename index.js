// navbar*2
const searchbar = () => {
    document.getElementById("navaber-search-class").style.display = "flex"
    document.getElementById("searchbarbutton").style.display = "none"
    document.getElementById("searchbarclose").style.display = "flex"

}

const searchclose = () => {
    document.getElementById("navaber-search-class").style.display = "none"
    document.getElementById("searchbarbutton").style.display = "flex"
    document.getElementById("searchbarclose").style.display = "none"
}



const searchbar1 = () => {
    document.getElementById("navaber-search-class1").style.display = "flex"
    document.getElementById("searchbarbutton1").style.display = "none"
    document.getElementById("searchbarclose1").style.display = "flex"

}

const searchclose1 = () => {
    document.getElementById("navaber-search-class1").style.display = "none"
    document.getElementById("searchbarbutton1").style.display = "flex"
    document.getElementById("searchbarclose1").style.display = "none"
}



// navbar*2

// clock

setInterval(getDate, 1000);
function getDate() {
    var today = new Date();

    if (today.getHours() > 12) {

        var time2 = today.getSeconds();
    } else {

    }


    document.getElementById("vk").innerHTML = time2;
}
//clock


// seach code


// seach code