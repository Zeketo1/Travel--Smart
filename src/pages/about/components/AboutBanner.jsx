import React from 'react';
import '../../../styles/about/aboutBanner.css';
import plane from '../../../assets/banner/plane.png';

const AboutBanner = () => {
  return (
    <section className="bannerAbout">
      <div className="content-container">
        <div className="text-content">
          <h1 className="main-heading">
            Travel Smart <span className="subheading">Discover More, Travel Smart</span>
          </h1>
          <h1 className="tagline">
            At Travel Smart, we are a brand <br />
            that believes in the transformative <br />
            power of travel.
          </h1>
          <p className="description">
            Whether you’re seeking adventure, relaxation, or cultural experiences, we’re here to
            help you explore the world with ease and purpose.
          </p>
        </div>
      </div>
      {/* Add your plane image here, outside of the content-container */}
      <div className="image-container">
        <img src={plane} alt="Plane" />
      </div>
    </section>
  );
};

export default AboutBanner;
  