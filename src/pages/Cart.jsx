import { Line } from "../components/Line";
import { CartItem } from "../components/CartItem";
import { CartTotal } from "../components/CartTotal";
import { useContext } from "react";
import { storeContext } from "../contexts/storeContext";
import { useNavigate, Link } from "react-router-dom";


export const Cart = () => {

    const { cartProduct, products, getCartTotal, setStorage, getStorage } = useContext(storeContext);

    const shippingCost = 10.00;

    const getTotal = getCartTotal();

    const total = (parseInt(getTotal) + shippingCost);

    const navigate = useNavigate();

    const isCartProduct = cartProduct.length > 0;

    const cartItems = cartProduct.map((item, id) => {
        for (let index = 0; index < products.length; index++) {
            if (products[index].id === item.id) {
                return <CartItem 
                            key={id}
                            productData={products[index]}
                            cartData={item}
                        />   
            };   
        };
    });


    return (
        <>
            {isCartProduct ? (<main className="mt-16 lg:mb-0 sm:mb-50">
                <h2 className="flex items-center lg:text-xl sm:text-6xl font-medium mb-10 mt-8 gap-2">
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
                        <div className="lg:min-w-[40%] lg:self-end sm:min-w-[100%] sm:self-center lg:mt-0 sm:mt-5">
                            <h2 className="flex items-center lg:text-2xl sm:text-5xl font-medium mb-10 mt-8 gap-2">
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
                                    <p className="lg:font-semibold sm:font-normal">$ {getTotal}</p>
                                </div>
                                <div className="min-w-full h-[0.5px] bg-gray-200"></div>
                                <div className="flex justify-between mt-3 lg:mb-0 sm:mb-4">
                                    <p className="text-gray-700 lg:font-semibold sm:font-normal mb-2">
                                        Shipping Fee
                                    </p>
                                    <p className="lg:font-semibold sm:font-normal">$ {shippingCost.toFixed(2)}</p>
                                </div>
                                <div className="min-w-full h-[0.5px] bg-gray-200"></div>
                                <div className="flex justify-between mt-3 lg:mb-0 sm:mb-4">
                                    <p className="text-gray-700 font-bold mb-2">
                                        Total
                                    </p>
                                    <p className="font-semibold">$ {Number(total).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={"place-order"} className="self-end">
                            <button className="lg:min-w-58 sm:min-w-140 lg:min-h-11 sm:min-h-30 bg-gray-100 text-gray-600 
                                lg:mt-8 sm:mt-18 mb-8 lg:text-sm font-semibold cursor-pointer border-1 border-gray-400 
                                active:scale-95 transition-all duration-200 ease-in-out shadow-md sm:text-4xl
                                hover:scale-103">
                                PROCEED TO PLACE ORDER
                            </button>
                        </Link>
                    </section>
                </CartTotal>
            </main>) : 
             (<div className="flex items-center justify-center collections w-full h-[50vh] ">
                <h2 className="flex items-center justify-center text-3xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500 text-left">
                        YOUR CART IS EMPTY
                    </span> 
                </h2>
             </div>)}    
        </>
    )
}