// src/components/common/ContentCard.jsx

import React from 'react';
import './ContentCard.css';

const ContentCard = ({ 
  title, 
  description, 
  image, 
  alt = 'Content image',
  badge = '',
  className = ''
}) => {
  return (
    <div className={`content-card ${className}`}>
      <div className="content-card-image">
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="content-card-body">
        {badge && <span className="card-badge">{badge}</span>}
        <h3 className="content-card-title">{title}</h3>
        <div className="title-underline"></div>
        <p className="content-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;