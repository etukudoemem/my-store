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
                <h2 className="text-center text-xl font-medium mb-12 mt-8
                    flex items-center justify-center gap-2 scroll">
                    <span className="text-gray-500">
                        RELATED
                    </span> 
                    <p>PRODUCTS</p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <div className="mt-10.5 grid gap-y-10 gap-x-4 grid-cols-5">
                    {relatedProducts}
                </div>
            </section>
        </>
    )
}