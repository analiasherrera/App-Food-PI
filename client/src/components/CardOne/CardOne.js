import React from 'react';
import './CardOne.css';
import {PropTypes} from 'prop-types';


 function CardOne({image, title, diets, score, id}) {

    return(

        <div className="card text-center bg-dark">
           <div className="overflow">
           <img src={image} alt="" className="card-img-top"/>
           </div>
            <div className="card-body text-light">                
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">
                    {diets}                   
                    </p>
                <h6 className="card-text"> Score: {score}</h6>
                <a href={`/recipes/${id}`} className="btn btn-outline-success rounded-0" >Recipe detail</a>
            </div>
        </div>   

    );    
   
}

CardOne.prototype = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    diets: PropTypes.string
}
export default CardOne;