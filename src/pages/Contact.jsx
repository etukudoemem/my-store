import contactPhoto from "../assets/contact-photo.jpg"
import Line from "../components/Line"
import Subscribe from "../components/Subscribe"

export default function Contact() {

    return (
        <>
            <Line />
            <h2 className="text-center text-xl font-medium mb-12 mt-8
                flex items-center justify-center gap-2">
                    <span className="text-gray-500">
                        CONTACT
                    </span> 
                    <p className=""> US</p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
            </h2>
            <section className="flex max-w-[70%] min-h-[400px] gap-12 m-auto
                justify-center items-center">
                <div className="min-w-1/2 min-h-[inherit] flex justify center">
                    <img className="min-w-full min-h-[inherit]" src={contactPhoto} />
                </div>
                <div className="min-w-1/2 min-h-[inherit] flex flex-col
                    justify-center">
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
                        cursor-pointer">
                        Explore Jobs
                    </button>
                </div>
            </section>
            <Subscribe />
        </>
    )
}