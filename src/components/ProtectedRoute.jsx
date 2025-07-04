import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import { Navigate } from "react-router-dom"
import PlaceOrder from "../pages/PlaceOrder"
import { Modal } from "../modals/Modal"
import Cart from "../pages/Cart"


export const ProtectedRoute = ({ children }) => {

    const { cartProduct } = useContext(storeContext)
    
    return (
        
            cartProduct.length > 0 ? children : <Navigate to="/" replace/>
        
    )
}