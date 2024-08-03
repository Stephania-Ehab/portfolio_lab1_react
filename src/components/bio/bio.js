// src/components/BioSection.js
import React from 'react';
import './bio.css';

const BioSection = () => (
  <section className="bio-section">
    <div className="container">
      <h2 className='about'>About me</h2>
      <div className='contant'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nec
        orci cursus scelerisque. Maecenas auctor diam a augue bibendum, vel
        efficitur nulla commodo.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nec
        orci cursus scelerisque. Maecenas auctor diam a augue bibendum, vel
        efficitur nulla commodo.
        
        
      </p>
      <a href="/React Lecture 1.pdf" download="Stephania_CV.pdf" className="btn btn-secondary">
        Download CV
      </a>
      </div>
    </div>
  </section>
);

export default BioSection;
