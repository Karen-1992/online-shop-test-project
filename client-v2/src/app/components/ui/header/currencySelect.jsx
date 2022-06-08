import React from "react";
import PropTypes from "prop-types";

const CurrencySelect = ({ currencies, onSelectCurrency }) => {
    return (
        <ul className="currency-select cart-shadow">
            {currencies.map((currency) => (
                <li
                    key={currency.label}
                    onClick={() => onSelectCurrency(currency.symbol)}
                >
                    {currency.symbol} {currency.label}
                </li>
            ))}
        </ul>
    );
};

CurrencySelect.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.object),
    onSelectCurrency: PropTypes.func
};

export default CurrencySelect;
