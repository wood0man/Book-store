

userName.value=localStorage.getItem("name");
password.value=localStorage.getItem("Password");

//  if(localStorage.getItem("name")==""||localStorage.getItem("Password")==""){
//      localStorage.setItem("name","ziad");
//      localStorage.setItem("Password",1234);
//  }

document.getElementById("loginForm").onsubmit=function(e){

    if(userName.value!="ziad" || password.value !=1234){
        e.preventDefault()
        window.alert("the username or password are not right")
    }

    if(checkBox.checked==true){
        localStorage.setItem("name",userName.value)
        localStorage.setItem("Password",password.value)

    }

    else
    {
        localStorage.setItem("name","");
        localStorage.setItem("Password","")
    }
    
}