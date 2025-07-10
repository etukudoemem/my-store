import { Link } from "react-router-dom"


export const ProductCard = ({ id, name, price, image }) => {
   
    return (
        <>
            <Link to={`/product/${id}`} className="scroll" >
                <div className="lg:min-w-[100px] h-[355px] sm:min-w-[450px]
                    shadow-xs " >
                    <div className="min-w-[100%] min-h-[75%] overflow-hidden">
                        <img className="hover:scale-115 hover:duration-400" 
                            src={image[0]} alt="image" />
                    </div>
                    <p className="text-gray-700 px-2 my-2 text-[13px] ">{name}</p>
                    <p className="font-semibold text-gray-600 px-2 mb-2 text-sm">${price}</p>
                </div>
            </Link>
        </>
    )
}