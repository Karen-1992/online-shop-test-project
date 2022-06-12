import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductTitle from "../../common/productTitle";
import Price from "../../common/price";
import { generateProductId } from "../../../utils/generateProductId";
import CartImageViewer from "./cartImageViewer";
import QuantitySwitcher from "../../common/quantitySwitcher/quantitySwitcher";
import Attributes from "../../common/attributes/attributes";

const CartItem = ({
    cartOrder,
    cartItem,
    cartItemIndex,
    selectedCurrency,
    updateQuantity,
    updateAttributes
}) => {
    const { product } = cartItem;
    const [selectedAttributes, setSelectedAttributes] = useState(
        cartItem.selectedAttributes
    );

    const [productId, setProductId] = useState(
        generateProductId(cartItem.product, selectedAttributes)
    );

    const handleSelectAttributes = (name, value) => {
        setSelectedAttributes((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        setProductId(generateProductId(cartItem.product, selectedAttributes));
    }, [selectedAttributes]);
    useEffect(() => {
        updateAttributes(
            cartItem,
            cartItemIndex,
            productId,
            selectedAttributes
        );
        updateQuantity();
    }, [productId]);
    const [selectedQuantity, setSelectedQuantity] = useState(cartItem.quantity);

    const handleIncrementQuantity = () => {
        setSelectedQuantity((prevState) => prevState + 1);
        cartOrder[cartItemIndex].quantity += 1;
        updateQuantity();
    };
    const handleDecrementQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity((prevState) => prevState - 1);
            cartOrder[cartItemIndex].quantity -= 1;
            updateQuantity();
        }
    };
    return (
        <div className="cart-item__container">
            <div>
                <ProductTitle brand={product.brand} name={product.name} />
                <div className="cart-item__price">
                    <Price
                        prices={product.prices}
                        selectedCurrency={selectedCurrency}
                    />
                </div>
                <Attributes
                    attributes={product.attributes}
                    selectedAttributes={selectedAttributes}
                    onSelectAttributes={handleSelectAttributes}
                    isCartOverlay={false}
                />
            </div>
            <div className="cart-item__right-block">
                <QuantitySwitcher
                    selectedQuantity={selectedQuantity}
                    onIncrementQuantity={handleIncrementQuantity}
                    onDecrementQuantity={handleDecrementQuantity}
                />
                <CartImageViewer gallery={product.gallery} />
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartOrder: PropTypes.arrayOf(PropTypes.object),
    cartItem: PropTypes.object,
    cartItemIndex: PropTypes.number,
    selectedCurrency: PropTypes.string,
    updateQuantity: PropTypes.func,
    updateAttributes: PropTypes.func
};

export default CartItem;
