import React ,{useState} from 'react';
import {BrowserRouter as Router ,Route } from "react-router-dom" ;
import './App.css';
import MainTodo from './MainTodo';
import FoodOrder from './FoodOrder';
import NavBar from './NavBar'
import Gallery from './Gallery';
import Movies from './Movies';
import FormValidation from './FormValidation'

function App() {
  
  
  return (
    <div className="App">
       
      <Router>
      <NavBar/>
      <switch>
        <Route  path="/" exact component={MainTodo}/>
        <Route  path="/Foodorder" component={FoodOrder}/>
        <Route    path="/Gallery"  component={Gallery} />
        <Route    path="/Movies"  component={Movies} />
        <Route    path="/Form"  component={FormValidation} />
      </switch>

      
        
      </Router>
    </div>
  );
}

export default App;
