import React from 'react';
import moment from 'moment';

require('./styles.scss');

class Item extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const authors = this.props.data.author.replace('Adam Stankiewicz', '<strong>Stankiewicz, Adam</strong>');
    const month = (this.props.data.month < 10 ? `0${this.props.data.month}` : this.props.data.month);
    const pubDate = moment(`${this.props.data.year}-${month}-01`, 'YYYY-MM-DD');
    return (
      <p
        className="item publication"
        dangerouslySetInnerHTML={{
          __html:
            `${authors} (${pubDate.format('YYYY')}).
            ${this.props.data.title}.
            In <em>${this.props.data.booktitle}</em>,
            ${this.props.data.pages ? `pages ${this.props.data.pages}` : ''}.`
        }}
      />
    );
  }
}

export default Item;
