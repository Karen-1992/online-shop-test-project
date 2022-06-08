import React from "react";
import PropTypes from "prop-types";

const Price = ({ prices, selectedCurrency }) => {
    const price = prices.find(
        (price) => price.currency.symbol === selectedCurrency
    );
    return (
        <>
            {selectedCurrency && (
                <h2
                    className="price"
                    style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        padding: "20px 0"
                    }}
                >
                    {price.currency.symbol}
                    {price.amount}
                </h2>
            )}
        </>
    );
};

Price.propTypes = {
    prices: PropTypes.array,
    selectedCurrency: PropTypes.string
};

export default Price;
