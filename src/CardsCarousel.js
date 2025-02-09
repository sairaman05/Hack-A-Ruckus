import React, { useState, useEffect } from 'react';
import './CardsCarousel.css';

function Card({ image, title, category }) {
  return (
    <div className="card-container">
      <div className="image-container" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}

const data = [
  { image: 'sangi.jpg', title: 'Best forests in North America', category: 'Nature' },
  { image: 'sangi.jpg', title: 'Hawaii beaches review', category: 'Beach' },
  { image: 'sangi.jpg', title: 'Mountains at night', category: 'Adventure' },
  { image: 'sangi.jpg', title: 'Aurora in Norway', category: 'Sky' },
  { image: 'sangi.jpg', title: 'Desert dunes travel guide', category: 'Desert' },
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
    const interval = setInterval(handleNext, 3000); // Auto-slide every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={handlePrev}>&lt;</button>
      <div className="carousel-slide">
        {data.map((item, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.7s ease-in-out',
            }}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={handleNext}>&gt;</button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${((index + 1) / data.length) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default CardsCarousel;
