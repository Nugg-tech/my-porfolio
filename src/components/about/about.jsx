import React from 'react'
import "./about.css"
import About from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'
const about = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src={About} alt="" className="about-img" />

        <div className="about-data grid">
          <div className="about-info">
            <p className="abou-description">
              Hi im Arl ivan Belarmino a Full-stack web developer from the Philippines
              and Nugg-tech is just my brand name for programming, but i also want to change soon.
              i've been gaining experience in web development since i was in grade 11, and i'm proud that
              i'm a graduate on Kode Go bootcamp.
            </p>
            <a href="" className="btn btn1">Check my CV</a>
          </div>

          <div className="about-skill grid">
            <div className="skill-data">
             <div className="skill-title">
                <h3 className="skill-name">Front-end design</h3>
                <span className="skill-number">40%</span>
              </div>
              
              <div className="skill-bar">
               <span className="skill-percentage front-end"></span>
              </div>
            </div>

            <div className="skill-data">
              <div className="skill-title">
                <h3 className="skill-name">UI/UX design</h3>
                <span className="skill-number">1%</span>
              </div>

              <div className="skill-bar">
                <span className="skill-percentage design"></span>
              </div>
            </div>
            
            <div className="skill-data">
              <div className="skill-title">
                <h3 className="skill-name">Video Editor</h3>
                <span className="skill-number">60%</span>
              </div>

              <div className="skill-bar">
                <span className="skill-percentage editor"></span>
              </div>
            </div>

            <div className="skill-data">
              <div className="skill-title">
                <h3 className="skill-name">Back-end Development</h3>
                <span className="skill-number ">40%</span>
              </div>

              <div className="skill-bar">
                <span className="skill-percentage back-end"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default about