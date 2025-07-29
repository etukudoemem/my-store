import trashIcon from "../assets/trash.png"
import { Line } from "./Line"
import { storeContext } from "../contexts/storeContext"
import { useContext } from "react";


export const CartItem = ({ productData, cartData }) => {
    
    const { removeProductFromCart, updateProductQuantity } = useContext(storeContext);

    return (
        <>
            <Line />
            <section className="flex items-center justify-between mb-2 sm:h-60 lg:h-auto collections">
                <div className="flex gap-7 lg:min-w-[400px] sm:min-w-[400px] justify-center items-center">
                    <div className=" lg:min-w-[105px] sm:min-w-[135px] lg:max-h-[120px] sm:max-h-[150px] bg-gray-200">
                        <img className="justify-self-start min-w-[inherit] lg:h-[120px] sm:h-[150px] " 
                            src={productData.image[0]} alt="product image" />
                    </div>
                    <div className="">
                        <h3 className="lg:text-base lg:font-semibold sm:font-medium sm:text-4xl mb-3 text-gray-600 
                            lg:w-auto sm:w-125 leading-normal">
                            {productData.name}
                        </h3>
                        <div className="flex lg:gap-y-2 sm:gap-y-3 lg:gap-x-0 sm:gap-x-4 lg:flex-col sm:flex-row">
                            <div className="lg:max-w-[120px] lg:min-h-[40px] sm:min-h-[50px] py-2 px-2 bg-gray-100 border-0 
                                    border-gray-400 flex items-center justify-center cursor-pointer
                                    lg:text-base sm:text-4xl sm:max-w-[190px] ">
                                <span className="text-gray-600 mr-1">Price: </span> ${productData.price}
                            </div>
                            <div className="lg:max-w-[120px] lg:min-h-[40px] sm:min-h-[50px] py-2 px-2 bg-gray-100 border-0 
                                    border-gray-400 flex items-center justify-center cursor-pointer
                                    sm:max-w-[160px] lg:text-base sm:text-4xl">
                                <span className="text-gray-600 mr-1">Size: </span> {cartData.size}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <input onChange={(e) => {updateProductQuantity(e, cartData.id, cartData.size, cartData.quantity)}}
                        className="lg:max-w-[70px] lg:min-h-[38px] border-1 border-gray-300
                            border-solid py-1 lg:px-2 sm:px-8 outline-none font-semibold text-gray-500
                            lg:text-sm sm:text-3xl active:scale-95 transition-all duration-200 ease-in-out
                            bg-gray-100 sm:max-w-[100px] sm:min-h-[80px]"
                        type="number"
                        value={cartData.quantity}
                    />
                </div>
                <div className="">
                    <img onClick={() => {removeProductFromCart(cartData.id, cartData.size)}}
                        className="lg:w-8 sm:w-16 cursor-pointer active:scale-95 transition-all 
                            duration-200 ease-in-out hover:scale-105" 
                        src={trashIcon} alt="Remove" />
                </div>
            </section>
        </>
    )
}