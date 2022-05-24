import React from "react";

const CurrencySelect = ({ currencies, onSelectCurrency }) => {

    return (
        <ul className="currency-select cart-shadow">
            {currencies.map(currency => (
                <li key={currency.label} onClick={() => onSelectCurrency(currency.symbol)}>
                    {currency.symbol} {currency.label}
                </li>
            ))}
        </ul>      
    );
};

export default CurrencySelect;
