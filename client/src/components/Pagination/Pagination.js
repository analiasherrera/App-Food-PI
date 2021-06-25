import React from 'react';
import './Pagination.css';


function Pagination({recipePerPage, totalPosts, paginate}) { 

  const pageNumbers = [];

  for(let i=1; i<= Math.ceil(totalPosts / recipePerPage); i++) {
    pageNumbers.push(i)

  }

        return (

        <div className="pagination pagination-lg justify-content-center">
            {
              pageNumbers.map(number => (
                <li key={number} className="page-item">
                  <a onClick= {()=> paginate(number)}   href="#!" className= "page-link">
                  {number}
                  </a>
                </li>
              ))
            }
          </div>
        )
}




export default (Pagination);
