let a =1
let b=2

setTimeout(()=>{
    console.log("async"+a)
},1000)

a=35

console.log("Sync"+a)
console.log("Sync"+b)