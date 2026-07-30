import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const SouthernDeanery = () => {
  const parishes = [
    {
      id: 'all-saints',
      name: "All Saints Parish Waat",
      icon: "🕊️",
      path: "/deaneries/southern-deanery/all-saints",
      location: "Fangak",
      description: "A faith community honoring all the saints in the Fangak region."
    },
    {
      id: 'ascension',
      name: "Ascension of The Lord Parish",
      icon: "☁️",
      path: "/deaneries/southern-deanery/ascension",
      location: "Fangak",
      description: "A parish community celebrating the Ascension of Our Lord."
    },
    {
      id: 'holy-trinity',
      name: "Holy Trinity Parish",
      icon: "🔱",
      path: "/deaneries/southern-deanery/holy-trinity",
      location: "Fangak",
      description: "A community dedicated to the Holy Trinity in the Fangak region."
    },
    {
      id: 'st-paul-bor',
      name: "St. Paul Bor Parish",
      icon: "✝️",
      path: "/deaneries/southern-deanery/st-paul-bor",
      location: "Fangak",
      description: "A parish community under the patronage of St. Paul."
    }
  ];

  return (
    <div className="parishes-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <span>Southern Deanery</span>
        </div>

        <SectionTitle 
          title="⛪ Southern Deanery - Parishes"
          subtitle="Serving the parishes and communities of Fangak"
        />

        <div className="parishes-grid">
          {parishes.map(parish => (
            <Link to={parish.path} key={parish.id} className="parish-card">
              <div className="parish-card-content">
                <span className="parish-card-icon">{parish.icon}</span>
                <h3>{parish.name}</h3>
                <p>{parish.description}</p>
                <span className="parish-location">📍 {parish.location}</span>
                <span className="parish-card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/deaneries" className="back-btn">
          ← Back to Deaneries
        </Link>
      </div>
    </div>
  );
};

export default SouthernDeanery;