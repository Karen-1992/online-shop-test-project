import React, {useEffect, useState} from "react";
import { useQuery } from '@apollo/client';
import API from "../../api";
import ImagesBlock from "../ui/products/imagesBlock";
import ImageContainer from "../ui/products/imageContainer";
import ProductInfo from "./productInfo";

const ProductPage = ({ productId, selectedCurrency }) => {
    const [product, setProduct] = useState({});
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedAttributes, setSelectedAttributes] = useState([]);
    const [attributesCount, setAttributesCount] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const { data, loading, error } = useQuery(API.GET_PRODUCT, {
        variables: {
            id: productId
        }
    });
    useEffect(() => {
        if (!loading) {
            setProduct(data.product);
            setAttributesCount(data.product.attributes.length);
        } 
        if (error) {
            console.error("data error");
        }
    }, [data]);
    useEffect(() => {
        validate();
    }, [selectedAttributes]);
    const handleSelectAttributes = (name, value) => {
        setSelectedAttributes(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    const validate = () => {
        const isValid = 
            Object.keys(selectedAttributes).length === attributesCount
            && Object.keys(selectedAttributes).length !== 0;
        if (isValid) setIsValid(true);
        return isValid;
    };
    
    const handleSelectImage = (index) => {
        setSelectedImageIndex(index);
    };
    const handleSelectImage2 = (index) => {
        if (index >= product.gallery.length - 1) {
            return setSelectedImageIndex(0);
        }
        setSelectedImageIndex(prevState => prevState + 1);
    };


    const handleAddToCart = () => {
        const isValid = validate();
        if (!isValid) return;
        console.log(Object.entries(selectedAttributes));
        localStorage.setItem("cart", JSON.stringify({
            attributes: selectedAttributes
        }));
        localStorage.setItem("cartQuantity", 2);
    }

    return (
        <>
            { data && product.gallery
                ? (
                    <div className="product-page-container">
                        <ImagesBlock
                            gallery={product.gallery}
                            onSelectImage={handleSelectImage}
                        />
                        <div
                            className="product-page__main-img"
                            onClick={() => handleSelectImage2(selectedImageIndex)}
                        >
                            <ImageContainer
                                height="511px"
                                width="610px"
                                src={product.gallery[selectedImageIndex]}
                            />
                        </div>
                        <ProductInfo
                            product={product}
                            selectedCurrency={selectedCurrency}
                            onSelectAttributes={handleSelectAttributes}
                            selectedAttributes={selectedAttributes}
                            isValid={isValid}
                            onAddToCart={handleAddToCart}
                        />
                        
                    </div>
                ) : (
                    <p>{loading}</p>
                )
            }
        </>
    );
};
 
export default ProductPage;
