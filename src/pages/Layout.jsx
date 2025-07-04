import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { LogoutModal } from "../modals/LogoutModal"
import { ToastModal } from "../modals/ToastModal"
import checkMarkIcon from "../assets/checkmark.png"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"


export default function Layout() {

    const { modal } = useContext(storeContext)
    console.log(modal.logOutToast)

    return (
        <>
            <section className="px-[0rem] sticky top-0 z-10 bg-white 
            ">
                <NavBar />
            </section>
            <section className="px-[8rem] py-[0.5rem]">
                <LogoutModal />
                {modal.logOutToast && (
                    <ToastModal>
                        <img src={checkMarkIcon} alt="checkmark" width={35}/>
                        <p className="text-lg text-gray-500 font-medium">
                            You've been logged
                        </p>
                    </ToastModal>)}
                <Outlet />
            </section>
            <section className="px-[1rem]">
                <Footer />
            </section>
        </>
    )
}