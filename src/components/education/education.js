import React from 'react';
import './education.css'

const EducationSection = () => {
    const projects = [
        { name: 'Web Design', color: '#C0C0C0' },
        { name: 'Mobile Design', color: '#333333' },
        { name: 'Logo Design', color: '#C0C0C0' },
        { name: 'Web Application Development', color: '#333333' },
        { name: 'Mobile Application Development', color: '#C0C0C0' },
        { name: 'PWA Development', color: '#333333' },
      ];
      return (
        <section className="education-section text-center py-5">
          <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
              {projects.map((project, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="education-item" style={{ backgroundColor: project.color }}>
                    <p>{project.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };


export default EducationSection;