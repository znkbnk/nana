import React, { useState, useEffect } from 'react';
import '../styles/cityCollection.css'

const Collection = () => {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(0);
  const [imageView, setImageView] = useState(false);

  useEffect(() => {
    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rpg-2-data.json';
    _loadData(url);

    return () => {
      // Cleanup if necessary
    };
  }, []);

  const _loadData = async (url) => {
    try {
      const response = await fetch(url, { method: 'GET' });
      const json = await response.json();
      setData([...json.gallery]);
    } catch (err) {
      console.log(err.message);
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';

        xhr.onload = () => {
          const json = xhr.response;
          setData([...json.gallery]);
        };

        xhr.onerror = () => {
          throw new Error('XMLHttpRequest Failed...');
        };

        xhr.send();
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  const _openImageView = (id) => {
    setActiveID(id);
    setImageView(true);
  };

  const _closeImageView = () => {
    setImageView(false);
  };

  return (
    <div className="wrapper">
      {imageView ? (
        <ImageView {...data[activeID]} _closeImageView={_closeImageView} />
      ) : (
        <Gallery data={data} _openImageView={_openImageView} />
      )}
    </div>
  );
};

const ImageView = ({ src, name, desc, tags, _closeImageView }) => (
  <div className="imageview-wrapper fadeIn">
    <div className="imageview">
      <Image CSSClass="imageview-image" src={src} alt={name} />
      <div className="imageview-info">
        <button className="imageview-close" onClick={_closeImageView}>
          x
        </button>
        <h2>{name}</h2>
        <p>{desc}</p>
       
      </div>
    </div>
  </div>
);

const Gallery = ({ data, _openImageView }) => (
  <div className="gallery fadeIn">
    {data.map((data) => (
      <Tile key={data.id} {...data} _openImageView={_openImageView} />
    ))}
  </div>
);

const Tile = ({ id, src, name, _openImageView }) => (
  <div className="gallery-tile" onClick={() => _openImageView(id)}>
    <div className="picture-info">
      <h2>{name}</h2>
    </div>
    <Image CSSClass="tile-image" src={src} alt={name} />
  </div>
);

const Image = ({ CSSClass, src, alt }) => (
  <img className={CSSClass} src={src} alt={alt} />
);

export default Collection;
