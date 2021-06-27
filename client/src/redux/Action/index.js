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
        axios.get(`http://localhost:3001/recipes?query=${query}&diet=${diet}&orderBy=${orderBy}&orderWay=${orderWay}`)
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
        axios.get(`http://localhost:3001/recipes/${id}`)
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
        axios.post(`http://localhost:3001/recipes/`,{...recipe})        

    }
}

//Otro ejemplo de POST
/* export const addrecipe= (recipe)=>(dispatch)=>{
    axios.post(`http://localhost:3001/recipes2/`)
     .then(dispatch({
         type: AddRecipe,
         payload:[...recipe] 
     }))
} */
    
export function getDiets(){
    return function(dispatch) {
        axios.get(`http://localhost:3001/types`)
        .then((result) =>{
            dispatch({
                type: GetAllDiets,
                payload: result.data

            })
        })
    }
}
/* export function setTitle(query){
    return function(dispatch){
        dispatch({
            type:SetTitle,
            payload:query
            
        })
        //console.log("probando query",query)
    }
} */
/* export function setDiet(diet) {
    return function(dispatch){
        dispatch({
            type: SetDiet,
            payload: diet
        })
        console.log("probando action diet", diet)
    }
} */
/* export function setOrderWay(orderWay){
    return function(dispatch){
        dispatch({
            type: SetOrderWay,
            payload: orderWay
        })
    }
} */
/* export function setOrderBy(orderBy){
    return function(dispatch){
        dispatch({
            type: SetOrderBy,
            payload: orderBy
        })
    }
} */


/* export function emptyRecipes(){
    return function(dispatch) {
        dispatch({
            type: EmptyRecipes
        })
    }
} */



