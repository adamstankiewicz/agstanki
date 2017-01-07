import React from 'react';

const Contact = () =>
  <div className="contact-info">
    <div className="container text-center">
      <ul className="list-inline">
        <li className="email">
          <i className="fa fa-envelope" />
          <a href="mailto:agstanki@gmail.com">agstanki@gmail.com</a>
        </li>
        <li>
          <i className="fa fa-phone" />
          <a href="tel: +18603915292">+1.860.391.5292</a>
        </li>
        <li className="website">
          <i className="fa fa-globe" />
          <a href="/">agstanki.com</a>
        </li>
      </ul>
    </div>
  </div>;

export default Contact;
