import { Line } from "./Line";
import { Logo } from "./Logo";

export const Footer = () => {

    return (
        <>
            <section className="lg:flex lg:justify-between lg:mt-36 mb-8
                    sm:grid sm:grid sm:grid-cols-1 sm:gap-x-80 sm:gap-x-20 px-5
                    text-gray-700 py-10 sm:font-light lg:font-normal" >
                <div className="sm:mb-40 lg:mb-0">
                    <Logo />
                    <p className="lg:w-[500px] sm:w-full lg:mt-4 lg:text-base sm:text-[2.5rem]
                        sm:leading-normal sm:mt-12 ">
                        Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Animi recusandae, et optio error 
                        omnis, ut nesciunt voluptatum 
                        mollitia cum ipsa quia nisi totam 
                        qui magni at possimus ex unde ad.
                    </p>
                </div>
                <div className="sm:mb-40 lg:mb-0 lg:text-base sm:text-[2.5rem]">
                    <h2 className="font-semibold sm:mb-10 lg:mb-4 ">
                        COMPANY
                    </h2>
                    <div className="flex flex-col lg:gap-y-3 sm:gap-y-8">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Delivery</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="lg:text-base sm:text-[2.5rem]">
                    <h2 className="font-semibold sm:mb-10 lg:mb-4">
                        GET IN TOUCH
                    </h2>
                    <div className="flex flex-col lg:gap-y-3 sm:gap-y-8">
                        <p>+234 700000000</p>
                        <p>emem@gmail.com</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </section>
            <Line />
            <footer className="text-center lg:text-xs sm:text-3xl text-gray-700 sm:mt-7 lg:mt-0 lg:mb-3">
                Copyright @emem.dev - All Rights reserved.
            </footer>
        </>
    )
}