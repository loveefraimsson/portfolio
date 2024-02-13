import React from "react";
import profileImg from '../assets/profilbild.jpg'

function Hero() {

    return (
        <>
            <section className="hero">
                <div className="heroContent">
                    <img src={profileImg} alt="Love Efraimsson" />
                    <h1>Love Efraimsson </h1>
                    <p className="subtitle">- Frontend Developer</p>
                </div>
                
            </section>
        </>
    )
}


export default Hero;