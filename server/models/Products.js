module.exports = (Sequelize,DataTypes) =>{
    const Products = Sequelize.define("Products",{
        ProductsName:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })

    return Products
}