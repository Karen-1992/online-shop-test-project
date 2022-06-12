import React from "react";
import PropTypes from "prop-types";
import Price from "./../common/price";
import Attributes from "../common/attributes/attributes";
import ProductTitle from "../common/productTitle";

const ProductInfo = ({
    product,
    selectedCurrency,
    onSelectAttributes,
    selectedAttributes,
    onAddToCart
}) => {
    return (
        <div className="product-page__info">
            <ProductTitle brand={product.brand} name={product.name} />
            <Attributes
                attributes={product.attributes}
                onSelectAttributes={onSelectAttributes}
                selectedAttributes={selectedAttributes}
                isCartOverlay={false}
            />
            <h3 className="price-title">price:</h3>
            <div className="product-page__info__price">
                <Price
                    prices={product.prices}
                    selectedCurrency={selectedCurrency}
                />
            </div>
            {product.inStock && (
                <button
                    className="add-button"
                    onClick={onAddToCart}
                >
                    Add to cart
                </button>
            )}
            <div
                className="product-page__info__description"
                dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
        </div>
    );
};

ProductInfo.propTypes = {
    product: PropTypes.object,
    selectedCurrency: PropTypes.string,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object,
    onAddToCart: PropTypes.func
};

export default ProductInfo;
