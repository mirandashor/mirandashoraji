import React, { useState } from 'react';
import './Navbar.css';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
    // state variable for dark MoveDiagonal. 
    // darkmode starts as false, setdarkmode is the function call to change it
    const [darkMode, setDarkMode] = useState(false);
    return (
        <header className="header">
            <nav className="navbar">
                <div className="name">
                <img src= "./public/clover.png" alt="clover"/>
                <h1><a href ="#Hero">Miranda Shoraji</a></h1>
                {/* dark mode to add later feature */}
                    {/* <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button> */}
                </div>

                <ul className="navElements">
                    <li> <a href ="#About">About Me</a></li>
                    <li> <a href ="#Skills">Skills</a></li>
                    <li> <a href="#Projects">Projects</a></li>   
                    <li> <a href="#Contact">Contact Me</a></li>                
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;