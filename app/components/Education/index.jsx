import React from 'react';
import _ from 'lodash';

import Item from './Item';
import degrees from '../../data/Education';

const degreesSorted = _.reverse(_.sortBy(degrees, 'startDate'));

const Education = () =>
  <section id="education" className="education-section section">
    <h2 className="section-title">Education</h2>
    <div className="row">
      {degreesSorted.map((a, key) => <Item numItems={degrees.length} key={key} data={a} />)}
    </div>
  </section>;

export default Education;
