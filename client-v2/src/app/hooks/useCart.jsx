import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    const [cartOrder, setCartOrder] = useState(
        JSON.parse(localStorage.getItem("cartOrder")) || []
    );
    const [quantity, setQuantity] = useState(getQuantity(cartOrder));
    useEffect(() => {
        localStorage.setItem("cartOrder", JSON.stringify(cartOrder));
        setQuantity(getQuantity(cartOrder));
    }, [cartOrder, quantity]);

    function regulateCartOrder(order) {
        const result = [];
        const map = new Map();
        for (const item of order) {
            if (!map.has(item.id)) {
                map.set(item.id, true);
                result.push({
                    id: item.id,
                    product: item.product,
                    selectedAttributes: item.selectedAttributes,
                    quantity: item.quantity
                });
            } else {
                const index = result.findIndex((i) => i.id === item.id);
                result[index].quantity += item.quantity;
            }
        }
        // localStorage.setItem("cartOrder", JSON.stringify(result));
        return result;
    }

    function updateQuantity() {
        setQuantity(getQuantity(cartOrder));
    }
    function updateAttributes(item, itemIndex, productId, selectedAttributes) {
        cartOrder[itemIndex] = {
            ...item,
            id: productId,
            selectedAttributes
        };
        localStorage.setItem("cartOrder", JSON.stringify(cartOrder));
    }

    function addToCart(item) {
        setCartOrder((prevState) => [...prevState, item]);
    }

    function clearCart() {
        setCartOrder([]);
    }

    function getQuantity(order) {
        let quantity = 0;
        for (const product of order) {
            quantity += product.quantity;
        }
        return quantity;
    }

    function getTotalPrice(selectedCurrency) {
        let totalPrice = 0;
        for (const prod of cartOrder) {
            const prodPrice = prod.product.prices.find((price) => {
                return price.currency.symbol === selectedCurrency;
            });
            const totalProdPrice = prodPrice.amount * prod.quantity;
            totalPrice += totalProdPrice;
        }
        return totalPrice;
    }

    // function setOrder(selectedCurrency) {
    //     const arr = [];
    //     for (const prod of cartOrder) {
    //         const prodPrice = prod.product.prices.find((price) => {
    //             return price.currency.symbol === selectedCurrency;
    //         });
    //         arr.push({
    //             prod
    //         })
    //     }
    //     return cartOrder;
    // }

    return (
        <CartContext.Provider
            value={{
                cartOrder,
                addToCart,
                clearCart,
                quantity,
                updateQuantity,
                getTotalPrice,
                updateAttributes,
                regulateCartOrder
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CartProvider;
