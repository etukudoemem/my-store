import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../contexts/storeContext";
import { NetworkModal } from "../modals/NetworkModal";
import { LoginDetailsModal } from "../modals/LoginDetailsModal"
import showIcon from "../assets/show2.png"
import hideIcon from "../assets/hide2.png"
import { Loader } from "../components/Loader";


export const Login = () => {

    const { noLoginInput, getUserInfo, logInUser, 
            userInfo, isLogged, isLoading, 
            showPassword, setShowPassword } = useContext(storeContext);

    const navigate = useNavigate();

    return (
        <>
            <NetworkModal>
                Login not successful. Please check your network connection
                and try again.
            </NetworkModal>
            <LoginDetailsModal />
            {<section className="w-[100%] lg:h-[60vh] sm:h-[70vh] flex justify-center 
                items-center sm:mt-[-40px] lg:mt-0 lg:mb-0 sm:mb-40">
                <div className="lg:w-100 sm:w-full m-[auto] flex flex-col lg:px-0 sm:px-8
                    ">
                    <div className="flex justify-center items-center gap-2 lg:mt-20">
                        <div className="text-center lg:text-3xl sm:text-7xl font-semibold lg:mb-4 mt-8
                            flex items-center justify-center gap-2 text-gray-700 sm:mb-15">
                            <h2 className="">Login</h2>
                        </div>
                    </div>
                    <form onSubmit={(e) => logInUser(e)}>
                        <div className="flex flex-col lg:gap-6 sm:gap-14 justify-center items-center m-4
                            relative">
                            <input onChange={(e) => getUserInfo(e)}
                                className={`lg:w-100 sm:w-full lg:h-11 sm:h-30 text-gray-600 placeholder-gray-300
                                active:scale-98 transition-all duration-200 ease-in-out lg:text-base sm:text-5xl
                                lg:outline-none p-3 lg:px-4 sm:px-8 border-1 leftHeader bg-slate-100
                                ${noLoginInput.email ? "border-red-600 border-2" : "border-gray-600"}`}
                                type="email" 
                                name="email"
                                placeholder="johndoe@example.com"
                                value={userInfo.email}
                            />
                            <div className={`lg:text-xs sm:text-3xl text-red-600 ${noLoginInput.email ? "visible" : "hidden"}
                                lg:my-[-10px] lg:mt-[0px] sm:mt-[-15px] self-start expand lg:mx-[-15px] absolute sm:top-34 lg:top-11`}>
                                <p>Please enter your email</p>
                            </div>
                            <input onChange={(e) => getUserInfo(e)}
                                className={`lg:w-100 sm:w-full lg:h-11 sm:h-30 text-gray-600 placeholder-gray-300
                                active:scale-98 transition-all duration-200 ease-in-out lg:text-base sm:text-5xl
                                lg:outline-none p-3 lg:px-4 sm:px-8 border-1 rightHeader bg-slate-100
                                ${noLoginInput.password ? "border-red-600 border-2 expand" : "border-gray-600"}`}
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                placeholder="******"
                                value={userInfo.password}
                            />
                            <div className={`lg:text-xs sm:text-3xl text-red-600 ${noLoginInput.password ? "visible" : "hidden"}
                                lg:my-[-10px] lg:mt-[0px] sm:mt-[-15px] self-start expand lg:mx-[-15px] absolute sm:top-78 lg:top-28`}>
                                <p>Please enter your password</p>
                            </div>
                            <img onClick={() => {setShowPassword(!showPassword)}}
                                className="sm:w-12 lg:w-4 absolute sm:bottom-8 sm:right-7 active:scale-92
                                transition-all duration-200 ease-in-out lg:bottom-3 lg:right-0 cursor-pointer"
                                src={showPassword ? showIcon : hideIcon} alt="image" />
                        </div>
                        <div className="flex justify-between lg:mt-[-5px] sm:mt-8 lg:text-sm sm:text-4xl font-medium
                            text-gray-600 collections sm:px-4 lg:px-0">
                            <p className="cursor-pointer hover:text-black active:scale-95
                                transition-all duration-100 ease-in-out hover:underline">
                                Forgot password?
                            </p>
                            <p onClick={() => {navigate("signup")}} 
                                className="cursor-pointer hover:text-black active:scale-95
                                transition-all duration-100 ease-in-out hover:underline">
                                New? Create account
                            </p>
                        </div>
                        <div className="lg:mt-8 sm:mt-25 flex justify-center sm:px-4 lg:px-0 sm:text-5xl lg:text-base
                            lg:mb-0 sm:mb-0">
                            <button type="submit"
                                className="lg:w-45 sm:w-full lg:h-11 sm:h-32 bg-black text-white text-md p-2
                                active:scale-95 transition-all duration-100 ease-in-out 
                                hover:scale-103 cursor-pointer">
                                Login
                            </button>
                        </div>
                    </form>   
                </div>
            </section>}
        </>
    )
}