import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="name">
                <h1><a href ="#Hero">Miranda Shoraji</a></h1>
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




















// const Navbar = () => {
//     return (
//         <header>
//             <nav className="navbar">
//                     <h1>Miranda </h1>

//                     <ul>
//                         <li><a href="#About">About Me</a></li>
//                     </ul>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;