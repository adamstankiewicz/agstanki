import React from 'react';
import _ from 'lodash';

import Item from './Item';
import positions from '../../data/Experiences';

require('./styles.scss');

const positionsSorted = _.reverse(_.sortBy(positions, 'startDate'));

const Experiences = () =>
  <section id="experience" className="experiences-section section">
    <h2 className="section-title">Work Experience</h2>
    <div className="timeline">
      {positionsSorted.map((a, key) =>
        <Item numItems={positions.length} key={key} data={a} />)}
    </div>
  </section>;

export default Experiences;
