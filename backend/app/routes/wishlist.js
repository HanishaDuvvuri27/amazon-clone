const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/", async (req, res) => {
  const { product_id } = req.body;
  await db.query("INSERT INTO wishlist (product_id) VALUES (?)", [product_id]);
  res.json({ message: "Added to wishlist" });
});

router.get("/", async (req, res) => {
  const [items] = await db.query(`
    SELECT w.id, p.name, p.price
    FROM wishlist w
    JOIN products p ON w.product_id = p.id
  `);
  res.json(items);
});

module.exports = router;
