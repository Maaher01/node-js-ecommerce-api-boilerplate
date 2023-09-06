const express = require("express");

// Created Require Files..
const controller = require("../controllers/product");
const checkAdminAuth = require("../middleware/check-admin-auth");
const checkIpWhitelist = require("../middleware/check-ip-whitelist");

// Get Express Router Function..
const router = express.Router();

/**
 * /api/product
 * http://localhost:3000/api/product
 */

router.post(
	"/add-single-product",
	checkIpWhitelist,
	checkAdminAuth,
	controller.addSingleProduct
);
router.post(
	"/add-multiple-products",
	checkIpWhitelist,
	checkAdminAuth,
	controller.insertManyProduct
);
router.post("/get-all-products", controller.getAllProducts);
router.post(
	"/get-products-by-dynamic-sort",
	controller.getProductsByDynamicSort
);
router.get(
	"/get-single-product-by-slug/:slug",
	controller.getSingleProductBySlug
);
router.get("/get-single-product-by-id/:id", controller.getSingleProductById);
router.put(
	"/edit-product-by-id/:id",
	checkIpWhitelist,
	checkAdminAuth,
	controller.updateProductById
);
router.post(
	"/update-multiple-product-by-id",
	checkIpWhitelist,
	checkAdminAuth,
	controller.updateMultipleProductById
);
router.delete(
	"/delete-product-by-id/:id",
	checkIpWhitelist,
	checkAdminAuth,
	controller.deleteProductById
);

// Export all routers..
module.exports = router;