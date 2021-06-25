const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRoute = require('./recipe-route');

const recipePostRouter= require('./recipePost-route');

const getAllDietsRouter = require('./getAllDiets-router');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipeRoute);

router.use('/recipes', recipePostRouter);

router.use('/types', getAllDietsRouter)



module.exports = router;
