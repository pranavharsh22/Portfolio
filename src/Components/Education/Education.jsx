import React from 'react';
import './Education.css';
import{Swiper,SwiperSlide} from 'swiper/react';
import Kendriya from "../../img/kendriya logo.png";
import Narayana from "../../img/narayana logo1.png";
import Jss from "../../img/jss logo.png";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const Education = () => {
    const clients=[
        {
         img: Jss,
         review: "Currently I have pursued my Bachelors of Engineering in Electronics and Communication engineering from JSS ACADEMY OF TECHNICAL EDUCATION BANGALORE in the year 2022 and got CGPA-7.4",   
        },
        {
            img: Narayana,
            review: "I have passed my 12th standard from Narayana IIT Academy which is affliliated to TELANGANA STATE BOARD in the year 2018 and I got 95%",   
           },
           {
            img: Kendriya,
            review: "I have passed my 10th standard from Kendriya Vidyalaya AFS Hakimpet which is affliliated to CENTRAL BOARD OF SECONDARY EDUACATION in the year 2016 and I got 8.6CGPA",   
           },
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>My Education</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
            

        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}>
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img} alt=''/>
                    <span>{client.review}</span></div>
                    </SwiperSlide>
                );

            })}

        </Swiper>

      
    </div>
  )
}

export default Education
