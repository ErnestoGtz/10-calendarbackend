/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const {validarCampos} = require('../middlewares/validar-campos');
const { newUser,login,renew} = require('../controllers/auth');
const {validarJWT} = require('../middlewares/validar-jwt');


router.post(
        '/new',
        [
            check('name','El nombre es obligatorio').not().isEmpty(),
            check('email','Email es obligatorio').isEmail(),
            check('password','El password debe de ser de 6 caractes').isLength({min:6}),
            validarCampos
        ],
        newUser);

router.post('/',
            [
                check('email','Email debe de ser valido').isEmail(),
                check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
                validarCampos
            ],
            login);

router.get('/renew',validarJWT,renew);

module.exports = router;