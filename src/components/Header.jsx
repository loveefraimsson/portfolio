import React, { useState, useEffect } from "react";
import Menu from "./Menu";

import hamburgerIcon from '../assets/icons/hamburger.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const [opacityHeader, setOpacityHeader] = useState({
        opacity: '0.7',
        borderBottom: 'none'
    });

    const listenScrollEvent = (event) => {
        if (window.scrollY > 200) {
            return setOpacityHeader({
                opacity: '0.9',
                borderBottom: '2px solid var(--darkgreen)'
            })
            
        } else if (window.scrollY < 200) {
            return setOpacityHeader({
                opacity: '0.7',
                borderBottom: 'none'
            })
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
    }, []);



    function handleMenu() {
        setShowMenu(prevState => !prevState)
    }

    let styleHeader = {
        opacity: opacityHeader.opacity,
        borderBottom: opacityHeader.borderBottom
    }


    

    function onEnter(event) {
        switch (event.key) {
            case "Enter":
            console.log('enter');
            if (!showMenu) {
                setShowMenu(prevState => !prevState)
                break;
            }
        } 
    }

    function closeMenu(event) {
        switch (event.key) {
            case "Enter":
            console.log('test');
            if (showMenu) {
                setShowMenu(prevState => !prevState)
                break;
            }
        } 
    }



    
    return (
        <>
        <section className="headerContainer">

            {/* HEADER MOBILE */}
            {/* Show menu or header depending on state */}
            {showMenu ? <Menu handleMenu={handleMenu} closeMenu={closeMenu} /> : 
                <header style={styleHeader} className="header headerMobile">
                    <img onClick={handleMenu} src={hamburgerIcon} alt="Hamburgar-meny-ikon" className="hamburgerIcon menuBtn" tabIndex="0"
                    onKeyDown={onEnter} />
    
                </header>
            }

            {/* HEADER DESKTOP */}       
            <header className="header headerDesktop" style={styleHeader}>
                <section className="leftSection">
                    <a className="menuItem" href="#stack">Stack</a>
                    <a className="menuItem" href="#project">Projekt</a>
                    <a className="menuItem" href="#experience">Erfarenhet</a>
                    <a className="menuItem" href="#cv">CV</a>
                    <a className="menuItem" href="#about">Om mig</a>
                    <a className="menuItem" href="#contact">Kontakt</a>
                </section>

                <section className="rightSection">
                    <a href="https://linkedin.com/in/love-efraimsson" target="_blank"> <img src={linkedinIcon} alt="LinkedIn icon" className="menuIcon" /></a>
                    <a href="https://github.com/loveefraimsson" target="_blank"><img src={githubIcon} alt="Github icon" className="menuIcon" /></a>
                </section>
            </header>
            

        </section>
        </>
    )
}

export default Header;
