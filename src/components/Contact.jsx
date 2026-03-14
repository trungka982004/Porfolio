import React from 'react';
import './Contact.css';
import { personalInfo } from '../data/personal';

const Contact = () => {
  const { contact, socialLinks } = personalInfo;

  return (
    <section id="contact" className="section contact" data-reveal>
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm currently open to new opportunities and collaborations. Whether you have a question or just
              want to say hi, feel free to drop a message!
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="icon" aria-hidden="true">
                  📧
                </span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="detail-item">
                <span className="icon" aria-hidden="true">
                  📍
                </span>
                <span>{contact.location}</span>
              </div>
            </div>
            <div className="social-links">
              <a
                href={socialLinks.github}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
              <a
                href={socialLinks.linkedin}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                LI
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
