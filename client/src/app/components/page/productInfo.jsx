import React from "react";
import Price from "../ui/price";
import Attributes from "./attributes";
import ProductTitle from "./productTitle";

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
            <h4>PRICE:</h4>
            <Price prices={product.prices} selectedCurrency={selectedCurrency} />
            <button
            className={"add-button" + (isValid ? " add-button-valid" : " ")}
                onClick={onAddToCart}
            >
                Add to cart
            </button>
            <div className="product-page__info__description">
                <p>{product.description}</p> 
            </div>
        </div>
    );
};

export default ProductInfo;
