const http = require('http');
const port=3000;
const fs = require('fs');
const server=http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('index.html',function(err, data){
        if(err){
            res.writeHead(404);
            res.write('file not found');
        } else{
            res.write(data);
        }
        res.end();
    })
})

server.listen(port, function(error){
    if(error) {
        console.log("something went wrong",error)
    } else{
        console.log("listening on port"+port);
    }
})