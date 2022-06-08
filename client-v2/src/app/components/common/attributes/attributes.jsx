import React from "react";
import PropTypes from "prop-types";
import Attribute from "./attribute";
import { getInitAttributes } from "../../../utils/getInitAttributes";
import "./attributes.css";

const Attributes = ({ attributes, onSelectAttributes, selectedAttributes }) => {
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
                <Attribute
                    key={attribute.id}
                    attribute={attribute}
                    onSelectAttributes={onSelectAttributes}
                    selectedAttributes={selectedAttributes}
                />
            ))}
        </div>
    );
};

Attributes.propTypes = {
    attributes: PropTypes.array,
    onSelectAttributes: PropTypes.func,
    selectedAttributes: PropTypes.object
};

export default Attributes;
