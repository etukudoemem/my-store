import CartTotal from "../components/CartTotal";
import Line from "../components/Line";
import { useContext } from "react";
import { storeContext } from "../contexts/storeContext";
import { useNavigate } from "react-router-dom";


export default function PlaceOrder() {

    const navigate = useNavigate()

    const { getCartTotal, getProductToOrder, paymentMethod, setPaymentMethod, cartProduct } = useContext(storeContext);

    const shippingCost = 10.00

    const getTotal = getCartTotal()

    const total = (parseInt(getTotal) + shippingCost)

    // useEffect(() => {
    //     console.log(orderedProduct)
    // }, [orderedProduct])


    return (
        <>
            {cartProduct.length > 0 ? (<section className="flex justify-between mt-10 w-full">
                <div className="w-1/2 flex flex-col gap-4 leftHeader">
                    <h2 className="flex items-center text-2xl font-medium mb-6 mt-8 gap-2">
                            <span className="text-gray-500 text-left">
                                    DELIVERY
                            </span> 
                            <p>INFORMATION</p> 
                            <div className="w-12 h-[2.5px] bg-black"></div>
                    </h2>
                    <div className="flex gap-3 w-4/5 text-gray-600 ">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="First name"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Last name"
                        />
                    </div>
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="email"
                            required
                            placeholder="Email address"
                    />
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Street"
                    />
                    <div className="flex gap-3 w-4/5 text-gray-600 ">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="City"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="State"
                        />
                    </div>
                    <div className="flex gap-3 w-4/5 text-gray-600 ">
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Zipcode"
                        />
                        <input className="w-1/2 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="text"
                            required
                            placeholder="Country"
                        />
                    </div>
                    <input className="w-4/5 h-[38px] outline-none border-[1.5px]
                            border-gray-300 rounded placeholder-gray-400 px-3 
                            active:scale-98 transition-all duration-200 ease-in-out"
                            type="number"
                            required
                            placeholder="Phone"
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-4 pl-5">
                    <CartTotal>
                        <section className="w-[95%] flex flex-col ml-6">
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
                                <div className="flex gap-5 w-full">
                                    <div className="min-w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-2 py-4 font-medium
                                            flex items-center gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className=""
                                            type="radio"
                                            name="Paystack"
                                            checked={paymentMethod === "paystack"}
                                        />
                                        <p className="px-2">PAYSTACK</p>
                                    </div>
                                    <div className="w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-2 py-4 font-medium
                                            flex items-center gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className=""
                                            type="radio" 
                                            name="Stripe"
                                            checked={paymentMethod === "stripe"}
                                        />
                                        <p className="px-2">STRIPE</p>
                                            
                                    </div>
                                    <div className="w-auto h-[38px] outline-none border-[1.5px]
                                            border-gray-300 placeholder-gray-200 px-2 py-4 font-medium
                                            flex items-center gap-1 bg-gray-100 rounded">
                                        <input onChange={(e) => setPaymentMethod(e.target.name)}
                                            className=""
                                            type="radio"
                                            name="Cash On Delivery"
                                            checked={paymentMethod === "cash on delivery"} 
                                        />
                                        <p className="px-2">CASH ON DELIVERY</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => {getProductToOrder()}}
                                className="min-w-58 min-h-11 bg-gray-100 text-gray-600 text-base
                                    mt-8 mb-8 text-sm font-semibold cursor-pointer self-end
                                    active:scale-95 transition-all duration-100 ease-in-out 
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