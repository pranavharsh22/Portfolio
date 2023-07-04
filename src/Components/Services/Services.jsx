import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume updated one.pdf';
import {motion} from 'framer-motion';
import {themeContext} from "../../Context";
import { useContext } from 'react';
const Services = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition= {duration : 2,type:'spring'}
  return (
   <div className="services" id='Services'>
    <div className="awesome">
        <span style={{color:darkMode?"white":""}}>My Awesome</span>
        <span>services</span>
        <span>
            I have developed many websites using HTML,CSS,JAVASCRIPT and REACT-JS
            <br />
            and always keen to learn about new technologies.
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button></a>
        <div className="blur s-blur1" style={{background:"var(--blueCard)"}}></div>

    </div>
    <div className="cards">
        <motion.div
        initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        
        style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'LeaderShip Qualities'}
            detail={"Handled a team in college and Currently handled a team in organization"}
            />
        </motion.div>
        <motion.div
        initial={{left:"-11rem",top:"12rem"}}
        whileInView={{left:"-4rem"}}
        transition={transition}
        
        style={{top:'12rem',left:"-4rem"}}>
            <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"HTML, CSS, JAVASCRIPT, React-JS, BOOTSTRAP, MEDIAQUERY"}
            />

        </motion.div>
        <motion.div
        initial={{top:"19rem",left:"25rem"}}
        whileInView={{left:"12rem"}}
        transition={transition}
        
        style={{top:"19rem",left:"12rem"}}>
            <Card
            emoji={Humble}
            heading={"Other Languages"}
            detail={'PYTHON, C-PROGRAMMING, MYSQL, NUMPY, PANDAS'}
            />
            

        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>
   </div>
  )
}

export default Services
