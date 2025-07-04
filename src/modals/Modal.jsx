import { useContext } from "react"
import closeIcon from "../assets/close-icon2.png"
import { storeContext } from "../contexts/storeContext"



export const Modal = ({ children }) => {
    
    const { modal, setModal } = useContext(storeContext)

    return (
        <>
            {/* <main className={`fixed w-full h-full flex justify-center items-center
                z-10 inset-0 -mt-[60px] ${modal ? "visible backdrop-blur-xs " : "invisible"}`} >
                <div className="max-w-[380px] h-[auto] shadow-lg flex-col
                    justify-center px-10 py-7 rounded bg-white border-2 border-gray-50
                    opacity-100 relative bg-gray-50">
                    <img src={closeIcon} alt="" width={20}
                        className="cursor-pointer absolute right-2 top-2"
                        onClick={() => setModal(false)}
                    />
                    {children}
                </div>
            </main> */}
        </>
    )
}