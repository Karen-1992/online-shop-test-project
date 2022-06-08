import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useCategories } from "./useCategories";
import { GET_CATEGORY } from "../query/category";

const CategoryProductsContext = React.createContext();

export const useCategoryProducts = () => {
    return useContext(CategoryProductsContext);
};

const CategoryProductsProvider = ({ children }) => {
    const { selectedCategory } = useCategories();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { data, loading, error } = useQuery(GET_CATEGORY, {
        variables: {
            input: {title: selectedCategory}
        }
    });

    useEffect(() => {
        if (!loading) {
            setCategoryProducts(data.category.products);
        }
        if (error) {
            console.error("products error");
        }
    }, [data]);

    return (
        <CategoryProductsContext.Provider
            value={{
                categoryProducts,
                selectedCategory
            }}
        >
            {!loading ? children : "Loading..."}
        </CategoryProductsContext.Provider>
    );
};


export default CategoryProductsProvider;
