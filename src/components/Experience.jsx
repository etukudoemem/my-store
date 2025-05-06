import exchangeIcon from "../assets/exchange.png"
import returnIcon from "../assets/return.png"
import csrIcon from "../assets/csr.png"


export default function Experience() {

    return (
        <>
            <section className="mt-30 flex justify-evenly mb-30">
                <div className="flex flex-col items-center">
                    <div className="w-[40px] mb-6">
                        <img src={exchangeIcon} alt="" />
                    </div>
                    <p className="font-medium ">
                        Easy Exchange Policy
                    </p>
                    <p className="font-medium text-gray-400 w-[100%] text-center
                        ">
                        We have a hassle free exchange policy
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[40px] mb-6">
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
                <div className="flex flex-col items-center">
                    <div className="w-[40px] mb-6">
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