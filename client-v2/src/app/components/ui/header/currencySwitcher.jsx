import React from "react";
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
                <span>
                    {selectedCurrency}
                </span>
                <img className={isCurrencySelect ? "arrow" : "arrow-rotate"} src={arrowDown} alt="arrow" />
            </div>
            {isCurrencySelect && (
                <CurrencySelect currencies={currencies} onSelectCurrency={onSelectCurrency} />      
            )}
        </>
    );
};

export default CurrencySwitcher;
