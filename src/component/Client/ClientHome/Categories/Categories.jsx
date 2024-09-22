import React from "react";
import './Categories.css';

const Categories = () => {
  return (
    <div>
        <h3 className="text-3xl category-title-text my-3">Categories</h3>
      <div class="grid grid-cols-8 gap-1">
        <div>
          <div className="card category-card-style bg-base-100 w-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body category-card-body-style">
              <h2 className="card-title category-card-title">Shoes!</h2>
              
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Categories;
