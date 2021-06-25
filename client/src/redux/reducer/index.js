import {GetAllDiets, GetRecipes, GetRecipeID, SetOrderBy, SetOrderWay, SetDiet, SetTitle, EmptyRecipes} from '../Action';


const initialState = {
    recipe:{}, //estado inicial donde se guardaran todas las busquedas que haga de recetas que tengan la palabra ingresada
    diets: [],    //aca todos los tipos de dietas
    recipeDetail: [],  // aca se guardaran todas los detalles de una receta(busqueda por ID)   
    page : 0,
    diet: {},
    query: {},
    orderBy: {},
    orderWay: {},

}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GetRecipes:
            return {
                ...state,
                recipe:action.payload                
            }
        case GetRecipeID:
            return {
                ...state,
                recipeDetail: action.payload
            } 
        case GetAllDiets:
            return {
                ...state,
                diets:action.payload
            }
        case SetTitle:
            return {
                ...state,
                query:action.payload
            }    
        case SetDiet:
            return {
                ...state,
                diet:action.payload
            }  
        case SetOrderWay:
            return {
                ...state,
                orderWay: action.payload
            }  
        case SetOrderBy:
            return {
                ...state,
                orderBy: action.payload
            } 
        
        case EmptyRecipes:   //preguntar en esta si tmb retorna un ...state
            return {
                recipe:{}

            }  
        
        default: 
           return state           
    }
    
    
} 

export default rootReducer;


