import axios from 'axios';


export const AddRecipe= "AddRecipe";
export const GetRecipes= "GetRecipe";
export const GetRecipeID= "GetRecipeID";
export const GetAllDiets= 'GetAllDiets';
export const SetDiet= 'SET_DIET';
export const SetTitle= 'SET_TITLE';
export const SetOrderWay= 'SET_ORDERWAY';
export const SetOrderBy= 'SET_ORDERBY';
export const EmptyRecipes= 'EmptyRecipes';



export function getRecipes(query="", diet="", orderBy="", orderWay=""){
    return function (dispatch){
        axios.get(`/recipes?query=${query}&diet=${diet}&orderBy=${orderBy}&orderWay=${orderWay}`)
         .then((result)=>{
            // console.log("Probando si llega a las actions",result)
             dispatch({
                 type: GetRecipes,
                 payload: result.data
             })
         })
    }    
}

export function getRecipeById(id) {
    return function(dispatch){
        axios.get(`/recipes/${id}`)
         .then((result) =>{
             dispatch({ 
                 type: GetRecipeID,
                 payload: result.data
             })
         })
    }
} 
//Post
export function addRecipe(recipe) {
    return function(dispatch) {
        axios.post(`/recipes/`,{...recipe})        

    }
}

//Otro ejemplo de POST
/* export const addrecipe= (recipe)=>(dispatch)=>{
    axios.post(`/recipes2/`)
     .then(dispatch({
         type: AddRecipe,
         payload:[...recipe] 
     }))
} */
    
export function getDiets(){
    return function(dispatch) {
        axios.get(`/types`)
        .then((result) =>{
            dispatch({
                type: GetAllDiets,
                payload: result.data

            })
        })
    }
}




