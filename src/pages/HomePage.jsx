import React from 'react';
import HomeTitle from '../components/HomeTitle';

const HomePage = () => {
  return (
    <div className='container'>
      <HomeTitle />
      <div className='d-flex m-x-a jc-center'>
        <div className='home-image m-a-25'>
          <img
            src='https://media2.giphy.com/media/unqUuCuSN6h0s/200.gif'
            alt='When nerds think they are being funny'
          />
        </div>
        <div className='m-a-25'>
          <h2>Support your remote trivia host!</h2>
          <ul>
            <li className='m-y-25 fs-150'>Venmo: @kyds3k</li>
            <li className='fs-150'>Paypal: kyds3k@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='m-a-25 tac'>
        <h2>
          Last chance to check for clues! Go to https://nerdisbond.com to get
          your hints!
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
