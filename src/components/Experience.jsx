import React from "react";
import computer from '../assets/computer.jpg'

function Experience() {

    return(
        <section className="experienceContainer container blackBackgroundColor">

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="785.000000pt" height="103.000000pt" viewBox="0 0 785.000000 103.000000"
            preserveAspectRatio="xMidYMid meet" className="wavedown wave">
                <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)"
                fill="#519694" stroke="none">
                <path d="M0 571 c0 -429 1 -460 17 -465 91 -27 436 -79 638 -96 156 -13 497
                -13 661 0 554 44 1005 154 1949 475 703 239 997 325 1355 394 845 163 1617 72
                2445 -289 212 -93 539 -264 711 -372 34 -21 64 -38 68 -38 3 0 6 191 6 425 l0
                425 -3925 0 -3925 0 0 -459z"/>
                </g>
            </svg>
            
            <h2>Erfarenhet</h2>

            <section className="work">
                <h3>Arbetslivserfarenhet</h3>

                <section className="workExperience">
                    <ul>
                        <li >
                            <span className="title">HAJ Agency | Webbutvecklare</span> <br />
                            <span className="time">September 2022 - Maj 2023</span> <br />
                            <span className="titleResponsibility">Huvudansvar:</span>
                            <ul className="responsibilityList">
                                <li>Utveckling av hemsidor i Wordpress</li>
                                <li>Arbeta med JavaScript och CSS för att skapa funktioner och utseende efter kundens önskemål</li>
                                <li>Kontakt med kund</li>
                                <li>Handledning av praktikant</li>
                                <li>Utveckling av hemsida med React som frontend och Wordpress som backend</li>
                                <li>Utveckling av webbshop i Wordpress och WooCommerce</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="workExperience">
                    <ul>
                        <li >
                            <span className="title">HAJ Agency | PraktikWebbutvecklare</span> <br />
                            <span className="time">Januari 2022 - september 2022</span> <br />
                            <span className="titleResponsibility">Huvudansvar:</span>
                            <ul className="responsibilityList">
                                <li>Utveckling av hemsidor i Wordpress</li>
                                <li>Arbeta med JavaScript och CSS för att skapa funktioner och utseende efter kundens önskemål</li>
                                <li>Kontakt med kund</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="workExperience">
                    <ul>
                        <li >
                            <span className="title">Tetiko | Arbetsträning</span> <br />
                            <span className="time">April 2019 – december 2020</span> <br />
                            <p className="marginWorkDescription">Utbildade mig inom grundläggande HTML och CSS </p>
                        </li>
                    </ul>
                </section>

                <section className="workExperience">
                    <ul>
                        <li >
                            <span className="title">Volvo | Montör</span> <br />
                            <span className="time">April 2015 – juni 2015</span> <br />
                            <p className="marginWorkDescription">Arbetade som montör på bandet på Volvo</p>
                        </li>
                    </ul>
                </section>

                <section className="workExperience">
                    <ul>
                        <li >
                            <span className="title">Indikator AB | Lageransvarig/Arbetsledare</span> <br />
                            <span className="time">Oktober 2012 – januari 2015</span> <br />
                            <p className="marginWorkDescription">Ansvarade för inkommande och utgående leveranser och var arbetsledare för medarbetare. Vi arbetade bland annat med utskick av enkäter och hantering av returer. </p>
                        </li>
                    </ul>
                </section>


            </section>

            

            <section className="education">
                <div>
                    <h3>Utbildning</h3>
                     <ul>
                        <li>
                            <span className="time">Dec 2020 – september 2022</span> <br />
                            <span><b>FrontEnd Developer</b>, Medieinstitutet</span>
                        </li>
                        <li>
                            <span className="time">September 2017 – oktober 2017</span> <br />
                            <span><b>Grundkurs Java, IT-högskolan</b></span>
                        </li>
                        <li>
                            <span className="time">Augusti 2007 – juni 2010</span> <br />
                            <span><b>Samhällsvetenskap</b>, Aranäsgymnasiet</span>
                        </li>
                    </ul>

                    <img src={computer} alt="Laptop på ett bord" />
                </div>
               
            </section>


        </section>
    )
}

export default Experience;
