
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from '../../redux/Action/index';
import { useParams } from 'react-router-dom';
import Nav from '../NavBar/Navbar';
import Footer from '../Footer/footer';


function RecipeDetail() {
    const dispatch = useDispatch();
    const {id} = useParams()
   

    useEffect( () => {
        dispatch(getRecipeById(id))
    },[id])

    const recipeDetail = useSelector(store => store.recipeDetail)

    return (
        <div className="">
         <Nav/>
        <div className="content bg-dark bg-gradienth-100 p-5">
            <div className=" bigCard card w-75  d-flex justify-content-center align-items-center text-center bg-dark">
            <div className="overflow">
               <img src={recipeDetail.image} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h3 className="card-title">{recipeDetail.title}</h3>
                <h6 className="card-text">Score: {recipeDetail.score}</h6>
                <h6 className="card-text">Health Score: {recipeDetail.health_Score}</h6>
                <h6>Types of diets: {recipeDetail.diets}</h6>
                <h6>Types of dish: {recipeDetail.dish_type}</h6>
                <h6>Dish Summary: {recipeDetail.summary}</h6>
               <a href={`/recipes`} className="btn btn-outline-success rounded-0 mt-5"> Back to All Recipes</a>
            </div>
        </div>

        </div>
        <Footer/>
        </div>
        
    )
    
}

export default RecipeDetail;