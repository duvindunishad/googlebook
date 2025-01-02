import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="library-footer">
            <div className="footer-top">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Discover a world of knowledge and adventure. Your one-stop destination for books, ebooks, and literary resources.</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Email: support@libraryweb.com</p>
                    <p>Phone: +1-800-555-BOOK</p>
                    <p>Address: 123 Library Lane, Booktown</p>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Library Web. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
