import React, { useEffect, useState } from 'react';
import ProductCard from '../ClientHome/ProductCard/ProductCard';
import './LatestProducts.css';

const LatestProducts = () => {
    const [productList, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h3 className="text-3xl product-title-text my-3">Latest Products</h3>
            <div class="grid grid-cols-4 gap-4">
                {
                    productList.splice(1, 12).map((product, index) => <ProductCard
                        product={product}
                        key={index}
                        index={index}
                    ></ProductCard> )
                }
            </div>
        </div>
    );
};

export default LatestProducts;