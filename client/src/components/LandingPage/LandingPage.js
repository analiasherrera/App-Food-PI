import React from 'react';
import foto from '../../img/comida1.jpg';
import {Link} from 'react-router-dom';



function LandingPage() {
    return (
        <div className='container-thumbnail position-relative'>   
         <img src={foto} alt="" className="col-xs" width="100%" height="750px"/>
         <p className="w-50 p-5 mt-5 fs-1 position-absolute top-0 start-30  text-white ">"Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals to fuss-free sides and moreish cakes, we've got everuthing you need..."</p>
         <div className="d-grid grap-2 col-6 mx-auto">
         <Link to="/recipes" className="w-25 fst-italic fw-bold position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill  btn btn-lg btn-success animate__animated animate__heartBeat" >GET STARTED</Link>               

         </div>
        </div>
    )
}

export default LandingPage;