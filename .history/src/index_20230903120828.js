import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '~/index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode></React.StrictMode>
  <BrowserRouter>
<Global>  </Global>
    <App />
  </BrowserRouter>,
  //</React.StrictMode>
);

reportWebVitals();