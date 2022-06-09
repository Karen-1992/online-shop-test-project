import React from "react";
import CartPage from "../components/pages/cartPage";
import { useParams } from "react-router";
import Order from "../components/pages/orderPage";

const Cart = () => {
    const params = useParams();
    const { order } = params;
    return <>{!order ? <CartPage /> : <Order />}</>;
};

export default Cart;
