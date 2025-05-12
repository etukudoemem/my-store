import Line from "../components/Line";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";


export default function Cart() {

    const { cartProduct, products } = useContext(cartContext)

    const isCartProduct = cartProduct.length > 0

    const cartItems = cartProduct.map((item, id) => {
        for (let index = 0; index < products.length; index++) {
            if (products[index].id === item.id) {
                return <CartItem 
                            key={id}
                            productData={products[index]}
                            cartData={item}
                        />
                
                
            }   
        }
    })


    return (
        <>
            <Line />
            {isCartProduct ? (<main className="mt-16">
                <h2 className="flex items-center text-xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                            YOUR
                    </span> 
                    <p>CART</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                
                <section>
                    {cartItems}
                </section>
            <Line />   
                <CartTotal />
            </main>) : 
             (<div className="flex items-center justify-center">
                <h2 className="flex items-center justify-center text-3xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                            YOUR CART IS EMPTY
                    </span> 
                </h2>
             </div>)}
        </>
    )
}