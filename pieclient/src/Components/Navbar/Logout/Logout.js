import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/powerbutton.png';

const Logout = () => {
    return(
        <div>
        <img onClick={() => props.setSession(undefined)} id="logout" className="logout" src={logoutPic} alt="powerButton" />
        </div>
    );
};

export default Logout;
