import Logo from "./Logo"
import { NavLink, Link } from "react-router-dom"
import searchIcon from "../assets/search-icon.png"
import profileIcon from "../assets/profile-icon.png"
import shoppingBagIcon from "../assets/shopping-bag-icon.png"
import { cartContext } from "../contexts/cartContext"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"



export default function NavBar() {

    const navigate = useNavigate()
    

    const { getCartQuantity, isSearch, setIsSearch } = useContext(cartContext)
    const cartQuantity = getCartQuantity()

    function handleSearch () {
        navigate("/collection")
        setIsSearch(!isSearch)
    }

    useEffect(() => {
        handleSearch
    }, [isSearch])

    // console.log(search)

    return (
        <>
            <div className="flex justify-between items-center h-14 w-full">
                
                <Logo />
                <nav className="flex items-center" >
                    <ul className="flex justify-between items-center w-[450px] 
                        font-medium text-sm text-gray-700">
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/collection">COLLECTION</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                        <li className="flex justify-center items-center border-solid rounded-3xl 
                                border-gray-300 border-1 text-[0.65rem] w-[110px] h-[35px] ">
                            <Link to="/admin">Admin Panel</Link>
                        </li>
                    </ul>
                </nav>
                    
                 <div className="flex justify-between w-30" >
                    <div className="w-[30px] cursor-pointer">
                        <img onClick={() => {handleSearch()}} src={searchIcon} alt="search" />
                    </div>
                    <div className="w-[30px] relative group">
                        <Link to={"/profile"}>
                            <img src={profileIcon} alt="" className="" />
                            <div className="">
                                <ul className="font-medium text-gray-700 text-white
                                    flex flex-col justify-center item-center hidden absolute
                                    w-[180px] h-[100px] bg-gray-800 border-1 px-4 py-4 border-gray-200 right-1 top-7
                                    group-hover:block">
                                    <Link to={"cart/cart/place-order/order"}><li className="w-full h-[50%] hover:text-gray-300">Orders</li></Link>
                                    <Link to={"profile/login"}><li className="w-full h-[50%] hover:text-gray-300">Logout</li></Link>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div className="w-[30px] relative">
                        <Link to={"/cart"}>
                            <img src={shoppingBagIcon} alt="" />
                            <div className="bg-gray-700 absolute bottom-[0] right-[0] 
                                rounded-full w-4 h-4 flex justify-center items-center text-[8px] 
                                text-white font-semibold">
                                    {cartQuantity}
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}