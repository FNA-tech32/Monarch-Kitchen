import { useState } from 'react';
import './Contact.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        primaryPhone: '',
        altPhone: '',
        inquiryType: 'General Inquiry',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                primaryPhone: '',
                altPhone: '',
                inquiryType: 'General Inquiry',
                message: ''
            });
        }, 500);
    };

    return (
        <div className="contact-page">
            <Navbar />

            {/* Page Header */}
            <div className="contact-hero py-4 text-center">
                <h1 className='fw-bold fs-1'>
                    <span className='contactt'>Monarch Kitchen </span>
                    <span>Contact &amp; Support</span>
                </h1>
                <p className="text-muted fs-5">
                    We'd love to hear from you! Connect with us for bookings, orders, event catering, or general questions.
                </p>
            </div>

            {/* Contact Details Cards (Primary & Alternative Details) */}
            <div className="container my-4">
                <div className="row g-4">
                    {/* Phone Details Card */}
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info-card h-100 p-4 text-center shadow-sm rounded-4">
                            <div className="info-icon-wrapper mb-3">
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Call Us</h4>
                            <div className="mb-2">
                                <span className="badge badge-primary-custom mb-1">Primary Contact</span>
                                <p className="mb-0">
                                    <a href="tel:+919876543210" className="contact-val">+91 98765 43210</a>
                                </p>
                            </div>
                            <div className="mt-2 pt-2 border-top">
                                <span className="badge badge-alt-custom mb-1">Alternative Contact</span>
                                <p className="mb-0">
                                    <a href="tel:+919123456789" className="contact-val">+91 91234 56789</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Email Details Card */}
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info-card h-100 p-4 text-center shadow-sm rounded-4">
                            <div className="info-icon-wrapper mb-3">
                                <i className="fa-solid fa-envelope-open-text"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Email Us</h4>
                            <div className="mb-2">
                                <span className="badge badge-primary-custom mb-1">Primary Email</span>
                                <p className="mb-0">
                                    <a href="mailto:contact@monarchkitchen.com" className="contact-val text-break">contact@monarchkitchen.com</a>
                                </p>
                            </div>
                            <div className="mt-2 pt-2 border-top">
                                <span className="badge badge-alt-custom mb-1">Alternative Email</span>
                                <p className="mb-0">
                                    <a href="mailto:support@monarchkitchen.com" className="contact-val text-break">support@monarchkitchen.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info-card h-100 p-4 text-center shadow-sm rounded-4">
                            <div className="info-icon-wrapper mb-3">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Visit Us</h4>
                            <div className="mb-2">
                                <span className="badge badge-primary-custom mb-1">Main Kitchen</span>
                                <p className="mb-0 small text-secondary">
                                    Laxmi Height, Pune-Solapur Highway, Hadapsar, Pune - 411028
                                </p>
                            </div>
                            <div className="mt-2 pt-2 border-top">
                                <span className="badge badge-alt-custom mb-1">Alternative Landmark</span>
                                <p className="mb-0 small text-secondary">
                                    Hadapsar Annexe, Manjri Budruk, East Pune, Maharashtra
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours Card */}
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info-card h-100 p-4 text-center shadow-sm rounded-4">
                            <div className="info-icon-wrapper mb-3">
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Working Hours</h4>
                            <div className="mb-2">
                                <span className="badge badge-primary-custom mb-1">Dine-in &amp; Takeaway</span>
                                <p className="mb-0 small text-secondary">
                                    Mon - Sun: 10:00 AM – 11:00 PM
                                </p>
                            </div>
                            <div className="mt-2 pt-2 border-top">
                                <span className="badge badge-alt-custom mb-1">Online Orders</span>
                                <p className="mb-0 small text-secondary">
                                    24/7 Digital Ordering &amp; Delivery Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map and Contact Form Section */}
            <div className="container my-5">
                <div className="row g-4 align-items-stretch">
                    {/* Google Map */}
                    <div className="col-lg-6">
                        <div className="map-container shadow-sm rounded-4 overflow-hidden h-100">
                            <iframe
                                title="Monarch Kitchen Location"
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2009969.634719482!2d74.72994000913208!3d17.48100097739901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c2782d028d65%3A0xc4507ff78266abc9!2s10th%20Mile%2C%20Pune%20Solapur%20Highway%2C%20Hadapsar%20Annexe%2C%20Manjri%20Budruk%2C%20Hadapsar%2C%20Pune%2C%20Hadapsar%2C%20East%20Pune%2C%20Pune%2C%20Maharashtra!3m2!1d18.496541399999998!2d73.9726257!5e0!3m2!1sen!2sin!4v1694670452205!5m2!1sen!2sin"
                                className='w-100 h-100'
                                style={{ minHeight: '450px', border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form with Alternative Details */}
                    <div className="col-lg-6">
                        <div className="contact-form-card shadow-sm p-4 p-md-5 rounded-4 bg-white">
                            <h2 className='text-center mb-2 fw-bold'>
                                GET IN <span className='touch'>TOUCH</span>
                            </h2>
                            <p className="text-center text-muted small mb-4">
                                Send Monarch Kitchen a message, and our hospitality team will respond promptly.
                            </p>

                            {submitted && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Thank you!</strong> Your message has been sent to Monarch Kitchen. We will reach out to you shortly.
                                    <button type="button" className="btn-close" onClick={() => setSubmitted(false)} aria-label="Close"></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-secondary">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                                        <input
                                            type="text"
                                            className="form-control p-2"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder='Enter your full name'
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-secondary">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                        <input
                                            type="email"
                                            className="form-control p-2"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder='name@example.com'
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Primary Contact <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                                            <input
                                                type="tel"
                                                className="form-control p-2"
                                                name="primaryPhone"
                                                value={formData.primaryPhone}
                                                onChange={handleChange}
                                                required
                                                placeholder='+91 98765 43210'
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Alternative Contact <span className="text-muted">(Optional)</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa-solid fa-mobile-screen-button"></i></span>
                                            <input
                                                type="tel"
                                                className="form-control p-2"
                                                name="altPhone"
                                                value={formData.altPhone}
                                                onChange={handleChange}
                                                placeholder='+91 91234 56789'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-secondary">Inquiry Purpose</label>
                                    <select
                                        className="form-select p-2"
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Table Reservation">Table Reservation</option>
                                        <option value="Bulk / Party Catering">Bulk / Party Catering</option>
                                        <option value="Feedback / Suggestion">Feedback &amp; Reviews</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small fw-semibold text-secondary">Message</label>
                                    <textarea
                                        className="form-control p-2"
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help you..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="d-grid">
                                    <button className="btn btncontact py-2 fs-5" type="submit">
                                        <i className="fa-regular fa-paper-plane me-2"></i> Contact Monarch Kitchen
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
