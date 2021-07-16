import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
const NavBar =()=>{

    return(
        <React.Fragment>
             <div className="nav_bar">
               
                    <div> <Link to="/" className="one">  <li>Home</li> </Link></div>
                    <Link to="Gallery" className="three">  <li>Image</li></Link>
                     <Link to="Foodorder" className="two"> <li>Food Order</li></Link>
                     <Link to="Movies" className="three">  <li>Movies</li></Link>
                    
                
             </div>
        </React.Fragment>
    )
}

export default NavBar;