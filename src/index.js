import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating}/>
      The rating is {movieRating}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Great', 'Amazing']} defaultRating={3} />
    <Test/>
  </React.StrictMode>
);
