const fsnew = require("fs")

fsnew.readdir("$",(err,files)=>{
    if(err) console.log(err)
    else console.log(files)
})