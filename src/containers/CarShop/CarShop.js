import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import './CarShop.scss';

const CarShop = () => {
  return (
    <div className='CarShop-container'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
};

export default CarShop;
