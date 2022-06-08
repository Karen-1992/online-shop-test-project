import React, { useContext } from "react";
import ProductsItem from "../../ui/products/productsItem";
import { useCategoryProducts } from "../../../hooks/useCategoryProducts";
import { useCurrencies } from "../../../hooks/useCurrencies";
import { useCart } from "../../../hooks/useCart";
import { generateProductId } from "../../../utils/generateProductId";
import { getInitAttributes } from "../../../utils/getInitAttributes";
import "./productsListPage.css";


const ProductsListPage = () => {
    const { cartOrder, addToCart, updateQuantity } = useCart();
    const { selectedCurrency } = useCurrencies();
    const { categoryProducts, selectedCategory } = useCategoryProducts();
    const handleAddToCart = (product) => {
        const selectedAttributes = getInitAttributes(product.attributes);
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
    }
    return (
        <>
            <h1 className="category-title">{selectedCategory}</h1>
            <div className="products">
                {categoryProducts.map((product) => (
                    <ProductsItem
                        key={product.id} 
                        selectedCategory={selectedCategory}
                        product={product}
                        selectedCurrency={selectedCurrency}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </>           
    );
};

export default ProductsListPage;
