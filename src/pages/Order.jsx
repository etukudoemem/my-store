import OrderItem from "../components/OrderItem"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import Line from "../components/Line"
import { ToastModal } from "../modals/ToastModal"
import checkMarkIcon from "../assets/checkmark.png"


export default function Order() {

    const { orderedProduct, products, clearOrder, modal } = useContext(storeContext)

    const isOrders = orderedProduct.length > 0

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
        })

    return (
        <>
            {modal.orderToast && 
                <ToastModal>
                    <img src={checkMarkIcon} alt="checkmark" width={35}/>
                    <p className="text-lg text-gray-500 font-medium">
                        Order Placed Successfully
                    </p>
                </ToastModal>}
            {isOrders ? (<main className="mt-16">
                <h2 className="flex items-center text-2xl font-medium mb-4 mt-8 gap-2">
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
                        className="min-w-50 min-h-11 bg-gray-800 text-white
                            mt-8 mb-8 text-sm font-semibold cursor-pointer self-end 
                            hover:scale-103 border-1 border-gray-400 shadow-md
                            active:scale-98 transition-all duration-200 ease-in-out">
                        CLEAR ORDER
                    </button>
                </div>
            </main> )
            : (<div className="flex items-center justify-center collections w-full h-[50vh]">
                <h2 className="flex items-center justify-center text-3xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500">
                        YOU HAVE NO ORDERS
                    </span> 
                </h2>
             </div>)}
        </>
    )
}