import { Link } from "react-router"

export const Logo = () => {

    return (
        <>
            <Link to="/">
                <div className="lg:text-xl sm:text-6xl font-semibold lg:tracking-[-0.25rem]
                    text-gray-400 store sm:tracking-[-0.75rem]" >
                    mySTORE
                </div>
            </Link>
        </>
    )
}