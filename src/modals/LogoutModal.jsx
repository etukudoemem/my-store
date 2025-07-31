import { useContext, useState } from "react"
import { storeContext } from "../contexts/storeContext"
import closeIcon from "../assets/close-icon2.png"

export const LogoutModal = () => {

    const { logOutUser, modal, setModal } = useContext(storeContext)

    return (
        <>
            <main className={`fixed w-full h-[100vh] flex justify-center items-center 
                z-10 inset-0 -mt[-60px] ${modal.logOut ? "visible backdrop-blur-sm expand" : "invisible"}`} >
                <div className="lg:max-w-[400px] sm:max-w-[90%] h-[auto] shadow-xl flex-col flex
                    justify-center lg:px-8 sm:px-14 lg:py-7 lg:gap-y-0 sm:gap-y-8 sm:py-14 rounded bg-white 
                    border-0 border-gray-500 relative  ">
                    <img src={closeIcon} alt="close" width={20}
                        className="cursor-pointer absolute right-2 top-2 active:scale-85 
                            hover:scale-105 sm:hidden lg:block"
                        onClick={() => setModal({...modal, logOut:false})}
                    />
                    <div className="flex justify-between items-center">
                        <h2 className="lg:text-lg sm:text-5xl font-semibold text-red-500">
                            Are you sure you want to logout?
                        </h2>
                    </div>
                    <p className="lg:text-base sm:text-4xl text-gray-600 mt-2 mb-2 font-semibold">
                        If you log out;    
                    </p>
                    <p className="mb-3 text-gray-600 lg:text-base sm:text-4xl leading-normal">
                        You will <span className="text-red-500">not </span> 
                            be able to add items to your cart or view your order(s).
                            Your cart and order(s) will also be <span className="text-red-500">
                                cleared.
                            </span> 
                    </p> 
                    <div className="flex font-semibold lg:gap-3 sm:gap-40 justify-end">
                        <button onClick={() => logOutUser()}
                            className={`lg:w-10 lg:h-10 sm:w-10 sm:h-28 text-red-500 active:scale-90
                            py-2 cursor-pointer lg:text-xs sm:text-4xl`}>
                            YES
                        </button>
                        <button onClick={() => setModal({...modal, logOut:false})}
                            className={`lg:w-10 lg:h-10 sm:w-25 sm:h-28 text-gray-600 py-2 cursor-pointer 
                            hover:text-gray-900 lg:text-xs sm:text-4xl
                            active:scale-80 hover:scale-102`}>
                            NO
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}