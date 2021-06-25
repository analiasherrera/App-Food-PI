import './App.css';
import React from 'react';
//import NavBar from '../src/components/NavBar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Home from '../src/components/HomePage/Home';
import RecipeDetail from '../src/components/RecipeDetail/RecipeDetail';
import AddRecipe from '../src/components/AddRecipes/AddRecipe';
//import Footer from './components/Footer/footer';



function App() {
  return (
    <div className="container-fluid">
      <Router>
        {/* <NavBar/> */}
        <Switch>          
          <Route path='/' exact component={LandingPage}/>         
          <Route path='/recipes' exact component={Home}/>
          <Route path='/recipes/:id' component={RecipeDetail}/>
          <Route path='/addrecipes' component={AddRecipe}/>  
        </Switch>
        {/* <Footer/> */}
      </Router>   
      
    </div>
  );
}

export default App;
