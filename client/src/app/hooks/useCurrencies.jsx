import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../query/currencies";
import PropTypes from "prop-types";

const CurrenciesContext = React.createContext();

export const useCurrencies = () => {
    return useContext(CurrenciesContext);
};

const CurrenciesProvider = ({ children }) => {
    const [isCurrencySelect, setIsCurrencySelect] = useState(false);
    const handleShowSelectionCurrency = () => {
        setIsCurrencySelect((prevState) => !prevState);
        // setIsCartOverlay(false);
    };
    const { data, loading, error } = useQuery(GET_CURRENCIES);
    const [currencies, setCurrencies] = useState([]);
    const initCurrency = !localStorage.getItem("currency")
        ? localStorage.setItem("currency", "$")
        : localStorage.getItem("currency");
    const [selectedCurrency, setSelectedCurrency] = useState(initCurrency);
    useEffect(() => {
        if (!loading) {
            setCurrencies(data.currencies);
        }
        if (error) {
            console.error("currency error");
        }
    }, [data]);

    const handleSelectCurrency = (selectedCurrencySymbol) => {
        localStorage.setItem("currency", selectedCurrencySymbol);
        setSelectedCurrency(selectedCurrencySymbol);
        closeCurrencySelect();
    };

    function closeCurrencySelect() {
        setIsCurrencySelect(false);
    }

    return (
        <CurrenciesContext.Provider
            value={{
                currencies,
                handleSelectCurrency,
                selectedCurrency,
                handleShowSelectionCurrency,
                isCurrencySelect,
                closeCurrencySelect
            }}
        >
            {!loading ? children : "Loading..."}
        </CurrenciesContext.Provider>
    );
};

CurrenciesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CurrenciesProvider;
