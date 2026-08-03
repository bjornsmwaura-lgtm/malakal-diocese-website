// src/components/common/PMCGallery.jsx

import React, { useState } from 'react';
import './PMCGallery.css';

const PMCGallery = ({ images, title = "PMC Photo Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="pmc-gallery">
      <div className="pmc-gallery-header">
        <h2 className="pmc-gallery-title">{title}</h2>
        <p className="pmc-gallery-subtitle">
          A glimpse into the missionary activities and programs of the Pontifical Missionary Childhood in the Diocese of Malakal
        </p>
      </div>

      {/* Photo Grid */}
      <div className="pmc-gallery-grid">
        {images.map(image => (
          <div 
            key={image.id} 
            className="pmc-gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="pmc-gallery-item-overlay">
              <span className="pmc-gallery-item-view">🔍 View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="pmc-lightbox" onClick={closeLightbox}>
          <span className="pmc-lightbox-close" onClick={closeLightbox}>✕</span>
          <div className="pmc-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="pmc-lightbox-nav prev" 
              onClick={() => navigateImage('prev')}
            >
              ❮
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button 
              className="pmc-lightbox-nav next" 
              onClick={() => navigateImage('next')}
            >
              ❯
            </button>
            <div className="pmc-lightbox-caption">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PMCGallery;