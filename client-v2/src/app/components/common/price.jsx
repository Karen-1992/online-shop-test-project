import React from "react";
import PropTypes from "prop-types";

const Price = ({ prices, selectedCurrency, fontSize, fontWeight }) => {
    const price = prices.find(
        (price) => price.currency.symbol === selectedCurrency
    );
    return (
        <>
            {selectedCurrency && (
                <h2
                    className="price"
                    style={{
                        fontSize: fontSize,
                        fontWeight: fontWeight
                    }}
                >
                    {price.currency.symbol}
                    {price.amount}
                </h2>
            )}
        </>
    );
};

Price.defaultProps = {
    fontSize: "24px",
    fontWeight: "700"
};

Price.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.object),
    selectedCurrency: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string
};

export default Price;
