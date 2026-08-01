// src/pages/curia/EducationDepartment.jsx

import React from 'react';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import ContactSection from '../../components/common/ContactSection';
import EducationGallery from '../../components/common/EducationGallery';
import { educationDepartmentData } from '../../data/curia/educationDepartmentData';
import './CuriaPages.css';
import './EducationDepartment.css';

const EducationDepartment = () => {
  const { header, educationOverview, galleryImages, contact } = educationDepartmentData;

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

      {/* Education Overview Section - No Images */}
      <section className="education-overview">
        <h2 className="education-overview-title">{educationOverview.title}</h2>
        <p className="education-overview-description">{educationOverview.description}</p>
        
        <div className="education-levels-grid">
          {educationOverview.levels.map((level) => (
            <div key={level.id} className="education-level-card">
              <h3 className="education-level-name">{level.name}</h3>
              <p className="education-level-description">{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <EducationGallery images={galleryImages} />

      <ContactSection
        email={contact.email}
        phone={contact.phone}
        location={contact.location}
        officeHours={contact.officeHours}
      />
    </PageLayout>
  );
};

export default EducationDepartment;