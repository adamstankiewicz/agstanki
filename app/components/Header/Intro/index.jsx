import React from 'react';

import ProfileImgSrc from '../../../assets/images/profile-image.jpg';

const Intro = () =>
  <div className="intro">
    <div className="container text-center">
      <img
        className="profile-image img-circle"
        src={ProfileImgSrc}
        alt="Adam Stankiewicz"
      />
      <h1 className="name">Adam Stankiewicz</h1>
      <div className="title">Software Engineer &amp; UX Researcher</div>
      <div className="profile" />
    </div>
  </div>;

export default Intro;
