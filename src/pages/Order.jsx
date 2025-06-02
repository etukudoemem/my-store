import OrderItem from "../components/OrderItem"
import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import Line from "../components/Line"
import Accordion from "../components/Accordion"


export default function Order() {

    const { orderedProduct, products } = useContext(cartContext)

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
            <Line />
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
            </main> )
            : (<div className="flex items-center justify-center">
                <h2 className="flex items-center justify-center text-3xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                            YOU HAVE NO ORDERS
                    </span> 
                </h2>
             </div>)}
        </>
    )
}