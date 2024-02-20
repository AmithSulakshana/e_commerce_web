const express = require('express');
const {Reviews} = require('../models');
const router = express.Router();
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get("/:productId", async(req,res) =>{
    const productId = req.params.productId;
    const Review = await Reviews.findAll({where:{ProductId:productId}});
    res.json(Review);
})

router.post("/", validateToken, async(req,res) =>{
    const review = req.body;
    review.userName = req.user.userName;
    await Reviews.create(review);
    res.json(review)
})


module.exports=router;