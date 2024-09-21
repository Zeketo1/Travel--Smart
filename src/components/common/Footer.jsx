import React from "react";
import "../../styles/footer/footer.css"; 
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi"; 
import { FaTelegramPlane } from "react-icons/fa"; // Import Telegram icon

const Footer = () => {
    return (
        <div className="footer">
            {/* Thin Line */}
            <hr className="thin-line" />

            {/* Main Container */}
            <div className="footer-container">
                {/* Container 1: Travel Smart */}
                <div className="footer-box">
                    <h2 className="footer-title">Travel Smart</h2>
                    <p className="footer-text">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    <div className="footer-icons">
                        <FiFacebook className="social-icon" />
                        <FiInstagram className="social-icon" />
                        <FiYoutube className="social-icon" />
                    </div>
                </div>

                {/* Container 2: About */}
                <div className="footer-box">
                    <h3 className="footer-subtitle">About</h3>
                    <p className="footer-link">About Us</p>
                    <p className="footer-link">News</p>
                    <p className="footer-link">Plans</p>
                </div>

                {/* Container 3: Company */}
                <div className="footer-box">
                    <h3 className="footer-subtitle">Company</h3>
                    <p className="footer-link">Why Tripco</p>
                    <p className="footer-link">Partner with Us</p>
                    <p className="footer-link">FAQ</p>
                    <p className="footer-link">Blog</p>
                </div>

                {/* Container 4: Support */}
                <div className="footer-box">
                    <h3 className="footer-subtitle">Support</h3>
                    <p className="footer-link">Account</p>
                    <p className="footer-link">Support Center</p>
                    <p className="footer-link">Feedback</p>
                    <p className="footer-link">Contact Us</p>
                </div>

                {/* Container 5: Newsletter */}
                <div className="footer-box newsletter-box">
                    <h3 className="footer-subtitle">Newsletter</h3>
                    <p className="footer-text">Subscribe to our newsletter and get exciting offers</p>
                    <div className="newsletter-input-container">
                        <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                        <div className="newsletter-icon">
                            <FaTelegramPlane /> {/* Telegram icon */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
