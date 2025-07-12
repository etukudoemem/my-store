import { CartTotal } from "../components/CartTotal";
import { Line } from "../components/Line";
import { useContext } from "react";
import { storeContext } from "../contexts/storeContext";
import { useNavigate } from "react-router-dom";


export const PlaceOrder = () =>  {

    const navigate = useNavigate();

    const { getCartTotal, getProductToOrder, paymentMethod, setPaymentMethod, cartProduct } = useContext(storeContext);

    const shippingCost = 10.00;

    const getTotal = getCartTotal();

    const total = (parseInt(getTotal) + shippingCost);

    return (
        <>
            {cartProduct.length > 0 ? 
            (<section className="flex lg:justify-between lg:flex-row sm:flex-col mt-10 w-full">
                <div className="lg:w-1/2 sm:w-full flex flex-col lg:gap-4 sm:gap-8 leftHeader">
                    <h2 className="flex items-center lg:text-2xl sm:text-6xl font-medium mb-6 mt-8 gap-2">
                        <span className="text-gray-500 text-left">
                            DELIVERY
                        </span> 
                        <p>INFORMATION</p> 
                        <div className="w-12 h-[2.5px] bg-black "></div>
                    </h2>
                    <div className="flex gap-3 lg:w-4/5 sm:w-full text-gray-600 ">
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="First name"
                        />
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Last name"
                        />
                    </div>
                    <input className="lg:w-4/5 sm:w-full lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl 
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="email"
                            required
                            placeholder="Email address"
                    />
                    <input className="lg:w-4/5 sm:w-full lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl 
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            placeholder="Street"
                    />
                    <div className="flex gap-3 lg:w-4/5 sm:w-full text-gray-600 ">
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="City"
                        />
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="State"
                        />
                    </div>
                    <div className="flex gap-3 lg:w-4/5 sm:w-full text-gray-600 ">
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Zipcode"
                        />
                        <input className="w-1/2 lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Country"
                        />
                    </div>
                    <input className="lg:w-4/5 sm:w-full lg:h-[38px] sm:h-[100px] lg:outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 lg:px-3 sm:px-6 lg:text-base sm:text-4xl
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="number"
                            required
                            placeholder="Phone"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full flex flex-col gap-4 lg:pl-5 lg:mb-0 sm:mb-60">
                    <CartTotal>
                        <section className="lg:w-[95%] flex flex-col lg:ml-6">
                            <div className="min-w-full lg:mb-0 sm:mb-10">
                                <h2 className="flex items-center lg:text-2xl sm:text-6xl font-medium lg:mb-10 lg:mt-8 
                                    gap-2 sm:mb-14 sm:mt-24">
                                    <span className="text-gray-500 text-left">
                                        CART
                                    </span> 
                                    <p>TOTALS</p> 
                                    <div className="w-12 h-[2.5px] bg-black"></div>
                                </h2>
                                <div className="lg:text-sm sm:text-4xl">
                                    <div className="flex justify-between mt-3 lg:mb-0 sm:mb-4">
                                        <p className="text-gray-700 lg:font-semibold sm:font-normal mb-2">
                                            Subtotal
                                        </p>
                                        <p className="lg:font-semibold">$ {getTotal}</p>
                                    </div>
                                    <div className="min-w-full h-[0.5px] bg-gray-200"></div>
                                    <div className="flex justify-between mt-3 lg:mb-0 sm:mb-4">
                                        <p className="text-gray-700 lg:font-semibold sm:font-normal mb-2">
                                            Shipping Fee
                                        </p>
                                        <p className="lg:font-semibold">$ {shippingCost.toFixed(2)}</p>
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
                                <h2 className="flex items-center lg:text-lg sm:text-6xl font-medium lg:mb-4 gap-2
                                    sm:mt-8 sm:mb-10">
                                        <span className="text-gray-500 text-left">
                                            PAYMENT
                                        </span> 
                                        <p>METHOD</p> 
                                        <div className="w-13 h-[2.5px] bg-black"></div>
                                </h2>
                                <div className="flex lg:gap-5 sm:gap-10 w-full">
                                    <div className="min-w-auto lg:h-[38px] sm:h-[90px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 lg:px-2 sm:px-4 py-4 font-medium
                                            flex items-center gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className="sm:scale-200 lg:scale-100 sm:mr-4"
                                            type="radio"
                                            name="Paystack"
                                            checked={paymentMethod === "paystack"}
                                        />
                                        <p className="lg:text-base sm:text-3xl lg:px-2">
                                            PAYSTACK
                                        </p>
                                    </div>
                                    <div className="min-w-auto lg:h-[38px] sm:h-[90px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 lg:px-2 sm:px-4 py-4 font-medium
                                            flex items-center gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className="sm:scale-200 lg:scale-100 sm:mr-4"
                                            type="radio" 
                                            name="Stripe"
                                            checked={paymentMethod === "stripe"}
                                        />
                                        <p className="lg:text-base sm:text-3xl lg:px-2">STRIPE</p>
                                            
                                    </div>
                                    <div className="min-w-auto lg:h-[38px] sm:h-[90px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 lg:px-2 sm:px-4 py-4 font-medium
                                            flex items-center lg:gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className="sm:scale-200 lg:scale-100 sm:mr-4"
                                            type="radio"
                                            name="Cash On Delivery"
                                            checked={paymentMethod === "cash on delivery"} 
                                        />
                                        <p className="lg:text-base sm:text-3xl lg:px-2">CASH ON DELIVERY</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => {getProductToOrder()}}
                                className="lg:min-w-58 sm:min-w-120 lg:min-h-11 sm:min-h-30 bg-gray-100 text-gray-600 text-base
                                    lg:mt-8 sm:mt-18 lg:text-sm font-semibold cursor-pointer self-end
                                    active:scale-95 transition-all duration-100 ease-in-out sm:text-4xl
                                    hover:scale-103 border-1 border-gray-400 shadow-md">
                                PLACE ORDER
                            </button>
                        </section>
                    </CartTotal>
                </div>
            </section> )
            :
            (<div className="flex items-center justify-center collections w-full h-[50vh]">
                <h2 className="flex items-center justify-center text-3xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                        YOU HAVE NO ITEM(S) IN YOUR CART TO ORDER.
                    </span> 
                </h2>
             </div>)}
        </>
    )
}