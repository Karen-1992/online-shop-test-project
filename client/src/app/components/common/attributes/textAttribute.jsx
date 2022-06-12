import React from "react";
import PropTypes from "prop-types";

const TextAttribute = ({
    atr,
    attribute,
    onSelectAttributes,
    selectedAttributes,
    isCartOverlay
}) => {
    return (
        <div
            onClick={() =>
                onSelectAttributes(
                    attribute.name,
                    atr.displayValue
                )
            }
            className={
                "attribute__item" + " attribute__item__text " + (isCartOverlay && "attribute__item__text-overlay") +
                (selectedAttributes[attribute.name] ===
                atr.displayValue
                    ? " attribute-selected-text"
                    : "")
            }
        >
            <span>{atr.value}</span>
        </div>
    );
};

TextAttribute.propTypes = {
    atr: PropTypes.object,
    attribute: PropTypes.object,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object,
    isCartOverlay: PropTypes.bool
};

export default TextAttribute;
