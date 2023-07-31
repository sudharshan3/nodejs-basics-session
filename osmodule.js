const myos = require("os")
var cpus= myos.cpus()
var freemem = myos.freemem
var totalmem = myos.totalmem
var overall = totalmem+freemem
console.log("Total Memory:"+totalmem)
console.log(`Total Memory:${totalmem}`)