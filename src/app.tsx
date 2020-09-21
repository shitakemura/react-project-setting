import * as React from 'react';
import Img from './example.png';
import './reset.css';

export const generateHelloWorld = () => {
  return 'Hello world.';
};

export const App = () => {
  return (
    <div>
      <div>
        {generateHelloWorld()}
        <img src={Img}></img>
      </div>
    </div>
  );
};
