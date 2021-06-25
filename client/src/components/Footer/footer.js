import React from 'react';
import {Link} from 'react-router-dom';
import '../Footer/footer.css'


function Footer() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-success">            
            <div className="container-fluid   mb-0 ">
                <nav className="row bg-success mt-3">
                <Link className="fs-5 fw-bold navbar-brand   text-dark" to="/"><i className="fs-5 fas fa-hamburger"/>All Recipes</Link>
               
                </nav>  
                <div className="d-flex justify-content-center p-5">
                 <div className="p-3">
                <i className="fab fa-facebook-square "/>
                 </div>
                 <div className="p-3">
                <i className="fab fa-twitter "/> 
                 </div>
                 <div className="p-3">
                <i className="fab fa-instagram"/>  
                 </div>                    
                </div> 
               </div> 
            </div>
    );
}

export default Footer;