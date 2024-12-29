import React, { useState } from 'react';
import '../styles/slider.css';

// Slide Component
const Slide = ({ slide, handleSlideClick, position }) => {
  const { src, headline, index } = slide;
  const slideRef = React.useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  const handleClick = () => {
    handleSlideClick(index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  let classNames = `slide slide--${position}`;

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>
      <h2 className="slide__headline">{headline}</h2>
      
    </li>
  );
};

// Slider Component
const Slider = ({  slides }) => {
  const [current, setCurrent] = useState(0); 

  const handleSlideClick = (index) => {
    setCurrent(index);
  };


  const getCircularIndex = (index) => (index + slides.length) % slides.length;

  const prevIndex = getCircularIndex(current - 1);
  const nextIndex = getCircularIndex(current + 1);

  return (
    <div className="slider">
      <ul className="slider__wrapper">
        <Slide
          slide={slides[prevIndex]}
          handleSlideClick={handleSlideClick}
          position="previous"
        />
        <Slide
          slide={slides[current]}
          handleSlideClick={handleSlideClick}
          position="current"
        />
        <Slide
          slide={slides[nextIndex]}
          handleSlideClick={handleSlideClick}
          position="next"
        />
      </ul>
    </div>
  );
};

// Sample Data for demonstration
const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'For Your Current Mood',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
];

// Export Slider Component with sample data used
const SliderWithData = () => <Slider  slides={slideData} />;

export default SliderWithData;
