var cart=[];




async function add(){
    var item=document.getElementById("bookName").value;
    var response=await fetch("../HTML/books.txt");
    var x=await response.json();
    var Price="no book was found";
    var quantity=document.getElementById("quantity").value;
    for(i=0;i<x.books.length;i++){
        if(x.books[i].bookName.toLowerCase()==item.toLowerCase())
        Price=x.books[i].price;

    }
    document.getElementById("price").textContent="price: " +Price*quantity;
    // var price=price
    // price=price*quantity.value;
    // price=document.getElementById("price").textContent;
    
    cart.push({"bookName" : item , "price" : Price , "quantity" : quantity});
    
    display();

    
}

function display(){
    var text="";
    
    text+="<tr><th> Book name </th> <th>Quantity</th><th>Price</th> <th></th></tr>";
    for(i=0 ; i<cart.length; i++){
        
        text+="<tr><td>"+ cart[i].bookName+"</td><td>"+cart[i].quantity+"</td> <td> "+cart[i].price +"</td>" +'<td><button name="'+ cart[i].bookName+'" onclick="del(this.name)" class="btn btn-danger">Delete</button> <td>'
    }
    document.getElementById("cartTable").innerHTML=text;

}

function del(name){

    for(i=0;i<cart.length;i++){
        if(cart[i].bookName==name){
            cart.splice(i,1);
        }
    }

    display();
}

var total=0;
function checkout(){
    for(i=0 ;i<cart.length;i++){
        total+= cart[i].price*cart[i].quantity

        
    }
    window.alert("Your total is ==> "+total);

    localStorage.setItem("total", total);
    localStorage.setItem("visa",visa.value)
    localStorage.setItem("mada",mada.value)
    localStorage.setItem("cash",cash.value)
    
}
// total=localStorage.getItem("total");
async function addTotal(){
    var total1=total

    tot={Total:total1}

    var options={
        method:"POST",
        headers:{"Content-Type": "application/json;charset=utf-8",},
        body:JSON.stringify(tot),
    }

    var response=await fetch("http://127.0.0.1:5000/process_add",options)

}

function checkoutAndAdd(){
    addTotal();
    checkout()
}

// $(document).ready(function(){

//     $("#addButton").click(function(){
//         $("textarea").show(2000)
//     })
// })