import React from 'react';
import Part1 from "./Part1"
import Part2 from "./Part2"
import "./Contact.css"

function Contact() {
  return (
    <section className="contact section" id="contact">
     <h2 className="section__title">Contact Me</h2>
     <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <Part1/>
        <Part2/>
    </div>
    </section>
  );
}
export default Contact;