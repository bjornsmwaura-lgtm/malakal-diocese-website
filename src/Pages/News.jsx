// src/pages/News.jsx
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

const News = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allItems = [
    {
      id: 1,
      title: "Emergency Flood Response Reaches Remote Communities",
      excerpt: "Caritas Malakal delivers life-saving supplies to communities cut off by severe flooding in Fangak County.",
      date: "July 15, 2026",
      category: "Emergency Response",
      type: "news"
    },
    {
      id: 2,
      title: "Women's Cooperative Launched in Malakal",
      excerpt: "A group of 50 women have formed a cooperative to support their families through small businesses.",
      date: "July 10, 2026",
      category: "Community Development",
      type: "news"
    },
    {
      id: 3,
      title: "Peacebuilding Workshop Brings Communities Together",
      excerpt: "Community leaders from 10 villages gathered for a week of peacebuilding and reconciliation.",
      date: "July 5, 2026",
      category: "Peacebuilding",
      type: "news"
    },
    {
      id: 4,
      title: "📢 URGENT: Emergency Appeal for Flood Victims",
      content: "Caritas Malakal is urgently appealing for support for families affected by severe flooding. Donations can be made through our website or at the diocesan office.",
      type: "announcement",
      date: "July 17, 2026"
    },
    {
      id: 5,
      title: "📋 Staff Meeting Notice",
      content: "All staff are required to attend a general meeting on Friday, July 19, 2026 at 10:00 AM at the Diocesan Pastoral Center.",
      type: "announcement",
      date: "July 16, 2026"
    },
    {
      id: 6,
      title: "🙏 Prayer Intentions - Week of July 17",
      content: "This week, we pray for all those affected by conflict and displacement in South Sudan. May God grant them strength and protection.",
      type: "announcement",
      date: "July 17, 2026"
    }
  ];

  const newsItems = allItems.filter(item => item.type === 'news');
  const announcements = allItems.filter(item => item.type === 'announcement');

  const getDisplayItems = () => {
    if (activeTab === 'news') return newsItems;
    if (activeTab === 'announcements') return announcements;
    return allItems;
  };

  return (
    <div className="news-page">
      <div className="container">
        <SectionTitle 
          title="News & Updates"
          subtitle="Stay informed about our work and impact in the Diocese"
        />

        {/* Tab Buttons */}
        <div className="news-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            📋 All Updates
          </button>
          <button 
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 News
          </button>
          <button 
            className={`tab-btn ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            📢 Announcements
          </button>
        </div>

        <div className="news-list">
          {getDisplayItems().map((item) => (
            <div key={item.id} className={`news-item ${item.type === 'announcement' ? 'announcement-item' : ''}`}>
              <div className="news-item-content">
                {item.category && <span className="news-category">{item.category}</span>}
                {item.type === 'announcement' && (
                  <span className="announcement-badge">📢 Announcement</span>
                )}
                <h3>{item.title}</h3>
                {item.excerpt && <p>{item.excerpt}</p>}
                {item.content && <p>{item.content}</p>}
                <div className="news-meta">
                  <span className="news-date">📅 {item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getDisplayItems().length === 0 && (
          <div className="no-news">
            <p>No {activeTab} found. Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;