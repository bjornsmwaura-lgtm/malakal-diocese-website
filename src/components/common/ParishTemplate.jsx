// src/components/common/ParishTemplate.jsx

import React from 'react';
import PageLayout from './PageLayout';
import PageHeader from './PageHeader';
import ContentCard from './ContentCard';
import ContactSection from './ContactSection';
import './ParishTemplate.css';

const ParishTemplate = ({ 
  header,
  history,
  pastoralActivities,
  parishDetails,
  massSchedules,
  contact
}) => {
  return (
    <PageLayout>
      {/* Page Header */}
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge="Parish"
      />

      {/* Brief History with Parish Priest Image */}
      <section className="parish-history">
        <h2 className="section-title">History of the Parish</h2>
        <div className="history-content">
          <div className="history-image">
            <img src={history.priestImage} alt={history.priestName} />
            <p className="priest-caption">{history.priestName}</p>
          </div>
          <div className="history-text">
            <p>{history.description}</p>
          </div>
        </div>
      </section>

      {/* Parish Pastoral Activities */}
      <section className="parish-activities">
        <h2 className="section-title">Pastoral Activities</h2>
        <div className="activities-grid">
          {pastoralActivities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} loading="lazy" />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parish Details */}
      <section className="parish-details">
        <h2 className="section-title">Parish Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>{parishDetails.location}</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⛪</span>
            <div>
              <strong>Deanery</strong>
              <p>{parishDetails.deanery}</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🙏</span>
            <div>
              <strong>Patron Saint</strong>
              <p>{parishDetails.patronSaint}</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👨‍⚖️</span>
            <div>
              <strong>Parish Priest</strong>
              <p>{parishDetails.parishPriest}</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👤</span>
            <div>
              <strong>Other Priests</strong>
              <p>{parishDetails.otherPriests || 'None assigned'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Schedules */}
      <section className="mass-schedules">
        <h2 className="section-title">Mass Schedules</h2>
        <div className="schedules-grid">
          <div className="schedule-card">
            <h3 className="schedule-day">Sundays</h3>
            <ul className="schedule-list">
              {massSchedules.sundays.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
          <div className="schedule-card">
            <h3 className="schedule-day">Weekdays</h3>
            <ul className="schedule-list">
              {massSchedules.weekdays.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        email={contact.email}
        phone={contact.phone}
        location={contact.location}
        officeHours={contact.officeHours}
        title="Parish Contact"
      />
    </PageLayout>
  );
};

export default ParishTemplate;