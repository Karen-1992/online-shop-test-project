import React from "react";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart";
import { useCurrencies } from "../hooks/useCurrencies";
import ProductsListPage from "../components/pages/productsListPage";
import ProductPage from "../components/pages/productPage";
import CategoryProductsProvider from "../hooks/useCategoryProducts";
import ProductProvider from "../hooks/useProduct";
import BackgroundDimimg from "../components/common/backgroundDimimg/backgroundDimimg";

const Products = () => {
    const params = useParams();
    const { productId } = params;
    const { closeCurrencySelect } = useCurrencies();
    // const { closeCartOverlay } = useCart();
    const { closeCartOverlay, isCartOverlay } = useCart();
    const hanleCloseWindows = () => {
        closeCartOverlay();
        closeCurrencySelect();
    };
    return (
        <div
            onClick={hanleCloseWindows}
        >
            <CategoryProductsProvider>
                <ProductProvider>
                    {productId ? <ProductPage /> : <ProductsListPage />}
                </ProductProvider>
            </CategoryProductsProvider>
            {isCartOverlay && (
                <BackgroundDimimg />
            )}
        </div>
    );
};

export default Products;
