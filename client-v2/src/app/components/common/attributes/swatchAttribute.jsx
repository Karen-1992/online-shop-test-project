import React from "react";
import PropTypes from "prop-types";

const SwatchAttribute = ({
    atr,
    attribute,
    onSelectAttributes,
    selectedAttributes,
    // height,
    // width,
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
            // style={{
            //     // width: width,
            //     // height: height,
            //     padding: "1px",
            //     marginRight: "8px"
            // }}
        >
            <div
                onClick={() =>
                    onSelectAttributes(
                        attribute.name,
                        atr.displayValue
                    )
                }
                // className="attribute__item attribute__item__swatch"
                className="attribute__item attribute__item__swatch"
                style={{
                    // height: "100%",
                    // width: "100%",
                    backgroundColor: atr.value
                    // display: "flex"
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
