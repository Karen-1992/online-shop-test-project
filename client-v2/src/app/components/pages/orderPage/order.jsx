import React from "react";
import { useCart } from "../../../hooks/useCart";

const Order = () => {
    const { cartOrder, regulateCartOrder, quantity, getTotalPrice } = useCart();
    const selectedCurrency = localStorage.getItem("currency") || "$";
    const cartOrderTotal = regulateCartOrder(cartOrder);
    return (
        <>
            <h1>Your order</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Attributes</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{quantity}</th>
                        <th></th>
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
                            <td>{item.quantity}</td>
                            <td>
                                {item.price.amount} {item.price.currency.symbol}
                            </td>
                            <td>
                                {item.price.amount * item.quantity} {item.price.currency.symbol}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Order;
