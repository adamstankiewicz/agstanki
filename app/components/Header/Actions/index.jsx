import React from 'react';

import CVPdfSrc from '../../../assets/files/Adam_Stankiewicz_CV.pdf';

const Actions = () =>
  <div className="actions">
    <a className="btn hidden-xs" href="mailto:agstanki@gmail.com">
      <i className="fa fa-paper-plane" aria-hidden="true" /> Hire Me
    </a>
    <a className="btn" href={CVPdfSrc}>
      <i className="fa fa-download" aria-hidden="true" /> Download My CV
    </a>
  </div>;

export default Actions;
