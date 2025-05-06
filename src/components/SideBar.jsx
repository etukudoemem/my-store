import { useState, useEffect, useContext } from "react"
import { products } from "../assets/frontend_assets/assets"
import { cartContext } from "../contexts/cartContext"

export default function SideBar({ setCollection, sorted }) {

    const [filters, setFilters] = useState({
        category: [],
        type: []
    })

    const { search } = useContext(cartContext)
    
    const handleCategory = (e) => {
        const { id } = e.target
            
        if (filters.category.includes(id)) {
            setFilters({...filters, category: filters.category.filter((item) => item !== id)})   
        } else {
            setFilters({...filters, category: [...filters.category, id]})   
        } 
    }

    const handleType = (e) => {    
        const { id } = e.target
        
        if (filters.type.includes(id)) {
            setFilters({...filters, type: filters.type.filter((item) => item !== id)})
        } else {
            setFilters({...filters, type: [...filters.type, id]})
        }
    }

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
    }

    useEffect(() => {
        showFilteredProducts()
    }, [filters, sorted, search])


    return (
        <>
            <section className="mt-8">
                <h2 className="text-xl font-medium mb-8">
                    FILTERS
                </h2>
                <div className="border-solid border-gray-300 border-1
                    min-h-[145px] max-w-[250px] mb-4 py-4 px-4 text-sm">
                    <h3 className="text-sm font-medium mb-3">
                        CATEGORIES
                    </h3>
                    <div className="flex gap-2 items-center mb-2 text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleCategory(e)}} 
                            type="checkbox" 
                            id="Men" 
                        />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className="flex gap-2 items-center mb-2 text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleCategory(e)}} 
                            type="checkbox"
                            id="Women" 
                        />
                        <label htmlFor="women">Women</label>
                    </div>
                    <div className="flex gap-2 items-center text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleCategory(e)}} 
                            type="checkbox" 
                            id="Kids"
                        />
                        <label htmlFor="kids">Kids</label>
                    </div>
                </div>

                <div className="border-solid border-gray-300 border-1
                    min-h-[145px] max-w-[250px] py-4 px-4 text-sm">
                    <h3 className="text-sm font-medium mb-3">
                        TYPE
                    </h3>
                    <div className="flex gap-2 items-center mb-2 text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleType(e)}} 
                            type="checkbox" 
                            id="Topwear"
                        />
                        <label htmlFor="topwear">Topwear</label>
                    </div>
                    <div className="flex gap-2 items-center mb-2 text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleType(e)}} 
                            type="checkbox" 
                            id="Bottomwear"
                        />
                        <label htmlFor="bottomwear">Bottomwear</label>
                    </div>
                    <div className="flex gap-2 items-center text-gray-700">
                        <input className="cursor-pointer"
                            onChange={(e) => {handleType(e)}} 
                            type="checkbox" 
                            id="Winterwear"
                        />
                        <label htmlFor="winterwear">Winterwear</label>
                    </div>
                    
                </div>
            </section>

            
        </>
    )
}