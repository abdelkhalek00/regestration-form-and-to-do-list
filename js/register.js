var registerNameInput = document.getElementById("registerName");
var registerEmailInput = document.getElementById("registerEmail");
var registerPasswordInput = document.getElementById("registerPassword");
var registerPhoneInput = document.getElementById("registerPhone");
var registerBtn = document.getElementById("register");
var dataContainer;

//  local storage check  //
if (localStorage.getItem("userData") == null) {
    dataContainer = [];
}
else {
    dataContainer = JSON.parse(localStorage.getItem("userData"))
}

//  signup function //
function getData() {
    userData = {
        name:registerNameInput.value,
        email: registerEmailInput.value,
        password: registerPasswordInput.value,
        phone:registerPhoneInput.value,
    }
    dataContainer.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataContainer));
}
//  clear form function //
function clearForm(){
    registerNameInput.value="";
    registerEmailInput.value="";
    registerPasswordInput.value="";
    registerPhoneInput.value="";
}
//  syntax validation function //
function syntaxValidation(){
    var emailRegex=/^[a-z0-9]+@(gmail|yahoo|)(.com)$/;
    var passwordRegex=/^[a-z0-9]{3,15}$/;
    var phoneRegex=/^(002|\+20)?(01)(0|1|2|5)[0-9]{8}$/
    if(emailRegex.test(registerEmailInput.value)==true&&passwordRegex.test(registerPasswordInput.value)==true&&phoneRegex.test(registerPhoneInput.value)==true){
        getData();
        clearForm();
        document.getElementById("successRegister").innerHTML="success register";
        document.getElementById("invalidEmail").innerHTML="";
        document.getElementById("invalidPassword").innerHTML="";
        document.getElementById("invalidPhone").innerHTML="";
        return;
    }
    else{
        document.getElementById("successRegister").innerHTML="";
    }

    if(emailRegex.test(registerEmailInput.value)==false){
        document.getElementById("invalidEmail").innerHTML="invalid email";
    }
    else{
        document.getElementById("invalidEmail").innerHTML="";
    }

    if(passwordRegex.test(registerPasswordInput.value)==false){
        document.getElementById("invalidPassword").innerHTML="invalid password";
    }
    else{
        document.getElementById("invalidPassword").innerHTML="";
    }

    if(phoneRegex.test(registerPhoneInput.value)==false){
        document.getElementById("invalidPhone").innerHTML="invalid phone";
    }
    else{
        document.getElementById("invalidPhone").innerHTML="";
    }
}


registerBtn.addEventListener("click",function(){
    syntaxValidation();
})