import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import closeIcon from "../assets/close-icon2.png"


export const SizeModal = () => {

    const { modal, setModal } = useContext(storeContext)

    return(
        <>
            <main className={`fixed w-full h-[100vh] flex justify-center items-center
                z-10 inset-0 ${modal.noSize ? "visible backdrop-blur-xs expand" : "invisible"}`} >
                <div className="max-w-[380px] h-[auto] shadow-lg flex-col
                    justify-center px-8 py-7 rounded bg-white border-2 border-gray-50
                    opacity-100 relative bg-gray-50 -mt-[60px]">
                    <img src={closeIcon} alt="" width={20}
                        className="cursor-pointer absolute right-4 top-4 active:scale-85
                            hover:scale-105"
                        onClick={() => setModal({...modal, noSize:false})}
                    />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-red-500">
                            You have not selected a size
                        </h2>
                    </div>
                    <p className="mb-4 mt-2 text-gray-600 ">
                    You have to select your preferred item size from the available
                    sizes before adding item to your cart.
                    </p> 
                    <div className="font-semibold flex justify-end">
                        <p onClick={() => setModal({...modal, noSize:false})}
                            className={` text-slate-600 text-xs 
                                py-2 cursor-pointer rounded-xs  
                                hover:scale-101 hover:text-slate-700 border-0 transition-all
                                border-gray-400 active:scale-90 duration-100
                                ease-in-out`}>
                            ALRIGHT. GOT IT
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}