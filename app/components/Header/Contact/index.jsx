import React from 'react';

import { handleGAEventExternalLink } from '../../../Utility';

const Contact = () =>
  <div className="contact-info">
    <div className="container text-center">
      <ul className="list-inline">
        <li className="email">
          <i className="fa fa-envelope" />
          <a onClick={(e) => { handleGAEventExternalLink(e, 'Email (Link)'); }} href="mailto:agstanki@gmail.com">
            agstanki@gmail.com
          </a>
        </li>
        <li>
          <i className="fa fa-phone" />
          <a onClick={(e) => { handleGAEventExternalLink(e, 'Phone Number (Link)'); }} href="tel: +18603915292">
            +1.860.391.5292
          </a>
        </li>
        <li className="website">
          <i className="fa fa-globe" />
          <a onClick={(e) => { handleGAEventExternalLink(e, 'Website (Link)'); }} href="/">
            agstanki.com
          </a>
        </li>
      </ul>
    </div>
  </div>;

export default Contact;
