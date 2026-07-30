// src/pages/curia/CJPD.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const CJPD = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>CJPD</span>
        </div>

        <SectionTitle 
          title="⚖️ Commission for Justice, Peace and Development"
          subtitle="Promoting justice, peace, reconciliation, and integral human development in the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>Vision</h3>
              <p>
                To take Christ as our model, to seek and work for peace, to build a society where 
                all people live in the peace of Christ, reconciliation, freedom, enjoy justice, 
                uphold human dignity, and care for one another as children of God.
              </p>
            </div>

            <div className="detail-section">
              <h3>Mission</h3>
              <p>
                Inspired by the Gospel of Jesus Christ and the social teachings of the Catholic Church, 
                the Justice and Peace Commission promotes justice, peace, reconciliation, human dignity, 
                and integral human development by empowering communities, defending the rights of the 
                vulnerable, fostering dialogue, and encouraging responsible stewardship of God's creation.
              </p>
            </div>

            <div className="detail-section">
              <h3>Goal</h3>
              <p>
                To contribute to the realization of God's Kingdom by fostering peaceful, just, and 
                compassionate communities where every person can live with dignity, freedom, and hope.
              </p>
            </div>

            <div className="detail-section">
              <h3>Objectives</h3>
              <ul>
                <li>
                  To proclaim and witness the Gospel values of justice, peace, love, and reconciliation 
                  in all aspects of community life.
                </li>
                <li>
                  To promote the dignity of every human person, recognizing that all people are created 
                  in the image and likeness of God <em>(Genesis 1:27)</em>.
                </li>
                <li>
                  To foster peace and reconciliation through dialogue, mediation, forgiveness, and 
                  conflict transformation, following Christ's teaching: <em>"Blessed are the peacemakers, 
                  for they shall be called children of God" (Matthew 5:9)</em>.
                </li>
                <li>
                  To defend human rights and advocate for justice, especially for the poor, marginalized, 
                  displaced, women, children, and other vulnerable groups, in the spirit of Christ's compassion.
                </li>
                <li>
                  To strengthen civic responsibility and ethical leadership, encouraging honesty, 
                  accountability, and service for the common good.
                </li>
                <li>
                  To promote social cohesion and solidarity among different communities, ethnic groups, 
                  and faith traditions through mutual respect and cooperation.
                </li>
                <li>
                  To care for God's creation, promoting environmental stewardship as a responsibility 
                  entrusted to humanity.
                </li>
                <li>
                  To strengthen the capacity of Church and community structures to respond effectively 
                  to issues of justice, peace, and development.
                </li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Commission Coordinator:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/curia" className="back-btn">
              ← Back to Curia
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-section">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Love</strong> <em>(John 13:34–35)</em></li>
                <li><strong>Justice</strong> <em>(Micah 6:8)</em></li>
                <li><strong>Peace</strong> <em>(John 14:27)</em></li>
                <li><strong>Human Dignity</strong> <em>(Genesis 1:27)</em></li>
                <li><strong>Truth</strong> <em>(John 8:32)</em></li>
                <li><strong>Mercy</strong> <em>(Luke 6:36)</em></li>
                <li><strong>Reconciliation</strong> <em>(2 Corinthians 5:18–19)</em></li>
                <li><strong>Integrity</strong> <em>(Proverbs 10:9)</em></li>
                <li><strong>Service</strong> <em>(Mark 10:45)</em></li>
                <li><strong>Solidarity</strong> <em>(Galatians 6:2)</em></li>
                <li><strong>Stewardship of Creation</strong> <em>(Genesis 2:15)</em></li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Biblical Foundation</h3>
              <p>
                The ministry of the Justice and Peace Commission is inspired by Christ's mission:
              </p>
              <p>
                <em>"The Spirit of the Lord is upon me, because he has anointed me to proclaim 
                good news to the poor. He has sent me to proclaim freedom for the prisoners and 
                recovery of sight for the blind, to set the oppressed free."</em>
              </p>
              <p style={{ marginTop: '10px', textAlign: 'right' }}>
                <strong>— Luke 4:18</strong>
              </p>
            </div>

            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/cjpd-1.jpg" 
                  alt="Justice and Peace Commission" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/cjpd-2.jpg" 
                  alt="Peacebuilding" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/cjpd-3.jpg" 
                  alt="Community Engagement" 
                  className="detail-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CJPD;