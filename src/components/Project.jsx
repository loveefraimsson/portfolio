import React from "react";
import projects from '../project.js'

function Project() {

    return(
        <section className="projectContainer container turquoiseBackgroundColor" id="project">
            <h2>Project</h2>

            <section className="projectSection innerContainer">
            {projects.map((project => {

                    return(
                        <section className="projectCard hidden" key={project.title}>
                            <div className="imageContainer">
                                <a href={project.linkWebsite} target="_blank"><img src={project.imageURL} alt={project.imageAlt} /></a>
                            </div>

                            <div className="textContainer">
                                <div className="tagsContainer">
                                {project.tags.map((tag) => {
                                    return <span className="tag" key={tag}>{tag}</span>
                                })}
                                </div>
                                <p className="description">{project.description}</p>
                                <div className="buttonContainer">
                                    <a href={project.linkWebsite} className="button" target='_blank'>Till hemsidan</a>
                                    <a href={project.linkGithub} className="button" target='_blank'>Till Github</a>
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
