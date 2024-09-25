import React from "react";
import './ProductCard.css'

const ProductCard = ({product, index}) => {
  const {title, price, description, images} = product;
  return (
    <div>
      <div className="card bg-base-100 w-100 shadow-xl">
        <figure>
          <img
            src={images[0]}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">${price}</div> */}
            {index > 6 ? <div className="badge badge-secondary">New</div> : ''}
          </h2>
          <p>{description.slice(1, 100)}</p>
          <div className="card-actions justify-center">
            <button className="bg-secondary text-white py-2 px-2 rounded-lg font-medium">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
