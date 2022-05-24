import React from "react";

const CartOverlay = ({ cartProducts }) => {
    const cartQuantity = cartProducts.length;
    return (
        <div className="cart-overlay cart-shadow">
            My Bag. {cartQuantity} items
        </div>
    );
};

export default CartOverlay;
