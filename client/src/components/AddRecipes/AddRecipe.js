import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../AddRecipes/AddRecipe.module.css';
import NavBar from '../NavBar/Navbar';
import foto1 from '../../img/img1.jpg'
import Footer from '../Footer/footer';
import {addRecipe} from '../../redux/Action/index'



function AddRecipe(props) {
    //const dispatch = useDispatch();
    const [input, setInput]= useState({
        name:"",
        summary:"",
        stepByStep:"",
       
    })

    const [checkboxInput, setCheboxInput] = useState({
        glutenFree:false,
        vegetarian:false,
        lactoOvoVegetarian:false,
        vegan:false,
        pescetarian:false,
        paleolithic:false,
        primal:false,
    })
    
    const [rating, setRating]= useState({
        score:null,
        healthy_score:null,

    })

    const [outCome, setOutCome] = useState({
        text:"",
       
    })

    ////////////////////////////////////////////////////////////

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckbox = (e) =>{
        setCheboxInput({
            ...checkboxInput,
            [e.target.name]: e.target.checked
        })
    }

    const handleRating = (e) => {
        setRating({
            ...rating,
            [e.target.name]: (e.target.value === "-") ? null : Number(e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if(input.name === '' || input.summary === '') {
            setOutCome({text:'Required data missing'})
        } else {
            const newRecipe= {...input, ...rating, Categories:[]};
            Object.values(checkboxInput).map((c,index) =>{if(c){newRecipe.Categories.push(index+1)}})
            console.log(newRecipe)
            props.postRecipe(newRecipe);
            setOutCome({text:"Recipe Uploaded Succesfuly!"})
        }
    }
     ////////////////////////////////////////////////////////////////////
  
      
    /* const postRecipe= useSelector(store => store.recipe) */
   

    return (
        <div className="">
            <NavBar/>
            <img src={foto1} alt="img fondo" className="col-xs" width="100%" height="1200px"/>
            <div className="mb-5 form-group container-md w-50 img-formulario  position-absolute top-0 start-30 mt-5">
            <form  onSubmit={(e)=>handleSubmit(e)} className=" border border-success border-3 mx-3  mt-5 w-75 mb-5" >
                <div className="mb-3 form-group d-flex justify-content-center">
                    <label className="p-4 control-label h6 mt-4 ">Recipe's name: </label>
                    <input 
                     type="text"
                     name= "name"
                     onChange= {(e)=>handleChange(e)}         
                     className="p-1 input-sm mt-5 form-horizontal border-2 border-secondary"    
                     placeholder="recipe name required" >
                    </input>                    
                </div>

                <div className="mb-5 d-flex justify-content-center">
                    <label  className="p-4 form-label h6">Summary: </label>
                    <textarea 
                    type="textarea"
                    name= "summary"
                    onChange={(e)=>handleChange(e)}
                    className="p-5 w-50 form-horizontal is-invalid-sm border-2 border-secondary" 
                   // id="validationTextarea" 
                    placeholder="recipe summary is required" >                                        
                    </textarea>
                    
                </div>

                <div className="mb-5 form-group d-flex justify-content-center">
                    <label for="validationTextarea" className="p-4 form-label h6">Step by step:</label>
                    <textarea 
                   // type="textarea"
                    onChange={(e)=>handleChange(e)}
                    name="stepByStep"
                    className="p-5 w-50 form-horizontal border-2 border-secondary mb-3" 
                    id="validationTextarea" 
                    placeholder="enter step by step" >                        
                    </textarea>                   
                </div>

                <div className="form-chek-inline mb-4 d-flex justify-content-center">                    
                    <label className="p-4 form-check-label h6" for="validationFormCheck1">Score: </label>
                    <input 
                    type="number" 
                    max="100"
                    min="5"
                    name="score"
                    onChange={(e)=>handleRating(e)}
                    className="col-sm-2 mt-4 p-1 form-horizontal mt-4 border-2 border-secondary"/> 
                                   
                    <label className="p-4 form-check-label h6 mx-2 mb-1" for="validationFormCheck1">Healthy Scoring:</label>
                    <input 
                    type="number"
                    max="100"
                    min="5"
                    name="healthy_score"
                    onChange={(e)=>handleRating(e)} 
                    className="form-horizontal col-sm-2 p-1 mt-4 border-2 border-secondary"/>                    
                </div>

                <label className="p-1 text h5 mb-2 d-flex justify-content-center">Type of diets</label>
                 <div className="form-group">
                     <div className="form-group d-flex justify-content-center ">
                <div className="form-chek mb-3">                                     
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Gluten Free</label>
                    <input 
                    type="checkbox"
                    name="glutenFree" 
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Vegetarian</label>
                    <input 
                    type="checkbox" 
                    name="vegetarian"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                 </div>
                 </div>

                 <div className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Lacto Ovo Vegetarian</label>
                    <input 
                    type="checkbox" 
                    name="lactoOvoVegetarian"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Vegan</label>
                    <input 
                    type="checkbox" 
                    name="vegan"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>
                 </div>

                 <div  className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Pescetarian</label>
                    <input 
                    type="checkbox" 
                    name="pescetarian"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>

                <div className="form-chek mb-3 mx-5">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Paleolithic</label>
                    <input 
                    type="checkbox" 
                    name="paleolithic"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>
                 </div>

                 <div  className="form-group d-flex justify-content-center">
                <div className="form-chek mb-3">                    
                    <label className="form-check-label h6 p-2 mx-2" for="validationFormCheck1">Primal</label>
                    <input 
                    type="checkbox" 
                    name="primal"
                    onChange={(e)=>handleCheckbox(e)}
                    className="form-check-input p-3 border-2 border-secondary" 
                    id="validationFormCheck1"
                    />                    
                </div>                
                 </div>
                </div>

                <h5 className="text-danger text-center">{outCome.text}</h5>
                <div className="mb-3 d-flex justify-content-center">
              <button 
              className=" p-3 mt-3 w-25 btn btn-lg btn-outline-success fw-bold border-3 h1"
               type="submit" 
               value="Send">
                   Send
                   </button>                    
                </div>
            </form>                     
            </div> 
             <Footer/>         
        </div>
    )    
}

///////////////////////////Redux//////////////////////////////////////////////////////

function mapStateToProps(state) {
    return {
        ...state
    }

}

function mapDispatchToProps(dispatch) {
    return {
        postRecipe: (recipe) => dispatch(addRecipe(recipe))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (AddRecipe);
