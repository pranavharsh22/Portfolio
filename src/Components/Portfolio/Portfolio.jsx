import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import project1 from '../../img/Screenshot (264).png';
import project2 from '../../img/Screenshot (258).png';
import project3 from '../../img/Screenshot (260).png';
import project4 from '../../img/Screenshot (262).png';
import project5 from '../../img/Screenshot (257).png';

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        <span style={{color:darkMode?'white':''}}>Have a look at my</span>
        <span>Recent Projects</span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <a href="https://github.com/pranavharsh22"><img src={project1} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://github.com/pranavharsh22"><img src={project2} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://github.com/pranavharsh22"><img src={project3} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://github.com/pranavharsh22"><img src={project4} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://github.com/pranavharsh22"><img src={project5} alt="" /></a>
            </SwiperSlide>

        </Swiper>

     
    </div>
  )
}

export default Portfolio
