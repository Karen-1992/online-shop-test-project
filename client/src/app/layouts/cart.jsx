import React from "react";
import CartPage from "../components/pages/cartPage";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart";
import { useCurrencies } from "../hooks/useCurrencies";
import Order from "../components/pages/orderPage";
import BackgroundDimimg from "../components/common/backgroundDimimg/backgroundDimimg";

const Cart = () => {
    const { closeCurrencySelect } = useCurrencies();
    const { closeCartOverlay, isCartOverlay } = useCart();
    const hanleCloseWindows = () => {
        closeCartOverlay();
        closeCurrencySelect();
    };
    const params = useParams();
    const { order } = params;
    return (
        <div onClick={hanleCloseWindows}>
            {!order ? <CartPage /> : <Order />}
            {isCartOverlay && (
                <BackgroundDimimg />
            )}
        </div>
    );
};

export default Cart;
