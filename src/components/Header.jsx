import React from "react";

import hamburgerIcon from '../assets/icons/hamburger.png'

function Header() {
    
    return (
        <>
            <section className="header">
                <img src={hamburgerIcon} alt="" className="hamburgerIcon menuIcon" />
            </section>
        </>
    )
}

export default Header;
