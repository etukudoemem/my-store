import { Link } from "react-router"

export default function Logo() {

    return (
        <>
            <Link to="/">
                <div className="text-xl font-semibold tracking-[-0.25rem]
                    text-gray-400 store" >
                    mySTORE
                </div>
            </Link>
        </>
    )
}