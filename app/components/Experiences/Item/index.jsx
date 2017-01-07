import React from 'react';

class Item extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="item">
        <div className="work-place">
          <h3 className="place">{this.props.data.company}</h3>
          <div className="location">
            <i className="fa fa-map-marker" aria-hidden="true" />{this.props.data.location}
          </div>
        </div>
        <div className="job-meta">
          <div className="title">{this.props.data.title}</div>
          <div className="time">
            {this.props.data.startDate.format('MMMM YYYY')} -
            {(this.props.data.endDate) ? ` ${this.props.data.endDate.format('MMMM YYYY')}` : ' Present'}
          </div>
        </div>
        <div className="job-desc">
          <ul>
            {this.props.data.description.map((a, key) => {
              let description;
              if (Array.isArray(a)) {
                description = (
                  <ul key={key}>
                    {a.map((b, key1) => <li key={key1}>{b}</li>)}
                  </ul>
                );
              } else {
                description = <li key={key}>{a}</li>;
              }
              return description;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Item;
