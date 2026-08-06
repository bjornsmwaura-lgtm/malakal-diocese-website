// src/pages/curia/PastoralDepartment.jsx

import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContactSection from '../../components/common/ContactSection';
import { pastoralDepartmentData } from '../../data/curia/pastoralDepartmentData';
import './PastoralDepartment.css';

const PastoralDepartment = () => {
  const { header, description, pastoralPriorities, contact } = pastoralDepartmentData;

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
      <section className="pastoral-description">
        <div className="description-content">
          {description.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**')) {
              return <h3 key={idx} className="description-heading">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            return <p key={idx} className="description-text">{paragraph}</p>;
          })}
        </div>
      </section>

      {/* Pastoral Priorities Section */}
      <section className="pastoral-priorities">
        <h2 className="priorities-title">Pastoral Priorities</h2>
        <p className="priorities-subtitle">
          The Catholic Diocese of Malakal has identified the following key priorities to guide our pastoral mission:
        </p>
        
        <div className="priorities-grid">
          {pastoralPriorities.map((priority) => (
            <div key={priority.id} className="priority-card">
              <div className="priority-number">{String(priority.id).padStart(2, '0')}</div>
              <div className="priority-content">
                <h3 className="priority-title">{priority.title}</h3>
                <p className="priority-description">{priority.description}</p>
              </div>
            </div>
          ))}
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

export default PastoralDepartment;