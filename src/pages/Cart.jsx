import Line from "../components/Line";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {

    const { cartProduct, products, getCartTotal, getProductToOrder } = useContext(cartContext)

    const shippingCost = 10.00

    const getTotal = getCartTotal()

    const total = (parseInt(getTotal) + shippingCost)

    const navigate = useNavigate()

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
                <CartTotal>
                    <section className="w-full mt-12 flex flex-col">
                        <div className="min-w-[40%] self-end">
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
                        <button onClick={() => {navigate("cart/place-order")}}
                            className="min-w-58 min-h-11 bg-black text-white text-base
                                mt-8 mb-8 text-sm font-semibold cursor-pointer self-end">
                            PROCEED TO CHECKOUT
                        </button>
                    </section>
                </CartTotal>
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