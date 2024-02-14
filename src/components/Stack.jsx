import React from "react";
import iconArray from '../assets/icons/Images';
import waveUpTurquoise from '../assets/icons/waveup.png'

function Stack() {

   

    return (
        <section className="container blackBackgroundColor">
            <h2>Stack</h2>
            
            <section className="stackContainer innerContainer turquoiseBackgroundColor">

            {
                iconArray.map((icon => {
                    return(
                        <div className="card blackBackgroundColor" key={icon.iconName}>
                            <img src={icon.image} alt={`${icon.iconName} icon`} />
                            <p>{icon.iconName}</p>
                        </div>

                    )
                }))
            }

            </section>

            {/* <img src={waveUpTurquoise} alt="" className="waveup" /> */}
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 785.000000 103.000000"
            preserveAspectRatio="xMidYMid meet" className="waveup">
                <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)"
                fill="#519694" stroke="none">
                <path d="M6515 1019 c-534 -43 -1001 -158 -1930 -474 -703 -239 -997 -325
                -1355 -394 -845 -163 -1617 -72 -2445 289 -212 93 -539 264 -711 372 -34 21
                -64 38 -68 38 -3 0 -6 -191 -6 -425 l0 -425 3925 0 3925 0 0 459 c0 429 -1
                460 -17 465 -91 27 -436 79 -638 96 -139 11 -534 11 -680 -1z"/>
                </g>
            </svg>


        </section>
    )
}


export default Stack;
