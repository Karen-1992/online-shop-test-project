import React from "react";
import PropTypes from "prop-types";

const SwatchAttribute = ({
    atr,
    attribute,
    onSelectAttributes,
    selectedAttributes,
    isCartOverlay
}) => {
    return (
        <div
            className={
                "attribute__items__swatch-container " + (isCartOverlay && "attribute__items__swatch-container-overlay") +
                (selectedAttributes[attribute.name] ===
                atr.displayValue
                    ? " attribute-selected-swatch"
                    : "")
            }
        >
            <div
                onClick={() =>
                    onSelectAttributes(
                        attribute.name,
                        atr.displayValue
                    )
                }
                className="attribute__item attribute__item__swatch"
                style={{
                    backgroundColor: atr.value
                }}
            >
            </div>
        </div>
    );
};

SwatchAttribute.propTypes = {
    atr: PropTypes.object,
    attribute: PropTypes.object,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object,
    isCartOverlay: PropTypes.bool
};

export default SwatchAttribute;
