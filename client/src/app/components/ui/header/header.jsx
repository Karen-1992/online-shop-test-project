import React, { useEffect } from "react";
import { useCurrencies } from "../../../hooks/useCurrencies";
import { useCategories } from "../../../hooks/useCategories";
import { useCart } from "../../../hooks/useCart";
import { useHistory } from "react-router-dom";
import Navigation from "./navigation";
import CurrencySwitcher from "./currencySwitcher";
import CartOverlay from "./cartOverlay";
import logo from "../../../img/logo.png";
import emptyCart from "../../../img/empty-cart.png";
import "./header.css";
import ImageContainer from "../../common/imageContainer";

const Header = () => {
    const history = useHistory();
    const { categories, handleSelectCategory, selectedCategory } =
        useCategories();
    const {
        currencies,
        handleSelectCurrency,
        selectedCurrency,
        isCurrencySelect,
        handleShowSelectionCurrency,
        closeCurrencySelect
    } = useCurrencies();
    const {
        cartOrder,
        clearCart,
        quantity,
        updateQuantity,
        getTotalPrice,
        handleShowCartOverlay,
        isCartOverlay,
        closeCartOverlay
    } = useCart();
    useEffect(() => {
        closeCartOverlay();
        closeCurrencySelect();
    }, [selectedCategory, selectedCurrency]);
    useEffect(() => {
        if (isCurrencySelect === true && isCartOverlay === true) {
            closeCurrencySelect();
        }
    }, [isCartOverlay]);
    useEffect(() => {
        if (isCurrencySelect === true && isCartOverlay === true) {
            closeCartOverlay();
        }
    }, [isCurrencySelect]);
    const handleViewCart = () => {
        closeCartOverlay();
        history.push("/cart");
    };
    const handleCheckout = () => {
        clearCart();
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
                    updateQuantity={updateQuantity}
                    getTotalPrice={getTotalPrice}
                    onViewCart={handleViewCart}
                    onCheckout={handleCheckout}
                />
            )}
        </header>
    );
};

export default Header;
