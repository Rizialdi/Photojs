import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

export default class Home extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
  };
  toggleLightbox = (selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };
  render() {
    const { images, isLoading } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;

    return (
      <Fragment>
        {!isLoading ? (
          <Gallery>
            {images.map(({ author, caption, source }, j) => (
              <Image onClick={() => this.toggleLightbox(j)} key={source.thumbnail}>
                <img
                  alt={caption}
                  src={source.thumbnail}
                  css={{
                    cursor: 'pointer',
                    position: 'absolute',
                    maxWidth: '100%',
                  }}
                />
              </Image>
            ))}
          </Gallery>
        ) : null}

        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                frameProps={{ autoSize: 'height' }}
                views={images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }
}

const gutter = 2;

const Gallery = (props) => (
  <div
    css={{
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
    }}
    {...props}
  />
);

const Image = (props) => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);