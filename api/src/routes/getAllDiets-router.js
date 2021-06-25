const {Router} = require('express');
const router = Router();

const {getAllDiets} = require('../controllers/getAllDiets.controllers')



router.get('/', getAllDiets)






module.exports= router;