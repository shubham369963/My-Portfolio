import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shubham</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://twitter.com/Shubham171220" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-twitter"></i>
        </a>

        <a href="https://github.com/shubham369963" className="footer__social-link" target="_blank" rel="noreferrer">
        <i className="uil uil-github"></i>
        </a>


        <a href="https://www.linkedin.com/in/shubham-halade-22bb55206/" className="footer__social-link" target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin"></i>
        </a>
            </div>
            <span className="footer__copy">&#169; Copyright. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer