import { useState, useContext, useEffect } from "react"
import starIcon from "../assets/frontend_assets/star_icon.png"
import starDullIcon from "../assets/frontend_assets/star_dull_icon.png"
import { cartContext } from "../contexts/cartContext.jsx"




export default function ProductDetails({ productInfo, currentImage, setCurrentImage }) {
    
    const [productSize, setProductSize] = useState("")
 
    const {getProductToCart} = useContext(cartContext)
    
    
    return (
        <>
            {productInfo ? 
            (<section className="flex justify-center items-center 
                min-w-full min-h-[600px] gap-x-2">
                <div className="min-w-1/2 min-h-[inherit] flex 
                     justify-center gap-x-4">
                    <div className="w-[18%] h-[80px]">
                       {(productInfo.image.map((img, index) => 
                            <img onClick={() => {setCurrentImage(img)}} 
                            key={index} className="min-w-[100%] min-h-[inherit] 
                            mb-2" src={img} alt="" />)
                        )}   
                    </div>
                    <div className="w-[72%] ">
                        <img className="min-w-[100%] h-[inherit]" 
                            src={currentImage} alt="" />
                    </div>
                </div>
                <div className="min-w-1/2 min-h-[inherit] px-10 py-5">
                    <h2 className="text-2xl font-medium mb-3">
                        {productInfo.name}
                    </h2>
                    <div className="my-6 flex gap-x-22 items-center">
                        <div className="flex w-[15px] gap-x-1">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starDullIcon} alt="" />
                        </div>
                        <p>(122)</p>
                    </div>
                    <p className="text-3xl font-bold mb-3">
                        ${productInfo.price}
                    </p>
                    <p className="text-gray-500 mb-8">
                        {productInfo.description}
                    </p>
                    <p className="font-semibold mb-4">Select Size</p>
                    <div className="flex gap-2 font-semibold min-w-full ">
                        {productInfo.sizes.map((size, index) => 
                        <button key={index} onClick={() => {setProductSize(size)}} 
                            className={`min-w-[auto] h-[42px] py-2 px-4 bg-gray-100 border-1 
                            border-gray-300 flex items-center justify-center cursor-pointer 
                            ${size === productSize ? "bg-green-300" : null}`}>{size}
                        </button>)
                        }
                    </div>
                    <button 
                        onClick={() => {getProductToCart(productInfo.id, productSize)}}
                        className="min-w-40 min-h-11 bg-black text-white text-base
                        mt-8 mb-8 text-sm font-semibold cursor-pointer">
                        ADD TO CART
                    </button>
                    <div className="min-w-full h-[1px] bg-gray-300 mb-6">
                    </div>
                    <div className="text-gray-500 text-sm font-semibold">
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