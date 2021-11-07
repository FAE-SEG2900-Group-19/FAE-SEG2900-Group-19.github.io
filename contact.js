
var fname = document.forms["contactForm"]["fname"].value;
var lname = document.forms["contactForm"]["lname"].value;
var email = document.forms["contactForm"]["email"].value;
var phonenum = document.forms["contactForm"]["phonenum"].value;
function supporReturn(){
    if (fname!=="" && lname!=="" && phonenum!=="" && email!==""){
        alert("We will get back to you soon!")
        return true;
    } else{
        alert("Invalid/empty value(s)")
        return false;
    } 
}

function supportReturn(contactForm){
    var inputs = contactForm.getElementsByTagName('input');
    for (var i=0;i<inputs.length;i++){
        if (inputs[i].hasAttribute("required")){
            if(inputs[i].value==""){
                alert("Please fill out all required fields.")
            }
        }
    }
    alert("We will get back to you soon!");
}