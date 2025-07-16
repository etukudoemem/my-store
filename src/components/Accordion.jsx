import { useState } from "react";

export const Accordion = ({ title, content }) => {
    const [showAccordion, setShowAccordion] = useState(false)
    const handleClick = () => {
        setShowAccordion(!showAccordion)
    };

    return (
        <>
            <section className="scroll">
                <div className="w-[100%] h-[auto] border-b-1 border-gray-200 lg:py-4 sm:py-8
                    lg:px-0 sm:px-4">
                    <button onClick={() => {handleClick()}}
                        className="flex justify-between items-center w-full h-[auto] cursor-pointer">
                        <p className="lg:text-lg sm:text-4xl lg:font-medium sm:font-semibold text-gray-700"> 
                            {title}
                        </p>
                        <span className="lg:text-xl sm:text-7xl cursor-pointer">
                            {showAccordion ? "-" : "+"}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 linear
                        ${showAccordion ? "h-auto visible py-2 opacity-100 " 
                            : " opacity-0 h-0 invisible"}`}>
                        <p className="text-gray-700 lg:text-base sm:text-4xl sm:leading-normal
                            lg:leading-tight">
                            {content}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}