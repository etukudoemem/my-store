import trashIcon from "../assets/trash.png"
import { Line } from "./Line"
import { storeContext } from "../contexts/storeContext"
import { useContext } from "react";


export const CartItem = ({ productData, cartData }) => {
    
    const { removeProductFromCart, updateProductQuantity } = useContext(storeContext);

    return (
        <>
            <Line />
            <section className="flex items-center justify-between mb-2 collections">
                <div className="flex gap-7 min-w-[400px]">
                    <div className=" min-w-[105px] max-h-[120px] bg-gray-200">
                        <img className="justify-self-start min-w-[105px] h-[120px]" 
                            src={productData.image[0]} alt="product image" />
                    </div>
                    <div className="">
                        <h3 className="text-md mb-3 text-gray-600">
                            {productData.name}
                        </h3>
                        <div className="flex gap-y-2 flex-col">
                            <div className="max-w-[120px] max-h-[35px] py-2 px-2 bg-gray-100 border-0 
                                    border-gray-400 flex items-center justify-center cursor-pointer">
                                <span className="text-gray-600 mr-1">Price: </span> ${productData.price}
                            </div>
                            <div className="max-w-[120px] max-h-[35px] py-2 px-2 bg-gray-100 border-0 
                                    border-gray-400 flex items-center justify-center cursor-pointer">
                                <span className="text-gray-600 mr-1">Size: </span> {cartData.size}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <input onChange={(e) => {updateProductQuantity(e, cartData.id, cartData.size, cartData.quantity)}}
                        className="max-w-[70px] min-h-[38px] border-1 border-gray-300
                            border-solid py-1 px-2 outline-none font-semibold text-gray-500
                            text-md active:scale-95 transition-all duration-200 ease-in-out
                            bg-gray-100"
                        type="number"
                        value={cartData.quantity}
                    />
                </div>
                <div className="">
                    <img onClick={() => {removeProductFromCart(cartData.id, cartData.size)}}
                        className="w-8 cursor-pointer active:scale-95 transition-all 
                            duration-200 ease-in-out hover:scale-105" 
                        src={trashIcon} alt="Remove" />
                </div>
            </section>
        </>
    )
}