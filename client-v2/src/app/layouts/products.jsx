import React from "react";
import { useParams } from "react-router";
import ProductsListPage from "../components/pages/productsListPage";
import ProductPage from "../components/pages/productPage";
import CategoryProductsProvider from "../hooks/useCategoryProducts";
import ProductProvider from "../hooks/useProduct";

const Products = () => {
    const params = useParams();
    const { productId } = params;

    return (
        <CategoryProductsProvider>
            <ProductProvider>
                {productId ? <ProductPage /> : <ProductsListPage />}
            </ProductProvider>
        </CategoryProductsProvider>
    );
};

export default Products;
