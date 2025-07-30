import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import { NetworkModal } from "../modals/NetworkModal"
import { PasswordModal } from "../modals/PasswordModal"
import hideIcon from "../assets/show2.png"
import showIcon from "../assets/hide2.png"

export const SignUp = () => {

    const { noInput, getUserInfo, createUser, 
            userInfo, showPassword, setShowPassword } = useContext(storeContext);

    const navigate = useNavigate();

    return (
        <>
            <NetworkModal>
                Sign up not successful. Please check your network connection
                and try again.
            </NetworkModal>
            <PasswordModal />
            <section className="w-[100%] lg:h-[60vh] sm:h-[70vh] flex justify-center items-center lg:mb-0 sm:mb-40" >
                <div className="lg:w-100 sm:w-full m-auto lg:px-0 sm:px-8">
                    <div className="text-center lg:text-3xl sm:text-7xl font-semibold lg:mb-4 mt-8
                        flex items-center justify-center gap-2 text-gray-700 sm:mb-20">
                        <h2 className="">Sign Up</h2>
                    </div>
                    <form onSubmit={(e) => createUser(e)} >
                        <div className="flex flex-col lg:gap-6 sm:gap-14 justify-center items-center m-4 relative ">
                            <input onChange={(e) => getUserInfo(e)}
                                className={`lg:w-100 sm:w-full lg:h-11 sm:h-30 text-gray-700 lg:text-sm
                                active:scale-98 transition-all duration-200 ease-in-out sm:text-5xl
                                lg:outline-none p-3 border-1 lg:px-4 sm:px-8 leftHeader bg-slate-100 sm:font-light lg:font-normal
                                placeholder-gray-300 ${noInput.name ? "border-red-600 border-2" : "border-gray-600"}`}
                                type="text" 
                                name="name"
                                placeholder="john doe"
                            /> 
                            <div className={`lg:text-xs sm:text-3xl text-red-600 ${noInput.name ? "visible" : "hidden"}
                                lg:my-[-10px] lg:mt-[0px] sm:mt-[-15px] self-start expand lg:mx-[-15px] absolute sm:top-35 lg:top-11`}>
                                <p>Please enter your name</p>
                            </div>
                            <input onChange={(e) => getUserInfo(e)}
                                className={`lg:w-100 sm:w-full lg:h-11 sm:h-30 text-gray-600 placeholder-gray-300
                                active:scale-98 transition-all duration-200 ease-in-out lg:text-base sm:text-5xl sm:font-light lg:font-normal
                                lg:outline-none p-3 lg:px-4 sm:px-8 border-1 border-gray-600 leftHeader bg-slate-100
                                ${noInput.email ? "border-red-600 border-2" : "border-gray-600"}`}
                                type="email" 
                                name="email"
                                placeholder="johndoe@example.com"
                                value={userInfo.email}
                            />
                            <p className={`lg:text-xs sm:text-3xl text-red-600 ${noInput.email ? "visible" : "hidden"}
                            lg:my-[-10px] lg:mt-[0px] sm:mt-[-15px] self-start expand lg:mx-[-15px] absolute sm:top-79 lg:top-28`}>
                                Please enter your email address
                            </p>
                            <input onChange={(e) => getUserInfo(e)}
                                className={`lg:w-100 sm:w-full lg:h-11 sm:h-30 text-gray-600 placeholder-gray-300
                                active:scale-98 transition-all duration-200 ease-in-out lg:text-base sm:text-5xl sm:font-light lg:font-normal
                                lg:outline-none p-3 lg:px-4 sm:px-8 border-1 border-gray-600 rightHeader bg-slate-100
                                ${noInput.password ? "border-red-600 border-2" : "border-gray-600"}`}
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                placeholder="******"
                                value={userInfo.password}
                            />
                            <div className={`lg:text-xs sm:text-3xl text-red-600 ${noInput.password ? "visible" : "hidden"}
                                lg:my-[-10px] lg:mt-[0px] sm:mt-[-15px] self-start expand lg:mx-[-15px] absolute sm:top-123 lg:top-45`}>
                                <p>Please enter your password</p>
                            </div>
                            <img onClick={() => {setShowPassword(!showPassword)}}
                                className="sm:w-12 lg:w-4 absolute sm:top-98 sm:right-7 active:scale-92
                                transition-all duration-200 ease-in-out lg:top-37.5 lg:right-0 cursor-pointer"
                                src={showPassword ? showIcon : hideIcon} alt="image" />
                        </div>
                        <div className="lg:mt-8 sm:mt-20 flex justify-center sm:px-4 lg:px-0 sm:text-5xl lg:text-base
                            lg:mb-0 sm:mb-0">
                            <button type="submit"
                                className="lg:w-45 sm:w-full lg:h-11 sm:h-32 bg-black text-white text-md p-2
                                cursor-pointer active:scale-95 transition-all duration-100 
                                ease-in-out hover:scale-103">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}