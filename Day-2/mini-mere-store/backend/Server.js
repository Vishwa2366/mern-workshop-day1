const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

const products = [
    {
        id: 1,
        name: "laptop",
        price:55000
    },
    {
        id: 2,
        name: "headphone",
        price: 2500
    }
];


app.get("/api/products",(req,res)=>{
    res.json(products);
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});