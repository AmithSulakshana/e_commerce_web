const express = require('express');
const router = express.Router();
const {Products} = require('../models');
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