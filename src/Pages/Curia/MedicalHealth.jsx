// src/pages/Curia/MedicalHealth.jsx

import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContentCard from '../../components/common/ContentCard';
import ContactSection from '../../components/common/ContactSection';
import { medicalHealthData } from '../../data/curia/medicalHealthData'; // ✅ Fixed
import './CuriaPages.css';

const MedicalHealth = () => {
  const { header, cards, contact } = medicalHealthData; // ✅ Fixed

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

      <ContactSection
        email={contact.email}
        phone={contact.phone}
        location={contact.location}
        officeHours={contact.officeHours}
      />
    </PageLayout>
  );
};

export default MedicalHealth;