module.exports = (Sequelize,DataTypes) =>{
    const Users = Sequelize.define("Users",{
        userName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
       

    })

    return Users;
}