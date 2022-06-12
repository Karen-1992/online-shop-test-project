import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useCurrencies } from "../../../hooks/useCurrencies";
import CartItem from "../../ui/cart/cartItem";

const CartPage = () => {
    const history = useHistory();
    const {
        cartOrder,
        updateQuantity,
        quantity,
        updateAttributes,
        getTotalPrice
    } = useCart();
    const { selectedCurrency } = useCurrencies();
    const taxPercent = 21;
    const totalPrice = getTotalPrice(selectedCurrency);
    const taxAmount = (totalPrice * ((100 - taxPercent) / 100)).toFixed(2);
    const handleOrder = () => {
        history.push("/cart/order");
        // localStorage.setItem("cartOrder", []);
    };

    return (
        <>
            {cartOrder.length > 0 ? (
                <div>
                    <div className="cart__container">
                        <h1 className="cart__container__title">Cart</h1>
                        {cartOrder.map((item, index) => (
                            <CartItem
                                key={index + item.id}
                                cartItem={item}
                                selectedCurrency={selectedCurrency}
                                updateQuantity={updateQuantity}
                                cartOrder={cartOrder}
                                updateAttributes={updateAttributes}
                                cartItemIndex={index}
                            />
                        ))}
                    </div>
                    <div className="order-container">
                        <table className="order__table">
                            <tbody>
                                <tr>
                                    <th>Tax {taxPercent}%:</th>
                                    <td>{taxAmount}</td>
                                </tr>
                                <tr>
                                    <th>Quantity:</th>
                                    <td>{quantity}</td>
                                </tr>
                                <tr>
                                    <th>Total:</th>
                                    <td>
                                        {totalPrice}
                                        {selectedCurrency}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => handleOrder()}>
                            Order
                        </button>
                    </div>
                </div>
            ) : (
                <h1>Empty Cart</h1>
            )}
        </>
    );
};

export default CartPage;
