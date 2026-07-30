// src/pages/institutions/BishopVincentVocationalTrainingInstitute.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const BishopVincentVocationalTraining = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Bishop Vincent Vocational Training Institute</span>
        </div>

        <SectionTitle 
          title="🔧 Bishop Vincent Vocational Training Institute"
          subtitle="Empowering youth through technical and vocational education"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Institute</h3>
              <p>
                Bishop Vincent Vocational Training Institute (BVVTI) is a Catholic institution established 
                under the Catholic Diocese of Malakal, located in Malakal Town, South Sudan.
              </p>
              <p>
                Founded in 2025, BVVTI is committed to providing quality education and practical skills 
                training to the youth of South Sudan. The institute is officially registered with the 
                Ministry of Labour and operates under the framework of Technical and Vocational 
                Education and Training (TVET).
              </p>
              <p>
                <strong>Motto:</strong> "Discipline and Inventing"<br />
                <strong>Vision:</strong> To combat unemployment and poverty by equipping young people 
                with employable and entrepreneurial skills.
              </p>
            </div>

            <div className="detail-section">
              <h3>Programs Offered</h3>
              <p><strong>Core Certificate and Short-Course Trades:</strong></p>
              <ul>
                <li>Auto Mechanics</li>
                <li>Carpentry and Joinery</li>
                <li>Welding and Fabrication</li>
              </ul>
              <p><strong>Planned Departments:</strong></p>
              <ul>
                <li>General Electricity</li>
                <li>Masonry and Brick Laying</li>
                <li>Information Communication Technology (ICT)</li>
                <li>Tailoring and Fashion Design</li>
                <li>First Aid, Midwifery, and Nursing</li>
                <li>Plumbing and Water Technology</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Program Duration</h3>
              <ul>
                <li><strong>Short-Course Programs:</strong> 3–6 months</li>
                <li><strong>Certificate Programs:</strong> 1 year (planned)</li>
                <li><strong>Diploma Programs:</strong> 3 years (2 years training + 1 year industrial practice)</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Director:</strong> Eng. Yonas James Orage</p>
              <p><strong>Location:</strong> Malakal, South Sudan</p>
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
                  src="/images/institutions/bvvt-1.jpg" 
                  alt="Bishop Vincent Vocational Training Institute" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/bvvt-2.jpg" 
                  alt="Vocational Training" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/bvvt-3.jpg" 
                  alt="Students" 
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

export default BishopVincentVocationalTraining;