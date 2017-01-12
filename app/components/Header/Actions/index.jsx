import React from 'react';

import { handleGAEventExternalLink } from '../../../Utility';
import CVPdfSrc from '../../../assets/files/Adam_Stankiewicz_CV.pdf';

const Actions = () =>
  <div className="actions">
    <a onClick={(e) => { handleGAEventExternalLink(e, 'Hire Me (Button)'); }} className="btn hidden-xs" href="mailto:agstanki@gmail.com">
      <i className="fa fa-paper-plane" aria-hidden="true" /> Hire Me
    </a>
    <a onClick={(e) => { handleGAEventExternalLink(e, 'Download My CV (Button)'); }} className="btn" href={CVPdfSrc}>
      <i className="fa fa-download" aria-hidden="true" /> Download My CV
    </a>
  </div>;

export default Actions;
