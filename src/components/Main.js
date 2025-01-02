import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);

    const searchBook = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyADEtEvsddJThNHElf2RkUcvBCKjH6RBps&maxResults=40`
            )
            .then((res) => setBookData(res.data.items))
            .catch((err) => console.log(err));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchBook();
        }
    };

    return (
        <>
        <div className='header'>
            <div className='header-content'>
                <div className='row'>
                <h1>
                        A room without books is like <br /> a body without a soul
                    </h1><br/>
                    <h2>Find Your Favorite Book</h2>
                    <div className='search-bar'>
                        <input
                            type='text'
                            placeholder='Search for books...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={searchBook}>
                            <i className="fas fa-search"></i> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <Card book={bookData} />
        </div>
    </>
    
    );
};

export default Main;
