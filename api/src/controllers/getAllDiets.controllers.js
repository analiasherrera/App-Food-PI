const{Typediet} = require('../db');



const getAllDiets = async (req,res, next)=>{
    console.log("probando si ingresa")
    try {
        const diets= await Typediet.findAll()
        res.status(200).json(diets);
        
    } catch (error) {
        next(error)
        
    }

}

module.exports={getAllDiets}