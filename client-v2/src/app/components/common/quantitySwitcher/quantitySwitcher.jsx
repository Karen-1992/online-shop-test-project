import React from "react";
import PropTypes from "prop-types";
import "./quantitySwitcher.css";

const QuantitySwitcher = ({
    selectedQuantity,
    onIncrementQuantity,
    onDecrementQuantity,
    height,
    width,
    fontSize
}) => {
    const buttonStyle = {
        height: height,
        width: width,
        fontSize: fontSize,
        border: "1px solid #1d1f22",
        fontWeight: "100"
    };
    return (
        <div className="quantity-switcher">
            <button
                style={buttonStyle}
                onClick={() => onIncrementQuantity()}
            >
                +
            </button>
            <p
                style={{
                    fontSize: fontSize,
                    fontWeight: "500"
                }}
            >
                {selectedQuantity}
            </p>
            <button
                style={buttonStyle}
                onClick={() => onDecrementQuantity()}
            >
                -
            </button>
        </div>
    );
};

QuantitySwitcher.defaultProps = {
    height: "45px",
    width: "45px",
    fontSize: "24px"
};

QuantitySwitcher.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.string,
    selectedQuantity: PropTypes.number,
    onIncrementQuantity: PropTypes.func,
    onDecrementQuantity: PropTypes.func
};

export default QuantitySwitcher;
