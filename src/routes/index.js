const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
    response.json({msg: 'Hello World'});
});

//OMNISTACK 11 - 09 minutos - VIDEO 02

module.exports = router;