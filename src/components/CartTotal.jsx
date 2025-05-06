import { cartContext } from "../contexts/cartContext";
import { useContext } from "react";


export default function CartTotal() {

    const { getCartTotal } = useContext(cartContext)

    const shippingCost = 10.00

    const getTotal = getCartTotal()

    const total = (parseInt(getTotal) + shippingCost)

    return (
        <>
            <section className="w-full flex flex-col mt-12">
                <div className="min-w-[450px] self-end">
                    <h2 className="flex items-center text-xl font-medium mb-10 mt-8 gap-2">
                            <span className="text-gray-500 text-left">
                                    CART
                            </span> 
                            <p>TOTALS</p> 
                            <div className="w-12 h-[2.5px] bg-black"></div>
                    </h2>
                    <div className="text-sm">
                        <div className="flex justify-between mt-3">
                            <p className="text-gray-700 font-semibold mb-2">
                                Subtotal
                            </p>
                            <p className="font-semibold">$ {getTotal}</p>
                        </div>
                        <div className="min-w-full h-[0.5px] bg-gray-200"></div>
                        <div className="flex justify-between mt-3">
                            <p className="text-gray-700 font-semibold mb-2">
                                Shipping Fee
                            </p>
                            <p className="font-semibold">$ {shippingCost.toFixed(2)}</p>
                        </div>
                        <div className="min-w-full h-[0.5px] bg-gray-200"></div>
                        <div className="flex justify-between mt-3">
                            <p className="text-gray-700 font-bold mb-2">
                                Total
                            </p>
                            <p className="font-semibold">$ {Number(total).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <button className="min-w-58 min-h-11 bg-black text-white text-base
                            mt-8 mb-8 text-sm font-semibold cursor-pointer self-end">
                        PROCEED TO CHECKOUT
                </button>
            </section>
        </>
    )
}