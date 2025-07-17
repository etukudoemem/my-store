import { OrderItem } from "../components/OrderItem"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import { Line } from "../components/Line"
import { ToastModal } from "../modals/ToastModal"
import checkMarkIcon from "../assets/checkmark.png"


export const Order = () => {

    const { orderedProduct, products, clearOrder, modal } = useContext(storeContext);

    const isOrders = orderedProduct.length > 0;

    const orderedItems = orderedProduct.map((item, id) => {
            for (let index = 0; index < products.length; index++) {
                if (products[index].id === item.id) {
                    return <OrderItem 
                                key={id}
                                productData={products[index]}
                                orderData={item}
                            />   
                }   
            }
        });

    return (
        <>
            {modal.orderToast && 
                <ToastModal>
                    <img className="lg:w-8 sm:w-20"
                        src={checkMarkIcon} alt="checkmark" width={35}/>
                    <p className="lg:text-lg sm:text-5xl text-gray-500 font-medium">
                        Order Placed Successfully
                    </p>
                </ToastModal>}
            {isOrders ? (<main className="mt-16">
                <h2 className="flex items-center lg:text-2xl sm:text-6xl font-medium lg:mb-4 sm:mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                        MY
                    </span> 
                    <p>ORDERS</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <Line />
                <section>
                    {orderedItems}
                </section>
                <div className="flex justify-end w-full">
                    <button onClick={() => {clearOrder()}}
                        className="lg:min-w-58 sm:min-w-120 lg:min-h-11 sm:min-h-30 bg-gray-900 text-white
                            lg:mt-8 lg:mb-8 sm:mt-20 sm:mb-85 lg:text-sm sm:text-4xl font-semibold cursor-pointer self-end 
                            hover:scale-103 border-1 border-gray-400 shadow-md
                            active:scale-98 transition-all duration-200 ease-in-out">
                        CLEAR ORDER
                    </button>
                </div>
            </main> )
            : (<div className="flex items-center justify-center collections w-full h-[50vh]">
                <h2 className="flex items-center justify-center lg:text-3xl sm:text-6xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500">
                        YOU HAVE NO ORDERS
                    </span> 
                </h2>
             </div>)}
        </>
    )
}