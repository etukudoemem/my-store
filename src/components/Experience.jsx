import exchangeIcon from "../assets/exchange.png"
import returnIcon from "../assets/return.png"
import csrIcon from "../assets/csr.png"

export const Experience = () => {

    return (
        <>
            <section className="lg:mt-30 flex justify-evenly lg:flex-row lg:mb-20 
                sm:mt-15 sm:flex-col">
                <div className="flex sm:flex-col items-center lg:mb-0 sm:mb-25">
                    <div className="lg:w-[40px] mb-6 sm:w-30">
                        <img src={exchangeIcon} alt="" />
                    </div>
                    <p className="font-medium lg:text-base sm:text-5xl lg:mb-0 sm:mb-6">
                        Easy Exchange Policy
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        lg:text-base sm:text-4xl">
                        We have a hassle free exchange policy
                    </p>
                </div>
                <div className="flex flex-col items-center lg:mb-0 sm:mb-25">
                    <div className="lg:w-[40px] mb-6 sm:w-30">
                        <img src={returnIcon} alt="" />
                    </div>
                    <p className="font-medium lg:text-base sm:text-5xl lg:mb-0 sm:mb-6">
                        7 Days Return Policy
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        lg:text-base sm:text-4xl">
                        We have a 7 day free return policy
                    </p>
                </div>
                <div className="flex flex-col items-center ">
                    <div className="lg:w-[40px] mb-6 sm:w-30 ">
                        <img src={csrIcon} alt="" />
                    </div>
                    <p className="font-medium lg:text-base sm:text-5xl lg:mb-0 sm:mb-6">
                        Best Customer Support
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        lg:text-base sm:text-4xl">
                        We provide 24/7 customer support
                    </p>
                </div>
            </section>
        </>
    )
}