import React from 'react';

const Part1 = () => {
  return (
    <div className="contact__content">
      <h3 className="contact__title">Talk to me</h3>

      <div className="contact__info">
        <div className="contact__card">
          <i className="bx bx-mail-send contact__card-icon"></i>
          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">shubhamhalade3@gmail.com</span>

          <a href="mailto:shubhamhalade3@gmail.com" className="contact__button">
            Write me{' '}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>{' '}
          </a>
        </div>

        <div className="contact__card">
          <i className="bx bxl-whatsapp contact__card-icon"></i>
          <h3 className="contact__card-title">Whatsapp</h3>
          <span className="contact__card-data">862-489-0857</span>

          <a
            href="https://api.whatsapp.com/send?phone=8624890857&text=Hello, Welcome to my page!"
            className="contact__button"
          >
            Write me{' '}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>{' '}
          </a>
        </div>

        <div className="contact__card">
          <i className="bx bxl-messenger contact__card-icon"></i>
          <h3 className="contact__card-title">Messenger</h3>
          <span className="contact__card-data">@Shubham171220</span>

          <a
            href="https://twitter.com/Shubham171220"
            className="contact__button"
          >
            Write me{' '}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Part1;
