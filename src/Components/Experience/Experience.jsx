import React from 'react';
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?'var(--orange)':''}}>8</div>
            <span style={{color:darkMode?'white':''}}>Months</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle"style={{color:darkMode?'var(--orange)':''}}>20+</div>
            <span style={{color:darkMode?'white':''}}>Completed </span>
            <span>Projects</span>
        </div>
        <div className="achievement"style={{color:darkMode?'var(--orange)':''}}>
            <div className="circle"style={{color:darkMode?'var(--orange)':''}}>1</div>
            <span style={{color:darkMode?'white':''}}>Company</span>
            <span style={{color:darkMode?'white':''}}>Work</span>

           
        </div>
      
    </div>
  )
}

export default Experience
