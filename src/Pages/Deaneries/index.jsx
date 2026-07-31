// src/pages/deaneries/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Deaneries = () => {
  const deaneries = [
    {
      id: 'central-deanery',
      name: "Central Deanery",
      icon: "⛪",
      images: [
        "/images/deaneries/central-1.jpg",
        "/images/deaneries/central-2.jpg",
        "/images/deaneries/central-3.jpg",
        "/images/deaneries/central-1.jpg",
        "/images/deaneries/central-2.jpg",
        "/images/deaneries/central-3.jpg"
      ],
      path: "/deaneries/central-deanery",
      description: "Parishes and communities in the Malakal Central Deanery.",
      parishes: 7,
      founded: "1901"
    },
    {
      id: 'northern-deanery',
      name: "Northern Deanery",
      icon: "⛪",
      images: [
        "/images/deaneries/northern-1.jpg",
        "/images/deaneries/northern-2.jpg",
        "/images/deaneries/northern-3.jpg",
        "/images/deaneries/northern-1.jpg",
        "/images/deaneries/northern-2.jpg",
        "/images/deaneries/northern-3.jpg"
      ],
      path: "/deaneries/northern-deanery",
      description: "Parishes and communities in the Upper Nile Deanery.",
      parishes: 4,
      founded: "1910"
    },
    {
      id: 'southern-deanery',
      name: "Southern Deanery",
      icon: "⛪",
      images: [
        "/images/deaneries/southern-1.jpg",
        "/images/deaneries/southern-2.jpg",
        "/images/deaneries/southern-3.jpg",
        "/images/deaneries/southern-1.jpg",
        "/images/deaneries/southern-2.jpg",
        "/images/deaneries/southern-3.jpg"
      ],
      path: "/deaneries/southern-deanery",
      description: "Parishes and communities in the Fangak Deanery.",
      parishes: 4,
      founded: "1920"
    }
  ];

  return (
    <div className="deaneries-page-grid">
      {/* Header */}
      <div className="deaneries-grid-header">
        <div className="deaneries-grid-header-content">
          <h1>Deaneries</h1>
          <p>Regional administrative units serving the parishes of the Diocese of Malakal</p>
        </div>
      </div>

      <div className="container">
        <div className="deaneries-grid-six">
          {deaneries.map((deanery) => (
            <div key={deanery.id} className="deanery-card-six">
              <Link to={deanery.path} className="deanery-card-six-link">
                <div className="deanery-card-six-images">
                  <div className="deanery-image-grid-six">
                    {deanery.images.map((img, idx) => (
                      <div key={idx} className={`deanery-image-six img-${idx + 1}`}>
                        <img src={img} alt={`${deanery.name}`} />
                      </div>
                    ))}
                  </div>
                  <span className="deanery-card-six-badge">{deanery.parishes} Parishes</span>
                </div>
                <div className="deanery-card-six-content">
                  <span className="deanery-card-six-icon">{deanery.icon}</span>
                  <h3>{deanery.name}</h3>
                  <p>{deanery.description}</p>
                  <div className="deanery-card-six-meta">
                    <span>📍 {deanery.parishes} Parishes</span>
                    <span>📅 Est. {deanery.founded}</span>
                  </div>
                  <span className="deanery-card-six-link">View Parishes →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deaneries;