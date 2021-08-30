const http = require('http')
 const server = http.createServer((req,re)=>{
     re.write(`Welcome to  page`)
     re.end()
 })   
 server.listen(5000)