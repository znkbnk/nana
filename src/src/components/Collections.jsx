import React from 'react';
import '../styles/collections.css';
import { Link } from 'react-router-dom';

const collectionImages = [
  {
    src: 'https://images.unsplash.com/photo-1610819610413-3e42356fc150?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'city',
    caption: "City"
  },
  {
    src: 'https://images.unsplash.com/photo-1706508097808-2f298e893d6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'people',
    caption: "People"
  },
  {
    src: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'weddings',
    caption: "Weddings"
  },
  
 
];

const Collections = () => (
  <div className="grid-container">
    {collectionImages.map((collection, index) => (
      <div key={index} className={`grid-item grid-item-${index + 1}`}>
        {collection.caption === "City" ? (
          <Link to="/cityCollection">
            <img src={collection.src} alt={collection.alt} />
            <p>{collection.caption}</p>
          </Link>
        ) : collection.caption === "Weddings" ? (
          <Link to="/weddingCollection">
            <img src={collection.src} alt={collection.alt} />
            <p>{collection.caption}</p>
          </Link>
        ) : collection.caption === "People" ? (
          <Link to="/peopleCollection">
            <img src={collection.src} alt={collection.alt} />
            <p>{collection.caption}</p>
          </Link>
        ) : (
          <>
            <img src={collection.src} alt={collection.alt} />
            <p>{collection.caption}</p>
          </>
        )}
      </div>
    ))}
  </div>
);

export default Collections;
