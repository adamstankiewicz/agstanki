import React from 'react';

require('./styles.scss');

class Category extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="item skill-category row">
        <h3 className="category-label col-xxs-4 col-xs-3 col-sm-3 col-md-2">
          {this.props.data.label}
        </h3>
        <div className="category-skills col-xxs-8 col-xs-9 col-sm-9 col-md-10">
          {
            this.props.data.items.map((skill, key) => {
              let skillNode;
              if (key === this.props.data.items.length - 1) {
                skillNode = <span key={key}>{skill}</span>;
              } else {
                skillNode = <span key={key}>{skill}, </span>;
              }
              return skillNode;
            })
          }
        </div>
      </div>
    );
  }
}

export default Category;
