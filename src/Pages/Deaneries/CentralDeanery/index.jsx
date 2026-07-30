// src/pages/deaneries/CentralDeanery/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const CentralDeanery = () => {
  const parishes = [
    { id: 'st-josephs-cathedral', name: "St. Joseph Cathedral", icon: "🏛️", path: "/deaneries/central-deanery/st-josephs-cathedral" },
    { id: 'christ-the-king', name: "Christ the King", icon: "👑", path: "/deaneries/central-deanery/christ-the-king" },
    { id: 'mariakwero-malakal', name: "Mariakwero Malakal", icon: "⛪", path: "/deaneries/central-deanery/mariakwero-malakal" },
    { id: 'guardian-angel', name: "Guardian Angel", icon: "👼", path: "/deaneries/central-deanery/guardian-angel" },
    { id: 'our-lady-of-sorrows-tonga', name: "Our Lady of Sorrows Tonga", icon: "🌸", path: "/deaneries/central-deanery/our-lady-of-sorrows-tonga" },
    { id: 'sts-ambrose-charles-borromeo', name: "Sts. Ambrose & Charles Borromeo", icon: "📖", path: "/deaneries/central-deanery/sts-ambrose-charles-borromeo" },
    { id: 'st-stephen-kodok', name: "St. Stephen Kodok", icon: "✝️", path: "/deaneries/central-deanery/st-stephen-kodok" }
  ];

  return (
    <div className="parishes-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <span>Central Deanery</span>
        </div>

        <SectionTitle 
          title="⛪ Central Deanery - Parishes"
          subtitle="Serving the parishes and communities of Malakal Central"
        />

        <div className="parishes-grid">
          {parishes.map(parish => (
            <Link to={parish.path} key={parish.id} className="parish-card">
              <div className="parish-card-content">
                <span className="parish-card-icon">{parish.icon}</span>
                <h3>{parish.name}</h3>
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

export default CentralDeanery;