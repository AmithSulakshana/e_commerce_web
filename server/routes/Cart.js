const express = require('express');
const router = express.Router();
const {Carts,Products} = require('../models')
const {validateToken} = require('../middlewares/AuthMiddleware');
const {sign} = require("jsonwebtoken");
const {verify} = require("jsonwebtoken");

router.post("/",validateToken, async(req,res)=>{
    const cart = req.body
    cart.UserId = req.user.id

    const existingCartItem = await Carts.findOne({
        where: { UserId: req.user.id, ProductId:cart.ProductId }
    });

    if (existingCartItem) {
        existingCartItem.quntity += cart.quntity;
        await existingCartItem.save();
        res.json(existingCartItem);
      } else {
        const newCartItem = await Carts.create(cart)
        res.json(newCartItem);
      }

}) 


router.post("/addone/:productId",validateToken,async(req,res)=>{
     const ProductId = req.params.productId

     const products = await Carts.findOne({
        where:{UserId:req.user.id,ProductId:ProductId}
     })

     const productdetails = await Products.findByPk(ProductId)

     if(products){
        products.quntity +=1;
        await products.save()
        res.json("increase "+productdetails.ProductsName)
     }
     else{
         res.json("error")
     }
})

router.post("/removeone/:productId",validateToken,async(req,res)=>{
    const ProductId = req.params.productId

    const products = await Carts.findOne({
       where:{UserId:req.user.id,ProductId:ProductId}
    })

    const productdetails = await Products.findByPk(ProductId)

    if(products){
       if(products.quntity>0){
        products.quntity -=1;
        await products.save()
        res.json("decrease one "+productdetails.ProductsName)
       }
       else{
        res.json("error")
       }
      
    }
    else{
        res.json("error")
    }
})

router.get("/",validateToken,async(req,res)=>{
    const getAll = await Carts.findAll({
        where:{UserId:req.user.id},include:[Products]
    })
    res.json(getAll)
})

router.get("/subprice", validateToken, async (req, res) => {
    try {

        const deliveryFee = req.query.deliveryFee ? parseFloat(req.query.deliveryFee) : 0;
        const discount = req.query.discount ? parseFloat(req.query.discount) : 0;
        const promoCode = req.query.promoCode ? parseFloat(req.query.promoCode) : 0;

        let totalPrice = 0;
        let totalQuntity = 0;
        const getAll = await Carts.findAll({
            where: { UserId: req.user.id },
            include: [Products]
        });

        getAll.forEach(cartItem => {
            const subtotal = cartItem.quntity * parseFloat(cartItem.Product.Price);
            totalPrice += subtotal;
            totalQuntity +=cartItem.quntity;

        });

        
        const discountval = totalPrice * (discount / 100);
        const addPromo = totalPrice*(promoCode/100);
        
        const totalPriceWithFee = totalPrice-discountval + deliveryFee - addPromo;

        res.json({ totalPrice: totalPriceWithFee,subPrice:totalPrice,dicountvalue:discountval.toFixed(2 ),totalquntity:totalQuntity});
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete("/clear", validateToken, async (req, res) => {
    try {
        const products = await Carts.findAll({
            where: { UserId: req.user.id }
        });

        if (products.length > 0) {
            for (const product of products) {
                await product.destroy();
            }
            res.json("Cart cleared successfully");
        } else {
            res.json("Your cart is already empty");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/:productId",validateToken,async(req,res)=>{
    try{
    const productId = req.params.productId;
     
    
    const product = await Carts.findOne({
        where:{UserId:req.user.id,ProductId:productId}
    })
    if(product){
        await product.destroy()
        res.json("delete successfully")
    }
    else{
        res.json("cant find product")
    }
    

   }catch(error){
      console.error(error)
    }

})



router.post("/token",async(req,res)=>{
    const {userName,userId,discount} = req.body;
    const promoToken = sign({userName:userName,id:userId,discount:discount},"important secret promo");
    res.json({PromoCode:promoToken})

})

router.get("/token",async(req,res)=>{
    const promoCode = req.query.promoCode;
try{
    const validPromo = verify(promoCode,"important secret promo");

    if(validPromo){
        const discount = validPromo.discount;
        const userName = validPromo.userName;
        res.json({Discount:discount,UserName:userName})
    }

    else{
        res.json({Discount:0})
    }

 
} catch (error) {
    
    res.status(401).json({ error: "Invalid token" });
}   
   

})







module.exports = router;