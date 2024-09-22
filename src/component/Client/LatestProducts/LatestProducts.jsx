import React from 'react';
import ProductCard from '../ClientHome/ProductCard/ProductCard';
import './LatestProducts.css';

const LatestProducts = () => {
    return (
        <div>
            <h3 className="text-3xl product-title-text my-3">Latest Products</h3>
            <div class="grid grid-cols-4 gap-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default LatestProducts;