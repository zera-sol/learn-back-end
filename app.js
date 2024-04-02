const http = require('http');
const server = http.createServer((req, res) =>{
 console.log(req)
 res.write("hello This is my firs web server")
 res.end()
})
server.listen(5000)