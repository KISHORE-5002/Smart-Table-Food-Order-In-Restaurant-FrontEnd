import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
                        try {
                           const response = await fetch('http://localhost:8080/api/contact', {
                             method: 'POST',
                             headers: {
                               'Content-Type': 'application/json',
                             },
                             body: JSON.stringify(formData),
                           });

                           if (!response.ok) throw new Error('Failed to send message');

                           alert('Message sent successfully!');
                           setFormData({ name: '', email: '', message: '' });
                         } catch (error) {
                           console.error('Error:', error);
                           alert('Failed to send message. Please try again later.');
                         }

                        };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Information</h2>
          <div><a href="https://www.google.co.in/maps/place/Hosur,+Tamil+Nadu/@12.739524,77.7915102,13z/data=!3m1!4b1!4m6!3m5!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!8m2!3d12.7409127!4d77.8252923!16zL20vMDVmMjFo?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />HOSUR,TAMIL NADU</a></div>
          <div><a href="https://www.google.com/url?sa=D&q=tel:7904183289&ust=1744136100000000&usg=AOvVaw2H9t_J6uqVWbJ0_mUYRPzc&hl=en-GB"  rel="noopener noreferrer">        <FontAwesomeIcon icon={faPhone} className="contact-icon" />+91 7904183289</a></div>
          <div><a href="mailto:kishoresundar972@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="1x" />kishoresundar972@gmail.com</a></div>
          <br/>
          <p><strong>Opening Hours:</strong></p>
          <ul>
            <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
            <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;