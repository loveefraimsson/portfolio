import React, { useState, useEffect } from "react";
import Menu from "./Menu";

import hamburgerIcon from '../assets/icons/hamburger.png';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const [opacityHeader, setOpacityHeader] = useState('0.7')

    const listenScrollEvent = (event) => {
    if (window.scrollY > 200) {
        return setOpacityHeader("1")
        console.log('scroll');
    } else if (window.scrollY > 70) {
        return setOpacityHeader("0.7")
        console.log('scroll igen');
    } 
    }

    function handleMenu() {
        setShowMenu(prevState => !prevState)
    }

    let styleHeader = {
        opacity: opacityHeader,
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
    
    return (
        <>
        <section className="headerContainer">

            
            {/* Show menu or header depending on state */}
            {showMenu ? <Menu handleMenu={handleMenu}/> : 
                <header style={styleHeader} className="header">
                    <img onClick={handleMenu} src={hamburgerIcon} alt="" className="hamburgerIcon menuBtn" />
                
                </header>
            }
            

        </section>
        </>
    )
}

export default Header;
