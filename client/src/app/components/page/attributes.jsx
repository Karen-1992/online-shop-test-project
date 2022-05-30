import React from 'react';
import Attribute from './attribute';

const Attributes = ({ attributes, onSelectAttributes, selectedAttributes }) => {
    return (
        <div className="product-page__info__attributes">
            {attributes.map(attribute => (
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

export default Attributes;
