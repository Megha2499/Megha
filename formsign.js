let name = document.getElementById("names");
let username = document.getElementById("uname");
let email = document.getElementById("email");
let password = document.getElementById("pwd");
//let confpwd = document.getElementById("pwdd");
let mobile = document.getElementById("phoneno");
//let error = document.getElementById("error");


function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2.3})?$/
    if(regexp.test(email.value)){
        //error.innerHTML = "Valid";
        //error.style.color="green";
        return true;
    }
    else{
        //error.innerHTML="Invalid",
        //error.style.color= "red";
        alert("Please enter a valid email");
        return false;
    }
}
function phonenumberr(){
    let regexp1 = /^\(?([0-9]{3})\)?[-\.\s]?([0-9]{3})[-\.\s]?([0-9]{4})$/;
    if(regexp1.test(phoneno.value))
    {
        return true;
    }
    else{
        alert("Please enter a valid mobile number");
        return false;
    }
}
function passwordd(){
    let regexp3 = /^(0-9)$/;
    let regexp4 = /^(?=.\d)(?=.[a-z])$/;
    let regexp2 = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
    if(regexp2.test(pwd.value)){
        
        alert("strong password");
        pwd.style.border="2px solid green";
        return true;
    }
    else if(regexp4.test(pwd.value)){
        alert("medium password");
        pwd.style.border="2px solid #eb7434";
        return false;
    }
    else if(regexp3.test(pwd.value)){
        alert("Please include one upper case,lower case,number and a special character");
        pwd.style.border="2px solid red";
        return false;
    }
    else{
        alert("Please include one upper case,lower case,number and a special character");
        pwd.style.border="2px solid red";
        return false;
    }
}