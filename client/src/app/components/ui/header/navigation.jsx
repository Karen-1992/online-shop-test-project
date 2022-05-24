import React from "react";

const Navigation = ({ categories, onSelectCategory, selectedCategory }) => {
    return (
        <div className="nav">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className={selectedCategory === category.name ? "nav__item_active" : ""}
                >
                    <p
                        onClick={() => onSelectCategory(category.name)}
                    >
                        {category.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Navigation;
