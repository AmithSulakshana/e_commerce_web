const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require("jsonwebtoken");
const {validateToken} = require('../middlewares/AuthMiddleware');

router.post("/",async(req,res) =>{
    const{userName,password} = req.body;
    const user = await Users.findOne({where:{userName:userName}});
    if(user){
        res.json("userName alredy use")
    }
    else{
    bcrypt.hash(password,10).then((hash)=>{
        Users.create({
            userName:userName,
            password:hash,
        });
        res.json("user register success");
    })
   }
})

router.post("/login",async(req,res) =>{
    const{userName,password} = req.body;
    try{
        const user = await Users.findOne({where:{userName:userName}})
        if(!user){
           return res.json({error:'user does not exist'})
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
           return res.json({error:'password and user name does not match'});
        }

        const accessToken = sign({userName:user.userName,id:user.id},"important secret");
         return res.json({token:accessToken,userName:userName,id:user.id});
       

    }catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
})

router.get("/auth",validateToken,(req,res)=>{
    res.json(req.user)
})




module.exports = router;