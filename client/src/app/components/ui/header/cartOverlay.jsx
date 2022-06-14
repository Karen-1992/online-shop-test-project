import React from "react";
import PropTypes from "prop-types";
import CartOverlayItem from "./cartOverlayItem";

const CartOverlay = ({
    quantity,
    cartOrder,
    selectedCurrency,
    updateQuantity,
    getTotalPrice,
    onViewCart,
    onCheckout
}) => {
    const totalPrice = getTotalPrice(selectedCurrency);
    return (
        <div className="cart-overlay__container cart-shadow">
            <div className="cart-overlay">
                <p className="cart-overlay__title">
                    My Bag,
                    <span> {quantity} items</span>
                </p>
                {cartOrder.length > 0 && (
                    cartOrder.map((item, index) => (
                        <CartOverlayItem
                            key={index + item.id}
                            cartItem={item}
                            selectedCurrency={selectedCurrency}
                            updateQuantity={updateQuantity}
                            cartOrder={cartOrder}
                            cartItemIndex={index}
                        />
                    ))
                )}
                <div className="total-price__container">
                    <span>Total</span>
                    <span className="total-price__amount">{selectedCurrency}{totalPrice}</span>
                </div>
            </div>
            <div>
                <button
                    className="view-bag__button"
                    onClick={() => onViewCart()}
                >
                    View Bag
                </button>
                <button onClick={() => onCheckout()} className="check-out__button">
                    Check out
                </button>
            </div>
        </div>
    );
};

CartOverlay.propTypes = {
    cartOrder: PropTypes.array,
    selectedCurrency: PropTypes.string,
    onCheckout: PropTypes.func,
    quantity: PropTypes.number,
    updateQuantity: PropTypes.func,
    getTotalPrice: PropTypes.func,
    onViewCart: PropTypes.func
};

export default CartOverlay;
