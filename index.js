const express = require('express')
const app=express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://qkrsh:Nash256328!@cluster0.wntg5rm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req,res)=>res.send('Hello World! GO2 GO'))

app.listen(port, ()=>console.log('Example app listeneing on port ${port}!'))