import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active  button--flex'
                : 'qualification__button  button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active  button--flex'
                : 'qualification__button  button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Primary Education</h3>
                <span className="qualification__subtitle">Mathura Highschool, Ichalkaranji</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  92%
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Secondary Education</h3>
                <span className="qualification__subtitle">The New Highschool & Junior College, Ichalkaranji</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  82%
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Technology (BTech)</h3>
                <span className="qualification__subtitle">Rajarambapu Institute of Technology, Islampur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  First Year - 8.05 CGPA
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BTech in Computer Engineering</h3>
                <span className="qualification__subtitle">Rit - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Second Year - 8.12 CGPA
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">2021 to present</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  created websites for personal & project Purpose
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI / UX Design</h3>
                <span className="qualification__subtitle">2021 to present</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Designed UI & Color Scheme for websites
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programming</h3>
                <span className="qualification__subtitle">2021 to present</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Solved 500+ dsa problems on various platforms
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Teaching</h3>
                <span className="qualification__subtitle">2022 to present</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  I taught dsa & development in college club
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
