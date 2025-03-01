import React, { useState, useEffect } from 'react';
import './CardsCarousel.css';

const data = [
  { image: 'sangi.jpg', title: 'Sponsor-1', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-2', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-3', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-4', description: 'Information about the Sponsors' },
  { image: 'sangi.jpg', title: 'Sponsor-6', description: 'Information about the Sponsors' },
];

function Card({ image, title, description, isMobile }) {
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

export function CardsCarousel({ isMobile }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    if (!isHovered && !isMobile) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, index, isMobile]);

  const calculatePosition = (i) => {
    const position = i - index;
    const total = data.length;
    
    let angle = (position * (isMobile ? 120 : 180)) / total;
    if (angle > 90) angle = 180 - angle;
    if (angle < -90) angle = -180 - angle;
    
    return {
      rotateY: isMobile ? angle * 0.5 : angle,
      translateZ: position !== 0 ? 
        Math.cos(Math.abs(angle) * Math.PI / 180) * (isMobile ? 300 : 600) - (isMobile ? 100 : 200) : 0,
      translateX: position * (isMobile ? 80 : 160),
      opacity: 1 - Math.abs(position) * 0.3,
      zIndex: data.length - Math.abs(position),
      scale: isMobile ? (1 - Math.abs(position) * 0.25) : (1 - Math.abs(position) * 0.15)
    };
  };

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <h1 className="Head" style={{
        fontSize: isMobile ? '2.5rem' : '4rem',
        width: isMobile ? '90%' : '700px',
        left: isMobile ? '5%' : '24%',
        margin: isMobile ? '1rem 0' : '2rem 0',
        padding: isMobile ? '0 1rem' : '0 2rem',
      }}>
        OUR VALUED SPONSORS
      </h1>
      <div className="carousel-wrapper">
        <button className={`nav-button prev ${isMobile ? 'mobile' : ''}`} onClick={handlePrev} aria-label="Previous" />
        <button className={`nav-button next ${isMobile ? 'mobile' : ''}`} onClick={handleNext} aria-label="Next" />
        
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
                  zIndex: style.zIndex,
                  width: isMobile ? '280px' : '400px',
                  height: isMobile ? '350px' : '500px'
                }}
              >
                <Card {...item} isMobile={isMobile} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardsCarousel;