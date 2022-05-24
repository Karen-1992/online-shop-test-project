import React from "react";
import Navigation from "./navigation";
import CurrencySwitcher from "./currencySwitcher";
import SelectCurrency from "./currencySelect";
import logo from "../../../img/logo.png"
import emptyCart from "../../../img/empty-cart.png"
import CartOverlay from "./cartOverlay";
import Logo from "./logo";

const Header = ({
    categories,
    currencies,
    selectedCurrency,
    onShowSelectionCurrency,
    isCurrencySelect,
    onSelectCurrency,
    onShowCartOverlay,
    isCartOverlay,
    cartProducts,
    onSelectCategory,
    selectedCategory
}) => {
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
                    isCurrencySelect={isCurrencySelect}
                    onSelectCurrency={onSelectCurrency}
                />
                <div className="cart-image" onClick={() => onShowCartOverlay()}>
                    <img src={emptyCart} alt="empty cart" />
                </div>
            </div>
            {isCurrencySelect && (
                <SelectCurrency currencies={currencies} onSelectCurrency={onSelectCurrency} />      
            )}
            {isCartOverlay && <CartOverlay cartProducts={cartProducts} />}
        </header>
    );
}
 
export default Header;