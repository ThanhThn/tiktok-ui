import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode></React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  //</React.StrictMode>
);

reportWebVitals();