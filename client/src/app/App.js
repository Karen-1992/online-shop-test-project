import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useQuery } from '@apollo/client';
import './App.css';
import { API } from './api/query/data';
import Header from './components/ui/header/header';
import Main from './components/layouts/main';
import Cart from './components/layouts/cart';

const App = () => {
    const { data, loading, error } = useQuery(API);
  
    // currency
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [isCurrencySelect, setIsCurrencySelect] = useState(false);
    // categories
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const [isCartOverlay, setIsCartOverlay] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (!loading) {
            setCurrencies(data.currencies);
            setSelectedCurrency(data.currencies[0].symbol);

            setCategories(data.categories);
            setSelectedCategory(data.categories[0].name);

            setProducts(data.category.products);
        }
        if (error) {
            console.error("data error");
        }
    }, [data]);
    
    const handleShowSelectionCurrency = () => {
        setIsCurrencySelect(prevState => !prevState);
    };
    const handleShowCartOverlay = () => {
        setIsCartOverlay(prevState => !prevState);
    };
    const handleSelectCurrency = (selectedCurrencySymbol) => {
        setSelectedCurrency(selectedCurrencySymbol);
        setIsCurrencySelect(false);
        // localStorage.setItem("currency", selectedCurrencySymbol);
    };
    const handleSelectCategory = (product) => {
        setSelectedCategory(product);
    };
    const filteredProducts = selectedCategory !== "all"
        ? (products.filter(product => product.category === selectedCategory))
        : products;
    // console.log(filteredProducts);
    return (
        <div className='wrapper'>
            {data
                ? (
                    <Header
                        categories={categories}
                        currencies={currencies}
                        selectedCurrency={selectedCurrency}
                        onShowSelectionCurrency={handleShowSelectionCurrency}
                        isCurrencySelect={isCurrencySelect}
                        onSelectCurrency={handleSelectCurrency}
                        onShowCartOverlay={handleShowCartOverlay}
                        isCartOverlay={isCartOverlay}
                        cartProducts={cartProducts}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleSelectCategory}
                    />
                ) : (
                    <p>Loading</p>
                )
            }
            <Switch>
                <Route path="/:productId?" exact render={() => <Main products={filteredProducts} selectedCategory={selectedCategory} />} />
                <Route path="/cart" exact component={Cart} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
