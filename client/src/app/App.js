import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useQuery } from '@apollo/client';
import './App.css';
import API from './api';
import Header from './components/ui/header/header';
import Main from './components/layouts/main';
import Cart from './components/layouts/cart';

const App = () => {
    // category
    const { data, loading, error } = useQuery(API.GET_CATEGORIES);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleSelectCategory = (product) => {
        setSelectedCategory(product);
    };
    useEffect(() => {
        if (!loading) {
            setCategories(data.categories);
            setSelectedCategory("all");
            
        }
        if (error) {
            console.error("data error");
        }
    }, [data]);

    // currencies
    const { data: currenciesData, loading: loadingCurrenciesData, error: errorCurrenciesData} = useQuery(API.GET_CURRENCIES);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(
        localStorage.getItem("currency") || "$"
    );
    const [isCurrencySelect, setIsCurrencySelect] = useState(false);

    const handleShowSelectionCurrency = () => {
        setIsCurrencySelect(prevState => !prevState);
    };
    const handleSelectCurrency = (selectedCurrencySymbol) => {
        localStorage.setItem("currency", selectedCurrencySymbol);
        setSelectedCurrency(selectedCurrencySymbol);
        setIsCurrencySelect(false);
    };
    useEffect(() => {
        if (!loadingCurrenciesData) {
            setCurrencies(currenciesData.currencies);
        }
        if (errorCurrenciesData) {
            console.error("dataCurrencies error");
        }
    }, [currenciesData]);


    return (
        <div className='wrapper'>
            {data ? (
                <>
                    <Header
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleSelectCategory}
                        currencies={currencies}
                        selectedCurrency={selectedCurrency}
                        onShowSelectionCurrency={handleShowSelectionCurrency}
                        onSelectCurrency={handleSelectCurrency}
                        isCurrencySelect={isCurrencySelect}

                    />
                    <Switch>
                        <Route path="/cart" exact component={Cart} />
                        <Route path="/:categoryName?/:productId?" render={() => (
                                <Main
                                    selectedCategory={selectedCategory}
                                    selectedCurrency={selectedCurrency}
                                />
                            )}
                        />
                        <Redirect to="/:categoryName?" />
                    </Switch>

                </>
            ) : (
                <p>{loading}</p>
            )}
        </div>
    );
}

export default App;
