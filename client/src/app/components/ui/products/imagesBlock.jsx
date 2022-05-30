import React from 'react';
import ImageContainer from './imageContainer';

const ImagesBlock = ({ gallery, onSelectImage }) => {
    return (
        <div className="images-block">
            {gallery.map((img, index) => (
                <div key={img} onClick={() => onSelectImage(index)}>
                    <ImageContainer
                        height="80px"
                        width="80px"
                        src={img}
                    />
                </div>
            ))}
        </div>
    );
}
 
export default ImagesBlock;
