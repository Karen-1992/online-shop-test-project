import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useCurrencies } from "../../../hooks/useCurrencies";
import CartItem from "../../ui/cart/cartItem";
import "./cartPage.css";

const CartPage = () => {
    const history = useHistory();
    const {
        cartOrder,
        updateQuantity,
        quantity,
        getTotalPrice,
        updateAttributes
    } = useCart();
    const { selectedCurrency } = useCurrencies();
    const taxPercent = 21;
    const totalPrice = getTotalPrice(selectedCurrency).toFixed(2);
    const taxAmount = (totalPrice * ((100 - taxPercent) / 100)).toFixed(2);

    return (
        <>
            {cartOrder.length > 0 ? (
                <div>
                    <div className="cart__container">
                        <h1>Cart</h1>
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
                        {/* <div className="total-price">
                            <div className="total-price__keys">
                                <p>Tax {taxPercent}%:</p>
                                <p>Quantity:</p>
                                <p>Total:</p>
                            </div>
                            <div className="total-price__values">
                                <p> {taxAmount}</p>
                                <p> {quantity}</p>
                                <p>{totalPrice}{selectedCurrency}</p>
                            </div>
                        </div> */}
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
                        <button onClick={() => history.push("/cart/order")}>
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
