import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
// import ImageContainer from "../../common/imageContainer";
// import Price from "../../common/price";
// import ProductTitle from "../../common/productTitle";
// import Attributes from "../../common/attributes/attributes";
// import CartItem from "../cart/cartItem";
import CartOverlayItem from "./cartOverlayItem";

const CartOverlay = ({
    clearCart,
    quantity,
    cartOrder,
    selectedCurrency,
    updateQuantity,
    updateAttributes,
    getTotalPrice
}) => {
    const history = useHistory();
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
                            updateAttributes={updateAttributes}
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
                    onClick={() => history.push("/cart")}
                >
                    View Bag
                </button>
                <button onClick={() => clearCart()} className="check-out__button">
                    Check out
                </button>
            </div>
        </div>
    );
};

CartOverlay.propTypes = {
    cartOrder: PropTypes.array,
    selectedCurrency: PropTypes.string,
    clearCart: PropTypes.func,
    quantity: PropTypes.number,
    updateQuantity: PropTypes.func,
    updateAttributes: PropTypes.func,
    getTotalPrice: PropTypes.func
};

export default CartOverlay;
