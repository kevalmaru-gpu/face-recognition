import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const database = {
  users:[
    {
      username:"kiyaexo123",
      email:"kiyaexo@gmail.com",
      password:"12345"
    },
    {
      username:"saddie123",
      email:"saddie@gmail.com",
      password:"54321"
    }
  ]
}

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
  res.json(database.users)
})

app.post('/login',(req,res) => {
  if (req.body.username == database.users[0].username && req.body.password == database.users[0].password){
    res.json("success")
  }
  else{
    res.status(400).json("failed")
  }
})

app.post('/register',(req,res) => {
  const { username, email, password } = req.body

  const newUser = { username, email, password}

  database.users.push(newUser)

  res.json("success")
})

app.listen(200)
