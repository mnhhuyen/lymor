const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

const collectionRoutes = require("./routes/collections");
app.use("/api/collections", collectionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
