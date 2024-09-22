import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import Categories from './Categories/Categories';
import LatestProducts from '../LatestProducts/LatestProducts';

const ClientHome = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Categories></Categories>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default ClientHome;