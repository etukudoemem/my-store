import OrderItem from "../components/OrderItem"
import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import Line from "../components/Line"
import Accordion from "../components/Accordion"


export default function Order() {

    const { orderedProduct, products, cartProduct } = useContext(cartContext)

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
            <main className="mt-16">
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
            </main>
        </>
    )
}