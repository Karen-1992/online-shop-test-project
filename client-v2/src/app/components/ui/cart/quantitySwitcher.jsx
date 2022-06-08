import React from "react";

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
}

export default QuantitySwitcher;
