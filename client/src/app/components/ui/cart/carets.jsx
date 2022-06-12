import React from "react";
import PropTypes from "prop-types";
import ImageContainer from "../../common/imageContainer";
import caretLeft from "../../../img/caretLeft.png";
import caretRight from "../../../img/caretRight.png";

const Carets = ({ onDecrementImageIndex, onIncrementImageIndex }) => {
    return (
        <div className="carets">
            <div
                className="carets-item"
                onClick={() => onDecrementImageIndex()}
            >
                <ImageContainer src={caretLeft} width="18px" height="18px" />
            </div>
            <div
                className="carets-item"
                onClick={(e) => onIncrementImageIndex(e)}
            >
                <ImageContainer src={caretRight} width="18px" height="18px" />
            </div>
        </div>
    );
};

Carets.propTypes = {
    onDecrementImageIndex: PropTypes.func,
    onIncrementImageIndex: PropTypes.func
};

export default Carets;
