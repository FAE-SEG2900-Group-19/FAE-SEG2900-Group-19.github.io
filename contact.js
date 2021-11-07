
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var phonenum = document.getElementById("phonenum").value;



var fname = document.forms["contactForm"]["fname"].value;
var lname = document.forms["contactForm"]["lname"].value;
var email = document.forms["contactForm"]["email"].value;
var phonenum = document.forms["contactForm"]["phonenum"].value;
function supportReturn(){
    if (fname!="" && lname!="" && phonenum!="" && email!=""){
        alert("We will get back to you soon!")
        return true;
    } else{
        alert("Invalid/empty value(s)")
        return false;
    } 
}
