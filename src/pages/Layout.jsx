import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { LogoutModal } from "../modals/LogoutModal"
import { ToastModal } from "../modals/ToastModal"
import checkMarkIcon from "../assets/checkmark.png"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import { Loader } from "../components/Loader"


export const Layout = () => {

    const { modal, isLoading } = useContext(storeContext);

    return (
        <>
            <section className="sticky top-0 z-10 bg-white">
                <NavBar />
            </section>
            <section className="lg:px-[8rem] py-[0.5rem] sm:px-[2rem]">
                <LogoutModal />
                {/* {isLoading && <Loader />} */}
                {modal.logOutToast && (
                    <ToastModal>
                        <img src={checkMarkIcon} alt="checkmark" width={35}/>
                        <p className="text-lg text-gray-500 font-medium">
                            You've been logged
                        </p>
                    </ToastModal>)}
                <Outlet />
            </section>
            <section className="px-[1rem] sm:bg-gray-900 lg:bg-white sm:py-10 lg:py-0">
                <Footer />
            </section>
        </>
    )
}