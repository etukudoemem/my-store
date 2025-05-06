import { Link } from "react-router"

export default function Logo() {

    return (
        <>
            <div className="text-4xl font-medium tracking-[-0.35rem]
                text-gray-400" >
                <Link to="/">MY STORE</Link>
            </div>
        </>
    )
}