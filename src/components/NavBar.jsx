import { useState } from "react"
import { Logo } from "./Logo"
import { NavLink, Link, useNavigate } from "react-router-dom"
import searchIcon from "../assets/search-icon.png"
import profileIcon from "../assets/profile-icon.png"
import shoppingBagIcon from "../assets/shopping-bag-icon.png"
import { storeContext } from "../contexts/storeContext"
import { useContext, useEffect } from "react"
import hamburgerMenu from "../assets/hamburger-menu.png"
import closeIcon from "../assets/close-icon2.png"


export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate();

    const { getCartQuantity, isSearch, setIsSearch, logOutAttempt, isLogged } = useContext(storeContext);

    const cartQuantity = getCartQuantity();

    function handleSearch () {
        navigate("collection")
        setIsSearch(!isSearch)
    };

    useEffect(() => {
        handleSearch
    }, [isSearch]);

    return (
        <>
            <section className="flex justify-between items-center h-14 w-full navbar 
                        shadow-md px-[2rem] ">
                <Logo />
                <nav className="flex items-center" >
                    <ul className="lg:flex justify-between items-center w-[500px] 
                        text-sm text-gray-500 font-medium sm:hidden lg:block">
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

                <div className="flex justify-between w-60% sm:gap-x-2" >
                    <div onClick={() => {handleSearch()}}
                        className="w-[30px] cursor-pointer active:scale-85 transition-all
                        duration-100 ease-in-out">
                        <img src={searchIcon} alt="search" />
                    </div>

                    <div className="w-[30px] relative group sm:hidden lg:block">
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
                    <section className="lg:hidden cursor-pointer relative ml-2 flex justify-end">
                        <div onClick={() => setShowMenu(!showMenu)}>
                            <img src={hamburgerMenu} alt="menu" />
                        </div>
                        <ul className={`${showMenu ? "block rightHeader": "hidden"} absolute w-full
                            h-auto bg-gray-100 top-0 shadow-inset rounded-xs border-0
                            text-base font-semibold text-gray-700 flex flex-col border-gray-300 fixed inset-0
                            backdrop-blur`}>
                            <div className="flex justify-end px-2 pt-2">
                                <img onClick={() => setShowMenu(false)}
                                    className="active:scale-95"
                                    src={closeIcon} alt="close" />
                            </div>
                            <div className="flex gap-x-4 items-center px-4 py-2">
                                <Link to={"login"}>
                                    <button onClick={() => setShowMenu(false)}
                                        className="bg-gray-900 px-8 py-2 shadow-sm border-1
                                        border-gray-400 active:scale-102 text-gray-100 text-sm
                                        rounded-sm transition-all duration-200">
                                        {isLogged ? "LOG OUT": "LOGIN"}
                                    </button>
                                </Link>
                                <Link to={"login/signup"}>
                                    <button onClick={() => setShowMenu(false)}
                                        className="bg-gray-100 px-7 py-2 shadow-sm border-1
                                        border-gray-700 active:scale-102 text-gray-900 text-sm
                                        rounded-sm transition-all duration-200">
                                        SIGN UP
                                    </button>
                                </Link>
                            </div>
                            <Link to={"/"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-1 border-gray-200 pb-3 px-4 py-3 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100">
                                    HOME
                                </li>
                            </Link>
                            <Link to={"collection"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-1 border-gray-200 pb-3 px-4 py-3 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100">
                                    COLLECTION
                                </li>
                            </Link>
                            <Link to={"about"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-1 border-gray-200 pb-3 px-4 py-3 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100">
                                    ABOUT
                                </li>
                            </Link>
                            <Link to={"contact"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className=" border-b-1 border-gray-200 pb-3 px-4 py-3 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100">
                                    CONTACT
                                </li>
                            </Link>
                            <Link to={"orders"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="pb-5 px-4 py-3 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100">
                                    ORDERS
                                </li>
                            </Link>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}