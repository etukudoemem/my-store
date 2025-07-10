import { useState, useEffect, useContext } from "react"
import { storeContext } from "../contexts/storeContext"
import rightButton from "../assets/right-button.png"
import dropDown from "../assets/drop-down.png"

export const SideBar = ({ setCollection, sorted }) => {

    const [showFilters, setShowFilters] = useState(true)

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
                    className="sm:flex sm:items-center sm:gap-x-7 
                    lg:bg-white sm:w-40 lg:py-0 sm:py-3 sm:justify-center sm:shadow-xs lg:border-0
                     lg:shadow-[0] cursor-pointer sm:mb-4 lg:mb-0 sm:border-2 sm:border-gray-300">
                    <h2 className="text-xl font-medium lg:mb-8">
                        FILTERS
                    </h2>
                    <img className="lg:hidden"
                        src={showFilters ? dropDown : rightButton} alt="arrow" width={24}/>
                </div>
                <div className={`flex sm:justify-between sm:flex-row lg:flex-col
                     ${showFilters ? "sm:visible sm:opacity-100 h-auto lg:visible lg:opacity-100 duration-500" 
                        : "sm:invisible sm:opacity-0 sm:h-0 lg:visible lg:opacity-100 lg:h-auto duration-300"} 
                        transition-all ease-in-out lg:visible`}>
                    <div className="border-gray-300 border-1 
                        min-h-[145px] lg:max-w-[250px] sm:min-w-[48%] mb-4 py-4 px-4 text-sm">
                        <h3 className="text-sm font-medium mb-3">
                            CATEGORIES
                        </h3>
                        <div className="flex gap-2 items-center mb-2 text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox" 
                                id="Men" 
                            />
                            <label htmlFor="Men">Men</label>
                        </div>
                        <div className="flex gap-2 items-center mb-2 text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox"
                                id="Women" 
                            />
                            <label htmlFor="Women">Women</label>
                        </div>
                        <div className="flex gap-2 items-center text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleCategory(e)}} 
                                type="checkbox" 
                                id="Kids"
                            />
                            <label htmlFor="Kids">Kids</label>
                        </div>
                    </div>

                    <div className="border-solid border-gray-300 border-1
                        lg:min-h-[145px] sm:max-h-[145px] lg:max-w-[250px] sm:min-w-[48%] py-4 px-4 text-sm">
                        <h3 className="text-sm font-medium mb-3">
                            TYPE
                        </h3>
                        <div className="flex gap-2 items-center mb-2 text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Topwear"
                            />
                            <label htmlFor="Topwear">Topwear</label>
                        </div>
                        <div className="flex gap-2 items-center mb-2 text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Bottomwear"
                            />
                            <label htmlFor="Bottomwear">Bottomwear</label>
                        </div>
                        <div className="flex gap-2 items-center text-gray-700">
                            <input className="cursor-pointer"
                                onChange={(e) => {handleType(e)}} 
                                type="checkbox" 
                                id="Winterwear"
                            />
                            <label htmlFor="Winterwear">Winterwear</label>
                        </div>   
                    </div>
                </div>
            </section>    
        </>
    )
}