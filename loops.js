var table = parseInt(prompt("enter the num")) 
var limit = parseInt(prompt("enter the limit")) 


for (var i=1; i <=limit; i++){
   document.write(`${table} x ${i} = ${table*i}`)
   document.write("<br>")
}