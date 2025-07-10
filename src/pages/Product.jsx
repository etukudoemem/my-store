import { useState, useEffect } from "react"
import { products } from "../assets/frontend_assets/assets"
import { useParams } from "react-router-dom"
import { ProductDetails } from "../components/ProductDetails"
import { RelatedProducts } from "../components/RelatedProducts"


export const Product = () => {
    const [productInfo, setProductInfo] = useState(false);
    const [currentImage, setCurrentImage] = useState();
    const { productId } = useParams();
    
    const fetchData = () => {
        products.map((product) => {
            if (productId === product.id) {
                setProductInfo(product)
                setCurrentImage(product.image[0])
                return
        };
    })};

    useEffect(() => {
       fetchData()
    }, [productId]);


    return (
        <>
            <section className="mt-10">
                <ProductDetails 
                    key={productInfo.id}
                    productInfo={productInfo}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                />
            </section>
            <section>
                <RelatedProducts
                    key={productInfo.id}
                    productInfo={productInfo}
                />
            </section>
        </>
    )
}