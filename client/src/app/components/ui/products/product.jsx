import React from "react";
import { useHistory } from "react-router-dom";
import Price from "../price";
import ImageContainer from "./imageContainer";
import emptyCart from "../../../img/empty-cart.png";

const Product = ({ product, selectedCategory, selectedCurrency }) => {
    const history = useHistory();
    const handleShowProductPage = (e) => {
        const { target } = e;
        const targetClass = target.className;
        if (targetClass !== "add-card__mini-button" && targetClass !== "add-card__mini-button__img") {
            history.push(`/${selectedCategory}/${product.id}`)
        }
    } 
    return (
        <div className="products__item" onClick={handleShowProductPage}>
            <ImageContainer
                height="330px"
                width="354px"
                src={product.gallery[0]}
            />
            <div className="products__item__content">
                <h2>{product.name}</h2>
                <Price prices={product.prices} selectedCurrency={selectedCurrency} />
            </div>
            <div
                className="add-card__mini-button"
                onClick={() => console.log("add to cart from mini button")}
            >
                <img className="add-card__mini-button__img" src={emptyCart} alt="empty cart img" />
            </div>
        </div>
    );
};

export default Product;
