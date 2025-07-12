import { useState, useContext } from "react"
import starIcon from "../assets/frontend_assets/star_icon.png"
import starDullIcon from "../assets/frontend_assets/star_dull_icon.png"
import { storeContext } from "../contexts/storeContext.jsx"
import { SizeModal } from "../modals/SizeModal.jsx"
import { CartModal } from "../modals/CartModal.jsx"


export const ProductDetails = ({ productInfo, currentImage, setCurrentImage }) => {
    
    const [productSize, setProductSize] = useState("");
    const {getProductToCart} = useContext(storeContext);
    
    return (
        <>
            <SizeModal />
            <CartModal />
            {productInfo ? 
            (<section className="flex lg:flex-row sm:flex-col justify-center items-center 
                min-w-full lg:min-h-[600px] sm:min-h-[800px] gap-x-2 ">
                <div className="lg:min-w-1/2 sm:min-w-full min-h-[inherit] flex leftHeader
                     justify-center gap-x-4 ">
                    <div className="lg:w-[100px] sm:w-[160px] h-[auto] overflow-hidden">
                       {(productInfo.image.map((img, index) => 
                            <img onClick={() => {setCurrentImage(img)}} 
                            key={index} className="min-w-[100%] min-h-[inherit] 
                            mb-2 active:scale-95 transition-all duration-200 ease-in-out
                            hover:scale-105" 
                            src={img} alt="image" />)
                        )}   
                    </div>
                    <div className="w-[72%] max-h-[550px]">
                        <img className="min-w-[100%] h-[inherit]" 
                            src={currentImage} alt="image" />
                    </div>
                </div>
                <div className="min-w-1/2 min-h-[inherit] px-10 py-5 rightHeader">
                    <h2 className="lg:text-2xl sm:text-5xl font-medium mb-3">
                        {productInfo.name}
                    </h2>
                    <div className="my-6 flex lg:gap-x-22 sm:gap-x-30 items-center">
                        <div className="flex lg:w-[15px] sm:w-[38px] gap-x-1">
                            <img src={starIcon} alt="star"/>
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starDullIcon} alt="star" />
                        </div>
                        <p className="lg:text-base sm:text-3xl">
                            (122)
                        </p>
                    </div>
                    <p className="lg:text-3xl sm:text-6xl font-semibold lg:mb-3 sm:mb-6
                        lg:mt-0 sm:mt-8">
                        ${productInfo.price}
                    </p>
                    <p className="text-gray-500 mb-8 lg:text-base sm:text-4xl leading-normal">
                        {productInfo.description}
                    </p>
                    <p className="font-semibold lg:mb-4 sm:mb-8 lg:text-base sm:text-4xl">
                        Select Size
                    </p>
                    <div className="flex lg:gap-2 sm:gap-6 lg:font-semibold sm:font-medium min-w-full =">
                        {productInfo.sizes.map((size, index) => 
                            <button key={index} onClick={() => {setProductSize(size)}} 
                                className={`lg:min-w-[auto] sm:min-w-[auto] lg:h-[42px] sm:h-[100px] py-2 lg:px-4 
                                text-gray-600 flex items-center justify-center cursor-pointer lg:text-base
                                active:scale-95 transition-all duration-100 ease-in-out sm:text-4xl bg-gray-100 
                                hover:scale-103 border-1 border-gray-400 shadow-md sm:px-11
                                ${size === productSize ? "bg-green-200" : null}`}>{size}
                            </button>)
                        }
                    </div>
                    <button 
                        onClick={() => {getProductToCart(productInfo.id, productSize)}}
                        className="lg:min-w-40 sm:min-w-102 lg:min-h-11 sm:min-h-30 bg-gray-100 text-gray-600 text-base
                        lg:mt-8 sm:mt-14 mb-8 lg:text-sm sm:text-4xl font-semibold cursor-pointer active:scale-95 
                        transition-all duration-100 ease-in-out hover:scale-103
                        border-1 border-gray-400 shadow-md">
                        ADD TO CART
                    </button>
                    <div className="min-w-full h-[1px] bg-gray-300 mb-6">
                    </div>
                    <div className="text-gray-500 lg:text-sm sm:text-4xl leading-normal">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </section>) 
            :
            <section className="flex justify-center items-center text-3xl font-medium
                text-gray-400">
                <p>Loading...</p>
            </section> }
        </>
    )
}