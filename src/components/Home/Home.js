import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/index";
import Logo from "./Logo/Logo"
import "./home.scss"
import Sidebar from '../Sidebar/Sidebar';
import Loader from "../Loader/Loader"
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');
    const firstArray = ["n", "s", "h"];
    const lastNameArray = ["h", "a", "n", "w", "a", "r"]
    const jobArray = ["w", "e", "b", " ", "d", "e", "v", "l", "o", "p", "e", "r"];

    useEffect(() => {
        const timeFunc = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeFunc)

    }, []);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [])

    return (
        
            loading ? <Loader /> :
        
        <div className="container">
        <div className="stars" id="stars"></div>
        <div className="stars" id="stars2"></div>
        <div className="stars" id="stars3"></div>
        
        <Sidebar/>
            <div className="home_page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <div className="name-container">
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <span className="logoA">A</span>
                            <AnimatedLetters letterClass={letterClass}
                                strArray={firstArray}
                                idx={17}
                            /> <span className="logoA">J</span>
                            <AnimatedLetters letterClass={letterClass}
                                strArray={lastNameArray}
                                idx={17}
                            />
                        </div>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={25} />
                    </h1>
                    <h2>Full Stack Devloper / DevOps / DSA </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            <div className="home_image">
            <Logo />
            </div>
            </div>
        </div>
    
    )
}

export default Home
