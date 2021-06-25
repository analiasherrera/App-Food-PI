import React, {useEffect, useState} from 'react'; 
import {useDispatch, useSelector} from 'react-redux'
import { getRecipes } from '../../redux/Action';
import SearchBar from "../SearchBar/SearchBar";
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/footer';
import Cards from '../Cards/Cards';
import './Home.css';
import Pagination from '../Pagination/Pagination';

function Home() { 
    const[query]= useState("");
    const[diet] = useState("");
    const[orderBy]= useState("");
    const[orderWay]= useState("");    
    

    //-----Pagination---  
    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[recipePerPage] = useState(3);
    
    const dispatch= useDispatch()

    useEffect( () =>{
        async function fetchData() {            
            setLoading(true);          
            await dispatch(getRecipes(query, diet, orderBy, orderWay));           
            setLoading(false);        
        }
        fetchData()

    },[query,diet,orderBy, orderWay]);     
    
    
    const recipe = useSelector(store => store.recipe.result)
    //console.log("guarda todas las recetas que llegan", recipe)


    //get current posts

    const indexOfLastPost = currentPage * recipePerPage;
    const indexOfFirstPost = indexOfLastPost - recipePerPage;
    const currentPosts = recipe?.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (numPagina) => setCurrentPage(numPagina)
      


    return (
        <div>
            <Navbar/>  
            <div>
            <SearchBar/>
           </div>   
           <div className="cardsHome">              
             <Cards recipe={currentPosts} loading={loading}/>
          </div>
           <Pagination recipePerPage={recipePerPage} totalPosts={recipe?.length} paginate= {paginate}/>            
            <Footer/>
        </div>        
    )   
}

export default (Home);