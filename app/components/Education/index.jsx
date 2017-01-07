import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Item from './Item';

let degrees = [
  {
    degree: 'BA, Web Design & Development',
    university: 'University of Hartford',
    startDate: moment('2011-08-01'),
    endDate: moment('2015-05-01'),
    advisor: {
      url: 'http://faculty.ist.unomaha.edu/bdorn/',
      name: 'Dr. Brian Dorn',
    },
  },
  {
    degree: 'PhD, Human-Computer Interaction',
    university: 'Carnegie Mellon University',
    startDate: moment('2015-08-01'),
    advisor: {
      url: 'http://www.cs.cmu.edu/~chinmayk/',
      name: 'Dr. Chinmay Kulkarni',
    },
  },
];

degrees = _.reverse(_.sortBy(degrees, 'startDate'));

const Education = () =>
  <section id="education" className="education-section section">
    <h2 className="section-title">Education</h2>
    <div className="row">
      {degrees.map((a, key) => <Item numItems={degrees.length} key={key} data={a} />)}
    </div>
  </section>;

export default Education;
