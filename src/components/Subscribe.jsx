export const Subscribe = () => {

    return (
        <>
            <section className="flex flex-col items-center lg:mt-20 sm:mt-15" >
                <div className="text-center">
                    <h2 className="font-medium lg:text-2xl sm:text-5xl text-gray-700 mb-4 scroll">
                        Subscribe now & get 20% off
                    </h2>
                    <p className="text-center mb-8 text-gray-500 lg:text-base sm:text-3xl 
                        leading-normal scroll">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit molestiae suscipit veritatis 
                        magni adipisci omnis sunt.
                    </p>
                </div>
                    
                <form>
                    <div className="flex w-full justify-center font-medium scroll
                        ">
                        <input className="border-solid border-1 border-gray-200
                            lg:h-12 sm:h-25 lg:min-w-[30%] sm:min-w-[80%] p-4 outline-none 
                            text-gray-500 lg:text-sm sm:text-3xl"
                            type="email" 
                            placeholder="Enter your email"
                        />
                        <button className="bg-black text-white lg:min-w-[150px] lg:text-xs sm:text-2xl
                            p-2 cursor-pointer active:scale-95 transition-all duration-100 
                            ease-in-out hover:scale-103 sm:min-w-[250px]"
                            type="submit">
                            SUBSCRIBE
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}