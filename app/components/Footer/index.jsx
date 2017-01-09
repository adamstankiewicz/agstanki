import React from 'react';
import moment from 'moment';

const Footer = () =>
  <footer className="footer text-center">
    <div className="container">
      <small className="copyright">
        Copyright &copy; {moment().format('YYYY')}. Adam Stankiewicz
      </small>
    </div>
  </footer>;

export default Footer;
