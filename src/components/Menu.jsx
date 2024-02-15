import React from "react";
import { IoClose } from "react-icons/io5";

import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';

function Menu(props) {

    return(
        <>
            <section className="menu">
                <IoClose onClick={props.handleMenu} size={25} />
                <ul className="menuContent">
                    <li className="menuItem"><a href="#stack" onClick={props.handleMenu}>Stack</a></li>
                    <li className="menuItem"><a href="#project" onClick={props.handleMenu}>Projekt</a></li>
                    <li className="menuItem"><a href="#experience" onClick={props.handleMenu}>Erfarenhet</a></li>
                    <li className="menuItem"><a href="#cv" onClick={props.handleMenu}>CV</a></li>
                    <li className="menuItem"><a href="#about" onClick={props.handleMenu}>Om mig</a></li>
                    <li className="menuItem"><a href="#contact" onClick={props.handleMenu}>Kontakt</a></li>
                    <div className="iconSection">
                        <a href="https://linkedin.com/in/love-efraimsson" target="_blank"> <img src={linkedinIcon} alt="LinkedIn icon" className="menuIcon" /></a>
                        <a href="https://github.com/loveefraimsson" target="_blank"><img src={githubIcon} alt="Github icon" className="menuIcon" /></a>
                    </div>
                    
                </ul>
            </section>
        </>
    )
}


export default Menu;
