import React, { useState } from 'react';
import '../styles/weddingCollection.css'

const galleryItems = [
  { src: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', alt: 'Image 1' },
  { src: 'https://images.pexels.com/photos/5969/wood-nature-forest-bridge.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', alt: 'Image 2' },
  { src: 'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', alt: 'Image 3' },
  { src: 'https://images.pexels.com/photos/373920/pexels-photo-373920.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: 'Image 4' },
  { src: 'https://images.pexels.com/photos/164241/pexels-photo-164241.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: 'Image 5' },
  { src: 'https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 6' },
  { src: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 7' },
  { src: 'https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 8' },
  { src: 'https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 9' },
  { src: 'https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 10' },
  { src: 'https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 11' },
  { src: 'https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Image 12' },
];

const Gallery = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxVisible(true);
  };

  const closeLightbox = () => setLightboxVisible(false);

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="gallery-container">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => openLightbox(index)}
        >
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
      {lightboxVisible && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[currentIndex].src} alt={galleryItems[currentIndex].alt} />
            <button className="lightbox-prev" onClick={showPrev}>
              &#10094;
            </button>
            <button className="lightbox-next" onClick={showNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
};

export default App;