// cards 

var count = 0
const decrement = () => {
    if (count > 0) {
        count -= 1
        document.getElementById("data").innerHTML = count
        document.getElementById("data1").innerHTML = count
    }
    else {

    }
}

const increment = () => {
    if (count < 9) {
        count += 1
        document.getElementById("data").innerHTML = count
        document.getElementById("data1").innerHTML = count
    }
    else {

    }
}



// cards 



// zoom img

// var area = document.getElementById("area");
// var zoom_img = document.getElementById(" zoom_img");

// area.addEventListener("mousemove", function(event) {
//     clientX = event.clientX - area.offsetLeft
//     clientY = event.clientY - area.offsetTop


//     mWidth = area.offsetWidth
//     mHeight = area.offsetHeight

//     clientX = clientX / mWidth * 100
//     clientY = clientY / mHeight * 100

//     zoom_img.style.transform = 'translate(-' + clientX + ' % , - ' + clientX + ' % )scale(2)'

// });
// area.addEventListener("mouseleave", function () {
//     zoom_img.style.transform = 'translate(-50%,-50%) scale(1)'

// })



// zoom img


// <!-- buy section -->



const Description = () => {
    document.getElementById("Description1").style.borderBottom = "2px solid black"
    document.getElementById("Additional1").style.borderBottom = "none"
    document.getElementById("Reviesw1").style.borderBottom = "none"
    document.getElementById("vi-1").style.display = "block"
    document.getElementById("vi-2").style.display = "none"
    document.getElementById("vi-3").style.display = "none"

}


const Additional = () => {
    document.getElementById("Additional1").style.borderBottom = "2px solid black"
    document.getElementById("Reviesw1").style.borderBottom = "none"
    document.getElementById("Description1").style.borderBottom = "none"
    document.getElementById("vi-2").style.display = "block"
    document.getElementById("vi-1").style.display = "none"
    document.getElementById("vi-3").style.display = "none"
}

const Reviesw = () => {
    document.getElementById("Reviesw1").style.borderBottom = "2px solid black"
    document.getElementById("Additional1").style.borderBottom = "none"
    document.getElementById("Description1").style.borderBottom = "none"
    document.getElementById("vi-3").style.display = "block"
    document.getElementById("vi-1").style.display = "none"
    document.getElementById("vi-2").style.display = "none"
}

//<!-- buy section -->