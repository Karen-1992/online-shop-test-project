import React from "react";
import PropTypes from "prop-types";

const QuantitySwitcher = ({
    selectedQuantity,
    onIncrementQuantity,
    onDecrementQuantity
}) => {
    return (
        <div className="quantity-switcher">
            <button onClick={() => onIncrementQuantity()}>+</button>
            <p>{selectedQuantity}</p>
            <button onClick={() => onDecrementQuantity()}>-</button>
        </div>
    );
};

QuantitySwitcher.propTypes = {
    selectedQuantity: PropTypes.number,
    onIncrementQuantity: PropTypes.func,
    onDecrementQuantity: PropTypes.func
};

export default QuantitySwitcher;
