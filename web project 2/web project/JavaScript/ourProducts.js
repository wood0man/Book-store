
    async function fillTable() {
        var response = await fetch("../HTML/books.txt");
        var x = await response.json();
        ta = "";
        ta += "<tr><th>name</th><th>description</th> <th>image</th> <th>price</th></tr>";
        for (i = 0; i < x.books.length; i++) {
            if(x.books[i].bookName=="Dracula"){
                continue
            }
          ta +="<tr><td> "+x.books[i].bookName +"</td><td>"+x.books[i].description+'</td><td> <a href="'+x.books[i].href+'"'+">"+'<img src="'+x.books[i].image+'" width="150px">'+"</a></td><td>"+x.books[i].price +"</td></tr> ";
        }
        document.getElementById("table").innerHTML = ta;
      }
      fillTable();

