// src/components/common/PageHeader.jsx

import React from 'react';
import './PageHeader.css';

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  alt = 'Page header image',
  badge = '' 
}) => {
  return (
    <div className="page-header">
      <div className="page-header-content">
        {badge && <span className="page-badge">{badge}</span>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <h2 className="page-subtitle">{subtitle}</h2>}
        {description && <p className="page-description">{description}</p>}
      </div>
      {image && (
        <div className="page-header-image">
          <img src={image} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default PageHeader;