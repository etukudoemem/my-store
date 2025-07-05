import Logo from "./Logo"
import { NavLink, Link, useNavigate } from "react-router-dom"
import searchIcon from "../assets/search-icon.png"
import profileIcon from "../assets/profile-icon.png"
import shoppingBagIcon from "../assets/shopping-bag-icon.png"
import { storeContext } from "../contexts/storeContext"
import { useContext, useEffect } from "react"


export default function NavBar() {

    const navigate = useNavigate()

    const { getCartQuantity, isSearch, setIsSearch, logOutAttempt, isLogged } = useContext(storeContext)

    const cartQuantity = getCartQuantity()

    function handleSearch () {
        navigate("collection")
        setIsSearch(!isSearch)
    }

    useEffect(() => {
        handleSearch
    }, [isSearch])

    // console.log(search)

    return (
        <>
            <section className="flex justify-between items-center h-14 w-full navbar 
                        shadow-md px-[2rem] ">
                        
                <Logo />
                <nav className="flex items-center" >
                    <ul className="flex justify-between items-center w-[500px] 
                        text-sm text-gray-500 font-medium">
                        <NavLink to="/" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                HOME
                            </li>
                        </NavLink>
                        <NavLink to="collection" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                COLLECTION
                            </li>
                        </NavLink>
                        <NavLink to="about" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                ABOUT
                            </li>
                        </NavLink>
                        <NavLink to="contact" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                CONTACT
                            </li>
                        </NavLink>
                        <Link to="admin" className="flex justify-center items-center border-solid rounded-3xl 
                                border-gray-300 border-1 text-[0.65rem] w-[110px] h-[35px]
                                active:scale-85 transition-all duration-100 ease-in-out">
                            <li>
                                Admin Panel
                            </li>
                        </Link>
                    </ul>
                </nav>

                <div className="flex justify-between w-30" >
                    <div onClick={() => {handleSearch()}}
                        className="w-[30px] cursor-pointer active:scale-85 transition-all
                        duration-100 ease-in-out">
                        <img src={searchIcon} alt="search" />
                    </div>

                    <div className="w-[30px] relative group">
                        <Link to={"login"}><img src={profileIcon} alt="" className="cursor-pointer
                            active:scale-85 transition-all duration-100 ease-in-out"/>
                        </Link>
                        <ul className={`font-medium text-gray-800 flex flex-col justify-center rounded-xs
                            item-center hidden absolute w-[190px] h-[auto] bg-gray-100 border-0 shadow-inset
                            border-gray-100 right-1 top-7 ${isLogged && "group-hover:block expand"}`}>
                    
                            <li onClick={() => {navigate("orders")}}
                                className="w-full h-[auto] hover:text-gray-100 mb-0 hover:bg-slate-700
                                transition-all duration-400 ease-in-out cursor-pointer active:scale-95
                                px-4 pt-3 pb-2 rounded-t-xs border-b-1 border-gray-200 hover:scale-102">
                                Orders
                            </li>
                        
                            <li onClick={() => {logOutAttempt()}}
                                className="w-full h-[auto] hover:text-gray-100 hover:bg-slate-700
                                transition-all duration-400 ease-in-out cursor-pointer active:scale-95
                                px-4 pb-3 pt-2 rounded-b-xs hover:scale-102">
                                Logout
                            </li>
                        </ul>
                    </div>
                    <Link to="cart" className="active:scale-85 transition-all duration-100 ease-in-out">
                        <div className="w-[30px] relative cursor-pointer">
                            <img src={shoppingBagIcon} alt="" />
                            <div className="bg-gray-700 absolute bottom-[0] right-[0] 
                                rounded-full w-4 h-4 flex justify-center items-center text-[8px] 
                                text-white font-semibold focus:scale-105 transtion-all duration-200
                                ease-in-out">
                                    {cartQuantity}
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}