const {Recipe} = require('../db');
const {v4: uuidv4} = require('uuid')


const addRecipe = async (req,res) =>{    

 try {
    const id = uuidv4();    
    const {title, summary, score, health_Score, step_by_step, typedietId}= req.body

    //const newRecipe = {...req.body, id}
    
     const createRecipe = await Recipe.create({
         
         title,
         summary,
         score,
         health_Score,
         step_by_step
     },{
        fields: ['title', 'summary', 'score', 'health_Score', 'step_by_step']
     });     

      if(createRecipe){
        await createRecipe.addTypediet(typedietId)
        return res.json({
             message: 'Recipe created successfully',
             data: createRecipe
         })
     }   
     
 } catch (error) {
     console.log(error)
     res.status(500).send({
         message: error,
         data: {}
     })     
 }

}
module.exports= {addRecipe};