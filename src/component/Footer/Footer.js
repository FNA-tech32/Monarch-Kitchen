import './Footer.css';
import location from "./images/location.png";
import gmail from "./images/mail (1).png";
import insta from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import logo from "./../Navbar/Image/White and Gray Illustrative Catering Logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className='main-container1 color-white'>
                <div className='sub-container'>
                    <h2 className='color-white d-flex align-items-center gap-2'>
                        <img src={logo} alt="Monarch Kitchen Logo" className='img-logo' />
                        Monarch Kitchen
                    </h2>
                    <p className='footer-desc'>
                        Welcome to Monarch Kitchen – delivering royal taste, utmost hygiene, and unforgettable dining experiences. From rich traditional thalis and North Indian specialties to sizzling fast foods and aromatic biryanis, we craft every dish with perfection.
                    </p>
                    <div className='footer-hours'>
                        <p className='m-0'><i className="fa-regular fa-clock me-2"></i><strong>Hours:</strong> Mon - Sun: 10:00 AM - 11:00 PM</p>
                    </div>
                </div>

                <div className='sub-container'>
                    <h4 className='footer-heading mb-3'>Contact Details</h4>

                    <div className='footer-contact-group'>
                        <p className='text mb-2'>
                            <img src={location} className='location me-2' alt="Location" />
                            <strong>Address:</strong> Laxmi Height, Solapur Highway, Hadapsar, Pune - 411028
                        </p>
                        <p className='text alt-detail mb-2 ms-4'>
                            <span className='badge bg-light text-dark me-2'>Alt Branch</span>
                            Hadapsar Annexe, Manjri Budruk, Pune, Maharashtra
                        </p>
                    </div>

                    <div className='footer-contact-group mt-2'>
                        <p className='text mb-1'>
                            <i className="fa-solid fa-phone me-2"></i>
                            <strong>Primary:</strong> <a href="tel:+919876543210" className="footer-link">+91 98765 43210</a>
                        </p>
                        <p className='text mb-2 ms-4'>
                            <span className='badge bg-light text-dark me-2'>Alt Phone</span>
                            <a href="tel:+919123456789" className="footer-link">+91 91234 56789</a>
                        </p>
                    </div>

                    <div className='footer-contact-group mt-2'>
                        <p className='text mb-1'>
                            <img src={gmail} className='mail me-2' alt="Email" />
                            <strong>Primary:</strong> <a href="mailto:contact@monarchkitchen.com" className="footer-link">contact@monarchkitchen.com</a>
                        </p>
                        <p className='text mb-3 ms-4'>
                            <span className='badge bg-light text-dark me-2'>Alt Email</span>
                            <a href="mailto:support@monarchkitchen.com" className="footer-link">support@monarchkitchen.com</a>
                        </p>
                    </div>

                    <div className='main-social'>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className='social-media' title="Instagram">
                            <img src={insta} className='social' alt="Instagram" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className='social-media' title="Facebook">
                            <img src={facebook} className='social' alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className='social-media' title="Twitter">
                            <img src={twitter} className='social' alt="Twitter" />
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className='social-media' title="WhatsApp">
                            <img src={whatsapp} className='social' alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer-bottom text-center text-white py-3 border-top border-light-subtle mt-3'>
                <p className='m-0 small'>&copy; {new Date().getFullYear()} Monarch Kitchen. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
