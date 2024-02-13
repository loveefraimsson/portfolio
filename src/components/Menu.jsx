import React from "react";

import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';

function Menu(props) {

    return(
        <>
            <section className="menu">
                <svg onClick={props.handleMenu} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="25px" height="25px" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#519694" stroke="none">
                    <path d="M1225 4117 c-96 -32 -162 -90 -204 -177 -21 -45 -26 -69 -26 -135 0
                    -148 -16 -128 578 -723 l522 -522 -526 -528 c-594 -595 -573 -570 -574 -717 0
                    -95 28 -166 91 -229 63 -63 134 -91 229 -91 148 0 128 -16 723 578 l522 522
                    528 -526 c595 -594 570 -573 717 -574 95 0 166 28 229 91 63 63 91 134 91 229
                    -1 147 20 122 -574 717 l-526 528 522 522 c594 595 578 575 578 723 0 95 -28
                    166 -91 229 -63 63 -134 91 -229 91 -147 -1 -122 20 -717 -574 l-528 -526
                    -527 526 c-466 464 -534 528 -583 549 -66 28 -169 35 -225 17z"/>
                    </g>
                </svg>

                <ul className="menuContent">
                    <li className="menuItem"><a href="#">Stack</a></li>
                    <li className="menuItem"><a href="#">Projekt</a></li>
                    <li className="menuItem"><a href="#">Erfarenhet</a></li>
                    <li className="menuItem"><a href="#">CV</a></li>
                    <li className="menuItem"><a href="#">Om mig</a></li>
                    <li className="menuItem"><a href="#">Kontakt</a></li>
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
