import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {

    const [search,setSearch] = useState('');
    const [bookData,setBookData] = useState([]);
    const searchBook = (e) => {
        if(e.key === 'Enter'){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyADEtEvsddJThNHElf2RkUcvBCKjH6RBps`)
            .then(res => setBookData(res.data.items))
            .catch(err => console.log(err));
        }
    } 
  return (
        <>
      <div className='header'>
        <div className='row1'>
            <h1>A room without book is like <br/> a body wit out a sole</h1>
        </div>
        <div className='row2'>
            <h2>Find your book</h2>
            <div className='search'>
                <input type='text' placeholder='Search for books'
                value={search} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button onClick={searchBook}><i className="fas fa-search">search</i></button>
            </div>
            <img src='./images/bg2.png' alt=''/>
        </div>
      </div>
      <div className='container'>
        <Card/>
      </div>
    </>
  );
}

export default Main;
