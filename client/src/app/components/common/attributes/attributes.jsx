import React from "react";
import PropTypes from "prop-types";
import AttributeItems from "./attributeItems";
import { getInitAttributes } from "../../../utils/getInitAttributes";
import "./attributes.css";

const Attributes = ({ attributes, onSelectAttributes, selectedAttributes, isCartOverlay }) => {
    if (Object.keys(selectedAttributes).length === 0) {
        selectedAttributes = getInitAttributes(attributes);
    } else {
        selectedAttributes = {
            ...getInitAttributes(attributes),
            ...selectedAttributes
        };
    }
    return (
        <div className="product-page__info__attributes">
            {attributes.map((attribute) => (
                <AttributeItems
                    key={attribute.id}
                    attribute={attribute}
                    onSelectAttributes={onSelectAttributes}
                    selectedAttributes={selectedAttributes}
                    isCartOverlay={isCartOverlay}
                />
            ))}
        </div>
    );
};

Attributes.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.object),
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object,
    isCartOverlay: PropTypes.bool
};

export default Attributes;
