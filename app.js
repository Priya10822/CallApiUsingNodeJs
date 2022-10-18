const apiCall = require('./call')

const http = require('http')

http.createServer((req,res)=>{
        apiCall.callApi(function(response){
            console.log(response);
            res.setHeader('Content-Type', 'text/plain');
            res.write(JSON.stringify(response));
            res.end();
        });
}).listen(8080);

console.log("Service running on 8080 port....");