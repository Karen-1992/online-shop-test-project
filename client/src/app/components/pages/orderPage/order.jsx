import React from "react";
import { useCart } from "../../../hooks/useCart";
import { useHistory } from "react-router-dom";

const Order = () => {
    const history = useHistory();
    const {
        cartOrder,
        regulateCartOrder,
        quantity,
        getTotalPrice,
        clearCart
    } = useCart();
    const selectedCurrency = localStorage.getItem("currency");
    const cartOrderTotal = regulateCartOrder(cartOrder);
    const handleFinishOrder = () => {
        clearCart();
        history.push("/");
    };
    return (
        <div className="order-page">
            <h1>Your order</h1>
            <table className="order-page__table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Attributes</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{quantity}</th>
                        <th>{getTotalPrice(selectedCurrency)} {selectedCurrency}</th>
                    </tr>
                </tfoot>
                <tbody>
                    {cartOrderTotal.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            <td>{item.product.name}</td>
                            <td>{item.product.brand}</td>
                            <td>
                                {Object.entries(item.selectedAttributes).map(atr => (
                                    <p key={atr}>
                                        <span>{atr[0]}: </span>
                                        <span>{atr[1]}</span>
                                    </p>
                                ))}
                            </td>
                            <td>
                                {item.price.amount} {item.price.currency.symbol}
                            </td>
                            <td>{item.quantity}</td>
                            <td>
                                {item.price.amount * item.quantity} {item.price.currency.symbol}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleFinishOrder()}>Finish Order</button>
        </div>
    );
};

export default Order;
