import { Line } from "../components/Line"
import { ProductCard } from "../components/ProductCard"
import { SideBar } from "../components/SideBar"
import { products } from "../assets/frontend_assets/assets"
import { useState, useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import searchIcon from "../assets/search-icon2.png"
import closeIcon from "../assets/close-icon.png"


export const Collection = () => {

    const [collection, setCollection] = useState(products);

    const [sorted, setSorted] = useState("relevant");

    const { setSearch, isSearch, setIsSearch, searchResult } = useContext(storeContext);
    
    const allCollections = collection.map((product) => {
            return <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        price={product.price}
                        image={product.image}
                    />
        }
    );
    
    return (
        <>
            {isSearch &&
            (<section className="bg-gray-50 lg:mb-8 sm:mt-15 lg-mt-0 expand">
                <Line />
                <div className="w-[100%] lg:h-[45px] flex lg:justify-center items-center 
                     relative sm:h-[120px] lg:px-0 sm:px-6">   
                    <input onChange={(e) => {setSearch(e.target.value)}}
                        className="lg:w-[50%] sm:w-[90%] lg:h-[100%] sm:h-[90%] border-[1.5px] border-solid border-gray-400 
                        lg:rounded-4xl sm:rounded-full lg:px-11 sm:px-24 py-1 outline-none lg:font-medium text-gray-600 lg:text-base
                        active:scale-99 transition-all duration-200 ease-in-out sm:text-[2.7rem]"
                        placeholder="Search"
                        autoFocus
                    />
                    <img src={searchIcon} alt="search" className="absolute lg:w-[25px] sm:left-[6%] 
                        lg:left-[26.2%] sm:w-[50px]" />
                    <img onClick={() => {setIsSearch(false)}}
                        src={closeIcon} alt="close" className="absolute lg:w-[25px] sm:right-[2%] lg:right-[21.1%]
                        cursor-pointer active:scale-85 transition-all duration-200 ease-in-out sm:w-[80px]
                        hover:scale-105 " />
                </div>
                <Line /> 
            </section>)}
            
           <section className="flex lg:flex-row sm:flex-col gap-12 w-full mt-8 sm:mb-150
            lg:mb-0">
                <div className="lg:w-[20%] sm:w-[100%] ">
                    <SideBar setCollection={setCollection} sorted={sorted} />
                </div>
                <div className="lg:w-[80%] sm:w-[100%]">
                    <div className="flex flex-col ">
                        <div className="flex justify-between items-center lg:mb-0 sm:mb-20">
                            <div className="lg:text-2xl sm:text-6xl flex items-center gap-2
                                    font-medium">
                                <span className="text-gray-500">
                                    ALL
                                </span>
                                <p>COLLECTIONS</p>
                                <div className="w-12 h-[2.5px] bg-black"></div>
                            </div>
                            <div className="lg:w-[180px] lg:h-[45px] border-2 border-gray-300 
                            flex items-center justify-center font-medium sm:w-[280px] sm:h-[100px]
                                lg:text-sm p-2 rightHeader">
                                <label htmlFor="sort" className="lg:text-base sm:text-2xl">Sort by:
                                    <select onChange={(e) => {setSorted(e.target.value)}} 
                                        className="outline-none cursor-pointer " 
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
                        {collection.length > 0 ? 
                            (<div className="mt-10.5 grid lg:gap-y-10 lg:gap-x-4 lg:grid-cols-4
                                sm:grid-cols-2 sm:gap-x-10 sm:gap-y-25 collections">
                                {allCollections}
                            </div>) : 
                            (<div className="flex items-center justify-center collections w-full lg:h-[50vh] sm:h-[35vh] transition-all duration-500">
                                <h2 className="flex items-center justify-center lg:text-3xl sm:text-6xl font-medium mb-10 mt-8 gap-2">
                                    <span className="text-gray-500 sm:leading-normal text-center">
                                        SORRY. THE PRODUCT IS NOT AVAILABLE.
                                    </span> 
                                </h2>
                            </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}