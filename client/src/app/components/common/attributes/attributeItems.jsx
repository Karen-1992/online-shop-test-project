import React from "react";
import PropTypes from "prop-types";
import TextAttribute from "./textAttribute";
import SwatchAttribute from "./swatchAttribute";

const AttributeItems = ({ attribute, onSelectAttributes, selectedAttributes, isCartOverlay }) => {
    return (
        <div className="attribute">
            <h3 className={"attribute__name " + (isCartOverlay && "attribute__name-overlay")}
            >
                {attribute.name}:
            </h3>
            <div
                className={"attribute__items " + (isCartOverlay && "attribute__items-overlay")}
            >
                {attribute.items.map((atr) =>
                    attribute.type === "swatch" ? (
                        <SwatchAttribute
                            key={atr.id}
                            atr={atr}
                            attribute={attribute}
                            onSelectAttributes={onSelectAttributes}
                            selectedAttributes={selectedAttributes}
                            isCartOverlay={isCartOverlay}
                        />
                    ) : (
                        <TextAttribute
                            key={atr.id}
                            atr={atr}
                            attribute={attribute}
                            onSelectAttributes={onSelectAttributes}
                            selectedAttributes={selectedAttributes}
                            isCartOverlay={isCartOverlay}
                        />
                    )
                )}
            </div>
        </div>
    );
};

AttributeItems.propTypes = {
    attribute: PropTypes.object,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object,
    isCartOverlay: PropTypes.bool
};

export default AttributeItems;
