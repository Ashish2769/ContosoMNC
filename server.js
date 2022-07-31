var express = require('express');
var app = express();

app.get("/",(req, res)=>{
    res.send(
        "<h1>Contoso</h1>"
        +"<hr/>"
        +"<h3>Smart device for sales<h3/>"

    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server = app.listen(9000);
console.log("Application running on port 9000");