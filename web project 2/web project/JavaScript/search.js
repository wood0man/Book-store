async function search(){
    var response=await fetch("../HTML/books.txt");
    var x=await response.json();
    var name=text.value;
    var y="no books found";
    for(i=0;i<x.books.length;i++){
    if(name.toLowerCase() == x.books[i].bookName.toLowerCase()) 
    y="Book name: "+x.books[i].bookName+"<br > Price: "+x.books[i].price +'<br><img src="'+x.books[i].image+'" width="150px"> ';
    
}
document.getElementById("result").innerHTML=y;
}