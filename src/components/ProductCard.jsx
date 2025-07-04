import { Link } from "react-router-dom"


export default function ProductCard({ id, name, price, image }) {
    
    let imgLength = image.length > 0
   
    
    return (
        <>
            <Link to={`/product/${id}`} className="scroll" >
                <div className="min-w-[100px] h-[355px] 
                    shadow-xs " >
                    <div className="min-w-[100%] min-h-[75%] overflow-hidden
                        ">
                        <img className="hover:scale-115 hover:duration-400" src={imgLength ? image[0] : image} alt="" />
                    </div>
                    {/* <div className="w-full h-[0.5px] bg-gray-300"></div> */}
                    <p className="text-gray-700 px-2 my-2 text-[13px] "> {name} </p>
                    <p className="font-semibold text-gray-600 px-2 mb-2 text-sm"> ${price} </p>
                </div>
            </Link>
        </>
    )
}