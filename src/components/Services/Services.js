import React, {useState} from 'react'
import './Services.css'

const Services = () => {

    const [toggleState , setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="services section" id="services">
        <h2 className="section__title">
            Services
        </h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                    Product <br/> Designer
                    
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1) }>View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">
                        Product Designer
                        </h3>
                        <p className="services__modal-description">A product designer is a professional who specializes in the creation and development of new products. We are responsible for the entire product design process, from research and concept development to prototyping and testing.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I create functional and aesthetically pleasing products that meet user needs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I use skills in design to bring ideas to life.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I ensure the product is feasible and viable.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I use tools such as sketches, models, and computer-aided design software to create and refine product designs.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">Design and mockups of products for clients.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">

                    Ui/Ux <br/> Designer

                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2) }>View More<i className="uil uil-arrow-right services__button-icon"></i> </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">
                        Ui/Ux Designer
                        </h3>
                        <p className="services__modal-description">UI/UX designers are professionals who specialize in creating user interfaces and experiences for digital products such as websites, mobile apps, and software applications.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I always consider the user's perspective when making design decisions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I avoid cluttered or confusing layouts, and strive for clean, easy-to-navigate interfaces.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I make sure that users can easily complete tasks and achieve their goals within your design.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I use the same design elements throughout your product to create a cohesive user experience.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I listen to feedback from users and stakeholders, and use it to improve your design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                    Visual <br/> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3) }>View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">
                        Visual Designer
                        </h3>
                        <p className="services__modal-description">Visual designers are professionals who specialize in creating visual elements for digital and print media. They work across a range of industries and projects, including branding, advertising, websites, mobile apps, and print materials.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I work on a variety of projects, websites, mobile apps, and print materials.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I have a strong understanding of design principles such as color theory, typography, and layout.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I often create brand guidelines that establish the visual style and tone for a company's marketing and branding efforts.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I use a variety of tools and techniques such as mood boards, sketches, and prototypes to develop and refine their designs.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">

                                </i>
                                <p className="services__modal-info">I stay up-to-date with design trends and new technologies to ensure that their designs remain current and relevant.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services