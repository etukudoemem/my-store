import exchangeIcon from "../assets/exchange.png"
import returnIcon from "../assets/return.png"
import csrIcon from "../assets/csr.png"

export const Experience = () => {

    return (
        <>
            <section className="mt-30 flex justify-evenly lg:flex-row lg:mb-20 
                sm:mt-15 sm:flex-col">
                <div className="flex sm:flex-col items-center sm:mb-10">
                    <div className="lg:w-[40px] mb-6 sm:w-20">
                        <img src={exchangeIcon} alt="" />
                    </div>
                    <p className="font-medium ">
                        Easy Exchange Policy
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center">
                        We have a hassle free exchange policy
                    </p>
                </div>
                <div className="flex flex-col items-center sm:mb-10">
                    <div className="lg:w-[40px] mb-6 sm:w-20">
                        <img src={returnIcon} alt="" />
                    </div>
                    <p className="font-medium ">
                        7 Days Return Policy
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        ">
                        We have a 7 day free return policy
                    </p>
                </div>
                <div className="flex flex-col items-center sm:mb-10">
                    <div className="lg:w-[40px] mb-6 sm:w-20 ">
                        <img src={csrIcon} alt="" />
                    </div>
                    <p className="font-medium ">
                        Best Customer Support
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        ">
                        We provide 24/7 customer support
                    </p>
                </div>
            </section>
        </>
    )
}