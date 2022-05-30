import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import CurrencySwitcher from "./currencySwitcher";
import logo from "../../../img/logo.png"
import emptyCart from "../../../img/empty-cart.png"
import CartOverlay from "./cartOverlay";
import Logo from "./logo";
// import API from "../../../api";
// import { useQuery } from '@apollo/client';
// import { useHistory } from "react-router-dom";

const Header = ({
    categories,
    onSelectCategory,
    selectedCategory,
    currencies,
    selectedCurrency,
    onShowSelectionCurrency,
    onSelectCurrency,
    isCurrencySelect
}) => {
    const [isCartOverlay, setIsCartOverlay] = useState(false);
    const handleShowCartOverlay = () => {
        setIsCartOverlay(prevState => !prevState);
    };
    const [cartQuantity, setCartQuantity] = useState(0);
    useEffect(() => {
        setCartQuantity(Number(JSON.parse(localStorage.getItem("cartQuantity"))) || 0);
    });
    return (
        <header>
            <div className="logo-container">
                <Logo logo={logo} />
            </div>
            <div className="navigation-container">
                <Navigation
                    categories={categories}
                    onSelectCategory={onSelectCategory}
                    selectedCategory={selectedCategory}
                />
            </div>
            <div className="actions-block">
                <CurrencySwitcher
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onShowSelectionCurrency={onShowSelectionCurrency}
                    onSelectCurrency={onSelectCurrency}
                    isCurrencySelect={isCurrencySelect}
                />
                <div className="cart-image" onClick={() => handleShowCartOverlay()}>
                    <img src={emptyCart} alt="empty cart" />
                    { cartQuantity > 0 && (
                        <div className="cart-quantity">
                            <span>{cartQuantity}</span>
                        </div>
                    )}
                </div>
            </div>
            {isCartOverlay && <CartOverlay/>}
        </header>
    );
}
 
export default Header;