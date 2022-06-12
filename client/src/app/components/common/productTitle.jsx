import React from "react";
import PropTypes from "prop-types";

const ProductTitle = ({ brand, name }) => {
    return (
        <div className="product-title">
            <h2>{brand}</h2>
            <h3>{name}</h3>
        </div>
    );
};

ProductTitle.propTypes = {
    brand: PropTypes.string,
    name: PropTypes.string
};

export default ProductTitle;
