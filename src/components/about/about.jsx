import React from 'react'
import "./about.css"
import About from "../../assets/avatar-2.jpg"

const about = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src={About} alt="" className="about-img" />

        <div className="about-data">
          <div className="about-info">
            <p className="about-description">
              Hi im Arl ivan Belarmino (Nugg-tech) a Full-stack web developer from the Philippines,
              i've been gaining experience in web development since i was in grade 11, and i'm proud that
              i'm a graduate on Kode Go bootcamp.
            </p>
            <a href="" className="btn btn1">Check my CV</a>
          </div>
          <div className="about-boxes grid">
        <div className="about-box">
            <i className="about-icon icon-fire"></i>

            <div>
                <h3 className="about-title">1000</h3>
                <span className="about-subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-clock"></i>

            <div>
                <h3 className="about-title">4hrs</h3>
                <span className="about-subtitle">Time in PC per day</span>
            </div>
        </div>
    </div>
        </div>
      </div>
    </section>
  )
}

export default about