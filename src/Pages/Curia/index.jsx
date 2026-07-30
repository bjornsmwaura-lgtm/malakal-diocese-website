import React from 'react';
import { Link } from 'react-router-dom';

const Curia = () => {
  const curiaOffices = [
    { id: 'bishops-office', name: "Bishop's Office", icon: "🏛️", path: "/curia/bishops-office" },
    { id: 'vicar-general', name: "Vicar General", icon: "⛪", path: "/curia/vicar-general" },
    { id: 'judicial-vicar', name: "Judicial Vicar", icon: "⚖️", path: "/curia/judicial-vicar" },
    { id: 'pastoral-department', name: "Pastoral Department", icon: "📖", path: "/curia/pastoral-department" },
    { id: 'liturgy', name: "Liturgy Department", icon: "🕊️", path: "/curia/liturgy" },
    { id: 'vocations-office', name: "Vocations Office", icon: "🙏", path: "/curia/vocations-office" },
    { id: 'consecrated-life', name: "Consecrated Life", icon: "🕊️", path: "/curia/consecrated-life" },
    { id: 'education-department', name: "Education Department", icon: "📚", path: "/curia/education-department" },
    { id: 'legal-department', name: "Legal Department", icon: "⚖️", path: "/curia/legal-department" },
    { id: 'medical-health', name: "Medical Health", icon: "🏥", path: "/curia/medical-health" },
    { id: 'finance', name: "Finance", icon: "💰", path: "/curia/finance" },
    { id: 'caritas', name: "Caritas", icon: "❤️", path: "/curia/caritas" },
    { id: 'youth-office', name: "Youth Office", icon: "👥", path: "/curia/youth-office" },
    { id: 'pmc', name: "PMC", icon: "📋", path: "/curia/pmc" },
    { id: 'cjpd', name: "CJPD", icon: "⚖️", path: "/curia/cjpd" }
  ];

  return (
    <div className="curia-page">
      <div className="container">
        <h1>Diocesan Curia</h1>
        <p>The administrative and pastoral offices serving the Diocese of Malakal</p>

        <div className="curia-grid">
          {curiaOffices.map(office => (
            <Link to={office.path} key={office.id} className="curia-card">
              <div className="curia-card-content">
                <span className="curia-card-icon">{office.icon}</span>
                <h3>{office.name}</h3>
                <span className="curia-card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curia;