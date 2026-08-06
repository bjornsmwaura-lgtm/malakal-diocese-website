// src/components/ui/Header.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const curiaDropdownRef = useRef(null);
  const deaneriesDropdownRef = useRef(null);
  const institutionsDropdownRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (curiaDropdownRef.current && !curiaDropdownRef.current.contains(event.target)) {
        if (openDropdown === 'curia') setOpenDropdown(null);
      }
      if (deaneriesDropdownRef.current && !deaneriesDropdownRef.current.contains(event.target)) {
        if (openDropdown === 'deaneries') setOpenDropdown(null);
      }
      if (institutionsDropdownRef.current && !institutionsDropdownRef.current.contains(event.target)) {
        if (openDropdown === 'institutions') setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // ===== CURIA DEPARTMENTS - 6 per column =====
  const allCuriaDepartments = {
    column1: [
      { name: "Bishop's Office", path: "/curia/bishops-office", active: true },
      { name: "Vicar General", path: "/curia/vicar-general", active: true },
      { name: "Pastoral Department", path: "/curia/pastoral-department", active: true },
      { name: "Education Department", path: "/curia/education-department", active: true },
      { name: "Medical Health", path: "/curia/medical-health", active: true },
      { name: "Caritas", path: "/curia/caritas", active: true },
    ],
    column2: [
      { name: "Liturgy", path: "/curia/liturgy", active: true },
      { name: "Vocations Office", path: "/curia/vocations-office", active: true },
      { name: "Consecrated Life", path: "/curia/consecrated-life", active: true },
      { name: "Youth Office", path: "/curia/youth-office", active: true },
      { name: "PMC", path: "/curia/pmc", active: true },
      { name: "CJPD", path: "/curia/cjpd", active: true },
    ]
  };

  // ===== FILTER ONLY ACTIVE DEPARTMENTS =====
  const curiaDepartments = {
    column1: allCuriaDepartments.column1.filter(item => item.active),
    column2: allCuriaDepartments.column2.filter(item => item.active),
  };

  // Deaneries data with parishes
  const deaneriesData = [
    {
      name: "Central Deanery",
      parishes: [
        { name: "St. Joseph Cathedral", path: "/deaneries/central-deanery/st-josephs-cathedral" },
        { name: "Christ the King Malakal", path: "/deaneries/central-deanery/christ-the-king" },
        { name: "Mariakwero Malakal", path: "/deaneries/central-deanery/mariakwero-malakal" },
        { name: "Guardian Angel", path: "/deaneries/central-deanery/guardian-angel" },
        { name: "Our Lady of Sorrows Tonga", path: "/deaneries/central-deanery/our-lady-of-sorrows-tonga" },
        { name: "Sts. Ambrose & Charles Borromeo", path: "/deaneries/central-deanery/sts-ambrose-charles-borromeo" },
        { name: "St. Stephen Kodok", path: "/deaneries/central-deanery/st-stephen-kodok" },
      ]
    },
    {
      name: "Northern Deanery",
      parishes: [
        { name: "Christ the King Renk", path: "/deaneries/northern-deanery/christ-the-king-renk" },
        { name: "Our Lady of Hope Wadakona", path: "/deaneries/northern-deanery/our-lady-of-hope-wadakona" },
        { name: "St. Mark Maban", path: "/deaneries/northern-deanery/st-mark-maban" },
        { name: "St. Paul the Apostle Kaka", path: "/deaneries/northern-deanery/st-paul-the-apostle-kaka" },
      ]
    },
    {
      name: "Southern Deanery",
      parishes: [
        { name: "All Saints Waat", path: "/deaneries/southern-deanery/all-saints-waat" },
        { name: "Ascension of the Lord Ayod", path: "/deaneries/southern-deanery/ascension-of-the-lord-ayod" },
        { name: "Holy Trinity Fangak", path: "/deaneries/southern-deanery/holy-trinity-fangak" },
        { name: "St. Paul Bor", path: "/deaneries/southern-deanery/st-paul-bor" },
      ]
    }
  ];

  // Institutions items
  const institutionsItems = [
    { name: "Bishop Vincent Campus", path: "/institutions/bishop-vincent-campus" },
    { name: "Radio Director", path: "/institutions/radio-director" },
    { name: "Bishop Vincent Vocational Training", path: "/institutions/bishop-vincent-vocational-training" },
    { name: "Malakia Guest House", path: "/institutions/malakia-guest-house" },
    { name: "Solidarity Guest House", path: "/institutions/solidarity-guest-house" }
  ];

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="bor">
        <div className="contact">
          <h4>📞 +211 912 345 678</h4>
          <h4>✉️ info@dioceseofmalakal.org</h4>
        </div>
        <div className="icn">
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-twitter"></i>
        </div>
      </div>

      {/* Main Header */}
      <div className="picha">
        <img src="/images/logo.png" alt="Diocese of Malakal" className="logo" />
        <div className="h1">
          <h1>Diocese of Malakal</h1>
        </div>

        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>

          {/* Curia Dropdown - 6 & 6 */}
          <div className={`nav-dropdown ${openDropdown === 'curia' ? 'open' : ''}`} ref={curiaDropdownRef}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('curia')}>
              Curia <i className={`bi bi-chevron-down ${openDropdown === 'curia' ? 'open' : ''}`}></i>
            </button>
            {openDropdown === 'curia' && (
              <div className="dropdown-menu curia-menu two-columns">
                <div className="dropdown-column">
                  {curiaDepartments.column1.map((item, index) => (
                    <Link key={index} to={item.path} onClick={() => { setOpenDropdown(null); setIsMenuOpen(false); }}>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="dropdown-column">
                  {curiaDepartments.column2.map((item, index) => (
                    <Link key={index} to={item.path} onClick={() => { setOpenDropdown(null); setIsMenuOpen(false); }}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Deaneries Dropdown */}
          <div className={`nav-dropdown ${openDropdown === 'deaneries' ? 'open' : ''}`} ref={deaneriesDropdownRef}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('deaneries')}>
              Deaneries <i className={`bi bi-chevron-down ${openDropdown === 'deaneries' ? 'open' : ''}`}></i>
            </button>
            {openDropdown === 'deaneries' && (
              <div className="dropdown-menu deaneries-menu">
                {deaneriesData.map((deanery, index) => (
                  <div key={index} className="deanery-column">
                    <h4>{deanery.name}</h4>
                    {deanery.parishes.map((parish, idx) => (
                      <Link key={idx} to={parish.path} onClick={() => { setOpenDropdown(null); setIsMenuOpen(false); }}>
                        {parish.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Institutions Dropdown */}
          <div className={`nav-dropdown ${openDropdown === 'institutions' ? 'open' : ''}`} ref={institutionsDropdownRef}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('institutions')}>
              Institutions <i className={`bi bi-chevron-down ${openDropdown === 'institutions' ? 'open' : ''}`}></i>
            </button>
            {openDropdown === 'institutions' && (
              <div className="dropdown-menu institutions-menu">
                {institutionsItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => { setOpenDropdown(null); setIsMenuOpen(false); }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/emergency" onClick={() => setIsMenuOpen(false)}>Emergency</Link>
          <Link to="/news-events" onClick={() => setIsMenuOpen(false)}>News & Events</Link>
          <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
          
          <Link to="/donate" className="donate-nav-btn" onClick={() => setIsMenuOpen(false)}>
            ❤️ Donate
          </Link>
          
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Announcement Bar with Marquee */}
      <div className="announcement-bar">
        <marquee behavior="scroll" direction="left" scrollamount="5" loop="infinite">
          <h1>📢 Welcome to the Catholic Diocese of Malakal - Serving Christ, healing communities and building hope. "Love one another as I have loved you" (John 15:12) For the greater Glory of God</h1>
        </marquee>
      </div>
    </header>
  );
};

export default Header;