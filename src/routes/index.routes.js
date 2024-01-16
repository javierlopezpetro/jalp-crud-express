const {getIndex, guardar, eliminar, actualizar, editar} = require('../controllers/index.controller.js');
const {Router} = require('express');


const router = Router();

router.get('/', getIndex);
router.post('/add', guardar);
router.get('/delete/:id', eliminar);
router.get('/update/:id', actualizar);
router.post('/editar/:id', editar);

module.exports = router;
