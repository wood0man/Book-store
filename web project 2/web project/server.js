var express=require("express");
var app =express();
var mysql=require("mysql");
var cors=require("cors");

app.use(cors({origin:"*"}));
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
});

app.use(express.json());

app.get("product",function(req,res){
    res.sendFile(__dirname+"/product.html")
})

app.get("/ourProducts2",function(req,res){
    res.sendFile(__dirname+"/"+"html/ourProducts2.html")
})
app.get("/process_ourProducts",function(req,res){
    
    var sql="select * from products"
    con.query(sql ,function(err,rows,fields){
    
        res.end(JSON.stringify(rows))
    })

    // app.post()


})    

app.post("/process_add",function(req,res){
    var t=req.body.total

    var sql="INSERT into total(total) values('"+t+"')";
    con.query(sql);

})

app.listen(5000);
