import React from "react";

const Product = ({ product }) => {
    return (
        <div className="products__item">
            <div className="product-card">
                <div className="product-card__img">
                    <img className={
                        (product.inStock === false ? "out" : "in") +
                            "-of-stack"} src={product.gallery[0]} alt={product.name}
                    />
                    {product.inStock === false &&
                        <h2 className="out-of-stack__text">
                            out of stock
                        </h2>
                    }
                </div>
                <h2>{product.name}</h2>
                <p>{product.prices[0].amount}</p>
            </div>
        </div>
    );
};

export default Product;
