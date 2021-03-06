import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    const [isCartOverlay, setIsCartOverlay] = useState(false);
    const handleShowCartOverlay = () => {
        setIsCartOverlay((prevState) => !prevState);
    };
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
                    quantity: item.quantity,
                    price: item.product.prices.find(
                        (price) => price.currency.symbol === localStorage.getItem("currency")
                    )
                });
            } else {
                const index = result.findIndex((i) => i.id === item.id);
                result[index].quantity += item.quantity;
            }
        }
        return (result.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        }));
    }

    function updateQuantity() {
        setQuantity(getQuantity(cartOrder));
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
        return totalPrice.toFixed(2);
    }

    function closeCartOverlay() {
        setIsCartOverlay(false);
    }

    return (
        <CartContext.Provider
            value={{
                cartOrder,
                addToCart,
                clearCart,
                quantity,
                updateQuantity,
                getTotalPrice,
                regulateCartOrder,
                handleShowCartOverlay,
                isCartOverlay,
                closeCartOverlay
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
