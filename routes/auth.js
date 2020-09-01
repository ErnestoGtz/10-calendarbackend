/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const express = require('express');
const router = express.Router();

const { newUser,login,renew} = require('../controllers/auth');


router.post('/new',newUser);

router.post('/',login);

router.get('/renew',renew);

module.exports = router;