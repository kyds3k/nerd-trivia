import React from 'react';
import { render } from 'react-dom';

const HomeTitle = () => {
  let today = new Date(),
    date =
      today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();

  return (
    <div>
      <h1 className='tac ttu'>
        Nerd Trivia: {date} <br /> Such and Such Edition
      </h1>
    </div>
  );
};

export default HomeTitle;
