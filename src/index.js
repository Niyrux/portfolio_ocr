import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cardcontainer from './components/card_container/card_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Cardcontainer/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
