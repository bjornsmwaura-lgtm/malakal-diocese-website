import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const BishopsOffice = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Bishop's Office</span>
        </div>

        <SectionTitle 
          title="🏛️ Bishop's Office"
          subtitle="The Shepherd of the Diocese of Malakal"
        />

        <div className="detail-two-column">
          {/* Left Column - Text Content */}
          <div className="detail-left">
            <div className="detail-section">
              <h3>Bishop's Motto: "Love one another as I have loved you" (John 15:12)</h3>
              <h3>About the Bishop's Office</h3>
              <p>
                The Bishop's Office serves as the central administrative and pastoral hub 
                of the Diocese of Malakal. As the chief shepherd, the Bishop provides 
                spiritual guidance, pastoral leadership, and administrative oversight to the 
                entire diocese.
              </p>
              <p>
                The office oversees all diocesan activities, including parish administration, 
                sacramental life, and pastoral programs that serve the faithful across the 
                diocese.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Pastoral Leadership and Guidance</li>
                <li>Diocesan Administration</li>
                <li>Sacramental Celebrations</li>
                <li>Clergy and Religious Oversight</li>
                <li>Diocesan Synod and Councils</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Biography</h3>
              <ul>
                <li><strong>Full Name:</strong> Stephen Nyodho Ador Majwok</li>
                <li><strong>Date of Birth:</strong> 1 January 1973</li>
                <li><strong>Place of Birth:</strong> Andong village, Diocese of Malakal, Upper Nile State</li>
                <li><strong>Current Role:</strong> Bishop of the Catholic Diocese of Malakal (appointed 23 May 2019, installed 28 July 2019)</li>
                <li><strong>Predecessor:</strong> Vincent Mojwok Nyiker</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Bishop:</strong> Stephen Nyodho Ador Majwok</p>
              <p><strong>Address:</strong> St. Joseph's Cathedral, Malakal</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <div className="detail-section">
              <h3>Priestly Ministry and Leadership Focus</h3>
              <p>
                Ordained in 2005, he served as Parish Vicar, Parish Priest, and Diocesan Youth Chaplain before his appointment as Bishop.
              </p>
              <p>Bishop Nyodho emphasizes pastoral care, youth engagement, and community development. His tenure emphasizes peacebuilding, community healing, and rebuilding the diocese after years of conflict.</p>
              <h3>Notable Impact</h3>
              <p>
                After returning to a diocese devastated by war, Bishop Nyodho has guided the community through reconciliation and renewed pastoral outreach.
              </p>
            </div>

            <Link to="/curia" className="back-btn">
              ← Back to Curia
            </Link>
          </div>

          {/* Right Column - Images */}
          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/bishop-1.jpg" 
                  alt="Bishop's Office" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/bishop-2.jpg" 
                  alt="Bishop" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/bishop-3.jpg" 
                  alt="Cathedral" 
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

export default BishopsOffice;