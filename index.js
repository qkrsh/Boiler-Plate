const express = require('express')
const app=express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//데이터 분석해서 가져옴
app.use(express.urlencoded({extended: true}));
//json형태
app.use(express.json());



// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://qkrsh:Nash256328!@cluster0.wntg5rm.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
// }).then(()=>console.log('MongoDB Connected...'))
// .catch(err => console.log(err))
app.get('/', (req,res)=>res.send('Hello World! GO2 GO'))

app.post('/register', (req, res)=>{
    //회원가입시 필요한 정보들을 client에서 가져오면
    //그것들을 DB에 저장해줌
    const user = new User(req.body)

    user.save((err, userInfo)=>{
    if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })


})

app.listen(port, ()=>console.log('Example app listeneing on port ${port}!'))