import React from "react";
import Product from "./product";

const Products = ({ products }) => {
    return (
        <div className="products">
            {products &&
                products.map(product => (
                    <Product key={product.id}  product={product} />
                ))
            }
        </div>
    );
};

export default Products;
