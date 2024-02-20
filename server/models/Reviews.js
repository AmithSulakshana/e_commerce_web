module.exports = (Sequelize,DataTypes) =>{
    const Reviews = Sequelize.define("Reviews",{
        rate:{
            type:DataTypes.FLOAT(2, 1),
            allowNull: false,
        },
        userName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        comment:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        date:{
            type:DataTypes.STRING,
            allowNull: false,
        },

        
       

    })

    return Reviews;
}