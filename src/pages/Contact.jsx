import contactPhoto from "../assets/contact-photo.jpg"
import { Subscribe } from "../components/Subscribe"

export const Contact = () => {

    return (
        <>
            <div className="lg:mt-12 sm:mt-30">
                <h2 className="text-center lg:text-2xl sm:text-6xl font-medium lg:mb-12 sm:mb-20 
                    flex items-center justify-center gap-2">
                    <span className="text-gray-500">
                        CONTACT
                    </span> 
                    <p className=""> US</p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
            </div>
            <section className="flex lg:max-w-[70%] lg:min-h-[400px] gap-12 m-auto sm:max-w-full
                justify-center items-center sm:flex-col sm:min-h-[800px] lg:flex-row">
                <div className="min-w-1/2 min-h-[inherit] flex justify-center leftHeader">
                    <img className="min-w-full min-h-[inherit]" src={contactPhoto} />
                </div>
                <div className="lg:min-w-1/2 sm:min-w-full min-h-[inherit] flex flex-col rightHeader
                    lg:justify-center sm:justify-start sm:mt-15 lg:mt-0">
                    <h3 className="lg:text-xl sm:text-6xl font-bold text-gray-600 font-semi-bold
                        lg:mb-6 sm:mb-15">
                        Our Store
                    </h3>
                    <p className="text-gray-600 lg:text-base sm:text-5xl lg:mb-0 sm:mb-10 sm:font-light lg:font-normal">
                        54709 Willms Station
                    </p>
                    <p className="text-gray-600 lg:mb-6 sm:mb-20 lg:text-base sm:text-5xl sm:font-light lg:font-normal">
                        Suite 350, Washington, USA
                    </p>
                    <p className="text-gray-600 lg:text-base sm:text-5xl lg:mb-0 sm:mb-10 sm:font-light lg:font-normal">
                        Tel: (415) 555-0132
                    </p>
                    <p className="text-gray-600 lg:text-base sm:text-5xl sm:font-light lg:font-normal">
                        Email: contact@mystore.com
                    </p>
                    <h3 className="lg:text-xl sm:text-6xl font-bold text-gray-600
                        lg:mb-6 lg:mt-6 sm:mb-15 sm:mt-35">
                        Careers at My Store
                    </h3>
                    <p className="text-gray-600 mb-6 lg:text-base sm:text-5xl sm:leading-normal sm:font-light lg:font-normal">
                        Learn more about our teams and job openings.
                    </p>
                    <button className="text-sm font-medium lg:max-w-[140px] sm:rounded-xl
                        lg:h-[50px] sm:h-[130px] lg:border-1 sm:border-2 border-gray-500 sm:max-w-[390px]
                        cursor-pointer hover:scale-103 active:scale-99 lg:text-base sm:text-4xl
                        transition-all duration-200 ease-in-out hover:bg-gray-800 lg:rounded-none
                        hover:text-white bg-white text-black
                        lg:mt-0 sm:mt-15">
                        Explore Jobs
                    </button>
                </div>
            </section>
            <section className="scroll sm:mb-85 sm:mt-[25%] lg:mb-0 lg:mt-0">
                <Subscribe />
            </section>
        </>
    )
}