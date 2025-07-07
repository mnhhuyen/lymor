const express = require("express");
const fs = require("fs");
const router = express.Router();

const filePath = "./data/products.json";

// GET all collections
router.get("/", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const parsedData = JSON.parse(rawData);
        const collections = parsedData.collections;
        res.json(collections);
    } catch (error) {
        res.status(500).json({ message: "Error reading product data" });
    }
});
router.get("/more", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const parsedData = JSON.parse(rawData);
        const collections2 = parsedData.collections2;
        res.json(collections2);
    } catch (error) {
        res.status(500).json({ message: "Error reading product data" });
    }
});

router.get("/:id", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const parsedData = JSON.parse(rawData);
        const collections = parsedData.collections;
        const product = collections.find((p) => p.id.toString() === req.params.id);
        if (product) res.json(product);
        else res.status(404).json({ message: "Product not found" });
    } catch (error) {
        res.status(500).json({ message: "Error reading product data" });
    }
});

module.exports = router;
