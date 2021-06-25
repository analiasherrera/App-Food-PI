import React from 'react';
import {Link} from 'react-router-dom';
import '../NavBar/Navbar.css';

function Navbar() {
    

  
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <Link className="fs-2 fw-bold navbar-brand text-white" to="/"><i className="fs-2 fas fa-hamburger"/>All Recipes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="fs-5 fw-bold nav-link active text-white" aria-current="page" to="/recipes">Home</Link>
        <Link className="fs-5 fw-bold nav-link text-white" to="/addrecipes">Add Recipes</Link>
        
      </div>
    </div>
  </div>
</nav>
 </div>
    )
}

export default Navbar
