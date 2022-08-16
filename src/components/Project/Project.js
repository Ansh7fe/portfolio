import React, { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters/index";
import "./project.scss";
import ProjectItems from "./ProjectItems/ProjectItems"
import projects from "../../assets/data/project";
import { ScrollMenu} from "react-horizontal-scrolling-menu"
import Sidebar from "../Sidebar/Sidebar";
import Loader from '../Loader/Loader';
const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeFunc = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000)

        return () => clearTimeout(timeFunc);
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [])

    return (
        loading ? <Loader /> :
        <div className="project-container">
         <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            <Sidebar />
            <div className="project-text-zone">
                <h1 className="project-heading">

                    <AnimatedLetters strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                        idx={10}
                        letterClass={letterClass}
                    />
                </h1>
            </div>

            <div className="project-items">
                <ScrollMenu>
                    {
                        projects.map((project, index) => {
                            if (index >= 5) return;
                            return (


                                <ProjectItems key={project.id}
                                    title={project.name}
                                    desc={project.desc}
                                    code={project.code}
                                    link={project.link}
                                    image={project.image}
                                    tech={project.tech}
                                />

                            )
                        })
                    }
                </ScrollMenu>


            </div>

        </div>
        
    )
}

export default Project
