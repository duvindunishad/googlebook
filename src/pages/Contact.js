import React from 'react';
import '../components/style.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                Have questions, feedback, or need assistance? We’re here to help! 
                Reach out to us through any of the following methods:
            </p>
            <h2>Get in Touch</h2>
            <ul>
                <li><strong>Email:</strong> support@bookhaven.com</li>
                <li><strong>Phone:</strong> +1-800-555-BOOK</li>
                <li><strong>Address:</strong> 123 Book Haven Avenue, Library City, BC 56789</li>
            </ul>
            <h2>Follow Us</h2>
            <p>Stay updated with our latest collections, events, and promotions:</p>
            <ul className="social-links">
                <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </div>
    );
}

export default Contact;
