import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg";
import Image3 from "../../assets/service-3.svg";
import Image4 from "../../assets/service-2.svg";

const data = [
 {
  id: 1,
  image: Image1,
  title: "Front-end",
  description: "I'm a front-end developer with a passion for building beautiful, responsive websites and applications."
 },
 {
  id: 3,
  image: Image3,
  title: "Video-Editor",
  description: "freelancing for 2 years of video editing in my highschool days and have knowledge of basic and advance video editing."
 },
 {
  id: 4,
  image: Image4,
  title: "Back-end",
  description: "know how to use PHP laravel and use a TALL stack in my previous capstone project."
 },
 
]
const Services = () => {
  return (
   <section className="services container section" id='services'>
    <h2 className="section-title">Skills</h2>
    <div className="services-container grid">
      {data.map(({id, image, title, description}) => {
         return(
          <div className="services-card" key={id}>
            <img src={image} alt="" className="services-img" />
            <h3 className="services-title">{title}</h3>
            <p className="services-description">{description}</p> 
          </div>
         )
      })}
    </div>
   </section>
  )
}

export default Services