const express = require("express");
const fs = require("fs");
const router = express.Router();

const filePath = "./data/products.json";

// GET newest products
router.get("/newest", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const products = JSON.parse(rawData);

        // Sort products by upload_date in descending order.
        const sortedProducts = products.sort((a, b) => {
            // Convert dd/mm/yyyy to yyyy-mm-dd so the Date constructor works correctly.
            const [dayA, monthA, yearA] = a.upload_date.split('/');
            const [dayB, monthB, yearB] = b.upload_date.split('/');
            const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
            return dateB - dateA; // newest first
        });

        // Select the first three products.
        const newestProducts = sortedProducts.slice(0, 3);
        res.json(newestProducts);
    } catch (error) {
        console.error("Error reading product data:", error);
        res.status(500).json({ message: "Error reading product data" });
    }
});

router.get("/bestseller", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const products = JSON.parse(rawData);

        // Sort products by sold in descending order
        const sortedProducts = products.sort((a, b) => b.sold - a.sold);

        // Select the top four best seller products
        const bestSellerProducts = sortedProducts.slice(0, 4);
        res.json(bestSellerProducts);
    } catch (error) {
        console.error("Error reading product data:", error);
        res.status(500).json({ message: "Error reading product data" });
    }
});

// GET all products
router.get("/", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const products = JSON.parse(rawData);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error reading product data" });
    }
});

router.get("/:id", (req, res) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const products = JSON.parse(rawData);
        const product = products.find((p) => p.id.toString() === req.params.id);
        if (product) res.json(product);
        else res.status(404).json({ message: "Product not found" });
    } catch (error) {
        res.status(500).json({ message: "Error reading product data" });
    }
});

module.exports = router;
