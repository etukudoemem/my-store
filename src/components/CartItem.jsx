import trashIcon from "../assets/trash.png"
import Line from "./Line"
import { storeContext } from "../contexts/storeContext"
import { useContext } from "react"


export default function CartItem({ productData, cartData }) {
    
const { removeProductFromCart, updateProductQuantity } = useContext(storeContext)


    return (
        <>
            <Line />
            <section className="flex items-center mb-2 collections">
                <div className="flex gap-7 pr-40">
                    <div className=" min-w-[90px] max-h-[100px] bg-gray-200">
                        <img className="justify-self-start min-w-[90px] h-[100px]" src={productData.image[0]} alt="" />
                    </div>
                    <div>
                        <h3 className="text-md mb-3 text-gray-600">
                            {productData.name}
                        </h3>
                        <div className="flex gap-6 items-center">
                            <p className="text-sm font-semibold">${productData.price}</p>
                            <div className="min-w-[auto] max-h-[40px] py-2 px-4 bg-gray-100 border-1 
                                border-gray-400 flex items-center justify-center cursor-pointer">
                                {cartData.size}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-40">
                    <input onChange={(e) => {updateProductQuantity(e, cartData.id, cartData.size, cartData.quantity)}}
                        className="max-w-[80px] min-h-[40px] border-1 border-gray-300
                        border-solid py-1 px-2 outline-none font-semibold text-gray-500
                        text-md active:scale-95 transition-all duration-200 ease-in-out" 
                        type="number"
                        value={cartData.quantity}
                    />
                </div>
                <div className="pl-80">
                    <img onClick={() => {removeProductFromCart(cartData.id, cartData.size)}}
                        className="w-8 cursor-pointer active:scale-95 transition-all 
                        duration-200 ease-in-out hover:scale-105" 
                        src={trashIcon} alt="Remove" />
                </div>
            </section>
        </>
    )
}