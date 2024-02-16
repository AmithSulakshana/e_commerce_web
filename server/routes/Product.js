const express = require('express');
const router = express.Router();
const {Products} = require('../models');

router.get("/",async(req,res) =>{
    const getAll = await Products.findAll();
    res.json(getAll);
});

router.post("/",async(req,res) =>{
    const product = req.body;
    await Products.create(product);
    res.json("item add sucessfully");
})


module.exports = router;