import React from "react";
import PropTypes from "prop-types";
import arrowDown from "../../../img/arrow-down.png";
import CurrencySelect from "./currencySelect";

const CurrencySwitcher = ({
    currencies,
    selectedCurrency,
    onShowSelectionCurrency,
    onSelectCurrency,
    isCurrencySelect
}) => {
    return (
        <>
            <div
                className="currency-switcher"
                onClick={() => onShowSelectionCurrency()}
            >
                <span>{selectedCurrency}</span>
                <img
                    className={isCurrencySelect ? "arrow" : "arrow-rotate"}
                    src={arrowDown}
                    alt="arrow"
                />
            </div>
            {isCurrencySelect && (
                <CurrencySelect
                    currencies={currencies}
                    onSelectCurrency={onSelectCurrency}
                />
            )}
        </>
    );
};

CurrencySwitcher.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.object),
    selectedCurrency: PropTypes.string,
    onShowSelectionCurrency: PropTypes.func,
    onSelectCurrency: PropTypes.func,
    isCurrencySelect: PropTypes.bool
};

export default CurrencySwitcher;
