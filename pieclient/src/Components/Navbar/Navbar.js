import React, {useState} from 'react';
import './Navbar.css';
import piePic from '../../assets/pumpkinpie.jpg';
import Logout from './Logout/Logout';


function Navbar() {
    return (
     <div className="Nav">
       <nav>
           <img id="piePic" src={piePic} alt="pie" />
           <Logout setSession={props.setSession}/>
       </nav>
     </div>
   );
 }

 export default Navbar;