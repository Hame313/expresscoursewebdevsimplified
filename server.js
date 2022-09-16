const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    console.log("here");
    // res.download('server.js');
    // res.status(500).json({message:"error"});

    res.render('index',{text: "world"})
})
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"))
app.use(express.json())

// bad way 
// app.get('/users', (req,res)=>{
//     res.send('user list')
// })

// app.get('/users/new', (req,res)=>{
//     res.send("user new form")
// })

const userRouter = require('./routes/users');
app.use('/users',userRouter)




app.listen(5000);