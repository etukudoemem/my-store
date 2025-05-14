export default function SignUp() {


    return (
        <>
            <section className="w-100 m-auto">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="font-semibold text-3xl text-gray-700 mb-5">
                        Login
                    </h2>
                    <div className="w-8 h-[1.5px] bg-black self-center"></div>
                    
                </div>
                <div className="flex flex-col gap-4 justify-center items-center m-4">
                    <input className="w-100 h-11 font-semibold text-gray-700
                        outline-none p-3 border-1 border-gray-600"
                        type="email" 
                        name="email"
                        placeholder="Email"
                    /> 
                    <input className="w-100 h-11 font-semibold text-gray-700
                        outline-none p-3 border-1 border-gray-600"
                        type="password" 
                        name="password"
                        placeholder="Password"
                    /> 
                </div>
                <div className="flex justify-between mt-[-10px] text-sm font-semibold
                    text-gray-700">
                    <p className="cursor-pointer">Forgot password?</p>
                    <p className="cursor-pointer">Create account</p>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="w-30 h-10 bg-black text-white text-md p-2
                        cursor-pointer">
                        Sign In
                    </button>
                </div>
                
                
            </section>
        </>
    )
}