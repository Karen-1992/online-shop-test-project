import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import API from "../../api";
import Product from "../ui/products/product";

const ProductsPage = ({ selectedCategory, selectedCurrency }) => {
    const [products, setProducts] = useState([]);
    const { data, loading, error } = useQuery(API.GET_CATEGORY, {
        variables: {
            input: {title: selectedCategory}
        }
    });
    useEffect(() => {
        if (!loading) {
            setProducts(data.category.products);
        }
        if (error) {
            console.error("data error");
        }
    }, [data]);
    return (
        <>
            <h1 className="category-title">{selectedCategory}</h1>
            <div className="products">
                {data && data.category !== null ? (
                    <>
                        {products.map((product) => (
                            <Product
                                selectedCategory={selectedCategory}
                                key={product.id} 
                                product={product}
                                selectedCurrency={selectedCurrency}
                            />
                        ))}
                    </>
                ) : (
                    <h1>{loading}</h1>
                )}
            </div>
        </>
    );
};

export default ProductsPage;
