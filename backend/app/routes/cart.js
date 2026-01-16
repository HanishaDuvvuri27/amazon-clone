const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/add", async (req, res) => {
  const { product_id, quantity } = req.body;
  await db.query(
    "INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)",
    [product_id, quantity]
  );
  res.json({ message: "Added to cart" });
});

router.get("/", async (req, res) => {
  const [items] = await db.query(`
    SELECT c.id, p.name, p.price, c.quantity
    FROM cart_items c
    JOIN products p ON c.product_id = p.id
  `);
  res.json(items);
});

module.exports = router;
