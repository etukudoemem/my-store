import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js"
import { useNavigate } from "react-router-dom";



export const cartContext = createContext()

export default function CartContextProvider ({ children }) {
    
    const [cartProduct, setCartProduct] = useState([])

    const [orderedProduct, setOrderedProduct] = useState([])

    const [search, setSearch] = useState("")

    const [isSearch, setIsSearch] = useState(false)

    const [hasAccount, setHasAccount] = useState(true)

    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    // console.log(cartProduct)

    function getProductToCart(productId, selectedSize) { 

        if (!selectedSize) {
            alert("Choose preferred size.")
            return
        }
        
        const isInCart = cartProduct.find((product) => 
            product.id === productId && product.size === selectedSize)
        if (isInCart) {
            setCartProduct (
              cartProduct.map((item) => 
                item.id === productId && item.size === selectedSize ? 
                  {...item, quantity: item.quantity + 1 } : item 
             )
          )
          } else {
              setCartProduct([ 
                {id: productId, size: selectedSize, quantity: 1}, ...cartProduct]
              )
          }
              
    }

    function removeProductFromCart (productId, selectedSize) {
        const removedProduct = cartProduct.find((item) => 
            item.id === productId && item.size === selectedSize)
    
        setCartProduct(cartProduct.filter((item) => item !== removedProduct
            ))   
    }

    function updateProductQuantity (e, productId, selectedSize) {
        if (e.target.value < 1) {
            removeProductFromCart(productId, selectedSize) 

        } else {
            setCartProduct (
                cartProduct.map((item) => 
                  item.id === productId && item.size === selectedSize ? 
                    {...item, quantity: parseInt(e.target.value) } : item 
               )
            )
        }   
    }

    function getCartQuantity () {

        let cartTotalQuantity = 0
        for (let index = 0; index < cartProduct.length; index++) {
            cartTotalQuantity = cartTotalQuantity + parseInt(cartProduct[index].quantity)
        }
        return cartTotalQuantity
    }

    function getCartTotal () {
        let cartSubTotal = 0
        cartProduct.map((item) => {
            for (let index = 0; index < products.length; index++) {
                if (products[index].id === item.id) {
                    cartSubTotal = cartSubTotal + (products[index].price * item.quantity)
                }   
            }
        })
        return cartSubTotal.toFixed(2)
    }

    function getProductToOrder () {
            setOrderedProduct([...cartProduct, ...orderedProduct])
            setCartProduct([])
            navigate("cart/cart/place-order/order")            
        }
            
    
  const contextValues = {
    getProductToCart, 
    cartProduct, 
    setCartProduct, 
    products, 
    getCartTotal, 
    removeProductFromCart,
    updateProductQuantity,
    getCartQuantity,
    search,
    setSearch,
    isSearch,
    setIsSearch,
    hasAccount,
    isLogged,
    orderedProduct,
    setOrderedProduct,
    getProductToOrder
}


    return (
        <cartContext.Provider value={contextValues}>
            {children}
        </cartContext.Provider >
    )
}

 
