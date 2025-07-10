export const Subscribe = () => {

    return (
        <>
            <section className="flex flex-col items-center lg:mt-20 sm:mt-15" >
                <div className="text-center">
                    <h2 className="font-medium text-2xl text-gray-700 mb-4 scroll">
                        Subscribe now & get 20% off
                    </h2>
                    <p className="text-center mb-8 text-gray-500 scroll">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit molestiae suscipit veritatis 
                        magni adipisci omnis sunt.
                    </p>
                </div>
                    
                <form>
                    <div className="flex w-full justify-center font-medium scroll
                        ">
                        <input className="border-solid border-1 border-gray-200
                            h-12 min-w-[30%] p-4 outline-none text-gray-500 text-sm"
                            type="email" 
                            placeholder="Enter your email"
                        />
                        <button className="bg-black text-white min-w-[150px] text-xs
                            p-2 cursor-pointer active:scale-95 transition-all duration-100 
                            ease-in-out hover:scale-103"
                            type="submit">
                            SUBSCRIBE
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}