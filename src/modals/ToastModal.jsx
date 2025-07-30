import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"


export const ToastModal = ({ children }) => {

    const { modal } = useContext(storeContext)

    return (
        <>
            <section className={`lg:w-90 lg:h-20 sm:w-full sm:h-45 relative rounded-lg border-0 shadow-inner
                border-gray-100 flex items-center z-20 bg-white slideInOut sm:inset-0 lg:inset-2 sm:top-0 ${!modal.toast && "invisible"}`}>
                    <div className="flex lg:px-4 sm:px-8">
                        <div className="flex items-center lg:gap-3 sm:gap-6 ">
                            {children}
                        </div>
                    </div>
                    <div className="lg:h-1.5 sm:h-3 bg-green-500 absolute
                        bottom-0 rounded-b-[inherit] z-10 load">
                    </div>
                    <div className="w-full lg:h-1.5 sm:h-3 bg-green-100 px-[-10px] absolute
                        bottom-0 rounded-b-[inherit]">
                    </div>
            </section>
        </>
    )
}