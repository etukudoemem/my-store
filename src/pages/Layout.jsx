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
            <section className="sticky top-0 z-10 bg-slate-100">
                <NavBar />
            </section>
            <section className="lg:px-[8rem] py-[0.5rem] sm:px-[2rem]">
                <LogoutModal />
                {/* {isLoading && <Loader />} */}
                {modal.logOutToast && (
                    <ToastModal>
                        <img className="lg:w-8 sm:w-20"
                            src={checkMarkIcon} alt="checkmark"/>
                        <p className="lg:text-lg sm:text-5xl text-gray-500 lg:font-medium sm:font-light">
                            You've been logged out
                        </p>
                    </ToastModal>)}
                <Outlet />
            </section>
            <section className="px-[1rem] bg-slate-100 sm:py-10 lg:py-0">
                <Footer />
            </section>
        </>
    )
}