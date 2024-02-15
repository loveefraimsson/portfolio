import React from "react";

function About() {

    return (
        <section className="container blackBackgroundColor aboutContainer" id="about">
            <h2>Om mig</h2>
            <p>Jag heter Love, jag är 32 år och bor i Göteborg. Jag utbildade mig till Frontend-utvecklare och tog examen i september 2022. <br />Jag vill bidra med mina kunskaper inom frontend-utveckling men ser också fram emot att växa och lära mig nya saker så som olika tekniker, programmeringskunskaper och arbetssätt. <br /> Framöver ser jag mig fortsätta arbeta med noggrannhet och precision för att skapa så effektiva och användarvänliga hemsidor som möjligt. Jag strävar alltid efter bästa resultat och ser problemlösning som en tillgång och en naturlig del av arbetet. <br /> <br />

            På fritiden spenderar jag en hel del tid till träning. Jag gillar att styrketräna på gymmet och försöker att tycka om att träna löpning. Jag ägnar också mycket tid till att umgås med vänner och familj.</p>

            {/* Waveup */}
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 785.000000 103.000000"
            preserveAspectRatio="xMidYMid meet" className="waveup wave">
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

export default About;
