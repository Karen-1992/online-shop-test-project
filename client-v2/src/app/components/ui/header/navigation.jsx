import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ categories, onSelectCategory, selectedCategory }) => {
    return (
        <div className="nav">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className={
                        selectedCategory === category.name
                            ? "nav__item_active"
                            : ""
                    }
                >
                    <Link
                        to={`/${category.name}`}
                        className="nav__link"
                        onClick={() => onSelectCategory(category.name)}
                    >
                        {category.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

Navigation.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    onSelectCategory: PropTypes.func,
    selectedCategory: PropTypes.string
};

export default Navigation;
