import React from "react";
import PropTypes from "prop-types";
import AttributeItems from "./attributeItems";
import { getInitAttributes } from "../../../utils/getInitAttributes";
import "./attributes.css";

const Attributes = ({
    attributes,
    selectedAttributes = {},
    ...rest
}) => {
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
                    selectedAttributes={selectedAttributes}
                    {...rest}
                />
            ))}
        </div>
    );
};

Attributes.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.object),
    selectedAttributes: PropTypes.object
};

export default Attributes;
