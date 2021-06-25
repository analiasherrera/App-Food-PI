import React from 'react';
import '../AddRecipes/AddRecipe.module.css';
import NavBar from '../NavBar/Navbar';
import foto1 from '../../img/img1.jpg'
import Footer from '../Footer/footer';

//import {useSelector, useDispatch} from 'react-redux';
//import {getDiets} from '../redux/action'


function AddRecipe() {

    return (
        <div className="">
            <NavBar/>
            <img src={foto1} alt="img fondo" className="col-xs" width="100%" height="1200px"/>
            <div className="mb-5 form-group container-md w-50 img-formulario  position-absolute top-0 start-30 mt-5">
            <form className=" border border-success border-3 mx-3  mt-5 w-75 mb-5" >
                <div className="mb-3 form-group d-flex justify-content-center">
                    <label for="validationTextarea" className="p-4 control-label h6 mt-4 ">Recipe's name: </label>
                    <input className="p-1 input-sm mt-5 form-horizontal border-2 border-secondary"  id="validationTextarea"  placeholder="Recipe name required" required></input>                    
                </div>

                <div className="mb-5 d-flex justify-content-center">
                    <label for="validationTextarea" className="p-4 form-label h6">Summary: </label>
                    <textarea className="p-5 w-50 form-horizontal is-invalid-sm border-2 border-secondary" id="validationTextarea" placeholder="Recipe summary required" required></textarea>
                    
                </div>

                <div className="mb-5 form-group d-flex justify-content-center">
                    <label for="validationTextarea" className="p-4 form-label h6">Step by step:</label>
                    <textarea className="p-5 w-50 form-horizontal border-2 border-secondary" id="validationTextarea" placeholder="Step by step is required" required></textarea>
                   
                </div>

                <div className="form-chek-inline mb-4 d-flex justify-content-center">                    
                    <label className="p-3 form-check-label h6" for="validationFormCheck1">Score: </label>
                    <input type="input" className="col-sm-2 mt-4 p-2 form-horizontal mt-4 border-2 border-secondary"/> 
                                   
                    <label className="p-3 form-check-label h6 mx-4" for="validationFormCheck1">Healthy Scoring:</label>
                    <input type="input" className="form-horizontal col-sm-2 p-2 mt-4 border-2 border-secondary"/>                    
                </div>

                <label className="p-1 text h5 mb-5 d-flex justify-content-center">Type of diets</label>
                 <div className="form-group">
                     <div className="form-group d-flex justify-content-center ">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Fodmap Friendly </label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Gluten Free </label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>
                     </div>

                 <div className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Lacto Ovo Vegetarian</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Paleolithic</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>
                 </div>

                 <div  className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Pescatarian</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Primal</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>
                 </div>

                 <div  className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Vegan</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Whole 30</label>
                    <input type="checkbox" className="form-check-input p-3 border-2 border-secondary" id="validationFormCheck1"/>                    
                </div>
                 </div>
                </div>

                <div className="mb-3 d-flex justify-content-center">
              <button className=" p-3 mt-3 w-25 btn btn-lg btn-outline-success fw-bold border-3 h1" type="submit" disable>Send</button>                    
                </div>
            </form>                     
            </div> 
             <Footer/>         
        </div>
    )    
}

export default AddRecipe;
