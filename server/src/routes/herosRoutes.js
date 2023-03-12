const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");

router
     .route("/")
     .get(heroesController.getAll)
     .post(heroesController.createOne);

router
     .route("/:id")
     .get(heroesController.getOneById)
     .put(heroesController.updateOneById)
     .delete(heroesController.deleteOneById);

module.exports = router;
