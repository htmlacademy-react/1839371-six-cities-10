import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
);
