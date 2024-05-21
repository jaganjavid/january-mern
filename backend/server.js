
import express from "express";
import products from "./data/products.js";
import Product from "./model/productModel.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import asyncHandler from "./middleware/asyncHandler.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API IS RUNNING")
});

app.get("/api/products", asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

app.get("/api/products/:id", asyncHandler(async(req, res) => {
   
    const { id } = req.params;
    // const product = products.find((p) => p._id === id);
    const product = await Product.findById(id);

    if(product){
       return res.json(product);
    } else {
        res.status(404);
        throw new Error("Resource not found");
    }

    
}));



app.listen(port, () => console.log(`Server is running on port ${port}`));
