import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const NorthernDeanery = () => {
  const parishes = [
    {
      id: 'christ-the-king',
      name: "Christ the King Parish Renk",
      icon: "👑",
      path: "/deaneries/northern-deanery/christ-the-king-renk",
      location: "Upper Nile",
      description: "A faith community dedicated to Christ the King in the Upper Nile region."
    },
    {
      id: 'our-lady-of-hope-wadakona',
      name: "Our Lady of Hope Wadakona Parish",
      icon: "🌸",
      path: "/deaneries/northern-deanery/our-lady-of-hope-wadakona",
      location: "Upper Nile",
      description: "A parish community devoted to Our Lady of Hope."
    },
    {
      id: 'st-mark-maban',
      name: "St. Mark Maban Parish",
      icon: "📖",
      path: "/deaneries/northern-deanery/st-mark-maban",
      location: "Upper Nile",
      description: "A community dedicated to St. Mark."
    },
    {
      id: 'st-paul-the-apostle',
      name: "St. Paul the Apostle Kaka Parish",
      icon: "✝️",
      path: "/deaneries/northern-deanery/st-paul-the-apostle",
      location: "Upper Nile",
      description: "A parish community under the patronage of St. Paul the Apostle."
    }
  ];

  return (
    <div className="parishes-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <span>Northern Deanery</span>
        </div>

        <SectionTitle 
          title="⛪ Northern Deanery - Parishes"
          subtitle="Serving the parishes and communities of Upper Nile"
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

export default NorthernDeanery;