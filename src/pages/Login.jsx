import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../contexts/storeContext";
import { NetworkModal } from "../modals/NetworkModal";
import { LoginDetailsModal } from "../modals/LoginDetailsModal"
import { Loader } from "../components/Loader";


export default function Login() {

    const { noLoginInput, getUserInfo, logInUser, userInfo } = useContext(storeContext)

    const navigate = useNavigate()


    return (
        <>
            <NetworkModal>
                Login not successful. Please check your network connection
                and try again.
            </NetworkModal>
            <LoginDetailsModal />
            <section className="w-[100%] h-[60vh] flex justify-center 
                items-center bg-gray-100">
                <div className="w-100 m-[auto] flex flex-col h-[70vh]
                    ">
                    <div className="flex justify-center items-center gap-2 mt-20">
                        <div className="text-center text-3xl font-semibold mb-4 mt-8
                                flex items-center justify-center gap-2 text-gray-700">
                            <h2 className="">Login</h2>
                        </div>
                    </div>
                    <form onSubmit={(e) => logInUser(e)}>
                        <div className="flex flex-col gap-4 justify-center items-center m-4">
                            <input onChange={(e) => getUserInfo(e)}
                                className="w-100 h-11 text-gray-600 placeholder-gray-400
                                active:scale-98 transition-all duration-200 ease-in-out
                                outline-none p-3 border-1 border-gray-600 leftHeader"
                                type="email" 
                                name="email"
                                placeholder="Email"
                                value={userInfo.email}
                            />
                            {noLoginInput.email && 
                                    (<div className="text-xs text-red-600
                                        my-[-10px] self-start expand mx-[-15px]">
                                        <p>Please enter your email address</p>
                                    </div>)}
                            <input onChange={(e) => getUserInfo(e)}
                                className="w-100 h-11 text-gray-600 placeholder-gray-400
                                active:scale-98 transition-all duration-200 ease-in-out
                                outline-none p-3 border-1 border-gray-600 rightHeader"
                                type="password" 
                                name="password"
                                placeholder="Password"
                                value={userInfo.password}
                            />
                            {noLoginInput.password && 
                                    (<div className="text-xs text-red-600
                                        my-[-10px] self-start expand mx-[-15px]">
                                        <p>Please enter your password</p>
                                    </div>)}
                        </div>
                        <div className="flex justify-between mt-[-10px] text-sm font-medium
                            text-gray-600 collections">
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
                        <div className="mt-8 flex justify-center relative">
                            <div className="absolute top-2 right-[-40px] ">
                                <Loader />
                            </div>
                            <button type="submit"
                                className="w-45 h-11 bg-black text-white text-md p-2
                                active:scale-95 transition-all duration-100 ease-in-out 
                                hover:scale-103 cursor-pointer">
                                Log In
                            </button>
                        </div>
                    </form>   
                </div>
            </section>
        </>
    )
}