import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import { NetworkModal } from "../modals/NetworkModal"
import { PasswordModal } from "../modals/PasswordModal"

export const SignUp = () => {

    const { noInput, getUserInfo, createUser, userInfo } = useContext(storeContext);

    const navigate = useNavigate();

    return (
        <>
            <NetworkModal>
                Sign up not successful. Please check your network connection
                and try again.
            </NetworkModal>
            <PasswordModal />
            <section className="w-[100%] h-[60vh] flex justify-center items-center " >
                <div className="w-100 m-auto ">
                    <div className="text-center text-3xl font-semibold mb-4 mt-8
                        flex items-center justify-center gap-2 text-gray-700">
                        <h2 className="">Sign Up</h2>
                    </div>
                    <form onSubmit={(e) => createUser(e)} >
                        <div className="flex flex-col gap-4 justify-center items-center m-4">
                            <input onChange={(e) => getUserInfo(e)}
                                className="w-100 h-11 text-gray-700
                                active:scale-98 transition-all duration-200 ease-in-out
                                outline-none p-3 border-1 border-gray-600 leftHeader
                                placeholder-gray-300"
                                type="text" 
                                name="name"
                                placeholder="john doe"
                                value={userInfo.name}
                            /> 
                            {noInput.name && 
                                (<div className="text-xs text-red-600
                                    my-[-10px] self-start expand mx-[-15px]">
                                    <p>Please enter your name</p>
                                </div>)}
                            <input onChange={(e) => getUserInfo(e)}
                                className="w-100 h-11 text-gray-600 
                                active:scale-98 transition-all duration-200 ease-in-out
                                outline-none p-3 border-1 border-gray-600 rightHeader
                                placeholder-gray-300"
                                type="email" 
                                name="email"
                                placeholder="johndoe@example.com"
                                value={userInfo.email}
                            /> 
                            {noInput.email && 
                                (<div className="text-xs text-red-600 
                                    my-[-10px] self-start expand mx-[-15px]">
                                    <p>Please enter your email address</p>
                                </div>)}
                            <input onChange={(e) => getUserInfo(e)}
                                className="w-100 h-11 text-gray-600
                                active:scale-98 transition-all duration-200 ease-in-out
                                outline-none p-3 border-1 border-gray-600 collections
                                placeholder-gray-300"
                                type="password" 
                                name="password"
                                placeholder="******"
                                value={userInfo.password}
                            />
                            {noInput.password && 
                                (<div className="text-xs text-red-600
                                    my-[-10px] self-start expand mx-[-15px]">
                                    <p>Please set up a password</p>
                                </div>)}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button type="submit"
                                className="w-45 h-11 bg-black text-white text-md p-2
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