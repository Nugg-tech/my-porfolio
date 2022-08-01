import React from 'react';
import Me from "../../assets/avatar-1.svg";
import HeadSocial from './HeadSocial';
import ScrollDown from './ScrollDown';
import "./home.css";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home-img" />
        <h1 className="home-name">Nugg-tech</h1>
        <span className="home-education">
          I'm a Full Stack Developer
        </span>

        <HeadSocial />

        <a href="#contact" className="btn">Hire me</a>

        <ScrollDown />
      </div>

    </section>
  )
}

export default Home