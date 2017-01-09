import React from 'react';
import _ from 'lodash';

import honorsAwards from '../../data/HonorsAwards';
import Item from './Item';

const honorsAwardsSorted = _.reverse(_.sortBy(honorsAwards, ['year', 'month']));

const HonorsAwards = () =>
  <section id="honors-awards" className="honors-awards-section section">
    <h2 className="section-title">Honors &amp; Awards</h2>
    {
      honorsAwardsSorted.map((item, key) =>
        <Item key={key} data={item} />
      )
    }
  </section>;

export default HonorsAwards;
