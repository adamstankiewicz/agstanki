import React from 'react';
import _ from 'lodash';

import skills from '../../data/Skills';
import Category from './Category';

const skillsSorted = _.sortBy(skills, [category => category.key]);

const Skills = () =>
  <section id="skills" className="skills-section section">
    <h2 className="section-title">Skills</h2>
    <div className="row">
      {
        skillsSorted.map((category, key) =>
          <Category key={key} data={category} />
        )
      }
    </div>
  </section>;

export default Skills;
