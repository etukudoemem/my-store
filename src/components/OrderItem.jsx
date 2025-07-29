import { useContext } from "react";
import { Line } from "./Line";
import { storeContext } from "../contexts/storeContext";


export const OrderItem = ({ productData, orderData}) => {

    const { paymentMethod, orderDate } = useContext(storeContext);

    return (
        <>
            <section className="collections">
                <div className="flex items-center justify-between mb-2 sm:h-60 lg:h-auto">
                    <div className="flex gap-x-7 justify-center items-center">
                        <div className="lg:max-w-[95px] sm:max-w-[150px] min-h-[auto] bg-gray-200">
                            <img className="justify-self-start min-w-[100%] min-h-[100%]" src={productData.image[0]} alt="" />
                        </div>
                        <div>
                            <h3 className="lg:text-base sm:text-4xl lg:mb-1 sm:mb-7 text-gray-600 sm:font-medium 
                                lg:font-normal">
                                {productData.name}
                            </h3>
                            <div className="flex lg:gap-3 sm:gap-6 lg:mb-0 sm:mb-3 items-center lg:mb-0 sm:mb-7">
                                <div className="lg:min-w-[auto] sm:min-w-[190px] lg:min-h-[40px] sm:min-h-[40px] py-2 px-4 bg-gray-100 border-0 
                                    border-gray-300 flex items-center justify-center cursor-pointer
                                    lg:text sm:text-4xl lg:font-semibold text-gray-600">
                                    Price: ${productData.price}
                                </div>
                                <div className="lg:min-w-[auto] sm:min-w-[190px] lg:min-h-[40px] sm:min-h-[50px] py-2 px-4 bg-gray-100 border-0 
                                    border-gray-300 flex items-center justify-center cursor-pointer
                                    lg:text-sm sm:text-4xl lg:font-semibold text-gray-600">
                                    Quantity: {orderData.quantity}
                                </div>
                                <div className="lg:min-w-[auto] sm:min-w-[190px] lg:min-h-[40px] py-2 px-4 bg-gray-100 border-0 
                                    border-gray-300 flex items-center justify-center cursor-pointer
                                    lg:text-sm sm:text-4xl lg:font-semibold text-gray-600">
                                    Size: {orderData.size}
                                </div>
                            </div>
                            <div className="min-w-[auto] max-h-[auto] mt-1
                                flex items-center lg:text-sm sm:text-4xl font-semibold text-gray-600">
                                    Date:<span className="min-w-[auto] max-h-[auto] px-2
                                            flex items-center font-semibold text-gray-400">
                                            {orderDate}
                                        </span>
                            </div>
                            {paymentMethod === "Cash On Delivery" ? (<div className="min-w-[auto] max-h-[auto] mt-1
                                flex items-center text-sm font-semibold text-gray-600">
                                    Method of Payment:<span className="min-w-[auto] max-h-[auto] px-2
                                            flex items-center text-sm font-semibold text-gray-400">
                                            {paymentMethod}
                                        </span>
                            </div>) : ""}
                        </div>
                    </div>
                    <div className="lg:block sm:hidden">
                        <div className="flex justify-center items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-0.5"></div>
                            <p className="font-semibold text-gray-600 lg:text-sm sm:text-3xl">
                                Packing
                            </p>
                        </div>
                    </div>
                    <div className="lg:block sm:hidden">
                        <div className="w-auto h-10 border-1 border-gray-300 rounded">
                            <p className="font-semibold text-gray-600 lg:text-sm sm:text-3xl py-2 px-5">
                                Track Order
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Line />
        </>
    )
}