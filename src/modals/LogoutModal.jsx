import { useContext, useState } from "react"
import { storeContext } from "../contexts/storeContext"
import closeIcon from "../assets/close-icon2.png"

export const LogoutModal = () => {

    const { logOutUser, modal, setModal } = useContext(storeContext)

    return (
        <>
            <main className={`fixed w-full h-[100vh] flex justify-center items-center
                z-10 inset-0 -mt[-60px] ${modal.logOut ? "visible backdrop-blur-xs expand" : "invisible"}`} >
                <div className="max-w-[400px] h-[auto] shadow-xl flex-col
                    justify-center px-8 py-7 rounded bg-white border-2 border-gray-50
                     relative bg-gray-50">
                    <img src={closeIcon} alt="" width={20}
                        className="cursor-pointer absolute right-2 top-2 active:scale-85 
                            hover:scale-105"
                        onClick={() => setModal({...modal, logOut:false})}
                    />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-red-500">
                            Are you sure you want to logout?
                        </h2>
                    </div>
                    <p className="text-gray-600 mt-2 mb-2 font-semibold">
                        If you log out;    
                    </p>
                    <p className="mb-3 text-gray-600">
                        You will <span className="text-red-500">not </span> 
                            be able to add items to your cart or view your order(s).
                            Your cart and order(s) will be also <span className="text-red-500">
                                cleared.
                            </span> 
                    </p> 
                    <div className="flex font-semibold gap-4 ">
                        <button onClick={() => logOutUser()}
                            className={`w-[175px] h-[42px]  text-white active:scale-90
                            py-2 cursor-pointer bg-red-600 rounded-xs shadow-sm`}>
                            Yes
                        </button>
                        <button onClick={() => setModal({...modal, logOut:false})}
                            className={`w-[175px] h-[42px] text-gray-600 py-2 cursor-pointer 
                            rounded-xs bg-gray-100 hover:bg-gray-800 hover:text-gray-200
                            border-1 border-gray-400 active:scale-80 shadow-md hover:scale-102`}>
                            No
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}