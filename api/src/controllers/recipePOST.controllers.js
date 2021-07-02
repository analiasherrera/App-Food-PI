const {Recipe} = require('../db');
const {v4: uuidv4} = require('uuid')


const addRecipe = async (req,res) =>{    

 try {
    const id = uuidv4();    
    let {image, title, summary, score, health_Score, step_by_step, typedietId}= req.body
     // console.log(image)
     // console.log(typedietId);
      console.log(req.body)
    if(!image) {
        image = "https://i.pinimg.com/originals/74/f0/97/74f0970a1abff5c07a4488dff715beea.jpg";

    } 
    //const newRecipe = {...req.body, id}
    console.log("2", image)
     const createRecipe = await Recipe.create({
         image,
         title,
         summary,
         score,
         health_Score,
         step_by_step
     },{
        fields: ['image', 'title', 'summary', 'score', 'health_Score', 'step_by_step']
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