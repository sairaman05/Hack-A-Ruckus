import React, { useState, useEffect } from 'react';
import './CardsCarousel.css';

const data = [
  { image: 'sangi.jpg', title: 'Sponsor-1', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-2', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-3', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-4', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-6', description: 'Information about the Sponsors' },
];

function Card({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="image-overlay"></div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-shine"></div>
      </div>
    </div>
  );
}

export function CardsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, index]);

  const calculatePosition = (i) => {
    const position = i - index;
    const total = data.length;
    
    let angle = (position * 180) / total;
    if (angle > 90) angle = 180 - angle;
    if (angle < -90) angle = -180 - angle;
    
    return {
      rotateY: angle,
      translateZ: position !== 0 ? Math.cos(Math.abs(angle) * Math.PI / 180) * 600 - 200 : 0,
      translateX: position * 160,
      opacity: 1 - Math.abs(position) * 0.3,
      zIndex: data.length - Math.abs(position),
      scale: 1 - Math.abs(position) * 0.15
    };
  };

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="Head" style={{
      fontSize: '4rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
      letterSpacing: '6px',
      textShadow: '2px 3px 5px rgba(0,0,0,0.2)',
      padding: '0 2rem',
      borderBottom: '3px solid #4ecdc4',
      borderTop: '3px solid #ff6b6b',
      borderRadius: '8px',
      transition: 'all 0.4s ease-in-out',
      position: 'relative',
      margin: '2rem 0',
      textAlign: 'center',
      transform: 'rotate(-0.5deg)',
    }}>
      OUR VALUED SPONSORS
    </h1>
      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={handlePrev} aria-label="Previous" />
        <button className="nav-button next" onClick={handleNext} aria-label="Next" />
        
        <div className="cards-stage">
          {data.map((item, i) => {
            const style = calculatePosition(i);
            return (
              <div 
                key={i}
                className="card-container"
                style={{
                  transform: `rotateY(${style.rotateY}deg) 
                             translateZ(${style.translateZ}px)
                             translateX(${style.translateX}px)
                             scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.zIndex
                }}
              >
                <Card {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardsCarousel;