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
  const navRef = useRef(null);

  // ✅ Toggle hamburger
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ✅ Toggle dropdown (works on all devices)
  const toggleDropdown = (name, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // ✅ Close everything when navigating
  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // ✅ Close dropdown on outside tap/click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && navRef.current.contains(event.target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // ✅ Close mobile menu on route change (optional safety net)
  useEffect(() => {
    setOpenDropdown(null);
  }, [isMenuOpen]);

  // ===== CURIA DEPARTMENTS =====
  const curiaDepartments = {
    column1: [
      { name: "Bishop's Office", path: "/curia/bishops-office" },
      { name: "Vicar General", path: "/curia/vicar-general" },
      { name: "Pastoral Department", path: "/curia/pastoral-department" },
      { name: "Education Department", path: "/curia/education-department" },
      { name: "Medical Health", path: "/curia/medical-health" },
      { name: "Caritas", path: "/curia/caritas" },
    ],
    column2: [
      { name: "Liturgy", path: "/curia/liturgy" },
      { name: "Vocations Office", path: "/curia/vocations-office" },
      { name: "Consecrated Life", path: "/curia/consecrated-life" },
      { name: "Youth Office", path: "/curia/youth-office" },
      { name: "PMC", path: "/curia/pmc" },
      { name: "CJPD", path: "/curia/cjpd" },
    ]
  };

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

  const institutionsItems = [
    { name: "Bishop Vincent Campus", path: "/institutions/bishop-vincent-campus" },
    { name: "Radio Director", path: "/institutions/radio-director" },
    { name: "Bishop Vincent Vocational Training", path: "/institutions/bishop-vincent-vocational-training" },
    { name: "Malakia Guest House", path: "/institutions/malakia-guest-house" },
    { name: "Solidarity Guest House", path: "/institutions/solidarity-guest-house" }
  ];

  return (
    <header className="header">
      <div className="picha">
        <img src="/images/logo1.jpeg" alt="Diocese of Malakal" className="logo" />
        <div className="brand-text">
          <h1 className="brand-name">Catholic Diocese of Malakal</h1>
          <p className="brand-sub">
            South Sudan · <em>Ut Diligatis Invicem</em>
          </p>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          ref={navRef}
          className={`main-nav ${isMenuOpen ? 'open' : ''}`}
        >
          <Link to="/" onClick={closeAll}>Home</Link>
          <Link to="/about" onClick={closeAll}>About</Link>

          {/* CURIA */}
          <div
            className={`nav-dropdown ${openDropdown === 'curia' ? 'open' : ''}`}
            ref={curiaDropdownRef}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown('curia', e)}
              aria-expanded={openDropdown === 'curia'}
            >
              Curia <span className="dropdown-arrow">▾</span>
            </button>
            {openDropdown === 'curia' && (
              <div className="dropdown-menu curia-menu two-columns">
                <div className="dropdown-column">
                  {curiaDepartments.column1.map((item, index) => (
                    <Link key={index} to={item.path} onClick={closeAll}>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="dropdown-column">
                  {curiaDepartments.column2.map((item, index) => (
                    <Link key={index} to={item.path} onClick={closeAll}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DEANERIES */}
          <div
            className={`nav-dropdown ${openDropdown === 'deaneries' ? 'open' : ''}`}
            ref={deaneriesDropdownRef}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown('deaneries', e)}
              aria-expanded={openDropdown === 'deaneries'}
            >
              Deaneries <span className="dropdown-arrow">▾</span>
            </button>
            {openDropdown === 'deaneries' && (
              <div className="dropdown-menu deaneries-menu">
                {deaneriesData.map((deanery, index) => (
                  <div key={index} className="deanery-column">
                    <h4>{deanery.name}</h4>
                    {deanery.parishes.map((parish, idx) => (
                      <Link key={idx} to={parish.path} onClick={closeAll}>
                        {parish.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* INSTITUTIONS */}
          <div
            className={`nav-dropdown ${openDropdown === 'institutions' ? 'open' : ''}`}
            ref={institutionsDropdownRef}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown('institutions', e)}
              aria-expanded={openDropdown === 'institutions'}
            >
              Institutions <span className="dropdown-arrow">▾</span>
            </button>
            {openDropdown === 'institutions' && (
              <div className="dropdown-menu institutions-menu">
                {institutionsItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={closeAll}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" onClick={closeAll}>Projects</Link>
          <Link to="/emergency" onClick={closeAll}>Emergency</Link>
          <Link to="/news-events" onClick={closeAll}>News & Events</Link>
          <Link to="/get-involved" onClick={closeAll}>Get Involved</Link>

          <Link to="/donate" className="donate-nav-btn" onClick={closeAll}>
            ❤️ Donate
          </Link>

          <Link to="/contact" onClick={closeAll}>Contact</Link>
        </nav>
      </div>

      <div className="announcement-bar">
        <marquee behavior="scroll" direction="left" scrollAmount="5" loop="infinite">
          <h1>📢 Welcome to the Catholic Diocese of Malakal - Serving Christ, healing communities and building hope. "Love one another as I have loved you" (John 15:12) For the greater Glory of God</h1>
        </marquee>
      </div>
    </header>
  );
};

export default Header;