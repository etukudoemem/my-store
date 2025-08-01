import { Link } from "react-router-dom"


export const ProductCard = ({ id, name, price, image }) => {
   
    return (
        <>
            <Link to={`/product/${id}`} className="scroll" >
                <div className="lg:min-w-[100px] lg:h-[auto] sm:h-170 sm:max-w-[415px]
                    lg:shadow-xs lg:py-2" >
                    <div className="min-w-[100%] lg:min-h-[75%] sm:max-h-[75%] overflow-hidden">
                        <img className="hover:scale-115 hover:duration-400 min-w-[100%]" 
                            src={image[0]} alt="image" />
                    </div>
                    <p className="text-gray-800 lg:px-2 my-2 lg:text-[13px] sm:text-[2rem]
                        sm:w-100 lg:w-full lg:mb-1 sm:mb-3 leading-tight sm:font-light ">
                        {name}
                    </p>
                    <p className="font-semibold text-gray-700 lg:px-2 mb-2 lg:text-sm sm:text-[2.5rem]
                        ">
                        ${price}
                    </p>
                </div>
            </Link>
        </>
    )
}