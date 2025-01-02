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
                <div className='row1'>
                    <h1>
                        A room without books is like <br /> a body without a soul
                    </h1>
                </div>
                <div className='row2'>
                    <h2>Find your book</h2>
                    <div className='search'>
                        <input
                            type='text'
                            placeholder='Search for books'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={searchBook}>
                            <i className="fas fa-search"></i> Search
                        </button>
                    </div>
                    <img src='./images/bg2.png' alt='' />
                </div>
            </div>
            <div className='container'>
                <Card book={bookData} />
            </div>
        </>
    );
};

export default Main;
