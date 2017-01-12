import React from 'react';
import moment from 'moment';

require('./styles.scss');

class Item extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const month = (this.props.data.month < 10 ? `0${this.props.data.month}` : this.props.data.month);
    const awardDate = moment(`${this.props.data.year}-${month}-01`, 'YYYY-MM-DD');
    return (
      <div className="item honor-award row">
        <h3 className="year col-xs-3 col-sm-1">
          {awardDate.format('YYYY')}
        </h3>
        <p className="award-location col-xs-9 visible-xs text-right">
          <i className="fa fa-map-marker" /> &nbsp; {this.props.data.location}
        </p>
        <p className="award-name col-xs-12 col-sm-8 col-md-9">
          <span className="name">{this.props.data.name}</span>
          <span className="hidden-xxs">,&nbsp;</span>
          <br className="visible-xxs" />
          <span className="organization">{this.props.data.organization}</span>
        </p>
        <p className="award-location hidden-xs col-sm-3 col-md-2">
          <i className="fa fa-map-marker" /> &nbsp; {this.props.data.location}
        </p>
      </div>
    );
  }
}

export default Item;
