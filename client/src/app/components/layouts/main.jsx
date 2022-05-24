import React from 'react';
import Products from '../ui/products/products';
import { useParams } from 'react-router-dom';
import ProductPage from '../page/productPage';

const Main = ({ products, selectedCategory }) => {
    console.log(products);
    const params = useParams();
    const { productId } = params;
    return (
        <>
            {!productId ? (
                <>
                    <h1
                        className='category-title'>{selectedCategory}
                    </h1>
                    <Products products={products} />
                </>
            ) : (
                <ProductPage productId={productId} />
            )}
        </>
        
    );
};

export default Main;
