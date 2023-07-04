import React from 'react';
import './Works.css';
import Logo1 from '../../img/logofinal1.png';
import CSS from '../../img/csslogo1.png';
import Javascript from '../../img/javascript logo.png';
import html1 from '../../img/html logo.png';
import Amazon from '../../img/amazon.png';
import Aioeam from '../../img/aioeam.jpg';
import {motion} from 'framer-motion';
import { useContext } from 'react';
import { themeContext } from '../../Context';



const Works = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
   
  return (
    <div className='works'>
        <div className="awesome">
        <span style={{color:darkMode ? "white":""}}>Currently Working:</span>
        <span>AIOEAM</span>
      
        <span>
            I am working as a Frontend Developer in <b style={{color:'black',fontSize:'14px'}}>AIOEAM</b>
            <br />
            So i have developed many websites for the clients and for the company
            <br />
            Also i got the opportunity to handle a team.
            <br />
            Technologies on which I work is React JS ,HTML, CSS, JAVASCRIPT

        </span>
       
        <button className='button s-button'>Hire Me</button>
        <div className="blur s-blur1" style={{background:"var(--blueCard)"}}></div>

    </div>
    <div className="w-right">
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        
        
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Logo1} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={CSS} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Aioeam} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={html1} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Javascript} alt="" />
            </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
  )
}

export default Works
