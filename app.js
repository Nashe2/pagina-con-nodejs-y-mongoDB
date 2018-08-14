var express = require('express');
var mongoose=require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/primera-pagina-codigo-facilito");

var productSchema={
	title:String,
	description:String,
	imageURL:String,
	pricing:Number,
};

var Product =mongoose.model("Product", productSchema);

app.set("view engine", "pug")
app.use(express.static("public"));
app.get("/",function(req,res){

/* 
//crea el registro 
	var data={
		title:"Producto",
		description:"Perfume",
		imageURL:"",
		pricing:300
	}
//lo agrega al esquema(Schema)
	var product=new Product(data);

//Guarda e imprime en consola
	product.save(function(err){
		console.log(product);
		});*/
	res.render("index");

});

app.get("/menu/new", function(solicitud,respuesta){
	respuesta.render("menu/new");
});

app.listen(8081);