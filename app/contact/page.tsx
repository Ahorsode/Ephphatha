import { contactInfo } from "../data";

export default function ContactPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container page-header-content">
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <div className="info-item">
                                <h3>Address</h3>
                                <p style={{ whiteSpace: "pre-line" }}>{contactInfo.address}</p>
                            </div>
                            <div className="info-item">
                                <h3>Phone</h3>
                                <p>{contactInfo.phone}</p>
                            </div>
                            <div className="info-item">
                                <h3>Email</h3>
                                <p>{contactInfo.email}</p>
                            </div>
                            <div className="info-item">
                                <h3>Office Hours</h3>
                                <p style={{ whiteSpace: "pre-line" }}>{contactInfo.hours}</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" id="name" name="name" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" name="email" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" name="subject" className="form-select">
                                        <option value="general">General Inquiry</option>
                                        <option value="volunteer">Volunteer Opportunity</option>
                                        <option value="donation">Donation Question</option>
                                        <option value="program">Program Information</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message*</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="form-textarea"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Find Us</h2>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256836805!2d-73.9878446845938!3d40.748440479327925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Make an Impact?</h2>
                        <p className="cta-desc">
                            Join our mission to open doors and transform lives in our community.
                        </p>
                        <a href="/donate" className="btn btn-primary">Donate Now</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
