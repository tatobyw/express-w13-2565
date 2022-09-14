const express = require('express') //express
const http = require('http') //node.js
const cors = require('cors') //cross domain
const logger = require('morgan') //Kept log of express

const app = express()
const sever = http.createServer(app)
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

const mylogger = function(req,res,next){
    console.log('LOGGER')
    // res.send("LOGGER")
    next()
}

app.use(mylogger)

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// GET:http://localhost:4000/
app.get('/', mylogger,(req,res)=>{
    console.log('Hello World')
    console.log(req.query)
    console.log(req.url)
    console.log(req.params)
    console.log(req.body)
    return res.status(200).send({'message':'Home page!'})
})

// GET:http://localhost:4000/contact
app.get('/contact',mylogger,(req,res)=>{
    console.log('Contact me!')
    console.log(req.query)
    console.log(req.url)
    console.log(req.params)
    console.log(req.body)
    return res.status(200).send({
        message:'Contact page',
        Age:25,
        params:req.params
    })
})

// GET:http://localhost:4000/10/100
// app.get('/:xxx/:yyy',(req,res)=>{
//     console.log('Contact me!') //1
//     console.log(req.query) //2
//     console.log(req.url) //3 
//     console.log(req.params) //4
//     console.log(req.body) //5
//     return res.status(400).send({
//         message:'Hello',
//         Age:25,
//         params:req.params
//     })
// })

// GET:http://localhost:4000/1
app.get('/:id([0-9])',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id}`)

})

// GET:http://localhost:4000/1
app.get('/:id([0-6]{2})',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id}`)

})

// GET:http://localhost:4000/abcd
app.get('/:id([a-d]{4})',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id}`)

})

// GET:http://localhost:4000/efgh
app.get('/:id([e-h,4-7]{4})',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id}`)

})

// GET:http://localhost:4000/users/mark/9
app.get('/users/:name/:id',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id},Name is:${req.params.name}`)

})

// GET:http://localhost:4000/users/mark/9
app.get('#',(req,res)=>{
    console.log('===Welcome!===')
    res.status(200).send(`ID is:${req.params.id},Name is:${req.params.name}`)

})

// GET:http://localhost:4000/student
app.get('/student',(req,res)=>{
    const data = {
        name: "std",
        email: "std@gmail.com",
        age:25
    }
    console.log(data)
    return res.status(200).send(`name:${data.name},\n email:${data.email},\n age:${data.age}`)
})



sever.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})