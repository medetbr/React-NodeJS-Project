import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import mongoose  from "mongoose";
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();

mongoose.connect("mongodb://localhost/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
/*
app.use((err, res, req, next) => {
    res.status(500).send({ message: err.message });
})*/


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("5000 portunda çalıştı")
})