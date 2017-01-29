import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router';

import Actions from './Actions';
import Social from './Social';
import Intro from './Intro';
import Contact from './Contact';

const scroller = Scroll.scroller;

require('./styles.scss');

class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.extractPathname = this.extractPathname.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isFixed: false,
      scrollTop: 0,
      showMobileMenu: false,
      currentRoute: this.extractPathname(),
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
    window.addEventListener('load', this.handleScroll);
  }

  componentWillUpdate() {
    const nextRoute = this.extractPathname();
    if (this.state.currentRoute !== nextRoute) {
      this.setState({
        currentRoute: this.extractPathname(),
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
    window.removeEventListener('load', this.handleScroll);
  }

  extractPathname() {
    const path = window.location.pathname.split('/');
    let name;
    if (path.length > 1) {
      name = path[1];
    } else {
      name = path[0];
    }
    return name;
  }

  handleScroll() {
    this.setState({
      isFixed: false
    });
    const topDistance = this.pageNavWrapper.getBoundingClientRect().top;
    if (topDistance <= 0) {
      this.setState({
        isFixed: true,
      });
    } else {
      this.setState({
        isFixed: false,
      });
    }
  }

  handleNavClick() {
    scroller.scrollTo('scroll-container', {
      duration: 800,
      delay: 100,
      smooth: true,
    });
    this.setState({
      showMobileMenu: false,
    });
  }

  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    });
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
        <div className="page-nav-space-holder">
          <div
            id="page-nav-wrapper"
            ref={(c) => { this.pageNavWrapper = c; }}
            className={`page-nav-wrapper ${this.state.isFixed ? 'fixed ' : ''}text-center`}
          >
            <div className="container">
              <button
                className={`xs-menu-btn visible-xs ${this.state.showMobileMenu ? 'open' : ''}`}
                onClick={this.toggleMobileMenu}
              >
                <i className="fa fa-bars" /> Menu
              </button>
              <ul
                id="page-nav"
                className={`nav page-nav list-inline ${this.state.showMobileMenu ? 'show-menu' : 'hide-menu'}`}
              >
                <li className={this.state.currentRoute === 'experience' || this.state.currentRoute === '' ? 'active' : ''}>
                  <Link
                    to={'/experience'}
                    onClick={this.handleNavClick}
                  >Experience</Link>
                </li>
                <li className={this.state.currentRoute === 'education' ? 'active' : ''}>
                  <Link
                    to={'/education'}
                    onClick={this.handleNavClick}
                  >Education</Link>
                </li>
                <li className={this.state.currentRoute === 'skills' ? 'active' : ''}>
                  <Link
                    to={'/skills'}
                    onClick={this.handleNavClick}
                  >Skills</Link>
                </li>
                <li className={this.state.currentRoute === 'testimonials' ? 'active' : ''}>
                  <Link
                    to={'/testimonials'}
                    onClick={this.handleNavClick}
                  >Testimonials</Link>
                </li>
                <li className={this.state.currentRoute === 'publications' ? 'active' : ''}>
                  <Link
                    to={'/publications'}
                    onClick={this.handleNavClick}
                  >Publications</Link>
                </li>
                <li className={this.state.currentRoute === 'honors-awards' ? 'active' : ''}>
                  <Link
                    to={'/honors-awards'}
                    onClick={this.handleNavClick}
                  >Honors &amp; Awards</Link>
                </li>
                <li className={this.state.currentRoute === 'boomerangs' ? 'active' : ''}>
                  <Link
                    to={'/boomerangs'}
                    onClick={this.handleNavClick}
                  >Boomerangs</Link>
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
