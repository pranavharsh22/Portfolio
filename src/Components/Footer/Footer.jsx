import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'; 
import LinkedIN from '@iconscout/react-unicons/icons/uil-linkedin'; 
import Github from '@iconscout/react-unicons/icons/uil-github'; 


const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>Email id-pranavkumarrajput068@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <a href="https://github.com/pranavharsh22"><Github color='white' size='3rem'/></a>
                <a href="https://www.linkedin.com/in/pranav-kumar-singh-24879a1b1"><LinkedIN color='white' size='3rem'/></a>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
