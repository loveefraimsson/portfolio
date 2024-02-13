import React, { useState, useEffect } from "react";
import Menu from "./Menu";

import hamburgerIcon from '../assets/icons/hamburger.png';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(prevState => !prevState)
    }
    
    return (
        <>
        <section className="headerContainer">

            
            {/* Show menu or header depending on state */}
            {showMenu ? <Menu handleMenu={handleMenu}/> : 
                <header className="header">
                    <img onClick={handleMenu} src={hamburgerIcon} alt="" className="hamburgerIcon menuBtn" />
                
                </header>
            }
            

        </section>
        </>
    )
}

export default Header;
