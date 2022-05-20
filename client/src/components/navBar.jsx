import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ categories }) => {
    return (
        <>
            {categories.map((category) => (
                <Link
                    key={category.name}
                    to="/">{category.name}
                </Link>
            ))}
        </>
    );
};

export default NavBar;