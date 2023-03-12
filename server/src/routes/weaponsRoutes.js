const express = require("express");
const router = express.Router();
const weaponsController = require("../controllers/weaponsController");

router
  .route("/")
  .get(weaponsController.getAll)
  .post(weaponsController.createOne);

router
  .route("/:id")
  .get(weaponsController.getOneById)
  .put(weaponsController.updateOneById)
  .delete(weaponsController.deleteOneById);

module.exports = router;
