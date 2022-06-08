import React from "react";
import Price from "./../common/price";
import Attributes from "../common/attributes/attributes";
import ProductTitle from "../common/productTitle";

const ProductInfo = ({
    product,
    selectedCurrency,
    onSelectAttributes,
    selectedAttributes,
    onAddToCart,
    isValid
}) => {
    return (
        <div className="product-page__info">
            <ProductTitle brand={product.brand} name={product.name} />
            <Attributes
                attributes={product.attributes}
                onSelectAttributes={onSelectAttributes}
                selectedAttributes={selectedAttributes}
            />
            <h3 className="price-title">price:</h3>
            <Price prices={product.prices} selectedCurrency={selectedCurrency} />
            {product.inStock && (
                <button
                    className={"add-button" + (isValid ? " add-button-valid" : " ")}
                    onClick={onAddToCart}
                >
                    Add to cart
                </button>
            )}
            <div className="product-page__info__description"
                dangerouslySetInnerHTML={{__html: product.description}}
            >
            </div>
        </div>
    );
};

export default ProductInfo;
