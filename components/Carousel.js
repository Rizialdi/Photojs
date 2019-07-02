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
          <Gallery style={{zIndex: '10', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(10em, 1fr))', justifyItems: 'center'}}>
            {images.map(({ caption, source }, j) => (
              <Image style={{display:'inline-block', position: 'relative', overflow: 'hidden', paddingLeft: '0.3em', paddingBottom: '5%', width: '10em', height: '10em', ':hover': {display: 'none'},}} onClick={() => this.toggleLightbox(j)} key={source.regular}>
                <img style={{boxSizing: 'border-box', cursor: 'pointer', maxWidth: '100%', position: 'absolute', height: '10em', width: 'auto', backgroundSize: 'cover', backgroundPosition: "center center", objectFit: 'cover', backgroundRepeat:  'no-repeat'}}
                  alt={caption}
                  src={source.thumbnail}
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
      float: 'right',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      paddingRight: '5%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);