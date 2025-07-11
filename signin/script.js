
function signin(){
const mail=document.getElementById("mail").value
const pass=document.getElementById("pass").value
    if(mail == "admin@123" && pass=="admin123") 
    {
        alert("Thank you for sign in")
    }
    else{
        alert("check your email and password or fill the form correctly")
    }
 }