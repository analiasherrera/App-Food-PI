import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getRecipes, getDiets } from '../../redux/Action/index'
import './SearchBar.css';

 function SearchBar() {
     const dispatch = useDispatch()
    const[query,setQuery]= useState(""); 
    const[diet, setDiet] = useState("");       
    const[orderBy,setOrderBy]= useState("");
    const[orderWay, setOrderWay]= useState("");
   
    

   useEffect( () =>{
       async function fetchDate() {
          await dispatch(getDiets());
          await  dispatch(getRecipes(query, diet, orderBy, orderWay));
       }
       fetchDate()
   },[])

    const handleChange = (e) =>{
       // e.preventDefault();
        setQuery(e.target.value);

    }

    const orderByChange = (e) => {
        e.preventDefault();
       setOrderBy(e.target.options[e.target.selectedIndex].text);
       
    }

    const orderWayChange = (e) => {
        e.preventDefault();
        setOrderWay(e.target.options[e.target.selectedIndex].text);
    }
    
    const selectChange =(e) => {
        e.preventDefault();
        setDiet(e.target.options[e.target.selectedIndex].text);      
      }

    const handeClick = (e) => {
        e.preventDefault();        
           dispatch(getRecipes(query, diet, orderBy, orderWay));   

    }
    
     const diets= useSelector(store => store.diets);
     //const allRecipesTogether= useSelector(store => store.recipe.result)

     
     
     
    return (
        <div className="container-sm mb-3 ">
            <form className="d-flex mt-5 justify-content-center d-flex">
                <input onChange={handleChange}     className="w-50 form-control form-control-lg me-2 border-2" type="search" placeholder="Search your recipes..." aria-label="Search"/>
                <button onClick={handeClick} className="fw-bold btn btn-lg btn-outline-success border-2" type="submit">Search</button>                
            </form>
            <div className="form-group d-flex justify-content-center">
            <select onChange={orderByChange} className="fw-bold form-sm text-success mt-1 "  aria-label="Default select example">
                    <option   defaultValue="Order By">Order By</option>
                    <option value="title">title</option>
                    <option value="score">score</option>
                </select>
                <select onChange={orderWayChange} className="fw-bold form-sm text-success mx-5 mt-1 "  aria-label="Default select example">
                    <option defaultValue="Order Way">Order Way</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
                <select onChange={selectChange} className="fw-bold form-sm text-success mt-1"  aria-label="Default select example">
                    <option   defaultValue="Type of Diet">Type of Diet</option>
                    {
                        diets?.map(d =>(
                            <option  key={d.id} value={d.id}>{d.name}</option>
                        ))
                    }                    
                    
                </select>
            </div>
        </div>                    
                 
    )
}
export default SearchBar;