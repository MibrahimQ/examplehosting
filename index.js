const express = require('express')
const app = express()
//const port = 3000

const path=require('path')
const bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/form-submit', (req, res) => {
res.send("<h1>Data recieved</h1>"+"<hr>"+req.query.name+"<hr>"+req.query.email+"<hr><br><a href=\"/\">Go back</a>")
})

app.post('/form-submit', (req, res) => {
  res.send("<h1>Data recieved</h1>"+"<hr>"+req.body.name+'<hr> '+req.body.email+"<hr><br><a href=\"/\">Go back</a>")
  })
  

app.get('/about', (req, res) => {
    res.send('about page<br><br><a href="/"><= GO BACK</a>')
  })
  

app.listen(process.env.PORT || 3000)
