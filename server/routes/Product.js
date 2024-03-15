const express = require('express');
const router = express.Router();
const {Products,Reviews} = require('../models');
const { Op } = require('sequelize');


router.get("/",async(req,res) =>{
    const getAll = await Products.findAll();
    res.json(getAll);
});

router.get("/byId/:id",async(req,res) =>{
    const id =req.params.id
    const product = await Products.findByPk(id);
    //const sameProduct = await Products.findAll({where:{ProductsName:product.ProductsName}})
    res.json(product);
})

router.get("/catagory",async(req,res) =>{
    const casual = await Products.findAll({
        where:{ProductsStyle:"casual"}
    })
    res.json(casual)
})

router.get("/filterCS/:productId",async(req,res)=>{
    const productId = req.params.productId;
    const product = await Products.findByPk(productId)
    const allProduct = await Products.findAll({
        where:{ProductsName:product.ProductsName}
    })

    const uniqueColors = [...new Set(allProduct.map(product => product.colour))];
    const uniqueSize = [...new Set(allProduct.map(product => product.size))]
    res.json({colours:uniqueColors,sizes:uniqueSize})

    
})

router.get("/detailsearch/:id",async(req,res)=>{
    const id = req.params.id;
    const size = req.query.size || '';
    const color = req.query.color || '';
    const product = await Products.findByPk(id)
   
    let selectProduct ={};

    selectProduct.ProductsName=product.ProductsName;

    if(size!=''){
        selectProduct.size=size;
    }

    if(color!=''){
        selectProduct.colour=color
    }

    const searchResul = await Products.findOne({
        where:selectProduct
    })

    res.json(searchResul)

})



router.post("/",async(req,res) =>{
    const product = req.body;
    await Products.create(product);
    res.json("item add sucessfully");
})

router.put("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const review = await Reviews.findAll({where:{ProductId:productId}})
        let totalRating = 0;
        let reviewCount = review.length;

        for(let i =0; i<review.length; i++){
          totalRating +=review[i].rate;
        }
        const meanRate = reviewCount>0 ? totalRating/reviewCount : 0;
        

        const product = await Products.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        product.rate = meanRate;

        await product.save();

        res.json({ message: "Rate updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});




router.get("/search", async (req, res) => {
    try {
        const searchTerm = req.query.q || ''; 
        const minPrice = parseInt(req.query.minPrice) || 0; 
        const maxPrice = parseInt(req.query.maxPrice) || 9999999; 
        const size = req.query.size || '';
        const color = req.query.color || '';
        const style = req.query.style || '';

    
        const whereClause = {
            [Op.and]: [
                { Price: { [Op.gte]: minPrice } },
                { Price: { [Op.lte]: maxPrice } }
            ]
        };

        if (searchTerm !== '') {
            whereClause[Op.or] = [
                { ProductsName: { [Op.like]: `%${searchTerm}%` } },
            ];
        }

        if (size !== '') {
            whereClause.size = size;
        }

        if (color !== '') {
            whereClause.colour = color;
        }

        if (style !== '') {
            whereClause.ProductsStyle = style;
        }

        const searchResults = await Products.findAll({
            where: whereClause
        });
        res.json(searchResults);

    } catch (error) {
        console.error("Error searching for products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;