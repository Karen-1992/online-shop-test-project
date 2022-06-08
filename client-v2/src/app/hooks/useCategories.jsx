import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../query/categories";

const CategoriesContext = React.createContext();

export const useCategories = () => {
    return useContext(CategoriesContext);
};

const CategoriesProvider = ({ children }) => {
    const { data, loading, error } = useQuery(GET_CATEGORIES);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
        if (!loading) {
            setCategories(data.categories);
            setSelectedCategory("all");
        }
        if (error) {
            console.error("categories error");
        }
    }, [data]);

    const handleSelectCategory = (product) => {
        setSelectedCategory(product);
    };

    return (
        <CategoriesContext.Provider
            value={{
                categories,
                handleSelectCategory,
                selectedCategory
            }}
        >
            {!loading ? children : "Loading..."}
        </CategoriesContext.Provider>
    );
};

CategoriesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CategoriesProvider;
