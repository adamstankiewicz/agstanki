import React from 'react';
import Lightbox from 'react-images';

require('./styles.scss');

class Boomerangs extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);

    this.images = [
      { src: '/assets/images/boomerangs/1.jpg', orientation: 'portrait' },
      { src: '/assets/images/boomerangs/2.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/3.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/4.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/5.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/6.jpg', orientation: 'portrait' },
      { src: '/assets/images/boomerangs/7.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/8.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/9.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/10.jpg', orientation: 'portrait' },
      { src: '/assets/images/boomerangs/11.jpg', orientation: 'landscape' },
      { src: '/assets/images/boomerangs/12.jpg', orientation: 'landscape' },
    ];
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoPrev() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.images.length - 1) {
      this.gotoImage(0);
    } else {
      this.gotoNext();
    }
  }

  render() {
    return (
      <section id="boomerangs" className="boomerangs-section section">
        <h2 className="section-title">Boomerangs</h2>
        <div className="gallery">
          {
            this.images.map((image, key) =>
              <a
                href={image.src}
                onClick={e => this.openLightbox(key, e)}
                className="img-thumbnail"
                key={key}
              >
                <img src={image.src} role="presentation" />
              </a>
            )
          }
        </div>
        <Lightbox
          images={this.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickPrev={this.gotoPrev}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickThumbnail={this.gotoImage}
          showThumbnails
        />
      </section>
    );
  }
}

export default Boomerangs;
