import { ProductCard } from "../components/ProductCard"
import { products } from "../assets/frontend_assets/assets"
import { useParams } from "react-router-dom"



export const RelatedProducts = ({ productInfo }) => {

    const { productId } = useParams();

    let relatedProducts = products.filter((product) => product.category === productInfo.category);
    relatedProducts = relatedProducts.filter((product) => product.subCategory === productInfo.subCategory);
    relatedProducts = relatedProducts.splice(0, 6).filter((product) => product.id !== productId);
    relatedProducts = relatedProducts.map((product) => {
        return (
            <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
            />
        )
    })
    
    return (
        <>
            <section>
                <h2 className="text-center lg:text-xl sm:text-6xl font-medium mb-12 lg:mt-8
                    flex items-center justify-center gap-2 scroll sm:mt-14 ">
                    <span className="text-gray-500">
                        RELATED
                    </span> 
                    <p>PRODUCTS</p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <div className="lg:mt-10.5 grid lg:gap-y-10 lg:gap-x-4 lg:grid-cols-5 sm:grid-cols-2
                    sm:gap-y-74 lg:px-0 sm:px-10 sm:gap-x-12 sm:mt-[10%]">
                    {relatedProducts}
                </div>
            </section>
        </>
    )
}