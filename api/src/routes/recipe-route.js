const {Router} = require('express');
const router = Router();


const {getRecipeByName, getRecipeByID} = require('../controllers/recipes.controllers');



//routes

router.get('/', getRecipeByName);
router.get('/:id', getRecipeByID);
//router.get('/types', getAllDiets);






module.exports = router;