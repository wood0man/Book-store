async function fillDescription(){
response= await fetch("../HTML/books.txt");
x= await response.json();


var bookName=document.getElementById("theBookName").textContent;
var bookIndex ;

for(i=0;i<x.books.length;i++){

    if (x.books[i].bookName.toLowerCase()==bookName.toLowerCase())
    {bookIndex=i}
}



document.getElementById("bookDescription").textContent=x.books[bookIndex].description;



}

fillDescription();