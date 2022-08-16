import React, { useState } from 'react'
import "./skillsitem.scss"
import ReactCardFlip from 'react-card-flip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const SkillsItems = ({ title, desc, tech, experience, image ,link,work}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
            <div className="skills-item not-flipped">
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="title-container">
                    <h1>{title}</h1>
                <button onClick={handleClick}><ArrowForwardIcon /></button>
                </div>
            </div>
            <div className="skills-item flipped">
                <div className="skill-items_info">
                    <p>
                        {desc}
                    </p>
                </div>
                <div className="skill-items_tech">
                    <h3>Tech Stakes :</h3>
                    <p>{tech}</p>
                </div>

                <div className="skill-items_exp">
                    <h3>Experience :</h3>
                    <p>{experience}</p>
                </div>
                {/* <div className="skill-items_work">
                    <h3>Profile</h3>
                    <a href={link}>{work}</a>
                </div> */}
                <button onClick={handleClick}>
                    <KeyboardBackspaceIcon />
                </button>
            </div>
        </ReactCardFlip>

    )
}

export default SkillsItems
