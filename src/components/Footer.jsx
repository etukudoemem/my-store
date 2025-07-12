import { Line } from "./Line";
import { Logo } from "./Logo";

export const Footer = () => {

    return (
        <>
            <section className="lg:flex lg:justify-between lg:mt-36 mb-8 sm:text-gray-200
                    sm:grid sm:grid sm:grid-cols-1 sm:gap-x-80 sm:gap-x-20 sm:px-10
                    lg:text-gray-700" >
                <div className="sm:mb-15 lg:mb-0">
                    <Logo />
                    <p className="w-[500px] mt-4 lg:text-base sm:text-4xl
                        sm:leading-normal">
                        Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Animi recusandae, et optio error 
                        omnis, ut nesciunt voluptatum 
                        mollitia cum ipsa quia nisi totam 
                        qui magni at possimus ex unde ad.
                    </p>
                </div>
                <div className="sm:mb-15 lg:mb-0 lg:text-base sm:text-4xl">
                    <h2 className="font-semibold sm:mb-10 lg:mb-4 ">
                        COMPANY
                    </h2>
                    <div className="flex flex-col gap-y-3">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Delivery</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="lg:text-base sm:text-4xl">
                    <h2 className="font-semibold sm:mb-10 lg:mb-4">
                        GET IN TOUCH
                    </h2>
                    <div className="flex flex-col gap-y-3">
                        <p>+234 700000000</p>
                        <p>emem@gmail.com</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </section>
            <Line />
            <footer className="text-center lg:text-xs sm:text-2xl sm:text-gray-200 lg:text-gray-700">
                Copyright 2025@emem.dev - All Rights reserved.
            </footer>
        </>
    )
}