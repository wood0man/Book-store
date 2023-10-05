function welcomeMessage(){
    
    var name=localStorage.getItem("username");

    document.getElementById("welcomeMessage").innerHTML="Welcome "+name

}
welcomeMessage()