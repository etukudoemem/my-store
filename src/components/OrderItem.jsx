import Line from "./Line";

export default function OrderItem({ productData, orderData}) {

    return (
        <>
            <section>
                <div className="flex items-center mb-2">
                    <div className="flex gap-7 pr-40">
                        <div className=" min-w-[70px] max-h-[90px] bg-gray-200">
                            <img className="justify-self-start max-w-[85px] h-[90px]" src={productData.image[0]} alt="" />
                        </div>
                        <div>
                            <h3 className="text-md font-semibold mb-3 text-gray-600">
                                {productData.name}
                            </h3>
                            <div className="flex gap-3 items-center">
                                <div className="min-w-[auto] max-h-[40px] py-2 px-4 bg-gray-100 border-1 
                                    border-gray-300 flex items-center justify-center cursor-pointer rounded
                                    text-sm font-semibold text-gray-600">
                                    Price: ${productData.price}
                                </div>
                                <div className="min-w-[auto] max-h-[40px] py-2 px-4 bg-gray-100 border-1 
                                    border-gray-300 flex items-center justify-center cursor-pointer rounded
                                    text-sm font-semibold text-gray-600">
                                    Quantity: {orderData.quantity}
                                </div>
                                <div className="min-w-[auto] max-h-[40px] py-2 px-4 bg-gray-100 border-1 
                                    border-gray-300 flex items-center justify-center cursor-pointer rounded
                                    text-sm font-semibold text-gray-600">
                                    Size: {orderData.size}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-40">
                        <div className="flex justify-center items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-0.5"></div>
                            <p className="font-semibold text-gray-600">Packing</p>
                        </div>
                    </div>
                    <div className="pl-80">
                        <div className="w-auto h-10 border-1 border-gray-300 rounded">
                            <p className="font-semibold text-gray-600 text-sm py-2 px-5">Track Order</p>
                        </div>
                    </div>
                </div>
            <Line />
            </section>
        </>
    )
}