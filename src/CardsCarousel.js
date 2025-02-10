import React, { useState, useEffect } from 'react';
import './CardsCarousel.css';
import CustomCursor from './CustomCursor.js';


function Card({ image, title, category, description }) {
  return (
    <div className="card-container">
      <div className="image-container" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

const data = [
  { image: 'sangi.jpg', title: 'sponsors name', description: 'information about the sponsors' },
  { image: 'sangi.jpg', title: 'sponsors name', description: 'information about the sponsors' },
  { image: 'sangi.jpg', title: 'sponsors name', description: 'information about the sponsors' },
  { image: 'sangi.jpg', title: 'sponsors name', description: 'information about the sponsors' },
  { image: 'sangi.jpg', title: 'sponsors name', description: 'information about the sponsors' },
];

export function CardsCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="carousel-container">
      <h1>Event Sponsors</h1>
      <button className="nav-button prev" onClick={handlePrev}>&lt;</button>
      <div className="carousel-slide">
        {data.map((item, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={handleNext}>&gt;</button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${((index + 1) / data.length) * 100}%`, background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}></div>
      </div>
    </div>
  );
}

export default CardsCarousel;
