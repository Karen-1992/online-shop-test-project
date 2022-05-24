import React from "react";
import arrowDown from "../../../img/arrow-down.png";
import arrowUp from "../../../img/arrow-up.png";


const CurrencySwitcher = ({
    selectedCurrency,
    onShowSelectionCurrency,
    isCurrencySelect,
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
                <img src={isCurrencySelect ? arrowUp : arrowDown} alt="arrow" />
            </div>
            
        </>
    );
};

export default CurrencySwitcher;
