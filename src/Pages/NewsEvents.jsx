// src/pages/NewsEvents.jsx

import React, { useState } from 'react';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';
import './NewsEvents.css';

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState('all');

  // ===== OBLIGATORY LITURGICAL FEAST DAYS =====
  const obligatoryFeasts = [
    {
      id: 1001,
      title: "St. Josephine Bakhita",
      date: "2026-02-08",
      displayDate: "February 8, 2026",
      category: "obligatory",
      type: "Feast Day",
      description: "Celebration of St. Josephine Bakhita, the Sudanese-born saint who became a symbol of hope and freedom. She is the patron saint of Sudan and South Sudan.",
      image: "/images/events/st-josephine-bakhita.jpg"
    },
    {
      id: 1002,
      title: "Ash Wednesday",
      date: "2026-02-18",
      displayDate: "February 18, 2026",
      category: "obligatory",
      type: "Liturgical",
      description: "The beginning of the holy season of Lent. A day of fasting, abstinence, and the imposition of ashes as a sign of repentance and conversion.",
      image: "/images/events/ash-wednesday.jpg"
    },
    {
      id: 1003,
      title: "Easter Triduum",
      date: "2026-04-02",
      displayDate: "April 2-5, 2026",
      category: "obligatory",
      type: "Liturgical",
      description: "The most sacred days of the Church's liturgical year: Holy Thursday, Good Friday, Holy Saturday, and Easter Sunday. Commemorating the Passion, Death, and Resurrection of our Lord Jesus Christ.",
      image: "/images/events/easter-triduum.jpg"
    },
    {
      id: 1004,
      title: "Assumption of the Blessed Virgin Mary",
      date: "2026-08-15",
      displayDate: "August 15, 2026",
      category: "obligatory",
      type: "Solemnity",
      description: "Celebration of the Blessed Virgin Mary being assumed body and soul into heavenly glory. A holy day of obligation for all Catholics.",
      image: "/images/events/assumption.jpg"
    },
    {
      id: 1005,
      title: "St. Daniel Comboni",
      date: "2026-10-10",
      displayDate: "October 10, 2026",
      category: "obligatory",
      type: "Feast Day",
      description: "Celebration of St. Daniel Comboni, the great missionary bishop who dedicated his life to the evangelization of Africa. Founder of the Comboni Missionaries, he is a patron saint of South Sudan and all of Africa.",
      image: "/images/events/st-daniel-comboni.jpg"
    }
  ];

  // Sample News Data
  const newsItems = [
    {
      id: 1,
      title: "Bishop Stephen Nyodho Leads Peacebuilding Meeting",
      date: "2026-02-28",
      displayDate: "February 28, 2026",
      category: "news",
      description: "Bishop Stephen Nyodho chaired a crucial meeting of church leaders in Upper Nile State to address the ongoing crisis, advocating for peaceful coexistence.",
      image: "/images/news/peacebuilding.jpg"
    },
    {
      id: 2,
      title: "Caritas Malakal Launches Emergency Flood Response",
      date: "2026-02-20",
      displayDate: "February 20, 2026",
      category: "news",
      description: "Caritas Malakal has launched an emergency response to support families affected by severe flooding in Upper Nile State.",
      image: "/images/news/flood-response.jpg"
    },
    {
      id: 3,
      title: "Diocese Celebrates Ordination of New Priests",
      date: "2026-02-15",
      displayDate: "February 15, 2026",
      category: "news",
      description: "The Diocese of Malakal joyfully celebrated the ordination of new priests at Christ the King Cathedral.",
      image: "/images/news/ordination.jpg"
    },
    {
      id: 4,
      title: "CJPD Hosts Human Rights Workshop",
      date: "2026-02-05",
      displayDate: "February 5, 2026",
      category: "news",
      description: "The Commission for Justice, Peace and Development hosted a workshop on human rights advocacy and peacebuilding.",
      image: "/images/news/human-rights-workshop.jpg"
    },
    {
      id: 5,
      title: "Bishop Visits Flood-Affected Communities in Fashoda",
      date: "2026-01-28",
      displayDate: "January 28, 2026",
      category: "news",
      description: "Bishop Stephen Nyodho led a delegation of bishops to Fashoda County to show solidarity with flood-affected families.",
      image: "/images/news/bishop-visit.jpg"
    }
  ];

  // Sample Events Data
  const eventItems = [
    {
      id: 101,
      title: "Catechism Teachers Training",
      date: "2026-03-10",
      displayDate: "March 10-12, 2026",
      category: "events",
      description: "A three-day training program for catechists and lay ministers to enhance their teaching and pastoral skills.",
      image: "/images/events/catechism-training.jpg"
    },
    {
      id: 102,
      title: "Easter Triduum Celebrations 2026",
      date: "2026-04-02",
      displayDate: "April 2-5, 2026",
      category: "events",
      description: "Join us for the Easter Triduum celebrations at Christ the King Cathedral and all parishes across the diocese.",
      image: "/images/events/easter.jpg"
    },
    {
      id: 103,
      title: "Fundraising Gala for Education Department",
      date: "2026-04-20",
      displayDate: "April 20, 2026",
      category: "events",
      description: "A fundraising gala to support the Education Department's programs and infrastructure development.",
      image: "/images/events/fundraising-gala.jpg"
    },
    {
      id: 104,
      title: "Diocesan Youth Conference 2026",
      date: "2026-06-15",
      displayDate: "June 15-18, 2026",
      category: "events",
      description: "An annual gathering of young people from all parishes for spiritual renewal and leadership development.",
      image: "/images/events/youth-conference.jpg"
    },
    {
      id: 105,
      title: "World Mission Sunday",
      date: "2026-10-18",
      displayDate: "October 18, 2026",
      category: "events",
      description: "Celebrate World Mission Sunday with the PMC and support missionary activities worldwide.",
      image: "/images/events/mission-sunday.jpg"
    }
  ];

  // Combine all items
  const allItems = [...obligatoryFeasts, ...newsItems, ...eventItems];

  // Filter based on active tab
  const filteredItems = activeTab === 'all' 
    ? allItems 
    : allItems.filter(item => {
        if (activeTab === 'news') return item.category === 'news';
        if (activeTab === 'events') return item.category === 'events' || item.category === 'obligatory';
        return true;
      });

  // Sort by date (chronological order)
  const sortedItems = [...filteredItems].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <PageLayout>
      <PageHeader
        title="News & Events"
        subtitle="Stay Updated with the Diocese of Malakal"
        description="Read the latest news, announcements, liturgical feast days, and upcoming events from across the Diocese of Malakal."
        image="/images/news-events-header.jpg"
        badge="Updates"
      />

      <section className="news-events-section">
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            📰 All Updates
          </button>
          <button 
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📢 News
          </button>
          <button 
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            📅 Events & Feast Days
          </button>
        </div>

        {(activeTab === 'all' || activeTab === 'events') && (
          <div className="obligatory-notice">
            <span className="notice-icon">⛪</span>
            <span className="notice-text">
              <strong>Obligatory Feast Days:</strong> These holy days are to be observed throughout the Diocese of Malakal.
            </span>
          </div>
        )}

        <div className="news-events-grid">
          {sortedItems.length > 0 ? (
            sortedItems.map(item => (
              <div 
                key={item.id} 
                className={`news-event-card ${item.category === 'obligatory' ? 'obligatory-card' : item.category}`}
              >
                <div className="news-event-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  {item.category === 'obligatory' && (
                    <span className="category-badge obligatory">⛪ Obligatory Feast</span>
                  )}
                  {item.category === 'news' && (
                    <span className="category-badge news">📢 News</span>
                  )}
                  {item.category === 'events' && (
                    <span className="category-badge events">📅 Event</span>
                  )}
                </div>
                <div className="news-event-body">
                  <div className="news-event-meta">
                    <span className="news-event-date">📅 {item.displayDate}</span>
                    {item.category === 'obligatory' && (
                      <span className="obligatory-tag">⛪</span>
                    )}
                  </div>
                  <h3 className="news-event-title">{item.title}</h3>
                  <p className="news-event-description">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items">
              <p>No {activeTab === 'all' ? 'updates' : activeTab} found at this time.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default NewsEvents;