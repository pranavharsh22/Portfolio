import React from 'react';

import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';
import { themeContext } from '../../Context';
import { useContext } from 'react';





function Intro() {
    const transition= {duration : 2,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?"white":""}}>Hi! I Am</span>
                <span>Pranav Kumar</span>
                <span>Frontend Developer with experience in web designing, producing the quality work </span>
            </div>
            <Link spy={true} to='Contacts' smooth={true} >
            <button className="button i-button">Hire Me</button></Link>
            <div className="i-icons">
               <a href="https://github.com/pranavharsh22"><img src={Github} alt="" /></a> 
               <a href="https://www.linkedin.com/in/pranav-kumar-singh-24879a1b1"> <img src={LinkedIn} alt="" /></a>
                <a href="/"><img src={Instagram} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            
            src={glassesimoji} alt="" />
            <motion.div
            initial={{top:'-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            
            style={{top:'-4%',left:'68%'}}
            className='floating-div'>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/></motion.div>
            <motion.div
            initial={{left:'9rem',top:'18rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            
            style={{top:'18rem',left:'0rem'}} className='floating-div'><FloatingDiv image={thumbup} txt1='Leadership' txt2='Qualities'/></motion.div>
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
           
      
        </div>
        
    </div>
  )
}

export default Intro
