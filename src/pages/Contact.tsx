import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p>I'd love to hear from you! Whether you have questions, feedback, or just want to connect.</p>
        </section>

        <div className="contact-content">
          <section className="contact-info">
            <h2>Connect With Me</h2>
            <div className="info-item">
              <h3>Email</h3>
              <p>contact@kelseyday.com</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Goodreads</a>
              </div>
            </div>
            <div className="info-item">
              <h3>Business Inquiries</h3>
              <p>For speaking engagements, book signings, or media inquiries, please use the contact form.</p>
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Send a Message</h2>
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="book">Book Question</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your message here..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
