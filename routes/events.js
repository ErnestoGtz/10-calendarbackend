// Todas tienen que pasar por la validacion del JWT
// Obtener eventos

const express = require('express');
const router = express.Router();
const {getEvents,addEvent,updateEvent,deleteEvent} = require('../controllers/events');
const {validarJWT} = require('../middlewares/validar-jwt');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {isDate} = require('../helpers/isDate');

router.use(validarJWT);

router.get('/',getEvents);
router.post(
    '/',
    [
       check('title','Titulo es obligatorio').not().isEmpty(),
       check('start','Fecha Inicial Obligatorio').custom(isDate),
       check('end','Fecha Fin Obligatoria').custom(isDate),
       validarCampos 
    ],
    addEvent);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);


module.exports = router;