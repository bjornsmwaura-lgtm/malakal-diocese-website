// src/pages/Curia/Caritas.jsx

import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContentCard from '../../components/common/ContentCard';
import ContactSection from '../../components/common/ContactSection';
import { caritasData } from '../../data/curia/caritasData'; // ✅ Fixed
import './CuriaPages.css';

const Caritas = () => {
  const { header, cards, contact, externalLink } = caritasData; // ✅ Fixed

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

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

         {/* NEW: External Link Section */}
      {externalLink && (
        <div className="external-link-section">
          <a
            href={externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link-button"
          >
            {externalLink.text}
          </a>
        </div>
      )}

      <ContactSection
        email={contact.email}
        phone={contact.phone}
        externalLink={externalLink}
        location={contact.location}
        officeHours={contact.officeHours}
      />
    </PageLayout>
  );
};

export default Caritas;