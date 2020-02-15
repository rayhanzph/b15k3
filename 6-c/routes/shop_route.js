const express = require("express");
const router = express();
const shopController = require("../controllers/pos");

// get: / 'index'
router.get("/", shopController.getIndexPage);

// post: /add-product 'product'
router.post("/add-product", shopController.addProductItem);

// post: /edit-product/:productID
router.post("/edit-product", shopController.editProductItem);

// post: /delete-product/:productID
router.post("/delete-product", shopController.deleteProductItem);

module.exports = router;
