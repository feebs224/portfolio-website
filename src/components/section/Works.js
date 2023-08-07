import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

            <div className="third">
                 <a href="https://www.fibiuxportfolio.com/">
                <>
                    <div className="text-center">
                        <h1 id="Projects" className="red-line col-12 pp-head">{section4Title}</h1>
                    </div>
                </>
                </a>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
