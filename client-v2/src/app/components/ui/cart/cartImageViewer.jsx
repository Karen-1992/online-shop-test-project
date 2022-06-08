import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageContainer from "../../common/imageContainer";
import Carets from "./carets";

const CartImageViewer = ({ gallery }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleIncrementImageIndex = () => {
        if (
            selectedImageIndex < gallery.length - 1 &&
            selectedImageIndex >= 0
        ) {
            setSelectedImageIndex((prevState) => prevState + 1);
        }
    };
    const handleDecrementImageIndex = () => {
        if (selectedImageIndex < gallery.length && selectedImageIndex > 0) {
            setSelectedImageIndex((prevState) => prevState - 1);
        }
    };
    return (
        <div className="cart-item__image">
            <ImageContainer
                src={gallery[selectedImageIndex]}
                width="200px"
                height="288px"
            />
            {gallery.length > 1 && (
                <Carets
                    onDecrementImageIndex={handleDecrementImageIndex}
                    onIncrementImageIndex={handleIncrementImageIndex}
                />
            )}
        </div>
    );
};

CartImageViewer.propTypes = {
    gallery: PropTypes.array
};

export default CartImageViewer;
