import { useState, useEffect, useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import rightButton from "../assets/right-button2.png"
import dropDown from "../assets/drop-down2.png"

export const SideBar = ({ setCollection, sorted }) => {

    const [showFilters, setShowFilters] = useState(false)

    const [filters, setFilters] = useState({
        category: [],
        type: []
    });

    const { products, search } = useContext(storeContext);
    
    const handleCategory = (e) => {
        const { id } = e.target
            
        if (filters.category.includes(id)) {
            setFilters({...filters, category: filters.category.filter((item) => item !== id)})   
        } else {
            setFilters({...filters, category: [...filters.category, id]})   
        } 
    };

    const handleType = (e) => {    
        const { id } = e.target
        
        if (filters.type.includes(id)) {
            setFilters({...filters, type: filters.type.filter((item) => item !== id)})
        } else {
            setFilters({...filters, type: [...filters.type, id]})
        }
    };

    function showFilteredProducts () {
        let filteredProducts = [...products]
        
        if (filters.category.length > 0) {
            filteredProducts = filteredProducts.filter((item) => filters.category.includes(item.category))   
        } 

        if (filters.type.length > 0) {
            filteredProducts = filteredProducts.filter((item) => filters.type.includes(item.subCategory))
        }

        if (sorted === "low-high") {
            filteredProducts = filteredProducts.sort((a, b) => (a.price - b.price))
        }

        if (sorted === "high-low") {
            filteredProducts = filteredProducts.sort((a, b) => (b.price - a.price))
        }

        if (search) {
            filteredProducts = filteredProducts.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        
        setCollection(filteredProducts)
    };

    useEffect(() => {
        showFilteredProducts()
    }, [filters, sorted, search]);


    return (
        <>
            <section className="mt-8 leftHeader ">
                <div onClick={() => setShowFilters(!showFilters)}
                    className="sm:flex sm:items-center sm:gap-x-5 sm:border-3 sm:border-gray-300
                    sm:w-110 lg:py-0 sm:py-8 sm:justify-evenly sm:shadow-xs lg:border-0
                    lg:shadow-[0] cursor-pointer sm:mb-10 lg:mb-0 lg:justify-start">
                    <h2 className="lg:text-xl sm:text-5xl font-medium lg:mb-8">
                        FILTERS
                    </h2>
                    <img className="lg:hidden"
                        src={showFilters ? dropDown : rightButton} alt="arrow" width={50}/>
                </div>
                <div className={`flex sm:justify-between sm:flex-row lg:flex-col
                     ${showFilters ? "sm:visible sm:opacity-100 h-auto lg:visible lg:opacity-100 duration-500" 
                        : "sm:invisible sm:opacity-0 sm:h-0 lg:visible lg:opacity-100 lg:h-auto duration-300"} 
                        transition-all ease-in-out lg:visible`}>
                    <div className="lg:border-gray-300 lg:border-1 sm:h-[340px] lg:px-4 sm:px-8 sm:border-gray-300 
                        lg:h-[145px] lg:max-w-[250px] sm:min-w-[48%] mb-4 lg:py-4 sm:py-12 text-sm sm:border-2">
                        <h3 className="lg:text-sm sm:text-4xl lg:font-medium sm:font-medium lg:mb-3 sm:mb-5">
                            CATEGORIES
                        </h3>
                        <div className="flex gap-2 items-center lg:mb-2 sm:mb-6 text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 sm:scale-200 lg:scale-100"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox" 
                                id="Men" 
                            />
                            <label htmlFor="Men" className="lg:text-sm sm:text-4xl">
                                Men
                            </label>
                        </div>
                        <div className="flex gap-2 items-center lg:mb-2 sm:mb-6 text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 scale-200 lg:scale-100"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox"
                                id="Women" 
                            />
                            <label htmlFor="Women" className="lg:text-sm sm:text-4xl">
                                Women
                            </label>
                        </div>
                        <div className="flex gap-2 items-center text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 scale-200 lg:scale-100"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox" 
                                id="Kids"
                            />
                            <label htmlFor="Kids" className="lg:text-sm sm:text-4xl">
                                Kids
                            </label>
                        </div>
                    </div>

                    <div className="lg:border-gray-300 lg:border-1 lg:py-4 sm:py-12 lg:px-4 sm:px-8
                        lg:h-[145px] sm:h-[340px] lg:max-w-[250px] sm:min-w-[48%] sm:border-gray-300 sm:border-2">
                        <h3 className="lg:text-sm sm:text-4xl font-medium lg:mb-3 sm:mb-5">
                            TYPE
                        </h3>
                        <div className="flex gap-2 items-center lg:mb-2 sm:mb-6 text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 scale-200 lg:scale-100"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Topwear"
                            />
                            <label htmlFor="Topwear" className="lg:text-sm sm:text-4xl">
                                Topwear
                            </label>
                        </div>
                        <div className="flex gap-2 items-center lg:mb-2 sm:mb-6 text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 scale-200 lg:scale-100"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Bottomwear"
                            />
                            <label htmlFor="Bottomwear" className="lg:text-sm sm:text-4xl">
                                Bottomwear
                            </label>
                        </div>
                        <div className="flex gap-2 items-center text-gray-700">
                            <input className="cursor-pointer lg:mr-0 sm:mr-2 scale-200 lg:scale-100"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Winterwear"
                            />
                            <label htmlFor="Winterwear" className="lg:text-sm sm:text-4xl">
                                Winterwear
                            </label>
                        </div>   
                    </div>
                </div>
            </section>    
        </>
    )
}