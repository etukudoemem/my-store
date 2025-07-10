import contactPhoto from "../assets/contact-photo.jpg"
import { Subscribe } from "../components/Subscribe"

export const Contact = () => {

    return (
        <>
            <h2 className="text-center text-xl font-medium mb-12 mt-8
                flex items-center justify-center gap-2">
                    <span className="text-gray-500">
                        CONTACT
                    </span> 
                    <p className=""> US</p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
            </h2>
            <section className="flex lg:max-w-[70%] lg:min-h-[400px] gap-12 m-auto sm:max-w-full
                justify-center items-center sm:flex-col sm:min-h-[800px] lg:flex-row">
                <div className="min-w-1/2 min-h-[inherit] flex justify-center leftHeader">
                    <img className="min-w-full min-h-[inherit]" src={contactPhoto} />
                </div>
                <div className="lg:min-w-1/2 sm:min-w-full min-h-[inherit] flex flex-col rightHeader
                    lg:justify-center sm:justify-start ">
                    <h3 className="text-xl font-bold text-gray-600 font-semi-bold
                        mb-6">
                        Our Store
                    </h3>
                    <p className="text-gray-600">
                        54709 Willms Station
                    </p>
                    <p className="text-gray-600 mb-6">
                        Suite 350, Washington, USA
                    </p>
                    <p className="text-gray-600">
                        Tel: (415) 555-0132
                    </p>
                    <p className="text-gray-600">
                        Email: contact@mystore.com
                    </p>
                    <h3 className="text-xl font-bold text-gray-600
                        mb-6 mt-6">
                        Careers at My Store
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Learn more about our teams and job openings.
                    </p>
                    <button className="text-sm font-medium max-w-[140px]
                        h-[55px] border-1 border-gray-500 border-solid
                        cursor-pointer hover:scale-103 active:scale-99
                        transition-all duration-200 ease-in-out hover:bg-gray-800
                        hover:text-white">
                        Explore Jobs
                    </button>
                </div>
            </section>
            <section className="scroll sm:mb-25 sm:mt-[-400px] lg:mb-0 lg:mt-0">
                <Subscribe />
            </section>
        </>
    )
}