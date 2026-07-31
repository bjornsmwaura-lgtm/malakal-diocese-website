// src/pages/curia/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Curia = () => {
  const curiaOffices = [
    {
      id: 'bishops-office',
      name: "Bishop's Office",
      icon: "🏛️",
      images: [
        "/images/curia/bishop-1.jpg",
        "/images/curia/bishop-2.jpg",
        "/images/curia/bishop-3.jpg",
        "/images/curia/bishop-1.jpg",
        "/images/curia/bishop-2.jpg",
        "/images/curia/bishop-3.jpg"
      ],
      path: "/curia/bishops-office",
      description: "The Shepherd of the Diocese of Malakal, providing spiritual guidance and pastoral leadership.",
      motto: "Servant of the Servants of God"
    },
    {
      id: 'vicar-general',
      name: "Vicar General",
      icon: "⛪",
      images: [
        "/images/curia/vicar-1.jpg",
        "/images/curia/vicar-2.jpg",
        "/images/curia/vicar-3.jpg",
        "/images/curia/vicar-1.jpg",
        "/images/curia/vicar-2.jpg",
        "/images/curia/vicar-3.jpg"
      ],
      path: "/curia/vicar-general",
      description: "Assisting the Bishop in diocesan administration and pastoral ministry.",
      motto: "Faithful Stewardship"
    },
    {
      id: 'judicial-vicar',
      name: "Judicial Vicar",
      icon: "⚖️",
      images: [
        "/images/curia/judicial-1.jpg",
        "/images/curia/judicial-2.jpg",
        "/images/curia/judicial-3.jpg",
        "/images/curia/judicial-1.jpg",
        "/images/curia/judicial-2.jpg",
        "/images/curia/judicial-3.jpg"
      ],
      path: "/curia/judicial-vicar",
      description: "Upholding justice and canon law in the Diocese of Malakal.",
      motto: "Justice and Mercy"
    },
    {
      id: 'pastoral-department',
      name: "Pastoral Department",
      icon: "📖",
      images: [
        "/images/curia/pastoral-1.jpg",
        "/images/curia/pastoral-2.jpg",
        "/images/curia/pastoral-3.jpg",
        "/images/curia/pastoral-1.jpg",
        "/images/curia/pastoral-2.jpg",
        "/images/curia/pastoral-3.jpg"
      ],
      path: "/curia/pastoral-department",
      description: "Coordinating pastoral ministry across the Diocese of Malakal.",
      motto: "Guiding the Flock"
    },
    {
      id: 'liturgy',
      name: "Liturgy Department",
      icon: "🕊️",
      images: [
        "/images/curia/liturgy-1.jpg",
        "/images/curia/liturgy-2.jpg",
        "/images/curia/liturgy-3.jpg",
        "/images/curia/liturgy-1.jpg",
        "/images/curia/liturgy-2.jpg",
        "/images/curia/liturgy-3.jpg"
      ],
      path: "/curia/liturgy",
      description: "Guiding worship and sacramental celebrations in the diocese.",
      motto: "Worship in Spirit and Truth"
    },
    {
      id: 'vocations-office',
      name: "Vocations Office",
      icon: "🙏",
      images: [
        "/images/curia/vocations-1.jpg",
        "/images/curia/vocations-2.jpg",
        "/images/curia/vocations-3.jpg",
        "/images/curia/vocations-1.jpg",
        "/images/curia/vocations-2.jpg",
        "/images/curia/vocations-3.jpg"
      ],
      path: "/curia/vocations-office",
      description: "Fostering and nurturing religious vocations in the diocese.",
      motto: "Here I Am, Lord"
    },
    {
      id: 'consecrated-life',
      name: "Consecrated Life",
      icon: "🕊️",
      images: [
        "/images/curia/consecrated-1.jpg",
        "/images/curia/consecrated-2.jpg",
        "/images/curia/consecrated-3.jpg",
        "/images/curia/consecrated-1.jpg",
        "/images/curia/consecrated-2.jpg",
        "/images/curia/consecrated-3.jpg"
      ],
      path: "/curia/consecrated-life",
      description: "Supporting religious communities and consecrated life.",
      motto: "Set Apart for God"
    },
    {
      id: 'education-department',
      name: "Education Department",
      icon: "📚",
      images: [
        "/images/curia/education-1.jpg",
        "/images/curia/education-2.jpg",
        "/images/curia/education-3.jpg",
        "/images/curia/education-1.jpg",
        "/images/curia/education-2.jpg",
        "/images/curia/education-3.jpg"
      ],
      path: "/curia/education-department",
      description: "Overseeing Catholic schools and educational programs.",
      motto: "Teach the Truth"
    },
    {
      id: 'legal-department',
      name: "Legal Department",
      icon: "⚖️",
      images: [
        "/images/curia/legal-1.jpg",
        "/images/curia/legal-2.jpg",
        "/images/curia/legal-3.jpg",
        "/images/curia/legal-1.jpg",
        "/images/curia/legal-2.jpg",
        "/images/curia/legal-3.jpg"
      ],
      path: "/curia/legal-department",
      description: "Providing legal counsel and support to the diocese.",
      motto: "Justice and Integrity"
    },
    {
      id: 'medical-health',
      name: "Medical Health",
      icon: "🏥",
      images: [
        "/images/curia/medical-1.jpg",
        "/images/curia/medical-2.jpg",
        "/images/curia/medical-3.jpg",
        "/images/curia/medical-1.jpg",
        "/images/curia/medical-2.jpg",
        "/images/curia/medical-3.jpg"
      ],
      path: "/curia/medical-health",
      description: "Coordinating healthcare services and medical outreach.",
      motto: "Healing with Compassion"
    },
    {
      id: 'finance',
      name: "Finance",
      icon: "💰",
      images: [
        "/images/curia/finance-1.jpg",
        "/images/curia/finance-2.jpg",
        "/images/curia/finance-3.jpg",
        "/images/curia/finance-1.jpg",
        "/images/curia/finance-2.jpg",
        "/images/curia/finance-3.jpg"
      ],
      path: "/curia/finance",
      description: "Managing diocesan financial resources and assets.",
      motto: "Stewardship and Trust"
    },
    {
      id: 'caritas',
      name: "Caritas",
      icon: "❤️",
      images: [
        "/images/curia/caritas-1.jpg",
        "/images/curia/caritas-2.jpg",
        "/images/curia/caritas-3.jpg",
        "/images/curia/caritas-1.jpg",
        "/images/curia/caritas-2.jpg",
        "/images/curia/caritas-3.jpg"
      ],
      path: "/curia/caritas",
      description: "The humanitarian and development arm of the diocese.",
      motto: "Love in Action"
    },
    {
      id: 'youth-office',
      name: "Youth Office",
      icon: "👥",
      images: [
        "/images/curia/youth-1.jpg",
        "/images/curia/youth-2.jpg",
        "/images/curia/youth-3.jpg",
        "/images/curia/youth-1.jpg",
        "/images/curia/youth-2.jpg",
        "/images/curia/youth-3.jpg"
      ],
      path: "/curia/youth-office",
      description: "Coordinating youth ministry and programs.",
      motto: "Empowering the Next Generation"
    },
    {
      id: 'pmc',
      name: "PMC",
      icon: "📋",
      images: [
        "/images/curia/pmc-1.jpg",
        "/images/curia/pmc-2.jpg",
        "/images/curia/pmc-3.jpg",
        "/images/curia/pmc-1.jpg",
        "/images/curia/pmc-2.jpg",
        "/images/curia/pmc-3.jpg"
      ],
      path: "/curia/pmc",
      description: "Pastoral Ministry Coordination for the diocese.",
      motto: "Unity in Ministry"
    },
    {
      id: 'cjpd',
      name: "CJPD",
      icon: "⚖️",
      images: [
        "/images/curia/cjpd-1.jpg",
        "/images/curia/cjpd-2.jpg",
        "/images/curia/cjpd-3.jpg",
        "/images/curia/cjpd-1.jpg",
        "/images/curia/cjpd-2.jpg",
        "/images/curia/cjpd-3.jpg"
      ],
      path: "/curia/cjpd",
      description: "Commission for Justice, Peace and Development.",
      motto: "Justice, Peace, and Development"
    }
  ];

  return (
    <div className="curia-page-grid">
      {/* Header */}
      <div className="curia-grid-header">
        <div className="curia-grid-header-content">
          <h1>Diocesan Curia</h1>
          <p>The administrative and pastoral offices serving the Diocese of Malakal</p>
        </div>
      </div>

      <div className="container">
        <div className="curia-grid-six">
          {curiaOffices.map((office, index) => (
            <div key={office.id} className="curia-card-six">
              <Link to={office.path} className="curia-card-six-link">
                <div className="curia-card-six-images">
                  <div className="curia-image-grid-six">
                    {office.images.map((img, idx) => (
                      <div key={idx} className={`curia-image-six img-${idx + 1}`}>
                        <img src={img} alt={`${office.name}`} />
                      </div>
                    ))}
                  </div>
                  <span className="curia-card-six-number">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="curia-card-six-content">
                  <span className="curia-card-six-icon">{office.icon}</span>
                  <h3>{office.name}</h3>
                  <p>{office.description}</p>
                  <span className="curia-card-six-motto">"{office.motto}"</span>
                  <span className="curia-card-six-link">Learn More →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curia;