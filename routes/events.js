// Todas tienen que pasar por la validacion del JWT
// Obtener eventos

const express = require('express');
const router = express.Router();
const {getEvents,addEvent,updateEvent,deleteEvent} = require('../controllers/events');
const {validarJWT} = require('../middlewares/validar-jwt');

router.use(validarJWT);

router.get('/',getEvents);
router.post('/',addEvent);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);


module.exports = router;