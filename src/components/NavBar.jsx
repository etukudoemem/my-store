import { useState } from "react"
import { Logo } from "./Logo"
import { NavLink, Link, useNavigate } from "react-router-dom"
import searchIcon from "../assets/search-icon2.png"
import profileIcon from "../assets/profile-icon.png"
import shoppingBagIcon from "../assets/shopping-bag-icon.png"
import { storeContext } from "../contexts/storeContext"
import { useContext, useEffect } from "react"
import hamburgerMenu from "../assets/hamburger-menu2.png"
import closeIcon from "../assets/close-icon4.png"


export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate();

    const { getCartQuantity, isSearch, setIsSearch, logOutAttempt, isLogged, orderedProduct } = useContext(storeContext);

    const cartQuantity = getCartQuantity();

    const menuLog = () => {
        isLogged ? logOutAttempt() : navigate("login");
        setShowMenu(false);
    };

    const handleSearch = () => {
        navigate("collection")
        setIsSearch(!isSearch)
    };

    useEffect(() => {
        handleSearch
    }, [isSearch]);

    return (
        <>
            <section className="flex justify-between items-center lg:h-14 sm:h-35 w-full navbar 
                        shadow-md px-[2rem] ">
                <Logo />
                <nav className="flex items-center" >
                    <ul className="lg:flex justify-between items-center w-[500px] 
                        text-sm text-gray-700 font-medium sm:hidden lg:block">
                        <NavLink to="/" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                HOME
                            </li>
                        </NavLink>
                        <NavLink to="collection" className="active:scale-85 transition-all
                            duration-100 ease-in-out con">
                            <li className="">
                                COLLECTIONS
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

                <div className="flex justify-between w-60% sm:gap-x-12 lg:gap-x-2" >
                    <div onClick={() => {handleSearch()}}
                        className="cursor-pointer active:scale-85 transition-all
                        duration-100 ease-in-out">
                        <img className="lg:w-[30px] sm:w-19.5"
                            src={searchIcon} alt="search" />
                    </div>

                    <div className="w-[30px] relative group sm:hidden lg:block">
                        <Link to={"login"}>
                            <img src={profileIcon} alt="" className="cursor-pointer
                                active:scale-85 transition-all duration-100 ease-in-out"/>
                        </Link>
                        <ul className={`font-medium text-gray-800 flex flex-col justify-center rounded-xs
                            item-center hidden absolute w-[190px] h-[auto] bg-slate-200 border-0 shadow-inset
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
                        <div className="relative cursor-pointer">
                            <img className="lg:w-[30px] sm:w-20"
                                src={shoppingBagIcon} alt="" />
                            <div className="bg-gray-700 absolute bottom-[0] right-[0] 
                                rounded-full lg:w-4 lg:h-4 sm:w-11 sm:h-11 flex justify-center items-center  
                                text-white font-semibold focus:scale-105 transtion-all duration-200
                                ease-in-out lg:text-[8px] sm:text-[20px]">
                                    {cartQuantity}
                            </div>
                        </div>
                    </Link>
                    <section className="lg:hidden cursor-pointer relative flex justify-end">
                        <div onClick={() => setShowMenu(!showMenu)}>
                            <img className="lg:w-auto sm:w-20"
                                src={hamburgerMenu} alt="menu"/>
                        </div>
                        <ul className={`${showMenu ? "block menu-in": "menu-out invisible"} absolute w-full
                            h-auto bg-slate-100 text-base font-semibold text-slate-800 flex
                            flex-col fixed inset-0 transition-all`}>
                            <div className="flex justify-end px-6 pt-6">
                                <img onClick={() => setShowMenu(false)}
                                    className="active:scale-95"
                                    src={closeIcon} alt="close" width={90}
                                />
                            </div>
                            <div className="flex gap-x-8 items-center px-8 py-2">
                                <button onClick={() => menuLog()}
                                    className="bg-white px-21 py-10 shadow-sm border-3
                                    border-black active:scale-102 text-gray-900 text-3xl
                                    rounded-full transition-all duration-100 active:bg-gray-900
                                    active:text-white">
                                    {isLogged ? "LOG OUT": "LOG IN"}
                                </button>
                                <Link to={"login/signup"}>
                                    <button onClick={() => setShowMenu(false)}
                                        className="bg-gray-900 px-24 py-11 shadow-sm border-1
                                        border-black active:scale-102 text-gray-100 text-3xl
                                        rounded-full transition-all duration-100 active:bg-white
                                        active:text-gray-900">
                                        SIGN UP
                                    </button>
                                </Link>
                            </div>
                            <Link to={"/"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-0 border-gray-300 pb-10 px-8 py-15 text-5xl
                                    active:scale-98 active:bg-gray-800 active:text-gray-100 font-normal">
                                    Home
                                </li>
                            </Link>
                            <Link to={"collection"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-0 border-gray-300 pb-10 px-8 py-15 text-5xl
                                    active:scale-98 active:bg-gray-800 active:text-gray-100 font-normal">
                                    Collections
                                </li>
                            </Link>
                            <Link to={"about"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className="border-b-0 border-gray-300 pb-10 px-8 py-15 text-5xl
                                    active:scale-98 active:bg-gray-800 active:text-gray-100 font-normal">
                                    About Us
                                </li>
                            </Link>
                            <Link to={"contact"} onClick={() => setShowMenu(false)}
                                className=" ">
                                <li className=" border-b-0 border-gray-300 pb-10 px-8 py-15 text-5xl 
                                    active:scale-98 active:bg-gray-800 active:text-gray-100 font-normal">
                                    Contact Us
                                </li>
                            </Link>
                            <Link to={"orders"} onClick={() => setShowMenu(false)}
                                className="relative flex justify-between items-center pr-10 active:bg-gray-800
                                    active:text-gray-100">
                                <li className="pb-10 px-8 py-15 text-5xl font-normal
                                    active:scale-98 ">
                                    Orders
                                </li>
                                {orderedProduct.length > 0 && 
                                    <div className="w-7 h-7 rounded-full bg-red-500 top-14 left-48 absolute"></div>
                                }
                            </Link>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}