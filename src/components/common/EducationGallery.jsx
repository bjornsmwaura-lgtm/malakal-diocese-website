// src/components/common/EducationGallery.jsx

import React, { useState } from 'react';
import './EducationGallery.css';

const EducationGallery = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(images.map(img => img.category))];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate through images
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="education-gallery">
      <div className="gallery-header">
        <h3 className="gallery-title">📸 Education Gallery</h3>
        <p className="gallery-subtitle">A glimpse into our educational programs across the Diocese</p>
      </div>

      {/* Category Filter */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="gallery-grid">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-item-category">{image.category}</span>
              <span className="gallery-item-view">🔍 View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>✕</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-nav prev" 
              onClick={() => navigateImage('prev')}
            >
              ❮
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button 
              className="lightbox-nav next" 
              onClick={() => navigateImage('next')}
            >
              ❯
            </button>
            <div className="lightbox-caption">
              <p>{selectedImage.alt}</p>
              <span className="lightbox-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationGallery;