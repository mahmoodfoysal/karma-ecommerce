import React, { useEffect, useState } from "react";
import "./Categories.css";
import { key } from "localforage";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/card-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="text-3xl category-title-text my-3">Categories</h3>
      <div class="grid grid-cols-8 gap-1">
        {
          categories.map((category, index)  => (
            
          <div key={index} className="card category-card-style bg-base-100 w-100 shadow-xl">
            <figure>
              <img
                src={category.cat_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body category-card-body-style">
              <h2 className="card-title category-card-title py-2">
                {category.cat_name}
              </h2>
            </div>
          </div>
        ) )

        }
      </div>
    </div>
  );
};

export default Categories;
