import React from "react";

import CVPDF from '../Love_Efraimsson_CV.pdf'

function CV() {

    return (
        <section className="CVcontainer container blackBackgroundColor" id="cv">
            <section className="turquoiseBackgroundColor innerContainer hidden">
                <p>Vill du se mer om mig?</p>

                <div className="buttonSection">
                    <a href={CVPDF} target='_blank' className="button">CV</a>
                    <a href='http://linkedin.com/in/love-efraimsson' className="button">LinkedIn</a>
                </div>
            </section>
        </section>
    )
}

export default CV;
