import React, { useState } from "react";
import { useCurrencies } from "../../../hooks/useCurrencies";
import { useCategories } from "../../../hooks/useCategories";
import { useCart } from "../../../hooks/useCart";
import Navigation from "./navigation";
import CurrencySwitcher from "./currencySwitcher";
import CartOverlay from "./cartOverlay";
import logo from "../../../img/logo.png";
import emptyCart from "../../../img/empty-cart.png";
import "./header.css";
import ImageContainer from "../../common/imageContainer";

const Header = () => {
    const { categories, handleSelectCategory, selectedCategory } =
        useCategories();
    const {
        currencies,
        handleSelectCurrency,
        selectedCurrency,
        isCurrencySelect,
        handleShowSelectionCurrency
    } = useCurrencies();
    const {
        cartOrder,
        clearCart,
        quantity,
        updateQuantity,
        updateAttributes,
        getTotalPrice
    } = useCart();
    const [isCartOverlay, setIsCartOverlay] = useState(false);
    const handleShowCartOverlay = () => {
        setIsCartOverlay((prevState) => !prevState);
    };
    return (
        <header>
            <div className="logo">
                <ImageContainer src={logo} height="41px" width="41px" />
            </div>
            <div className="navigation-container">
                <Navigation
                    categories={categories}
                    onSelectCategory={handleSelectCategory}
                    selectedCategory={selectedCategory}
                />
            </div>
            <div className="actions-block">
                <CurrencySwitcher
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onShowSelectionCurrency={handleShowSelectionCurrency}
                    onSelectCurrency={handleSelectCurrency}
                    isCurrencySelect={isCurrencySelect}
                />
                <div
                    className="cart-image"
                    onClick={() => handleShowCartOverlay()}
                >
                    <img src={emptyCart} alt="empty cart" />
                    {cartOrder.length > 0 && (
                        <div className="cart-quantity">
                            <span>{quantity}</span>
                        </div>
                    )}
                </div>
            </div>
            {isCartOverlay && (
                <CartOverlay
                    cartOrder={cartOrder}
                    quantity={quantity}
                    selectedCurrency={selectedCurrency}
                    clearCart={clearCart}
                    updateQuantity={updateQuantity}
                    updateAttributes={updateAttributes}
                    getTotalPrice={getTotalPrice}
                />
            )}
        </header>
    );
};

export default Header;
