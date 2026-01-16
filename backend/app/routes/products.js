const express = require("express");
const router = express.Router();
const db = require("../database");

/**
 * GET all products
 * - includes category name
 * - includes multiple images
 */
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.id,
        p.name,
        p.description,
        p.price,
        p.stock,
        c.name AS category,
        GROUP_CONCAT(pi.image_url) AS images
      FROM products p
      JOIN categories c ON p.category_id = c.id
      LEFT JOIN product_images pi ON p.id = pi.product_id
      GROUP BY p.id
    `);

    const products = rows.map(p => ({
      ...p,
      images: p.images ? p.images.split(",") : []
    }));

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/**
 * GET product by ID
 * - includes category name
 * - includes images
 */
router.get("/:id", async (req, res) => {
  try {
    const [[product]] = await db.query(`
      SELECT 
        p.id,
        p.name,
        p.description,
        p.price,
        p.stock,
        c.name AS category
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE p.id = ?
    `, [req.params.id]);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const [images] = await db.query(
      "SELECT image_url FROM product_images WHERE product_id = ?",
      [req.params.id]
    );

    product.images = images.map(i => i.image_url);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

module.exports = router;
