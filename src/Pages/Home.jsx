// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/images/hero/stephen.webp",
      title: "Welcome to the Diocese of Malakal",
      subtitle: "Serving Christ, Healing Communities, Building Hope",
      description: "The Catholic Diocese of Malakal is committed to spreading the Gospel, promoting peace, and serving the people of Upper Nile Region.",
      ctaText: "Learn More",
      ctaLink: "/about"
    },
    {
      id: 2,
      image: "/images/hero/cathedral.JPG",
      title: "St Joesph's Cathedral-Mundiria",
      subtitle: "The Spiritual Heart of the Diocese",
      description: "Join us in worship and fellowship at our beautiful cathedral in Malakal.",
      ctaText: "Visit Us",
      ctaLink: "/about"
    },
    {
      id: 3,
      image: "/images/hero/PMC27.JPG",
      title: "Serving Our Communities",
      subtitle: "Bringing Hope to the People of South Sudan",
      description: "Through education, healthcare, and humanitarian aid, we are making a difference.",
      ctaText: "Get Involved",
      ctaLink: "/get-involved"
    },
    {
      id: 4,
      image: "/images/hero/youth3.jpeg",
      title: "Empowering the Next Generation",
      subtitle: "Youth Ministry and Formation",
      description: "Building a strong foundation for the future of our Church and communities.",
      ctaText: "Join Us",
      ctaLink: "/curia/youth-office"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-carousel">
          <div className="hero-slides">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <span className="hero-badge">Catholic Diocese of Malakal</span>
                    <h1 className="hero-title">{slide.title}</h1>
                    <h2 className="hero-subtitle">{slide.subtitle}</h2>
                    <p className="hero-description">{slide.description}</p>
                    <Link to={slide.ctaLink} className="hero-cta">
                      {slide.ctaText} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
            ❮
          </button>
          <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
            ❯
          </button>

          <div className="hero-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BISHOP'S WELCOME SECTION ===== */}
      <section className="bishop-welcome">
        <div className="container">
          <div className="bishop-welcome-grid">
            {/* Left: Welcome Message */}
            <div className="bishop-welcome-content">
              <span className="welcome-badge">✠ Welcome</span>
              <h2 className="welcome-title">A Message from Our Bishop</h2>
              <div className="welcome-text">
                <p>
                  Dear brothers and sisters in Christ,
                </p>
                <p>
                  I warmly welcome you to the official website of the Catholic Diocese of Malakal. 
                  This digital platform serves as a window into our vibrant faith community and 
                  our mission to spread the love of Christ throughout Malakal Diocese.
                </p>
                <p>
                  Our diocese is a family of faith, united in the Eucharist and committed to 
                  serving the most vulnerable among us. Through education, healthcare, and pastoral care, 
                  we strive to be the living presence of Christ in our communities.
                </p>
                <p>
                  May this website be a source of inspiration and a tool for connection. 
                  I invite you to explore, learn, and join us in our journey of faith.
                </p>
                <p className="welcome-signature">
                  <strong>✠ Rt.Rev. Bishop Stephen Nyodho Ador Majwok</strong><br />
                  Bishop of the Catholic Diocese of Malakal
                </p>
              </div>
              <Link to="/about" className="welcome-cta">
                Learn More About Our Diocese →
              </Link>
            </div>

            {/* Right: Bishop's Image */}
            <div className="bishop-welcome-image">
              <div className="bishop-image-container">
                <img 
                  src="/images/hero/stephen.webp" 
                  alt="Bishop Stephen Nyodho Ador Majwok" 
                  className="bishop-image"
                />
                <div className="bishop-image-caption">
                  <h4>Bishop Stephen Nyodho Ador Majwok</h4>
                  <p>Bishop of Malakal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="home-features">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Guided by the Gospel, we are committed to serving the people of Malakal Diocese in Upper Nile Region.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⛪</div>
              <h3>Spiritual Growth</h3>
              <p>Nurturing faith through worship, sacraments, and pastoral care.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Education</h3>
              <p>Building Catholic schools and empowering the next generation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🩺</div>
              <h3>Healthcare</h3>
              <p>Serving the sick and vulnerable through compassionate care.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community</h3>
              <p>Building hope and unity through peace and development programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="home-quick-links">
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/about" className="quick-link">
              <span>📖</span>
              About Us
            </Link>
            <Link to="/curia" className="quick-link">
              <span>🏛️</span>
              Curia
            </Link>
            <Link to="/deaneries" className="quick-link">
              <span>⛪</span>
              Deaneries
            </Link>
            <Link to="/donate" className="quick-link donate">
              <span>❤️</span>
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;