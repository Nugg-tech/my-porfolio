import React from "react";
import "./testemony.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    subtitle: "Web Developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    image: Image3,
    name: "John Doe",
    subtitle: "Web Developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

const Tesemony = () => {
  return (
    <section className="testemony container section">
      <h2 className="section-title">Clients & Reviews</h2>

      <Swiper
        className="testemony-container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, subtitle, comment }) => {
          return (
            <SwiperSlide className="testemony-item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testemony-title">{name}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Tesemony;
