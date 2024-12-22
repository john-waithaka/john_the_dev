// src/Contact.js

import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // added
  const handleValidation = () => {
  const { name, email, message } = formData;
  if (!name.trim()) return "Name is required.";
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Invalid email address.";
  if (message.trim().length < 10) return "Message must be at least 10 characters long.";
  return null;
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = handleValidation();
    if (error) {
      alert(error); // Replace with a better UI feedback later
      return;
    }
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };


  

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

        {/* Social Media Links Section */}
        <div className="social-links">
        <h3>Connect with me on social media:</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/warui-waithaka-3343542a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com/john-waithaka" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          {/* Add more social links as needed */}
        </ul>
      </div>

</div>
  );
};

export default Contact;