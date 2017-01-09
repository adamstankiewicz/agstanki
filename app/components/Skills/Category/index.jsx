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
        <h3 className="category-label col-xs-3 col-sm-2">{this.props.data.label}</h3>
        <div className="category-skills col-xs-9 col-sm-10">
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
