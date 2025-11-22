import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="icon">📧</span>
                                <span>hello@johndoe.dev</span>
                            </div>
                            <div className="detail-item">
                                <span className="icon">📍</span>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link">GH</a>
                            <a href="#" className="social-link">LI</a>
                            <a href="#" className="social-link">TW</a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
