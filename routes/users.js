const express = require("express");
const router = express.Router();
// basic 
// router.get('/', (req,res)=>{
//     res.send('user list')
// })

// router.get('/new', (req,res)=>{
//     res.send("user new form")
// })

// advanced routing
router.use(logger);
router.get('/', (req,res)=>{
    console.log(req.query.name);
    res.send('user list')
})

router.get('/new', (req,res)=>{
    res.render("users/new", {firstName: "Test"})
})

router.post('/', (req,res)=>{
    const isValid= false;
    if(isValid){
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Erorr");
        res.render('users/new', {firstName : req.body.firstName})
    }
    console.log(req.body.firstName);
})
// bad way  better use router.route
// router.get('/:id', (req,res)=>{
//     req.params.id;
//     res.send(`Get user with id ${req.params.id}`)
// })
// router.put('/:id', (req,res)=>{
//     req.params.id;
//     res.send(`Get user with id ${req.params.id}`)
// })
// router.delete('/:id', (req,res)=>{
//     req.params.id;
//     res.send(`Get user with id ${req.params.id}`)
// })


router.route('/:id')
.get((req,res)=>{
    res.send(`get user with id ${req.params.id}`);
})
.put((req,res)=>{
    res.send(`update user with id ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`delete user with id ${req.params.id}`)
})

    const users=[{name: 'Kyle'}, {name:"Sally"}];
router.param("id", (req,res,next,id)=>{
    req.user=users[id];
    next();
})

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;