// src/components/common/InstitutionTemplate.jsx

import React, { useState } from 'react';
import PageLayout from './PageLayout';
import PageHeader from './PageHeader';
import ContactSection from './ContactSection';
import './InstitutionTemplate.css';

// Gallery Component for Institutions
const InstitutionGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="institution-gallery">
      <h3 className="gallery-title">📸 Photo Gallery</h3>
      <div className="gallery-grid">
        {images.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-item-view">🔍 View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>✕</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>❮</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>❯</button>
            <div className="lightbox-caption">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InstitutionTemplate = ({ 
  header,
  description,
  academicFacultiesImage, // ✅ NEW: Academic Faculties Image
  galleryImages,
  contact,
  externalLink
}) => {
  // Function to format description with paragraphs
  const formatDescription = (text) => {
    if (!text) return null;
    
    // Split by double newlines or markers
    const sections = text.split(/\n\n|---/).filter(s => s.trim());
    
    return sections.map((section, index) => {
      // Check if section contains bullet points
      if (section.includes('•')) {
        const lines = section.split('\n').filter(line => line.trim());
        return (
          <div key={index} className="description-section">
            {lines.map((line, idx) => {
              if (line.trim().startsWith('•')) {
                return <p key={idx} className="description-bullet">{line.trim()}</p>;
              }
              return <p key={idx} className="description-text">{line.trim()}</p>;
            })}
          </div>
        );
      }
      
      // Regular paragraph
      return <p key={index} className="description-text">{section.trim()}</p>;
    });
  };

  return (
    <PageLayout>
      <PageHeader {...header} />

      {/* Description Section */}
      <section className="institution-description">
        <div className="description-content">
          {formatDescription(description)}
        </div>
      </section>

      {/* ✅ NEW: Academic Faculties Image Section */}
      {academicFacultiesImage && (
        <section className="academic-faculties-section">
          <h3 className="academic-faculties-title">Academic Faculties & Programs</h3>
          <div className="academic-faculties-image">
            <img 
              src={academicFacultiesImage.src} 
              alt={academicFacultiesImage.alt || "Academic Faculties & Programs"} 
            />
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages && galleryImages.length > 0 && (
        <InstitutionGallery images={galleryImages} />
      )}

      {/* External Link Section */}
      {externalLink && (
        <div className="external-link-section">
          <a
            href={externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link-button"
          >
            🌐 {externalLink.text}
          </a>
        </div>
      )}

      <ContactSection {...contact} />
    </PageLayout>
  );
};

export default InstitutionTemplate;