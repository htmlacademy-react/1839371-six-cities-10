import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './moks/offers';
import { reviews } from './moks/reviews';

// const Rating = {
//   STARS_COUNT: 4.5,
// };

const Place = {
  PLACES_COUNT: 100,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Place.PLACES_COUNT}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);
