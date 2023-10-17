import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button type="button" className="btn" key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
