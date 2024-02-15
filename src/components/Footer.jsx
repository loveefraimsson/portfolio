import React from "react"; 

import copyright from '../assets/icons/copyright.png';
import email from '../assets/icons/email.png';
import github from '../assets/icons/github.svg';
import gps from '../assets/icons/gps.png';
import linkedin from '../assets/icons/linkedin.svg';
import phone from '../assets/icons/phone.png';

function Footer() {

    return (
        <section className="container turquoiseBackgroundColor contactContainer" id="contact">
            <h2>Kontakt</h2>

            <section className="contactSection">
                <div className="contactItem">
                    <img src={email} alt="Email-ikon" />
                    <a href="mailto:loveefraimsson@gmail.com">loveefraimsson@gmail.com</a>
                </div>

                <div className="contactItem">
                    <img src={phone} alt="Telefon-ikon" />
                    <a href="tel:0700-760338">0700-760338</a>
                </div>

                <div className="contactItem">
                    <img src={gps} alt="GPS-ikon" />
                    <span>Göteborg, Sverige</span>
                </div>
            </section>

            
            <section className="contactSection">
                <div className="contactItem">
                    <img src={linkedin} alt="LinkedIn-ikon" />
                    <a href="https://www.linkedin.com/in/love-efraimsson/">LinkedIn</a>
                </div>

                <div className="contactItem">
                    <img src={github} alt="Github-ikon" />
                    <a href="https://github.com/loveefraimsson/">Github</a>
                </div>
            </section>

            <hr />
            <p className="copyright">&copy; Copyright <script>document.write(new Date().getFullYear())</script> - Love Efraimsson</p>
            
        </section>
    )
}

export default Footer;
