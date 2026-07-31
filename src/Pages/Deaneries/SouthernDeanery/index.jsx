// src/pages/deaneries/SouthernDeanery/index.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/common/PageLayout';
import PageHeader from '../../../components/common/PageHeader';
import { southernDeaneryData } from '../../../data/deaneries/southernDeaneryData';
import '../DeaneryPages.css';

const SouthernDeanery = () => {
  const { header, parishes } = southernDeaneryData;

  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        description={header.description}
        image={header.image}
        badge={header.badge}
      />

      <div className="parish-grid">
        {parishes.map((parish) => (
          <Link 
            key={parish.id} 
            to={`/deaneries/southern-deanery/${parish.slug}`}
            className="parish-card-link"
          >
            <div className="parish-card">
              <div className="parish-card-image">
                <img src={parish.image} alt={parish.alt} loading="lazy" />
              </div>
              <div className="parish-card-body">
                <h3 className="parish-card-title">{parish.name}</h3>
                <p className="parish-card-description">{parish.description}</p>
                <span className="parish-card-link-text">View Parish →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default SouthernDeanery;