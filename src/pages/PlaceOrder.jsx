import CartTotal from "../components/CartTotal";
import Line from "../components/Line";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {

    const { getCartTotal } = useContext(cartContext)

    const shippingCost = 10.00

    const getTotal = getCartTotal()

    const total = (parseInt(getTotal) + shippingCost)

    const navigate = useNavigate()


    return (
        <>
            <Line />
            <section className="flex justify-between mt-10 w-full">
                <div className="w-1/2 flex flex-col gap-4">
                    <h2 className="flex items-center text-2xl font-medium mb-6 mt-8 gap-2">
                            <span className="text-gray-500 text-left">
                                    DELIVERY
                            </span> 
                            <p>INFORMATION</p> 
                            <div className="w-12 h-[2.5px] bg-black"></div>
                    </h2>
                    <div className="flex gap-3 w-4/5 text-gray-600 font-medium">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="First name"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            font-medium"
                            type="email"
                            placeholder="Email address"
                    />
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            font-medium"
                            type="text"
                            placeholder="Street"
                    />
                    <div className="flex gap-3 w-4/5 text-gray-600 font-medium">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="City"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="State"
                        />
                    </div>
                    <div className="flex gap-3 w-4/5 text-gray-600 font-medium">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="Zipcode"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3"
                            type="text"
                            placeholder="Country"
                        />
                    </div>
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            font-medium"
                            type="number"
                            placeholder="Phone"
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-4 pl-5">
                    <CartTotal>
                        <section className="w-[95%] mt-0 flex flex-col ml-6">
                            <div className="min-w-full">
                                <h2 className="flex items-center text-2xl font-medium mb-10 mt-8 gap-2">
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
                            <div className="">
                                <h2 className="flex items-center text-lg font-medium mb-4 mt-8 gap-2">
                                        <span className="text-gray-500 text-left">
                                            PAYMENT
                                        </span> 
                                        <p>METHOD</p> 
                                        <div className="w-13 h-[2.5px] bg-black"></div>
                                </h2>
                                <div className="flex gap-12 w-full">
                                    <div className="min-w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-4 font-medium
                                            flex items-center gap-2">
                                        <input className=""
                                            type="radio" />
                                            <p className="px-4">PAYSTACK</p>
                                    </div>
                                    <div className="w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-3 font-medium
                                            flex items-center gap-2">
                                        <input className=""
                                            type="radio" />
                                            <p className="px-4">STRIPE</p>
                                    </div>
                                    <div className="w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-3 font-medium
                                            flex items-center gap-2">
                                        <input className=""
                                            type="radio" />
                                            <p className="px-4">CASH ON DELIVERY</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => {navigate("place-order")}}
                                className="min-w-58 min-h-11 bg-black text-white text-base
                                    mt-8 mb-8 text-sm font-semibold cursor-pointer self-end">
                                PLACE ORDER
                            </button>
                        </section>
                    </CartTotal>
                </div>
            </section>
        </>
    )
}