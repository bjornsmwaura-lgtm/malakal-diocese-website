// src/pages/curia/MedicalHealth.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContactSection from '../../components/common/ContactSection';
import { medicalHealthData } from '../../data/curia/medicalHealthData';
import './CuriaPages.css';
import './MedicalHealth.css';

const MedicalHealth = () => {
  const { header, sections, contact } = medicalHealthData;

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

      {/* ===== SECTION 1: VISION ===== */}
      <section className="medical-section vision-section">
        <div className="medical-section-content">
          <h2 className="medical-section-title">{sections.vision.title}</h2>
          <div className="medical-section-text">
            {sections.vision.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="medical-section-image">
          <img src={sections.vision.image} alt={sections.vision.alt} />
        </div>
      </section>

      {/* ===== SECTION 2: WHY HEALTHCARE ===== */}
      <section className="medical-section need-section">
        <div className="medical-section-image">
          <img src={sections.why.image} alt={sections.why.alt} />
        </div>
        <div className="medical-section-content">
          <h2 className="medical-section-title">{sections.why.title}</h2>
          <div className="medical-section-text">
            {sections.why.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PLANNED SERVICES ===== */}
      <section className="medical-section services-section">
        <div className="medical-section-content full-width">
          <h2 className="medical-section-title">{sections.planned.title}</h2>
          <div className="medical-section-text">
            {sections.planned.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: PARTNERSHIP INVITATION ===== */}
      <section className="medical-section partnership-section">
        <div className="medical-section-content full-width">
          <h2 className="medical-section-title">{sections.partnership.title}</h2>
          <div className="medical-section-text">
            {sections.partnership.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CALL TO ACTION ===== */}
      <section className="medical-section cta-section">
        <div className="cta-content">
          <h2 className="cta-title">{sections.callToAction.title}</h2>
          <p className="cta-text">{sections.callToAction.content}</p>
          <div className="cta-buttons">
            
<Link 
  to="/get-involved" 
  className="cta-button primary"
  onClick={() => {
    setTimeout(() => {
      document.getElementById('partner-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  }}
>
    Partner With Us
            </Link>
            <Link to="/donate" className="cta-button secondary">
              Support This Mission
            </Link>
          </div>
        </div>
      </section>

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