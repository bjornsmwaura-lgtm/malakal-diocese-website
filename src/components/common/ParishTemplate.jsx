// src/components/common/ParishTemplate.jsx

import React, { useState } from 'react';
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
  contact,
  otherActivities
}) => {

  const [showFullHistory, setShowFullHistory] = useState(false);

const limit = 700; // characters to show first
const isLong = history.description.length > limit;

const shortHistory = isLong 
  ? history.description.substring(0, limit) + "..." 
  : history.description;

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
            <div className="history-text">
  <p>
    {showFullHistory ? history.description : shortHistory}
  </p>

  {isLong && (
    <button 
      className="read-more-btn"
      onClick={() => setShowFullHistory(!showFullHistory)}
    >
      {showFullHistory ? "Show Less" : "Read More"}
    </button>
  )}
</div>
          </div>
        </div>
      </section>

      {/* Parish Pastoral Activities */}
      <section className="parish-activities">
        <h2 className="section-title">Pastoral Activities</h2>
        <div className="activities-grid">
         {(pastoralActivities || []).map((activity, index) => (
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
            {contact.facebook && (
  <div className="facebook-link">
    <a 
      href={contact.facebook} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Follow us on Facebook
    </a>
  </div>
)}
  
      <div className="activities-grid no-image">
 {(otherActivities || []).map((activity, index) => (
    <div key={index} className="activity-card text-only">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
  ))}
</div>
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
  facebook={contact.facebook} // 👈 only exists for Mariakwero
  title="Parish Contact"
/>
    </PageLayout>
  );
};

export default ParishTemplate;