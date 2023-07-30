import {NavLink} from 'react-router-dom'
import './navbar.css'
import {ReactComponent as Hamburger} from '../img/hamburger.svg';
import { useState } from 'react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };

    return (

        <nav className="navbar">
            <div className="container">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger/>
                </div>

                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to = "/">
                                Stories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/favourites">
                                Favourites
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar