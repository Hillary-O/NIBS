let images= ["slide1.jpeg", "image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg"];
let i=0;

setInterval(function(){
    document.getElementById("slide").src=images[i];
    i=(i+1)% images.length;
    
},3000);

//show more toggle
$(document).ready(function() {
    // Toggle the "more" text when button is clicked
    $(".show").click(function() {
        $(this).siblings(".more").toggle();
    });
});

//Simple input validation
function validateform() {

    let adm = document.forms["regForm"]["adm"].value;
    let name = document.forms["regForm"]["name"].value;
    let email = document.forms["regForm"]["email"].value;
    let event = document.forms["regForm"]["event"].value;
    

    if (adm === "" || name === "" || email === "" || event === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}


		