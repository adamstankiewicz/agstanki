import React from 'react';
import BibtexParser from 'bib2json';
import _ from 'lodash';

import Item from './Item';
import publicationsSrc from '../../data/Publications/bibliography.bib';

let publications = BibtexParser(publicationsSrc).entries;

publications = _.reverse(_.sortBy(publications, ['Fields.year', 'Fields.month']));

const Publications = () =>
  <section id="publications" className="publications-section section">
    <h2 className="section-title">Publications</h2>
    {
      publications.map((publication, key) =>
        <Item key={key} data={publication.Fields} />
      )
    }
  </section>;

export default Publications;
