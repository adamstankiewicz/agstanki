import React from 'react';

class Item extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    let colWidth = Math.floor(12 / this.props.numItems);
    colWidth = (colWidth > 5 ? 5 : colWidth);
    let advisor;
    if (this.props.data.advisor && this.props.data.advisor.name) {
      if (this.props.data.advisor.url) {
        advisor = (
          <p className="advisor">
            Advisor: &nbsp;
            <a target="_blank" rel="noopener noreferrer" href={this.props.data.advisor.url}>
              {this.props.data.advisor.name}
            </a>
          </p>
        );
      } else {
        advisor = (
          <p className="advisor">
            Advisor: {this.props.data.advisor.name}
          </p>
        );
      }
    }
    return (
      <div className={`item col-xs-12 col-sm-${colWidth}`}>
        <div className="item-inner">
          <h3 className="degree">{this.props.data.degree}</h3>
          <div className="education-body">
            {this.props.data.university}
          </div>
          <div className="time">
            {this.props.data.startDate.format('MMMM YYYY')} -
            {(this.props.data.endDate) ? ` ${this.props.data.endDate.format('MMMM YYYY')}` : ' Present'}
          </div>
          <div className="desc">
            {advisor}
            {(this.props.data.description) ? this.props.data.description : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
