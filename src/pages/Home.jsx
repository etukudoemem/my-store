import Subscribe from "../components/Subscribe"
import heroPhoto from "../assets/hero-photo2.jpg"
import ProductCard from "../components/ProductCard"
import Experience from "../components/Experience"
import { products } from "../assets/frontend_assets/assets"


export default function Home() {
    
    const latestCollections = products.slice(5,15).map((product) => (
        <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name} 
            price={product.price}
            image={product.image}
        />
    ))

    const bestSellers = products.slice(0,5).map((product) => {
        if (product.bestseller == true) {
            return (
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name} 
                    price={product.price}
                    image={product.image}
                />
            )
        }
    })

    return (
        <>
            <section className="w-full max-h-[500px] border-solid
                border-1 border-gray-300 mt-8 flex">
                <div className="w-1/2 max-h-[inherit] flex flex-col
                    justify-center items-center gap-y-3">
                    <p className="font-medium">OUR BEST SELLERS</p>
                    <p className="font-medium">Latest Arrivals</p>
                    <p className="font-medium">SHOP NOW</p>
                </div>
                <div className="w-1/2 max-h-[inherit]">
                    <img src={heroPhoto} alt=""/>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-center text-3xl font-medium mb-4 mt-8
                    flex items-center justify-center gap-2">
                        <span className="text-gray-500">
                            LATEST
                        </span> 
                        <p className="">COLLECTIONS</p>
            
                        <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <p className="w-[70%] text-center m-auto text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem recusandae molestiae.
                </p>
                <div className="mt-10.5 grid gap-y-10 gap-x-3 grid-cols-5
                            ">
                    {latestCollections}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-center text-3xl font-medium mb-4 mt-8
                    flex items-center justify-center gap-2">
                        <span className="text-gray-500">
                            BEST
                        </span> 
                        <p className="">SELLERS</p>
                        <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <p className="w-[70%] text-center m-auto text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem recusandae molestiae.
                </p>
                <div className="mt-10.5 grid gap-y-10 gap-x-4 grid-cols-5
                            ">
                    {bestSellers}
                    
                </div>
            </section>
            <Experience />
            <Subscribe />
        </>
    )
}