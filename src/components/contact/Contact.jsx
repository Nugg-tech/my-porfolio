import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Let Me Know</h2>
      <span className="section subtitle">Contact us to know it </span>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Lorem, ipsum dolor.</h3>
          <p className="contact-details">Lorem ipsum dolor sit amet.</p>
        </div>
        <form action="" className="contact-form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-contact"
                placeholder="Your name?"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-contact"
                placeholder="What is your Email?"
              />
            </div>
            <div className="contact_form-div">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Spill your message and we chitchat it"
                className="contact_form-contact"
              ></textarea>
              <button>message me</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
