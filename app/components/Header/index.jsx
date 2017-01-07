import React from 'react';
import Scroll from 'react-scroll';

import Actions from './Actions';
import Social from './Social';
import Intro from './Intro';
import Contact from './Contact';

require('./styles.scss');

const Link = Scroll.Link;
const scrollSpy = Scroll.scrollSpy;

class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isFixed: false,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
    window.addEventListener('load', this.handleScroll);
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
    window.removeEventListener('load', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      isFixed: false
    });
    // TODO fix this.refs deprecation
    const topDistance = this.pageNavWrapper.getBoundingClientRect().top;
    if (topDistance < 0) {
      this.setState({
        isFixed: true
      });
    } else {
      this.setState({
        isFixed: false
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="top-bar container-fluid">
          <Actions />
          <Social />
        </div>
        <Intro />
        <Contact />
        <div className="page-nav-space-holder hidden-xs">
          <div
            id="page-nav-wrapper"
            ref={(c) => { this.pageNavWrapper = c; }}
            className={`page-nav-wrapper ${this.state.isFixed ? 'fixed ' : ''}text-center`}
          >
            <div className="container">
              <ul id="page-nav" className="nav page-nav list-inline">
                <li>
                  <Link
                    to="experience"
                    smooth
                    spy
                    isDynamic
                    offset={-70}
                    href="#"
                  >Experience</Link>
                </li>
                <li>
                  <Link
                    to="education"
                    smooth
                    spy
                    isDynamic
                    offset={-70}
                    href="#"
                  >Education</Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    smooth
                    spy
                    isDynamic
                    offset={-70}
                    href="#"
                  >Skills</Link>
                </li>
                <li>
                  <Link
                    to="publications"
                    smooth
                    spy
                    isDynamic
                    offset={-70}
                    href="#"
                  >Publications</Link>
                </li>
                <li>
                  <Link
                    to="honors-awards"
                    smooth
                    spy
                    isDynamic
                    offset={-70}
                    href="#"
                  >Honors &amp; Awards</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
