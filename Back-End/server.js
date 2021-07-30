import express from "express";
import data from "./data.js"
import cors from "cors"
import mongoose  from "mongoose";
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js";

const app = express();

mongoose.connect("mongodb://localhost/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(cors())

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
/*
app.get("/api/products/:id", (req, res) => {
   
    const product = data.products.find((x) => x._id === req.params.id)
    
    if (product) {
        res.send(product)
        
    }
    else {
         res.status(404).send({message: "Product Not Found"})
    }
})*/
app.use((err, res, req, next) => {
    res.status(500).send({ message: err.message });
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("5000 portunda çalıştı")
})