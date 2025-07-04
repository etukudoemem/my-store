import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import closeIcon from "../assets/close-icon2.png"
import { Link } from "react-router"

export const LoginDetailsModal = () => {

    const { modal, setModal } = useContext(storeContext)

    return (
        <>
            <main className={`fixed w-full h-[100vh] flex justify-center items-center
                z-10 inset-0 ${modal.wrongDetails ? "visible backdrop-blur-xs expand" : "invisible"}`} >
                <div className="max-w-[400px] h-[auto] shadow-lg flex-col
                    justify-center px-8 py-7 rounded bg-white border-2 border-gray-50
                    opacity-100 relative bg-gray-50 -mt-[60px]">
                    <img src={closeIcon} alt="" width={20}
                        className="cursor-pointer absolute right-4 top-4 active:scale-85
                            hover:scale-105"
                        onClick={() => setModal({...modal, wrongDetails:false})}
                    />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-red-500">
                            Login Error
                        </h2>
                    </div>
                    <div className="mb-4 mt-2 text-gray-600 tracking-wide">
                        <p className="">
                            Invalid login credentials. Please ensure you have the
                            correct details and try again.
                        </p> 
                        <p className="mt-2">
                            If you do not have an account yet, you can sign up
                            <Link to={"signup"}>
                                <span className="ml-1 text-gray-600 underline font-medium
                                    hover:text-black active:scale-85">
                                    here
                                </span>
                            </Link>.
                        </p>
                    </div>
                    
                    <div className="font-semibold flex justify-center">
                        <button onClick={() => setModal({...modal, wrongDetails:false})}
                            className={`w-[50%] h-[42px] text-gray-800 text-sm 
                                py-2 cursor-pointer rounded-xs bg-gray-200 
                                hover:bg-gray-800 hover:text-gray-200 border-1 transition-all
                                border-gray-400 shadow-sm active:scale-90 duration-100
                                ease-in-out`}>
                            Alright. Got it
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}