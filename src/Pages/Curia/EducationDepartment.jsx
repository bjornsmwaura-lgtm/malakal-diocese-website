// src/pages/curia/EducationDepartment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const EducationDepartment = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Education Department</span>
        </div>

        <SectionTitle 
          title="📚 Education Department"
          subtitle="Overseeing Catholic schools and educational programs in the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>Overview</h3>
              <p>
                The Department of Education oversees Catholic primary and secondary schools,
                early childhood centers, and adult literacy programs. Catholic education is a 
                cornerstone of our mission, serving both Catholic and non-Catholic students in 
                one of the world's least educated regions.
              </p>
            </div>

            <div className="detail-section">
              <h3>Sub-Departments and Programs</h3>
              
              <h4>1. Early Childhood Education (ECD)</h4>
              <p>
                <strong>Purpose:</strong> To provide foundational learning for young children, 
                particularly those affected by displacement and trauma.
              </p>
              <p>
                <strong>Centers Operated:</strong> 5 ECD centers in Malakal Town and displacement camps
              </p>
              <p><strong>Programs:</strong></p>
              <ul>
                <li><strong>Play-Based Learning:</strong> Age-appropriate activities focusing on motor skills, socialization, and basic literacy</li>
                <li><strong>Nutrition Supplementation:</strong> Porridge and vitamin distribution for enrolled children</li>
                <li><strong>Parenting Education:</strong> Workshops for parents on early childhood development and positive discipline</li>
              </ul>

              <h4>2. Primary Education</h4>
              <p>
                <strong>Purpose:</strong> To operate quality primary schools that provide holistic formation—academic, moral, and spiritual.
              </p>
              <p>
                <strong>Schools Operated:</strong> 12 Catholic primary schools across the diocese
              </p>
              <p>
                <strong>Enrollment:</strong> Approximately 8,500 students (60% Catholic, 40% Muslim and other faiths)
              </p>

              <h4>3. Secondary Education</h4>
              <p>
                <strong>Purpose:</strong> To prepare youth for higher education, employment, and responsible citizenship.
              </p>
              <p>
                <strong>Schools Operated:</strong> 3 Catholic secondary schools
              </p>
              <p>
                <strong>Enrollment:</strong> Approximately 1,200 students
              </p>
              <p><strong>Programs:</strong></p>
              <ul>
                <li><strong>Scholarship Program for Girls:</strong> Full tuition support for academically gifted girls from impoverished families</li>
                <li><strong>Career Guidance and Counseling:</strong> Workshops on career paths, university applications, and vocational training</li>
                <li><strong>Debate and Leadership Clubs:</strong> Co-curricular activities to develop critical thinking and public speaking</li>
                <li><strong>Science Laboratory Access:</strong> Shared science lab facilities for practical experiments</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Higher Education and Vocational Training</h3>
              
              <h4>4. Catholic University</h4>
              <p>
                <strong>Purpose:</strong> To provide higher education opportunities for youth in the diocese and beyond.
              </p>
              <p>
                <strong>Enrollment:</strong> Approximately 400 students in undergraduate programs
              </p>
              <p><strong>Programs Offered:</strong></p>
              <ul>
                <li>Social Work</li>
                <li>Business Administration</li>
                <li>Political Science</li>
              </ul>
              <p>
                <strong>Community Engagement:</strong> Students participate in service-learning projects in local communities.
              </p>

              <h4>5. Bishop Vincent Vocational Training Center</h4>
              <p>
                <strong>Purpose:</strong> To provide technical and vocational education opportunities for youths in the diocese.
              </p>
              <p><strong>Programs Offered:</strong></p>
              <ul>
                <li>Information Technology</li>
                <li>Electrical Engineering</li>
                <li>Mechanical Engineering</li>
              </ul>
              <p>
                <strong>Community Engagement:</strong> Students participate in technical support projects in local communities.
              </p>
            </div>

            <div className="detail-section">
              <h3>Adult Literacy and Accelerated Learning</h3>
              
              <h4>6. Accelerated Learning Programs</h4>
              <p>
                <strong>Purpose:</strong> To reduce illiteracy rates among adults, particularly women and older youth who missed formal schooling.
              </p>
              <p><strong>Programs:</strong></p>
              <ul>
                <li><strong>Literacy in Local Languages:</strong> Reading and writing instruction in Arabic, English, and Nuer or Dinka</li>
                <li><strong>Numeracy Classes:</strong> Basic math skills for market traders and small business owners</li>
                <li><strong>Income Generation Training:</strong> Skills training in tailoring, soap-making, and small business management</li>
                <li><strong>Evening Classes:</strong> Flexible scheduling for adults who work during the day</li>
              </ul>
              <p>
                <strong>Annual Enrollment:</strong> Approximately 600 learners
              </p>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Director:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/curia" className="back-btn">
              ← Back to Curia
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/education-1.jpg" 
                  alt="Education Department" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/education-2.jpg" 
                  alt="Students in Classroom" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/education-3.jpg" 
                  alt="Graduation Ceremony" 
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

export default EducationDepartment;