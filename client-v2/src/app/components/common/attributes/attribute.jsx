import React from "react";
import PropTypes from "prop-types";

const Attribute = ({ attribute, onSelectAttributes, selectedAttributes }) => {
    return (
        <div className="attribute">
            <h3 className="attribute__name">{attribute.name}:</h3>
            <div className="attribute__items">
                {attribute.items.map((atr) =>
                    attribute.type === "swatch" ? (
                        <div
                            className={
                                "attribute__items__swatch-container" +
                                (selectedAttributes[attribute.name] ===
                                atr.displayValue
                                    ? " attribute-selected-swatch"
                                    : "")
                            }
                            key={atr.id}
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
                                <span>
                                    {attribute.type !== "swatch" && atr.value}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div
                            onClick={() =>
                                onSelectAttributes(
                                    attribute.name,
                                    atr.displayValue
                                )
                            }
                            className={
                                "attribute__item attribute__item__text" +
                                (selectedAttributes[attribute.name] ===
                                atr.displayValue
                                    ? " attribute-selected-text"
                                    : "")
                            }
                            key={atr.id}
                        >
                            <span>{atr.value}</span>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

Attribute.propTypes = {
    attribute: PropTypes.object,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object
};

export default Attribute;
