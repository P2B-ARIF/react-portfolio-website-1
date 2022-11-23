import React from "react";
import "./Testimonials.css";
import img from "./../../assets/image.png";
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
       modules={[ Pagination, ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum impedit praesentium aut fugit at nihil unde deleniti,
              ex voluptates doloribus accusamus adipisci aspernatur laudantium
              perspiciatis quaerat, ut omnis accusantium. Ullam?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum impedit praesentium aut fugit at nihil unde deleniti,
              ex voluptates doloribus accusamus adipisci aspernatur laudantium
              perspiciatis quaerat, ut omnis accusantium. Ullam?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum impedit praesentium aut fugit at nihil unde deleniti,
              ex voluptates doloribus accusamus adipisci aspernatur laudantium
              perspiciatis quaerat, ut omnis accusantium. Ullam?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum impedit praesentium aut fugit at nihil unde deleniti,
              ex voluptates doloribus accusamus adipisci aspernatur laudantium
              perspiciatis quaerat, ut omnis accusantium. Ullam?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
