
/* 

    Sinatra Server rewritted in ExpressJS

*/

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {

  res.send('Hello World Yeet')

})

app.post('/', function(req, res)) {

  res.send("Hello Post Request")

}

app.listen(3000)
console.log("server has started")