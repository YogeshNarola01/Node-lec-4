const express = require('express')

const app = express()

app.set('view engine','ejs')

const data = []

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    return res.render('index',{
        users : data
    })
})

app.get('/add',(req,res)=>{
    return res.render('add')
})

app.post('/insertRecord',(req,res)=>{
    const {username,userphone,userage} = req.body;
    let obj = {
        id : Date.now(),
        name : username,
        phone : userphone,
        age : userage
    }
    data.push(obj)
    return res.redirect('/')
})


const port = 8003
app.listen(port,(err)=>{
    if(err) {
        console.log(err)
       return false
    }
    console.log(`server is running on port ${port}`)
})