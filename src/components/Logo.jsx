import { Link } from "react-router"

export const Logo = () => {

    return (
        <>
            <Link to="/">
                <div className="lg:text-xl sm:text-3xl font-semibold lg:tracking-[-0.25rem]
                    text-gray-400 store sm:tracking-[-0.35rem]" >
                    mySTORE
                </div>
            </Link>
        </>
    )
}