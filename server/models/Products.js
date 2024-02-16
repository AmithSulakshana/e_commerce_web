module.exports = (Sequelize,DataTypes) =>{
    const Products = Sequelize.define("Products",{
        ProductsName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        ProductsStyle:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        ProductsType:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        Price:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        newPrice:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        colour:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        size:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        frontImage:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        backImage:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        sideImage:{
            type:DataTypes.STRING,
            allowNull: false,
        }

    })

    return Products
}