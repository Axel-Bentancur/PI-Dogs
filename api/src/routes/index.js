//const axios = require("axios");
const { Router } = require("express");
const {
  getBreedList,
  getBreedName,
  getTemperamentList,
  createBreed,
  bulkTemperament,
} = require("../controllers/dogs.controller");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.route("/dogs").get(getBreedList);
router.route("/dogs/:name").get(getBreedName);
router.route("/dog").post(createBreed);
router.route("/temperament").get(getTemperamentList);
router.route("/bulk").get(bulkTemperament);

module.exports = router;
