import React from 'react';
import '../components/style.css'

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>Book Haven</strong>, your ultimate destination for discovering, exploring, and indulging in the world of books. 
                At Book Haven, we believe that every book has a story to tell and that the joy of reading is a gift to cherish.
            </p>
            <p>
                Established with a passion for literature, our library provides access to a diverse range of books across genres, 
                including fiction, non-fiction, academic, self-help, and much more. Our mission is to create a community of book lovers 
                where knowledge and imagination thrive.
            </p>
            <h2>Our Vision</h2>
            <p>
                To inspire and empower people through the magic of reading, fostering a culture of lifelong learning and curiosity.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>A curated collection of books for all ages and interests.</li>
                <li>User-friendly search and borrowing features.</li>
                <li>Expert recommendations and personalized reading lists.</li>
                <li>A welcoming community for book discussions and events.</li>
            </ul>
        </div>
    );
};

export default About;
