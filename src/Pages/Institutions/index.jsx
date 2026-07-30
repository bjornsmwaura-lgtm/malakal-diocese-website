import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const Institutions = () => {
  const institutions = [
    {
      id: 'bishop-vincent-campus',
      name: "Bishop Vincent Campus-Catholic Univeristy Juba",
      icon: "🏫",
      path: "/institutions/bishop-vincent-campus",
      description: "A center for University education and formation in the Diocese of Malakal. The Campus is under the Catholic University Juba"
    },
    {
      id: 'Bishop-Vincent-Vocational-Training-Institute',
      name: "Bishop Vincent Vocational Training Tnstitute (BVVTI)",
      icon: "🏫",
      path: "/institutions/bishop-vincent-vocational-training-institute",
      description: "An extension of the Bishop Vincent Campus serving the diocese."
    },
    {
      id: 'malakia-guest-house',
      name: "Malakia Guest House",
      icon: "🏨",
      path: "/institutions/malakia-guest-house",
      description: "A welcoming guest house for visitors and retreatants in Malakal."
    },
    {
      id: 'solidarity-guest-house',
      name: "Solidarity Guest House",
      icon: "🏨",
      path: "/institutions/solidarity-guest-house",
      description: "A place of hospitality and rest for visitors to the diocese."
    }
  ];

  return (
    <div className="institutions-page">
      <div className="container">
        <SectionTitle 
          title="Diocesan Institutions"
          subtitle="Serving the Diocese of Malakal through dedicated ministries"
        />

        <div className="institutions-grid">
          {institutions.map(inst => (
            <Link to={inst.path} key={inst.id} className="institution-card">
              <div className="institution-card-content">
                <span className="institution-card-icon">{inst.icon}</span>
                <h3>{inst.name}</h3>
                <p>{inst.description}</p>
                <span className="institution-card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Institutions;