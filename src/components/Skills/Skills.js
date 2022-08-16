import React, { useEffect, useState } from 'react';
import "./skills.scss";
import Sidebar from "../Sidebar/Sidebar";
import skills from "../../assets/data/skills";
import AnimatedLetters from "../AnimatedLetters/index"
import SkillsItems from './SkillsItems/SkillsItems';
import Loader from '../Loader/Loader';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeFunc = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000)

        return () => clearTimeout(timeFunc);
    }, []);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [])

    return (
        loading ? <Loader/> :

        <>

            <div className="skills-container">
                <div className="sidebar">

                    <Sidebar />
                </div>
                <div className="skills-text-zone">
                    <h1 className="skills-heading">

                        <AnimatedLetters strArray={["S", "k", "i", "l", "l", "s",]}
                            idx={10}
                            letterClass={letterClass}
                        />
                    </h1>
                </div>
                <div className="skills-items">
                    {
                        skills.map((skill, id) => {
                            return (
                                <SkillsItems
                                    key={skill.id}
                                    title={skill.title}
                                    experience={skill.experience}
                                    desc={skill.desc}
                                    tech={skill.tech}
                                    image={skill.image}
                                    link={skill.rating1}
                                    profile={skill.work}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills
