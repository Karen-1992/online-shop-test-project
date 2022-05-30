import React from 'react';
import { useParams } from "react-router";
import ProductsPage from '../page/productsPage';
import ProductPage from '../page/productPage';

const Main = ({ selectedCategory, selectedCurrency }) => {
    const params = useParams();
    const { categoryName, productId } = params;
    // console.log( selectedCategory)
    return (
        <section className="main">
            {productId ? (
                <ProductPage
                    productId={productId}
                    selectedCategory={selectedCategory}
                    selectedCurrency={selectedCurrency}
                />
            ) : (
                <>
                    {/* <h1
                        className='category-title'>selectedCategory
                    </h1> */}
                    <ProductsPage
                        selectedCategory={selectedCategory}
                        selectedCurrency={selectedCurrency}
                    />
                </>
            )}
        </section>
        
    );
};

export default Main;
