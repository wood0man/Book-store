document.getElementById("totalPurchase").textContent="Total price=> "+localStorage.getItem("total")

function confirm1(){
    // Form=document.getElementById("form");
    if(confirm("Confirm the purchse?")==false)
    {form.action="";
    e.preventDefault()}
}

function orderInfo(){
    var total1=localStorage.getItem("total");
    
if(document.getElementById("visa").checked){

    window.alert("Your total is==> "+total1 +" in visa");
}

if(document.getElementById("mada").checked){

    window.alert("Your total is==> "+total1 +" in mada");
}

if(document.getElementById("cash").checked){

    window.alert("Your total is==> "+total1 +" in cash");
}
}



