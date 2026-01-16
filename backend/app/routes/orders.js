const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/", async (req, res) => {
  const { total_amount } = req.body;
  const [result] = await db.query(
    "INSERT INTO orders (total_amount) VALUES (?)",
    [total_amount]
  );
  res.json({ order_id: result.insertId });
});

router.get("/", async (req, res) => {
  const [orders] = await db.query("SELECT * FROM orders");
  res.json(orders);
});

module.exports = router;
