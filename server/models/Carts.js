module.exports = (Sequelize,DataTypes) =>{
    const Carts = Sequelize.define("Carts",{
        quntity:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
        
    })

    Carts.associate = (models) => {
        Carts.belongsTo(models.Products); 
    }

    return Carts;
}