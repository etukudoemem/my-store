import Line from "../components/Line"
import ProductCard from "../components/ProductCard"
import SideBar from "../components/SideBar"
import { products } from "../assets/frontend_assets/assets"
import { useState, useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import searchIcon from "../assets/search-icon.png"
import closeIcon from "../assets/close-icon.png"


export default function Collection() {

    const [collection, setCollection] = useState(products)

    const [sorted, setSorted] = useState("relevant")

    const { setSearch, isSearch, setIsSearch } = useContext(cartContext)
    
    const allCollections = collection.map((product) => {
            return <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        price={product.price}
                        image={product.image}
                    />
        }
    )

    
    return (
        <>
            
            {isSearch &&  (
            <div>
                <Line />
                <div className="w-[100%] h-60px] flex justify-center items-center 
                    rounded my-4 relative">   
                    <input onChange={(e) => {setSearch(e.target.value)}}
                        className="w-[50%] h-[40px] border-[1.5px] border-solid border-gray-400 
                        rounded-4xl px-4 py-1 outline-none font-semibold text-gray-600
                        text-sm"
                        placeholder="Search"
                        
                    />
                    <img src={searchIcon} alt="search" className="absolute w-[25px] right-[332px] " />
                    <img onClick={() => {setIsSearch(false)}}
                        src={closeIcon} alt="search" className="absolute w-[25px] right-[280px]
                        cursor-pointer " />
                </div> 
            </div>)}
            <Line />
            <section className="flex gap-12 w-full mt-8">
                <div className="w-[20%] ">
                    <SideBar 
                        setCollection={setCollection} 
                        sorted={sorted}
                    />
                </div>
                <div className="w-[80%]">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl flex items-center gap-2
                                    font-medium">
                                    <span className="text-gray-500">
                                        ALL
                                    </span> 
                                    <p>COLLECTIONS</p>
                                    <div className="w-12 h-[2.5px] bg-black"></div>
                            </div>
                            <div className="w-[180px] h-[45px] border-2 border-gray-300 
                                border-solid flex items-center justify-center font-medium
                                text-sm p-2">
                                    <label htmlFor="sort">Sort by:
                                        <select onChange={(e) => {setSorted(e.target.value)}} 
                                            className="outline-none cursor-pointer" 
                                            name="sort" 
                                            id="sort" 
                                            defaultValue={"Relevant"}>
                                            <option className="font-medium" 
                                                value="relevant">
                                                Relevant
                                            </option>
                                            <option className="font-medium" 
                                                value="low-high">
                                                Low to High
                                            </option>
                                            <option className="font-medium" 
                                                value="high-low">
                                                High to Low
                                            </option>
                                        </select>
                                    </label>
                                    
                            </div>
                        </div>
                        <div className="mt-10.5 grid gap-y-10 gap-x-4 grid-cols-4
                            ">
                            {allCollections}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}