import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cardcontainer from './components/card_container/card_container';
import Header from './components/header/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cardcontainer/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
