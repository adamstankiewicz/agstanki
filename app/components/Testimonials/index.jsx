import React from 'react';

import TestimonialQuotes from '../../data/Testimonials';

require('./styles.scss');

class Testimonials extends React.Component {
  constructor(...args) {
    super(...args);
    this.carouselInterval = 15000; // 15s
    this.state = {
      testimonials: TestimonialQuotes
    };
  }

  expandQuote(e, index) {
    e.preventDefault();
    const testimonials = this.state.testimonials;
    testimonials[index].expanded = !testimonials[index].expanded;
    this.setState({
      testimonials
    });
  }

  render() {
    return (
      <section id="testimonials" className="testimonials-section section">
        <h2 className="section-title">Testimonials</h2>
        <div
          id="testimonials-carousel"
          className="testimonials-carousel carousel slide"
          data-interval={this.carouselInterval}
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {
              this.state.testimonials.map((quote, key) =>
                <li
                  key={key}
                  data-target="#testimonials-carousel"
                  data-slide-to={key}
                  className={key === 0 ? 'active' : ''}
                />
              )
            }
          </ol>
          <div className="carousel-inner">
            {
              this.state.testimonials.map((quote, key) =>
                <div key={key} className={`item ${key === 0 ? 'active' : ''}`}>
                  <blockquote className="quote">
                    <i className="fa fa-quote-left" />
                    {quote.text.split('\n').map((line, i) =>
                      <p key={i}>{line}</p>
                    )}
                  </blockquote>
                  <div className="source">
                    <div className="name">{quote.source.name}</div>
                    <div className="position">{quote.source.position}</div>
                  </div>
                </div>
              )
            }
          </div>
          <a
            className="left carousel-control hidden-sm hidden-xs"
            href="#testimonials-carousel"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control hidden-sm hidden-xs"
            href="#testimonials-carousel"
            data-slide="next"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Testimonials;
