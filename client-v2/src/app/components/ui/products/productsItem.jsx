import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ImageContainer from "../../common/imageContainer";
import Price from "../../common/price";
import emptyCart from "../../../img/empty-cart.png";

const ProductsItem = ({
    product,
    selectedCategory,
    selectedCurrency,
    onAddToCart
}) => {
    const history = useHistory();
    const handleShowProductPage = (e) => {
        const { target } = e;
        const targetClass = target.className;
        if (
            targetClass !== "add-card__mini-button" &&
            targetClass !== "add-card__mini-button__img"
        ) {
            history.push(`/${selectedCategory}/${product.id}`);
        }
    };
    return (
        <div
            className={
                "products__item" +
                (product.inStock === false ? " out-of-stack" : " ")
            }
            onClick={handleShowProductPage}
        >
            <ImageContainer
                height="330px"
                width="354px"
                src={product.gallery[0]}
            />
            <div className="products__item__content">
                <h2>{product.name}</h2>
                <Price
                    prices={product.prices}
                    selectedCurrency={selectedCurrency}
                />
            </div>
            {product.inStock === false ? (
                <h2 className="out-of-stack__text">out of stock</h2>
            ) : (
                <div
                    className="add-card__mini-button"
                    onClick={() => onAddToCart(product)}
                >
                    <img
                        className="add-card__mini-button__img"
                        src={emptyCart}
                        alt="empty cart img"
                    />
                </div>
            )}
        </div>
    );
};

ProductsItem.propTypes = {
    product: PropTypes.object,
    selectedCategory: PropTypes.string,
    selectedCurrency: PropTypes.string,
    onAddToCart: PropTypes.func
};

export default ProductsItem;
