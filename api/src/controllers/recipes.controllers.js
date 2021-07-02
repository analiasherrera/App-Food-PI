const { Recipe, Typediet } = require('../db');
const axios = require('axios');
const { RECIPE_URL, RECIPE_ID } = require('../../constants');
require('dotenv').config();
const { API_KEY, API_KEY2, API_KEY3,API_KEY4, API_KEY5, API_KEY6, API_KEY7,API_KEY8,API_KEY9} = process.env;
const{ Op }= require('sequelize');


const getRecipeByName= async (req,res) =>{
 const {query,diet, orderBy, orderWay} = req.query;
       // console.log("Probando si llega title=", query)
      
  /* let {page} = req.query */
        /* console.log("Probando page=", page) */
  

let url = `${RECIPE_URL}?number=100&addRecipeInformation=true&apiKey=${API_KEY8}`;

 if(diet) {
     url= url + `&diet=${diet}`;
 }
 if(query) {
     url= url + `&query=${query}`;
 }
 if(orderBy){
     url= url + `&orderBy=${orderBy}`
 }
 if(orderWay){
     url= url + `&orderWay=${orderWay}`
 }
 /* if(page) {
     url= url + `&page=${page}`
 } */

const recetaApi= await axios.get(url)     
 
const where= {};

if(query){
    where.title= {
        [Op.iLike]: `%${query}%`
    }}

 const recetaBD = await Recipe.findAll({
     where:where,
    include:{model:Typediet}
});
    
    Promise.all([recetaApi, recetaBD])
     .then((result)=>{
         let[recetaApiResponse, recetaBDResponse]= result;
         
         ////---Filtro por tipo de dietas en la BD---////
        if( diet ){
            recetaBDResponse = recetaBDResponse.filter( recipe => {
                return recipe.typediets && recipe.typediets.some( typediet => typediet.name === diet );
            } );
        }

         apiRecipefilter = recetaApiResponse.data.results.map((c)=>{
             return {
                 id: c.id,
                 title: c.title,
                 image: c.image,
                 diets: c.diets,                 
                 score: c.spoonacularScore
             }
         })
        // console.log('probando si ingresa', apiRecipefilter)
        //devuelve en mayor detalle lo que tiene esa variable-la BD-y la tabla intermedia
        //console.log("Probando lo que llega", JSON.stringify( recetaBDResponse, null, 2 ) );


         const dbRecipeFilter = recetaBDResponse.map((c)=>{
             //console.log(c)
             return {
                 id: c.id,
                 title: c.title,                 
                 image: c.image,
                 diets: c.typediets.map((a)=> a.name),
                 score: c.score
                 
             }
         })
        // console.log("probando los datos DB", dbRecipeFilter)

         let allRecipesTogether = dbRecipeFilter.concat(apiRecipefilter);
         //console.log('Probando allRecipes final',allRecipesTogether)         

          ////--OrderBY--////
          if(orderBy === "score"){
              
              allRecipesTogether= allRecipesTogether.sort((a,b) =>{
                  if(a.score > b.score) return 1;
                  if(a.score < b.score) return -1;
                  return 0
              })
          }
          if(orderBy === "title"){

              allRecipesTogether = allRecipesTogether.sort((a,b) =>{
                  if(a.title > b.title) return 1;
                  if (a.title < b.title) return -1;
                  return 0
              })
          }
          ////--orderWay--////---

          if(orderWay === "DESC" && "title" || orderWay === "DESC" && "score"){
              allRecipesTogether= allRecipesTogether.reverse()
          }

          
         //console.log("probando antes del page", allRecipesTogether)


          ////Pagination////---probando la pag desde el back...
        
          ////////////////////////////////////
         /*  let next=false; */

          /* if(allRecipesTogether[(page*9)+10]){
              next=true;
          }
 */
         /*  if(! page){
            page=1;
        }
       allRecipesTogether = allRecipesTogether.slice(page*9, page*9 + 9) */
              return res.send({result:allRecipesTogether}).status(200)
          
                
       
     })
     .catch((err) => console.log(err))             

}      

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const getRecipeByID= async (req, res,next) =>{  

    try {

        const {id} = req.params;

        //cuando el id es de la api    
    
        if(id.toString().length < 10) {
            const response = await axios.get(`${RECIPE_ID}/${id}/information?apiKey=${API_KEY8}`)
    
            const newRecetaApi= {
                image: response.data.image,
                title: response.data.title,
                summary: response.data.summary,
                score: response.data.spoonacularScore,
                health_Score: response.data.healthScore,
                dish_type: response.data.dishTypes,
                diets: response.data.diets                   
              
            }
    
            return res.status(200).json(newRecetaApi)
        }
        //cuando el id=uuid(BD)
    
        const recetaDB= await Recipe.findOne({
            
            where:{ id: id },
            include:{model:Typediet}
        })
    
        return res.status(200).json(recetaDB)
        
    } catch (error) {
        next(error)
        
    }         
  
}  



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = {
        getRecipeByName,
        getRecipeByID             
    }