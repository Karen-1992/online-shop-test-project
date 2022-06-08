import React from "react";

const ImageContainer = ({ width, height, src }) => {
    return (
        <div
            style={{
                position: "relative",
                width: width,
                height: height,
            }}
        >
            <img
                src={src}
                alt={src}
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }}
            />
        </div>
    );
}
 
export default ImageContainer;