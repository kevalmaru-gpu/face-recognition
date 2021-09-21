const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./knex/knex.js')

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

})

app.post('/login',(req,res) => {
  db.select('username','password').from('login')
  .where('username', '=', req.body.username)
  .then(data => {
    if (req.body.password === data[0].password){
      return db.select('*').from('users')
      .where('username','=',req.body.username)
      .then(user => res.json("success"))
      .catch(err => res.status(400).json('cannot find the user'))
    }
    else{
      res.status(400).json('wrong crendentials')
    }
  })
  .catch(err => res.status(400).json('invalid user crendentials'))
})

app.post('/register',(req,res) => {
  const { username, email, password } = req.body

  db.transaction(trx => {
    trx.insert({
      username:username,
      password:password
    })
    .into('login')
    .returning('username')
    .then(loginUsername => {
      return trx('users')
        .returning('*')
        .insert({
          email:email,
          username:loginUsername[0]
        })
        .then(user => {
          res.json("success")
        })
    })
    .then(trx.commit)
    .catch(trx.rollback)
  })
  .catch(err => res.status(400).json('unable to register'))
})

app.listen(process.env.PORT || 200)
