import React from "react";

const Price = ({ prices, selectedCurrency }) => {
    const price = prices.find((price) => price.currency.symbol === selectedCurrency) ;
    return (
        <>
            {selectedCurrency && (
                <p className="price">{price.currency.symbol}{price.amount}</p>
            )}
        </>
    );
};

export default Price;
