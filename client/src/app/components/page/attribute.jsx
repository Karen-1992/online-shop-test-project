import React from 'react';

const Attribute = ({
    attribute,
    onSelectAttributes,
    selectedAttributes
}) => {
    return (
        <div className="attribute">
            <h3>{attribute.name}:</h3>
            <div className="attribute__items">
                {attribute.items.map(atr => (
                    <div
                        onClick={() => onSelectAttributes(attribute.name, atr.displayValue)}
                        className={
                            "attribute__item" + (attribute.type === "swatch" ? "-color" : "")
                            + (selectedAttributes[attribute.name] === atr.displayValue ? " attribute-selected" : "")
                        }
                            key={atr.id}
                            style={{
                                backgroundColor: (attribute.type === "swatch" ? atr.value : "#fff")
                                // border: (attribute.type === "swatch" ? "none" : "1px solid #1D1F22")
                            }}
                    >

                        <span>{(attribute.type !== "swatch") && atr.value}</span> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attribute;
