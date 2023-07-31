const server = require("http")
server.createServer((req,res)=>{
    if (req.url === "/"){
        res.writeHead(200,{'Content-Type':'text/plain','testnode':'from server'})
        res.write("Hi from server")
        res.end()
    }
    if (req.url==="/courses"){
        res.write(JSON.stringify(["javascript","golang","reactjs"]))
        res.end()
    }

}).listen(2000)