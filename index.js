const http=require('http');

const site=http.createServer(function(req,res){
    console.log('Hello World');
   // res.write("Yeah Go HTTP!!!");
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Hello Class!!</h1>');
});

site.listen(3000);