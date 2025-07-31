import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import closeIcon from "../assets/close-icon2.png"


export const SizeModal = () => {

    const { modal, setModal } = useContext(storeContext)

    return(
        <>
            <main className={`fixed w-full h-[100vh] flex justify-center items-center
                z-10 inset-0 ${modal.noSize ? "visible backdrop-blur-sm expand" : "invisible"}`} >
                <div className="lg:max-w-[380px] sm:max-w-[90%] h-[auto] shadow-xl flex flex-col
                    justify-center lg:px-8 sm:px-14 lg:py-7 sm:py-14 rounded bg-white border-2 border-gray-200
                    opacity-100 relative bg-gray-50 -mt-[60px] lg:gap-y-0 sm:gap-y-8">
                    <img src={closeIcon} alt="" width={20}
                        className="cursor-pointer absolute right-4 top-4 active:scale-85
                            hover:scale-105 sm:hidden lg:block"
                        onClick={() => setModal({...modal, noSize:false})}
                    />
                    <div className="flex justify-between items-center ">
                        <h2 className="lg:text-lg sm:text-5xl font-semibold text-red-500">
                            You have not selected a size
                        </h2>
                    </div>
                    <p className="mb-4 mt-2 text-gray-600 lg:text-base sm:text-4xl leading-normal">
                    You have to select your preferred item size from the available
                    sizes before adding item to your cart.
                    </p> 
                    <div className="font-semibold flex justify-end">
                        <p onClick={() => setModal({...modal, noSize:false})}
                            className={` text-slate-600 lg:text-xs sm:text-4xl
                                py-2 cursor-pointer rounded-xs  
                                hover:scale-101 hover:text-slate-700 border-0 transition-all
                                border-gray-400 active:scale-90 duration-100
                                ease-in-out`}>
                            GOT IT
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}