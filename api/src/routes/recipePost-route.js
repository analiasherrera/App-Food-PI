const {Router} = require('express');

const router= Router();

const {addRecipe} = require('../controllers/recipePOST.controllers')



//router

router.post('/', addRecipe)


module.exports = router