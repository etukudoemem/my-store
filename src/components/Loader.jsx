import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"

export const Loader = () => {

    const { isLoading } = useContext(storeContext)

    return (
        <>
            <main className={`fixed w-full h-full flex justify-center items-center
                z-10 inset-0 -mt-[60px] ${isLoading ? "visible backdrop-blur-xl " : "invisible"}`} >
                <div className="max-w-[380px] h-[auto] shadow-lg flex-col
                    justify-center px-10 py-7 rounded bg-white border-2 border-gray-50
                    opacity-100 relative bg-gray-50">
                    
                    <div className="w-7 h-7 bg-green-500 rounded-[20%]
                        flex items-center justify-center spin">
                        <div className="w-5 h-5 bg-gray-200 rounded-[40%]
                            top-2 z-10 left-2.5 spinTwo"></div>
                    </div>
                </div>
            </main>
            {/* <section className="relative w-50">
                
                <div className="w-20 h-20 bg-green-200 rounded-[50%]
                    flex items-center justify-center absolute top-0">
                </div>
                
            </section> */}
        </>
    )
}