import { cartContext } from "../contexts/cartContext";
import { useContext, useEffect } from "react";
import Login from "./Login";
import { useNavigate } from "react-router";



export default function Profile() {

    const { isLogged } = useContext(cartContext)

    const navigate = useNavigate()

    function handleProfile () {
        if (isLogged) {
            return
        } else {
            navigate("login")
        }
    }

    useEffect(() => {
        handleProfile()
    }, [])

    return (
        <>
            <h1 className="text-3xl font-medium text-gray-500 mb-16">
                Welcome to your Profile
            </h1>
            {/* {isLogged || <Login />} */}
        </>
    )
}