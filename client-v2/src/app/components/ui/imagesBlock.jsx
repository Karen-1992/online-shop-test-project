import React from 'react';
import ImageContainer from './../common/imageContainer';

const ImagesBlock = ({ gallery, onSelectImageFromGallery }) => {
    return (
        <div className="images-block">
            <div className="images-block__container">
                {gallery.map((img, index) => (
                    <div
                        className="images-block__item"
                        key={img}
                        onClick={() => onSelectImageFromGallery(index)}
                    >
                        <ImageContainer
                            height="80px"
                            width="80px"
                            src={img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ImagesBlock;
