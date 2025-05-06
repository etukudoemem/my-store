import Logo from "./Logo"
import { NavLink, Link } from "react-router-dom"
import searchIcon from "../assets/search-icon.png"
import profileIcon from "../assets/profile-icon.png"
import shoppingBagIcon from "../assets/shopping-bag-icon.png"
import { cartContext } from "../contexts/cartContext"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



export default function NavBar() {

    const [isSearch, setIsSearch] = useState(false)

    const navigate = useNavigate()
    

    const { getCartQuantity, search, setSearch } = useContext(cartContext)
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
            <div className="flex justify-between items-center h-14 w-full relative">
                {isSearch && (
                <div className="w-[420px] h-[50px] bg-[#DCDCDC] z-10 absolute 
                    right-[240px] top-[100px] flex justify-center items-center
                    rounded">   
                    <input onChange={(e) => {setSearch(e.target.value)}}
                        className="w-[400px] h-[40px] border-2 border-solid border-gray-400 
                        rounded-4xl px-6 py-1 outline-none"
                        placeholder="Search"
                     />
                </div> )}
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
                        <img onClick={() => {handleSearch()}} src={searchIcon} alt="" />
                    </div>
                    <div className="w-[30px]">
                        <Link to={"/profile"}>
                            <img src={profileIcon} alt="" />
                        </Link></div>
                    <div className="w-[30px] relative">
                        <Link to={"/cart"}>
                            <img src={shoppingBagIcon} alt="" />
                            <div className="bg-gray-600 
                                absolute bottom-[0] right-[0] 
                                rounded-full w-4 h-4 flex justify-center
                                items-center text-[8px] text-white">
                                    {cartQuantity}
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}