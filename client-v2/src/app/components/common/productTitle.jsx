import React from "react";

const ProductTitle = ({ brand, name }) => {
    return (
        <div className="product-title">
            <h2>{brand}</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default ProductTitle;
