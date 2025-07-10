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
            (<section className="flex justify-center items-center 
                min-w-full min-h-[600px] gap-x-2">
                <div className="min-w-1/2 min-h-[inherit] flex leftHeader
                     justify-center gap-x-4">
                    <div className="w-[100px] h-[auto] overflow-hidden">
                       {(productInfo.image.map((img, index) => 
                            <img onClick={() => {setCurrentImage(img)}} 
                            key={index} className="min-w-[100%] min-h-[inherit] 
                            mb-2 active:scale-95 transition-all duration-200 ease-in-out
                            hover:scale-105" 
                            src={img} alt="" />)
                        )}   
                    </div>
                    <div className="w-[72%] max-h-[550px]">
                        <img className="min-w-[100%] h-[inherit]" 
                            src={currentImage} alt="" />
                    </div>
                </div>
                <div className="min-w-1/2 min-h-[inherit] px-10 py-5 rightHeader">
                    <h2 className="text-2xl font-medium mb-3">
                        {productInfo.name}
                    </h2>
                    <div className="my-6 flex gap-x-22 items-center">
                        <div className="flex w-[15px] gap-x-1">
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starDullIcon} alt="star" />
                        </div>
                        <p>(122)</p>
                    </div>
                    <p className="text-3xl font-semibold mb-3">
                        ${productInfo.price}
                    </p>
                    <p className="text-gray-500 mb-8">
                        {productInfo.description}
                    </p>
                    <p className="font-semibold mb-4">Select Size</p>
                    <div className="flex gap-2 font-semibold min-w-full ">
                        {productInfo.sizes.map((size, index) => 
                            <button key={index} onClick={() => {setProductSize(size)}} 
                                className={`min-w-[auto] h-[42px] py-2 px-4 bg-gray-100 
                                text-gray-600 flex items-center justify-center cursor-pointer
                                active:scale-95 transition-all duration-100 ease-in-out 
                                hover:scale-103 border-1 border-gray-400 shadow-md
                                ${size === productSize ? "bg-green-200" : null}`}>{size}
                            </button>)
                        }
                    </div>
                    <button 
                        onClick={() => {getProductToCart(productInfo.id, productSize)}}
                        className="min-w-40 min-h-11 bg-gray-100 text-gray-600 text-base
                        mt-8 mb-8 text-sm font-semibold cursor-pointer active:scale-95 
                        transition-all duration-100 ease-in-out hover:scale-103
                        border-1 border-gray-400 shadow-md">
                        ADD TO CART
                    </button>
                    <div className="min-w-full h-[1px] bg-gray-300 mb-6">
                    </div>
                    <div className="text-gray-500 text-sm">
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