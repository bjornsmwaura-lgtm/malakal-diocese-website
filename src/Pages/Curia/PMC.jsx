// src/pages/curia/PMC.jsx

import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContentCard from '../../components/common/ContentCard';
import ContactSection from '../../components/common/ContactSection';
import PMCGallery from '../../components/common/PMCGallery';
import { pmcData } from '../../data/curia/pmcData';
import './CuriaPages.css';

const PMC = () => {
  const { header, cards, galleryImages, contact } = pmcData;

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

      {/* PMC Cards - 3 Cards */}
      <div className="cards-container">
        {cards.map((card) => (
          <ContentCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
          />
        ))}
      </div>

      {/* Photo Gallery - 32 Photos (No Categories) */}
      <PMCGallery images={galleryImages} title="PMC Photo Gallery" />

      <ContactSection
        email={contact.email}
        phone={contact.phone}
        location={contact.location}
        officeHours={contact.officeHours}
      />
    </PageLayout>
  );
};

export default PMC;