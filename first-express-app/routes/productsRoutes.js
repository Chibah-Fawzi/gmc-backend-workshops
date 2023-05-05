const controller = require("../controller/productsController");

router.route("/products/:id/").get(controller.getProducts);
router.route("/products/:id/").post(controller.addProducts);
router.route("/products/:id/").delete(controller.deleteProducts);
router.route("/products/:id/").put(controller.editProducts);
