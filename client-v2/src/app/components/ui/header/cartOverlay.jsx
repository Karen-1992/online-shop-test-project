import React from "react";
import { useHistory } from "react-router-dom";


const CartOverlay = ({ cartOrder, selectedCurrency, clearCart, quantity }) => {
    const history = useHistory();
    return (
        <div className="cart-overlay cart-shadow">
            <p className="cart-overlay__title">
                My Bag,
                <span> {quantity} items</span>
            </p>
            {/* <CartProducts cartOrder={cartOrder} selectedCurrency={selectedCurrency} /> */}
            <div className="total-price__container">
                <span>Total</span>
                <span className="total-price__amount">200$</span>
            </div>
            <button
                className="view-bag__button"
                onClick={() => history.push("/cart")}
            >
                View Bag
            </button>
            <button
                onClick={() => clearCart()}
                className="check-out__button"
            >
                Check out
            </button>
        </div>
    );
};

export default CartOverlay;
