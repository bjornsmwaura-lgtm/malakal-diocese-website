import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Security Program",
      description: "Providing agricultural support and food assistance to vulnerable communities in the Diocese of Malakal.",
      icon: "🌾",
      status: "Ongoing",
      location: "Diocese-wide"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Constructing boreholes and providing access to clean water for communities in need.",
      icon: "💧",
      status: "Active",
      location: "Upper Nile Region"
    },
    {
      id: 3,
      title: "Peace and Reconciliation Project",
      description: "Fostering peace and reconciliation through community dialogue and conflict resolution.",
      icon: "🕊️",
      status: "Ongoing",
      location: "Conflict-affected areas"
    },
    {
      id: 4,
      title: "Girls' Education Scholarship",
      description: "Providing scholarships for girls to access quality education and complete their studies.",
      icon: "📚",
      status: "Active",
      location: "Diocese-wide"
    },
    {
      id: 5,
      title: "Women's Empowerment Program",
      description: "Empowering women through skills training, income-generating activities, and advocacy.",
      icon: "👩",
      status: "Ongoing",
      location: "Diocese-wide"
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <SectionTitle 
          title="📋 Our Projects"
          subtitle="Making a difference through targeted interventions"
        />

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <span className="project-icon">{project.icon}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="project-status">{project.status}</span>
                  <span className="project-location">📍 {project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;