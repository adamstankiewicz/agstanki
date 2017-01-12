import React from 'react';

import { handleGAEventExternalLink } from '../../../Utility';

const Social = () =>
  <ul className="social list-inline">
    <li>
      <a onClick={(e) => { handleGAEventExternalLink(e, 'Facebook (Button)'); }} href="https://facebook.com/adamstankiewicz12">
        <i className="fa fa-facebook" aria-label="Facebook" />
      </a>
    </li>
    <li>
      <a onClick={(e) => { handleGAEventExternalLink(e, 'Twitter (Button)'); }} href="https://twitter.com/agstanki">
        <i className="fa fa-twitter" aria-label="Twitter" />
      </a>
    </li>
    <li>
      <a onClick={(e) => { handleGAEventExternalLink(e, 'LinkedIn (Button)'); }} href="https://linkedin.com/in/stankiewiczadam">
        <i className="fa fa-linkedin" aria-label="LinkedIn" />
      </a>
    </li>
    <li>
      <a onClick={(e) => { handleGAEventExternalLink(e, 'GitHub (Button)'); }} href="https://github.com/adamstankiewicz">
        <i className="fa fa-github" aria-label="GitHub" />
      </a>
    </li>
  </ul>;

export default Social;
