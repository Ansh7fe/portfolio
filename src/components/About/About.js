import React, { useEffect, useState } from 'react'
import "./about.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNodeJs,
    faCss3,
    faDocker,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeFunc = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeFunc)

    }, []);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [])
    return (
        loading ? <Loader /> :
        <>
            <div className="about-page">
            <Sidebar />
                <div className="about-text-zone">
                    <h1>
                        <AnimatedLetters strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <div className="about-para">
                        <p>
                            I'm very ambitious full-stack developer , I'm also putting my efforts in learning DEVOPS and looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                    </p>
                        <p align="LEFT">
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                            
                     </p>
                        <p>
                            If I need to define myself in one sentence that would be a family
                            person,student, a travelling fanatic,
                            sketching enthusiast, and tech-obsessed!!!
                   </p>
                    </div>

                </div>

                <div className="stage-cube-cont">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About
