import React from 'react';
import CardOne from '../CardOne/CardOne';


function Cards({recipe, loading}) {    
  if(loading){
      return <h2>Loading...</h2>
  }
    
        return (
           <div className="car container d-flex justify-content-center align-items-center h-100">
               <div className="row">
                   {
                       recipe?.map(rcpe =>(
                           <div className="col-md-4" key={rcpe.id}>
                               <CardOne 
                               image={rcpe.image}
                               title={rcpe.title}
                               diets={rcpe.diets}
                               score={rcpe.score}
                               id={rcpe.id}
                               />
                           </div>
                       ))
                   }
               </div>
           </div>
        )             
    }

export default Cards
