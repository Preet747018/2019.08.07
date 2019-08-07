/*const http=require('http');

const site=http.createServer(function(req,res){
    console.log('Hello World');
    res.setHeader('Content-Type','text/html');
     res.write('I am a Web Server');
    res.end('<h1> Hello Class!!</h1>');
});

site.listen(3000);*/


var express=require('express')
var app=express()

app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(3000);