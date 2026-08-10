// src/pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import LT from '../assets/liturgy2.jpeg';
import LT1 from '../assets/liturgy4.jpeg';
import LT2 from '../assets/liturgy3.jpeg';
import jm from '../assets/map2.webp';
import bor from '../assets/liturgy3.jpeg';
import nm from '../assets/health.jpeg';

const About = () => {
  const focusCards = [
    {
      title: 'Who We Are',
      image: jm,
      description:
        'The Catholic Diocese of Malakal is a Latin Rite diocese within the Metropolitan Archdiocese of Juba, serving communities across 200,164 square kilometers of northeastern South Sudan.',
      icon: '⛪'
    },
    {
      title: 'Our Mission',
      image: bor,
      description:
        'We proclaim the Gospel, administer the sacraments, promote human development, and work for peace, justice, and reconciliation in a region marked by hardship.',
      icon: '✝️'
    },
    {
      title: 'Our Vision',
      image: nm,
      description:
        'We envision a thriving Catholic community where every person has access to education, healthcare, dignity, and lasting peace.',
      icon: '🌟'
    }
  ];

  const milestones = [
    { year: '1933', event: 'Established as the Mission Sui Iuris of Kodok' },
    { year: '1938', event: 'Promoted to Apostolic Prefecture of Kodok' },
    { year: '1949', event: 'Renamed Apostolic Prefecture of Malakal' },
    { year: '1974', event: 'Elevated to Diocese of Malakal' },
    { year: '2024', event: 'Lost territory to the new Diocese of Bentiu' }
  ];

  const stats = [
    { label: 'Area', value: '200,164', suffix: 'km²' },
    { label: 'Catholics', value: '920,537', suffix: '' },
    { label: 'Parishes', value: '14', suffix: '' },
    { label: 'Priests', value: '23', suffix: '' },
    { label: 'Sisters Congregations', value: '3', suffix: '' },
    { label: 'Seminarians', value: '13', suffix: '' }
  ];

  const galleryItems = [
    { image: LT, title: 'Faith in Action', description: 'The faithful gathered in worship and prayer' },
    { image: LT1, title: 'Community Celebration', description: 'Joyful moments of unity and fellowship' },
    { image: LT2, title: 'Renewal and Hope', description: 'Looking forward with faith and determination' }
  ];

  return (
    <div className="about-page">
      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <span className="intro-badge">About Our Diocese</span>
            <h1 className="intro-title">
              Serving Christ, Healing Communities,<br />
              <span className="highlight">Building Hope</span>
            </h1>
            <p className="intro-description">
              The Catholic Diocese of Malakal continues to stand as a beacon of faith, service, 
              and resilience for the people of Malakal Diocese in South Sudan.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <h3>{stat.value}<span className="stat-suffix">{stat.suffix}</span></h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOCUS CARDS ===== */}
      <section className="about-focus">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Identity</span>
            <h2 className="section-title">Who We Are & What We Stand For</h2>
            <p className="section-subtitle">
              Guided by faith, we are called to serve, heal, and build hope for all people.
            </p>
          </div>
          <div className="focus-grid">
            {focusCards.map((card) => (
              <div className="focus-card" key={card.title}>
                <div className="focus-card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="focus-card-icon">{card.icon}</div>
                </div>
                <div className="focus-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORY & STATS ===== */}
      <section className="about-history">
        <div className="container">
          <div className="history-grid">
            <div className="history-content">
              <span className="section-badge">Our Story</span>
              <h2 className="section-title">A Journey of Faith</h2>
              <p className="history-text">
                For over 90 years, missionaries and local clergy have served this region with 
                courage and devotion. Despite civil war, displacement, and loss, the Diocese 
                continues to rebuild with faith, unity, and hope.
              </p>
              <div className="timeline">
                {milestones.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <p className="timeline-event">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="history-stats">
              <h3 className="stats-title">Our Diocese at a Glance</h3>
              <div className="stats-grid-two">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <h4>{stat.value}<span className="stat-suffix">{stat.suffix}</span></h4>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="about-gallery">
        <div className="container">
          <div className="section-header centered">
            <span className="section-badge">Jubilee Celebration</span>
            <h2 className="section-title">Moments of Faith, Unity, and Renewal</h2>
            <p className="section-subtitle">
              A glimpse into the life and celebrations of our Diocese.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-card" key={item.title}>
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Our Mission</h2>
            <p>
              Whether you are a parishioner, a visitor, or someone seeking to learn more, 
              we welcome you to be part of our journey of faith and service.
            </p>
            <div className="cta-buttons">
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
              <Link to="/contact" className="btn-secondary-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;