const express = require("express");
const mongoose = require("mongoose");

require('./db/conn')
const Well = require('./models/wells');
const User = require('./models/users');
const Cart = require('./models/card');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
  
app.post("/post-wells", (req,res) => {
   
    const Welld = new Well(req.body);
    Welld.save().then(() => {
        res.status(201).send(Welld);
    }).catch((e) =>
    {
        res.status(400).send(e);
    })
});

app.post("/post-user", async (req,res) => {
    console.log(req.body);
    const Usersdata = new User(req.body);

    let user = await User.findOne({ email: req.body.email });
    if (user) {

        return res.status(200).json({
            message: 'Email already exists',
            status: false
        })
    }
    else{
            Usersdata.save().then(() => {

                return res.status(201).json({
                    message: 'Successfully Register!',
                    status: true,
                    data : Usersdata
                })

               // res.status(201).send(Usersdata);
            }).catch((e) =>
            {
                res.status(400).send(e);
            })
    }
});

app.post("/login-user", async (req,res) => {
    console.log(req.body);
    const Usersdata = new User(req.body);

    let user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
        return res.status(200).json({
            message: 'Valid login',
            status: true,
            userId : user._id,
            userName : user.name
        })
    }
    else{
        return res.status(201).json({
            message: 'Invalid login',
            status: false
        });
            
    }
});


app.post("/post-card", (req,res) => {
   
    const Cardd = new Cart(req.body);
    Cardd.save().then(() => {
        res.status(201).send(Cardd);
    }).catch((e) =>
    {
        res.status(400).send(e);
    })
});

app.get("/wells-list",(req,res)=> {
    Well.find()
    .then(result => {
     res.status(200).json({
         WellData:result
     });
    })
    .catch(err=> {
        res.status(500).json({
            error:err
        })
    })
});

app.get("/",(req,res)=> {
   res.send("this is testting");
});


app.listen(port, () => {
    console.log(`connection port ${port}`);
});