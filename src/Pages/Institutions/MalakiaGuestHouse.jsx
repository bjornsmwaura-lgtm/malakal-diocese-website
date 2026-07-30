import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const MalakiaGuestHouse = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Malakia Guest House</span>
        </div>

        <SectionTitle 
          title="🏨 Malakia Guest House"
          subtitle="A tranquil retreat for visitors to the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About Malakia Guest House</h3>
              <p>
                Malakia Guest House is a distinguished hospitality facility under the Catholic Diocese 
                of Malakal, situated in the serene environs of Malakal Town. Named after the local area 
                of Malakia, the guest house offers a tranquil and comfortable retreat for visitors, 
                religious personnel, and development partners working in the region.
              </p>
              <p>
                Malakia Guest House is designed to provide a peaceful respite for those engaged in the 
                pastoral, humanitarian, and developmental work of the diocese. The guest house reflects 
                the Church's tradition of hospitality, offering a place of rest, reflection, and renewal 
                for all who pass through.
              </p>
            </div>

            <div className="detail-section">
              <h3>Facilities and Services</h3>
              <ul>
                <li><strong>Comfortable Accommodation</strong> – Well-furnished rooms with a homely atmosphere</li>
                <li><strong>Conference and Training Facilities</strong> – Suitable for retreats, meetings, and capacity-building workshops</li>
                <li><strong>Prayer and Meditation Space</strong> – A dedicated area for spiritual nourishment</li>
                <li><strong>Dining Services</strong> – Meals prepared with care and served in a welcoming environment</li>
                <li><strong>Green and Peaceful Surroundings</strong> – A quiet escape from the busy town</li>
                <li><strong>Secure Environment</strong> – Ensuring the safety and comfort of all guests</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Mission and Values</h3>
              <ul>
                <li><strong>Christian Hospitality</strong> – Welcoming all guests as Christ Himself</li>
                <li><strong>Peace and Tranquility</strong> – Providing a space for rest and spiritual renewal</li>
                <li><strong>Quality Service</strong> – Attentive and respectful care for every guest</li>
                <li><strong>Community Engagement</strong> – Supporting the pastoral and development mission of the diocese</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Location:</strong> Malakia, Malakal, South Sudan</p>
              <p><strong>Manager:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/institutions" className="back-btn">
              ← Back to Institutions
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/malakia-1.jpg" 
                  alt="Malakia Guest House" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/malakia-2.jpg" 
                  alt="Guest House" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/malakia-3.jpg" 
                  alt="Facilities" 
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

export default MalakiaGuestHouse;