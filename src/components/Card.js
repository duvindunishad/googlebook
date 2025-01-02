import React from 'react';

const Card = () => {
  return (
    <>
      <div className='card'>
        <img src='./images/book.png' alt=''/>

        <div className='bottom'>
            <h3 className='title'>React Js</h3>
            <p className='amount'>&#8377; 3200</p>
        </div>
      </div>
    </>
  );
}

export default Card;
