import { useState } from "react"

export default function Accordion( { title, content }) {

    const [show, setShow] = useState(false)

    const handleClick = () => {

        setShow(!show)
    }

    return (
        <>
            <section className="my-5">
                <div className="w-[500px] h-[auto] bg-gray-100 py-2 px-4
                    rounded">
                    <button onClick={() => {handleClick()}}
                        className="flex justify-between items-center w-full h-[auto] cursor-pointer">
                        <p className="text-md font-semibold text-gray-700"> 
                            {title}
                        </p>
                        <span className="text-2xl cursor-pointer">{show ? "-" : "+"}</span>
                    </button>
                    <div className={` transition-all duration-400 ease-out
                        ${show ? " h-[auto] pb-2 opacity-100" 
                            : "hidden opacity-100"}`}>
                        <p className="text-gray-700 overflow-hidden">{content}
                        </p>
                    </div>
                   </div>
            </section>
        </>
    )
}