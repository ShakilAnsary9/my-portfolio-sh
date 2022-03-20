import React from 'react';
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import userAvtar from '../../assets/user.png';
import './testimonials.css';





const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
      // install Swiper modules
      modules={[Pagination , Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={userAvtar} alt="" />
          </div>
            <h5 className='client__name'>Hasan Alkhater</h5>
            <small className='client__review'>
            Shakil took time to understand the requirements and finished before the deadline set. His task was to create a multi-lingual landing page with automatic language change based on location, and he did it successfully in a timely manner.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={userAvtar} alt="" />
          </div>
            <h5 className='client__name'>Jaideep Hinduja</h5>
            <small className='client__review'>
            Shakil understands the requirements quite well, and implementation is praiseworthy .. He puts in his mind and gives real good practical suggestions. Would surely work on more projects with him in future.. Recommend that one should try out his work.. I believe you would like his work.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={userAvtar} alt="" />
          </div>
            <h5 className='client__name'>Duelen</h5>
            <small className='client__review'>
            I really like working with Shakil. He has a lot of experience with WordPress, is friendly and doesn't stop working until you are completely satisfied with the result.<br /> ---
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials