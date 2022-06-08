import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../query/currencies";
import PropTypes from "prop-types";

const CurrenciesContext = React.createContext();

export const useCurrencies = () => {
    return useContext(CurrenciesContext);
};

const CurrenciesProvider = ({ children }) => {
    const { data, loading, error } = useQuery(GET_CURRENCIES);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(
        localStorage.getItem("currency") || "$"
    );
    const [isCurrencySelect, setIsCurrencySelect] = useState(false);
    useEffect(() => {
        if (!loading) {
            setCurrencies(data.currencies);
        }
        if (error) {
            console.error("currency error");
        }
    }, [data]);

    const handleShowSelectionCurrency = () => {
        setIsCurrencySelect((prevState) => !prevState);
    };

    const handleSelectCurrency = (selectedCurrencySymbol) => {
        localStorage.setItem("currency", selectedCurrencySymbol);
        setSelectedCurrency(selectedCurrencySymbol);
        setIsCurrencySelect(false);
    };

    return (
        <CurrenciesContext.Provider
            value={{
                currencies,
                handleSelectCurrency,
                selectedCurrency,
                isCurrencySelect,
                handleShowSelectionCurrency
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
