// src/pages/curia/YouthOffice.jsx

import React, { useState } from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContactSection from '../../components/common/ContactSection';
import './YouthOffice.css';

// ===== DATA DIRECTLY IN COMPONENT (FOR TESTING) =====
const youthOfficeData = {
  header: {
    title: "Youth Office",
    subtitle: "Empowering the Next Generation",
    description: "The Youth Office coordinates youth ministries and programs across the Diocese of Malakal, empowering young people to live their faith and actively participate in the Church's mission.",
    image: "/images/curia/youth/gallery/youth12.webp",
    badge: "Curia"
  },
  description: `The Youth Office of the Diocese of Malakal is dedicated to nurturing the spiritual, social, and personal development of young people across the diocese. We believe that youth are not just the future of the Church—they are the Church of today.

**Our Mission:** To accompany young people in their faith journey, providing opportunities for spiritual growth, leadership development, and active participation in the life of the Church and community.

**Our Programs:**
• Youth retreats and spiritual renewal programs
• Leadership training and skills development
• Sports and recreational activities
• Community service and outreach initiatives
• Youth prayer groups and Bible study
• Annual Diocesan Youth Conference

**Our Vision:** To raise a generation of young people who are grounded in faith, equipped with skills, and committed to serving their communities and the Church.

The Youth Office works closely with parishes, schools, and other diocesan departments to create a supportive environment where young people can grow, thrive, and discover their God-given potential.`,
  galleryImages: [
    { id: 1, src: "/images/curia/youth/gallery/youth1.jpeg", alt: "Youth prayer session" },
    { id: 2, src: "/images/curia/youth/gallery/youth3.jpeg", alt: "Youth conference gathering" },
    { id: 3, src: "/images/curia/youth/gallery/youth5.png", alt: "Youth leadership training" },
    { id: 4, src: "/images/curia/youth/gallery/youth7.jpg", alt: "Youth sports activity" },
    { id: 5, src: "/images/curia/youth/gallery/youth9.png", alt: "Youth retreat" },
    { id: 6, src: "/images/curia/youth/gallery/youth4.jpeg", alt: "Youth choir" },
    { id: 7, src: "/images/curia/youth/gallery/youth6.jpg", alt: "Youth outreach program" },
    { id: 8, src: "/images/curia/youth/gallery/youth8.JPG", alt: "Youth community service" }
  ],
  contact: {
    email: "youth@malakaldiocese.org",
    phone: "+211 912 345 690",
    location: "Youth Office, Curia, Malakal",
    officeHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  }
};

// ===== GALLERY COMPONENT =====
const YouthGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return (
      <div className="youth-gallery">
        <p>No images available</p>
      </div>
    );
  }

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="youth-gallery">
      <h2 className="gallery-title">📸 Youth Office Photo Gallery</h2>
      <p className="gallery-subtitle">A glimpse into the vibrant youth activities and programs in the Diocese of Malakal</p>
      
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

// ===== MAIN COMPONENT =====
const YouthOffice = () => {
  // Directly use the data from the same file
  const { header, description, galleryImages, contact } = youthOfficeData;

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

      {/* Description Section */}
      <section className="youth-description">
        <div className="description-content">
          {description.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**')) {
              return <h3 key={idx} className="description-heading">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.includes('•')) {
              const items = paragraph.split('•').filter(item => item.trim());
              return (
                <ul key={idx} className="description-list">
                  {items.map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="description-text">{paragraph}</p>;
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <YouthGallery images={galleryImages} />

      <ContactSection
        email={contact.email}
        phone={contact.phone}
        location={contact.location}
        officeHours={contact.officeHours}
      />
    </PageLayout>
  );
};

export default YouthOffice;