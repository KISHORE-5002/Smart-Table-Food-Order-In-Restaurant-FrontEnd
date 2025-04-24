import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About SmartTable</h1>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, SmartTable was born out of a desire to revolutionize the dining experience.
            We combine exceptional cuisine with cutting-edge technology to create a seamless and enjoyable
            experience for our customers.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide delicious, high-quality food while leveraging technology to make the ordering
            process faster, more convenient, and more enjoyable for our customers.
          </p>


         <h2>Our Team</h2>
         <div className="team-grid">
           <div className="team-member">
             <img src="Headchif.png" alt="Head Chef" height="150px" width="150px" />
             <h3>Sachin Rao</h3>
             <p>Head Chef</p>
           </div>

           <div className="team-member">
             <img src="Manager.jpg" alt="Restaurant Manager" height="150px" width="150px" />
             <h3>Srinivasan</h3>
             <p>Restaurant Manager</p>
           </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default About;