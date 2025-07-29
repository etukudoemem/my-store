export const Subscribe = () => {

    return (
        <>
            <section className="flex flex-col items-center lg:mt-20 sm:mt-15" >
                <div className="text-center flex flex-col items-center">
                    <h2 className="font-medium lg:text-2xl sm:text-6xl text-gray-700 lg:mb-4 sm:mb-15 scroll">
                        Subscribe now & get 20% off
                    </h2>
                    <p className="text-center lg:mb-8 sm:mb-20 lg:text-gray-500 sm:text-gray-800 lg:text-base sm:text-[2.5rem] 
                        leading-normal scroll sm:w-[95%] lg:w-full sm:font-light lg:font-normal">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit molestiae suscipit veritatis 
                        magni adipisci omnis sunt.
                    </p>
                </div>
                    
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex w-full justify-center lg:font-medium scroll
                        sm:font-normal">
                        <input className="border-1 lg:border-gray-200 sm:font-light lg:font-normal
                            lg:h-12 sm:h-32 lg:min-w-[100%] sm:min-w-[75%] lg:p-4 sm:p-10 lg:outline-none 
                            text-gray-500 lg:text-sm sm:text-[2.7rem]"
                            type="email" 
                            placeholder="johndoe@example.com"
                        />
                        <button className="bg-black text-white lg:min-w-[150px] lg:text-xs sm:text-3xl
                            p-2 cursor-pointer active:scale-95 transition-all duration-100 
                            ease-in-out hover:scale-103 sm:min-w-[30%]"
                            type="submit">
                            SUBSCRIBE
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}