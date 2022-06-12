import React, { useState } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { useCurrencies } from "../../../hooks/useCurrencies";
import { useCart } from "../../../hooks/useCart";
import ImageContainer from "../../common/imageContainer";
import ImagesBlock from "../../ui/imagesBlock";
import ProductInfo from "../../ui/productInfo";
import { generateProductId } from "../../../utils/generateProductId";

const ProductPage = () => {
    const { product, selectedAttributes, changeAttributes } = useProduct();
    const { selectedCurrency } = useCurrencies();
    const { addToCart, cartOrder, updateQuantity } = useCart();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleSelectAttributes = (name, value) => {
        changeAttributes(name, value);
    };

    const handleSelectImageFromGallery = (index) => {
        setSelectedImageIndex(index);
    };
    const handleSelectImage = (index) => {
        if (index >= product.gallery.length - 1) {
            return setSelectedImageIndex(0);
        }
        setSelectedImageIndex((prevState) => prevState + 1);
    };
    const handleAddToCart = () => {
        const productId = generateProductId(product, selectedAttributes);
        const newItem = {
            id: productId,
            quantity: 1,
            product,
            selectedAttributes: selectedAttributes
        };
        const productIndex = cartOrder.findIndex((p) => p.id === newItem.id);
        if (productIndex !== -1) {
            cartOrder[productIndex].quantity += 1;
            updateQuantity();
        } else {
            addToCart(newItem);
        }
    };
    return (
        <>
            {product?.gallery && (
                <div className="product-page-container">
                    <ImagesBlock
                        gallery={product.gallery}
                        onSelectImageFromGallery={handleSelectImageFromGallery}
                    />
                    <div
                        className="product-page__main-img"
                        onClick={() => handleSelectImage(selectedImageIndex)}
                    >
                        <ImageContainer
                            height="511px"
                            width="610px"
                            src={product.gallery[selectedImageIndex]}
                        />
                    </div>
                    <ProductInfo
                        product={product}
                        selectedCurrency={selectedCurrency}
                        onSelectAttributes={handleSelectAttributes}
                        selectedAttributes={selectedAttributes}
                        onAddToCart={handleAddToCart}
                    />
                </div>
            )}
        </>
    );
};

export default ProductPage;
