import React from "react";
import profileImg from '../assets/profilbild.jpg';
import '../App.css';

function Hero() {

    return (
        <>
            <section className="hero">
                <div className="heroContent">
                    <img src={profileImg} alt="Love Efraimsson" className="hidden" />
                    <h1 className="hidden">Love Efraimsson</h1>
                    <p className="subtitle hidden">- Frontend Developer</p>
                </div>
                
            </section>
        </>
    )
}


export default Hero;