import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const Deaneries = () => {
  const deaneries = [
    {
      id: 'central-deanery',
      name: "Central Deanery",
      icon: "⛪",
      path: "/deaneries/central-deanery",
      description: "Parishes and communities in the Malakal Central Deanery.",
      parishes: [
        "St. Joseph's Cathedral Cathedral Malakal",
        "St. Mary's Parish",
        "St. Peter's Parish",
        "Our Lady of Grace Parish"
      ]
    },
    {
      id: 'northern-deanery',
      name: "Northern Deanery",
      icon: "⛪",
      path: "/deaneries/northern-deanery",
      description: "Parishes and communities in the Upper Nile Deanery.",
      parishes: [
        "St. Anthony's Parish",
        "St. Francis Parish",
        "St. Patrick's Parish",
        "Holy Family Parish"
      ]
    },
    {
      id: 'southern-deanery',
      name: "Southern Deanery",
      icon: "⛪",
      path: "/deaneries/southern-deanery",
      description: "Parishes and communities in the Fangak Deanery.",
      parishes: [
        "St. John's Parish",
        "St. Michael's Parish",
        "St. Theresa's Parish",
        "St. Paul's Parish"
      ]
    }
  ];

  return (
    <div className="deaneries-page">
      <div className="container">
        <SectionTitle 
          title="Deaneries"
          subtitle="Regional administrative units serving the parishes of the Diocese of Malakal"
        />

        <div className="deaneries-grid">
          {deaneries.map(deanery => (
            <Link to={deanery.path} key={deanery.id} className="deanery-card">
              <div className="deanery-card-content">
                <span className="deanery-card-icon">{deanery.icon}</span>
                <h3>{deanery.name}</h3>
                <p>{deanery.description}</p>
                <div className="deanery-parishes">
                  <span className="parishes-label">📋 Parishes:</span>
                  <ul>
                    {deanery.parishes.map((parish, index) => (
                      <li key={index}>{parish}</li>
                    ))}
                  </ul>
                </div>
                <span className="deanery-card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deaneries;