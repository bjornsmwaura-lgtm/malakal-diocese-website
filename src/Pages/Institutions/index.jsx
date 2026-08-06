// src/pages/institutions/index.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/common/PageLayout';
import PageHeader from '../../components/common/PageHeader';
import './Institutions.css';

const Institutions = () => {
  const institutions = [
    {
      name: "Bishop Vincent Campus",
      description: "A center for learning and formation, providing quality education and spiritual development.",
      path: "/institutions/bishop-vincent-campus",
      image: "/images/institutions/campus-thumb.jpg"
    },
    {
      name: "Bishop Vincent Vocational Training Institute",
      description: "Empowering youth through practical skills for self-reliance and sustainable livelihoods.",
      path: "/institutions/bishop-vincent-vocational-training",
      image: "/images/institutions/vocational-thumb.jpg"
    },
    {
      name: "Radio Director",
      description: "The voice of the Diocese, spreading faith, hope, and community through broadcasting.",
      path: "/institutions/radio-director",
      image: "/images/institutions/radio-thumb.jpg"
    },
    {
      name: "Malakia Guest House",
      description: "A place of welcome and hospitality for visitors, pilgrims, and guests of the Diocese.",
      path: "/institutions/malakia-guest-house",
      image: "/images/institutions/malakia-thumb.jpg"
    },
    {
      name: "Solidarity Guest House",
      description: "Hospitality in the spirit of solidarity, offering quality accommodation and community.",
      path: "/institutions/solidarity-guest-house",
      image: "/images/institutions/solidarity-thumb.jpg"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Institutions of the Diocese"
        subtitle="Serving the Community Through Education, Media, and Hospitality"
        description="The Diocese of Malakal operates various institutions dedicated to serving the community through education, vocational training, media, and hospitality services."
        image="/images/institutions/institutions-header.jpg"
        badge="Institutions"
      />

      <div className="institutions-grid">
        {institutions.map((institution, index) => (
          <Link key={index} to={institution.path} className="institution-card">
            <div className="institution-card-image">
              <img src={institution.image} alt={institution.name} loading="lazy" />
            </div>
            <div className="institution-card-body">
              <h3 className="institution-card-title">{institution.name}</h3>
              <p className="institution-card-description">{institution.description}</p>
              <span className="institution-card-link">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Institutions;