const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const productRouter = require('./routes/Product');
app.use("/product",productRouter);

const userRouter = require('./routes/User');
app.use("/user",userRouter);

const reviewRouter = require('./routes/Reviews');
app.use("/review",reviewRouter)

db.sequelize.sync().then(() =>{
    app.listen(3001,() =>{
        console.log("server is running ")
    })
})