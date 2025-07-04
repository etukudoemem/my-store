import { useContext } from "react"
import closeIcon from "../assets/close-icon.png"
import { storeContext } from "../contexts/storeContext"


export const ToastModal = ({ children }) => {

    const { modal } = useContext(storeContext)

    return (
        <>
            <section className={`w-80 h-20 relative rounded-lg border-0 shadow-inner
                border-gray-100 flex items-center z-20 bg-white slideInOut ${!modal.toast && "invisible"}`}>
                    {/* <div className="absolute right-1 top-1 ">
                        <img onClick={() => setModal({...modal, toast:false})}
                            className="cursor-pointer active:scale-85 transition-all
                                 duration-200 ease-in-out hover:scale-105"
                            src={closeIcon} alt="close" width={20}/>
                    </div> */}
                    <div className="flex px-4">
                        <div className="flex items-center gap-3">
                            {children}
                        </div>
                    </div>
                    <div className="h-1.5 bg-green-500 absolute
                        bottom-0 rounded-b-[inherit] z-10 load">
                    </div>
                    <div className="w-full h-1.5 bg-green-100 px-[-10px] absolute
                        bottom-0 rounded-b-[inherit]">
                    </div>
            </section>
        </>
    )
}