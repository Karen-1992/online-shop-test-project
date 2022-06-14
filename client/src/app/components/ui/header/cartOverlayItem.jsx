import React, { useState } from "react";
import PropTypes from "prop-types";
import Price from "../../common/price";
import QuantitySwitcher from "../../common/quantitySwitcher/quantitySwitcher";
import Attributes from "../../common/attributes/attributes";
import ImageContainer from "../../common/imageContainer";

const CartOverlayItem = ({
    cartOrder,
    cartItem,
    cartItemIndex,
    selectedCurrency,
    updateQuantity
}) => {
    const { product } = cartItem;
    const isCartOverlay = true;
    const selectedAttributes = cartItem.selectedAttributes;
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
        <div className="cart-overlay__item">
            <div>
                <div className="cart-overlay__item__title">
                    <p>{product.brand}</p>
                    <p>{product.name}</p>
                </div>
                <div className="cart-overlay__item__price">
                    <Price
                        prices={product.prices}
                        selectedCurrency={selectedCurrency}
                        fontSize="16px"
                        fontWeight="500"
                    />
                </div>
                <Attributes
                    attributes={product.attributes}
                    selectedAttributes={selectedAttributes}
                    isCartOverlay={isCartOverlay}
                />
            </div>
            <div className="cart-overlay__item__right-block">
                <QuantitySwitcher
                    selectedQuantity={selectedQuantity}
                    onIncrementQuantity={handleIncrementQuantity}
                    onDecrementQuantity={handleDecrementQuantity}
                    height="24px"
                    width="24px"
                    fontSize="16px"
                />
                <ImageContainer
                    height="190px"
                    width="121px"
                    src={product.gallery[0]}
                />
            </div>
        </div>
    );
};

CartOverlayItem.propTypes = {
    cartOrder: PropTypes.arrayOf(PropTypes.object),
    cartItem: PropTypes.object,
    cartItemIndex: PropTypes.number,
    selectedCurrency: PropTypes.string,
    updateQuantity: PropTypes.func
};

export default CartOverlayItem;
