const router = require("express").Router();
const apiProductosRouter = require("./api/productos");
const apiUsuariosRouter = require("./api/usuarios");
router.use("/productos", apiProductosRouter);
router.use("/usuarios", apiUsuariosRouter);
module.exports = router;
