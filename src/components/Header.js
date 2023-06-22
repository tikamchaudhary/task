import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Elevate from './Elevate';
import HeaderStyle from "./Header.module.css";


const Header = () => {
     const [mouseOver, setMouseOver] = useState(false);

    const handleElevate = () => {
        setMouseOver(!mouseOver);
    }

    return (
        <>
           <nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 d-flex">
                        <img src="" alt="img"/>
                       <div className={HeaderStyle.logo}>
                         <span >Pitch</span>
                        <span >Catalyst</span>
                       </div>

                    </div>
                    <div className="col-md-8">
                        <ul>
                            <li><NavLink to=""></NavLink>Over Service</li>
                            <li><NavLink to=""></NavLink>About Us</li>
                            <li><NavLink to=""></NavLink>Connect With Us</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                       <button>Login</button>
                    </div>
                </div>
            </div>
           </nav>
           <div className='container'>
                <h2 onMouseOver={handleElevate}>@ Eleveted Your<span>Deck</span></h2>
                {mouseOver && <Elevate />}
            </div>
        </>
    )
}

export default Header;