import React from "react";
import projects from '../project.js'

function Project() {

    return(
        <section className="projectContainer container turquoiseBackgroundColor" id="project">
            <h2>Project</h2>

            <section className="projectSection">
            {projects.map((project => {

                    return(
                        <section className="projectCard" key={project.title}>
                            <div>
                                <img src={project.imageURL} alt={project.imageAlt} />
                            </div>

                            <div>
                                {project.tags.map((tag) => {
                                    return <span className="tag" key={tag}>{tag}</span>
                                })}
                                <p className="description">{project.description}</p>
                                <div className="buttonContainer">
                                    <a href={project.linkWebsite} className="button">Till hemsidan</a>
                                    <a href={project.linkGithub} className="button">Till Github</a>
                                </div>
                                
                            </div>
                            
                            
                        </section>
                       
                    )
                }))}
            </section>

        </section>
    )
}

export default Project;
