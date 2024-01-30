import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cardcontainer from './components/card_container/card_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';
import Compcontainer from './components/competence_container/competence_container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Cardcontainer/>
    <Compcontainer/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
