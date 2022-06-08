import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../query/product";
import { useParams } from "react-router-dom";
import { getInitAttributes } from "../utils/getInitAttributes";

const ProductContext = React.createContext();

export const useProduct = () => {
    return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
    const params = useParams();
    const { productId } = params;
    const [product, setProduct] = useState({});
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const { data, loading, error } = useQuery(GET_PRODUCT, {
        variables: {
            id: productId || ""
        }
    });
    useEffect(() => {
        if (!loading) {
            setProduct(data.product);
            if (productId) {
                setSelectedAttributes(getInitAttributes(data.product.attributes))
            }
        } 
        if (error) {
            console.error("product error");
        }
    }, [data]);

    function changeAttributes (name, value) {
        setSelectedAttributes(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    return (
        <ProductContext.Provider
            value={{
                product,
                selectedAttributes,
                changeAttributes,
                loading
            }}
        >
            {!loading ? children : "Loading..."}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
