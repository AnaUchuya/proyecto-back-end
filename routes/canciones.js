var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");

//Listado
router.get("/", cancionesController.listado);

//Crear usando EJS:
// router.get("/crear", cancionesController.crear);
// router.post("/crear", cancionesController.guardar);

//Crear usando Postman:
router.post("/", cancionesController.guardar);

//Detalle
router.get("/:id", cancionesController.detalle);

//Editar usando EJS:
// router.get("/editar/:id", cancionesController.editar);
// router.put("/editar/:id", cancionesController.actualizar);

//Editar usando Postman:
router.put("/:id", cancionesController.actualizar);

//Borrar usando EJS:
// router.delete("/borrar/:id", cancionesController.borrar);

//Borrar usando Postman:
router.delete("/:id", cancionesController.borrar);

module.exports = router;