import React from "react";
import Price from "../../common/price";
import { useCart } from "../../../hooks/useCart";

const Order = () => {
    
    const { cartOrder, regulateCartOrder } = useCart();
    const selectedCurrency = localStorage.getItem("currency") || "$";
    const cartOrderTotal = regulateCartOrder(cartOrder);
    // const getPrice = (item) => {
    //     const price = item.prices.find((price) => {
    //         return price.currency.symbol === selectedCurrency;
    //     })
    //     return price;
    // };
    // console.log(getPrice(cartOrderTotal[0].product))
    return (
        <>
            <h1>Your order</h1>
            <table>
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
                <tbody>
                    {cartOrderTotal.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            <td>{item.product.name}</td>
                            <td>{item.product.brand}</td>
                            <td>attributes</td>
                            {/* {Object.entries(item.selectedAttributes).map(atr => (
                                <td>
                                    <span>{atr[0]}</span>
                                    <span>{atr[1]}</span>
                                </td>
                            ))} */}
                            <td>{item.quantity}</td>
                            <td>
                                <Price selectedCurrency={selectedCurrency} prices={item.product.prices} />
                            </td>
                            <td>{index + 1}</td>
                        </tr>
                    ))

                    }
                    {/* <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>
                </table>
        </>
    );
};

export default Order;
