import { Subscribe } from "../components/Subscribe"
import heroPhoto from "../assets/hero-photo2.jpg"
import { ProductCard } from "../components/ProductCard"
import { Experience } from "../components/Experience"
import { products } from "../assets/frontend_assets/assets"
import { ToastModal } from "../modals/ToastModal"
import checkMarkIcon from "../assets/checkmark.png"
import { useContext } from "react"
import { storeContext } from "../contexts/storeContext"



export const Home = () => {

    const { modal } = useContext(storeContext);
    
    const latestCollections = products.slice(0,5).map((product) => (
        <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name} 
            price={product.price}
            image={product.image}
        />
    ));

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
    });

    return (
        <>
            {modal.logInToast && 
                (<ToastModal>
                    <img src={checkMarkIcon} alt="checkmark" width={35}/>
                    <p className="text-lg text-gray-500 font-medium">
                        Login Successful
                    </p>
                </ToastModal>)}
            {modal.signUpToast && (
                <ToastModal>
                    <img src={checkMarkIcon} alt="checkmark" width={35}/>
                    <p className="text-lg text-gray-500 font-medium">
                        Sign Up Successful
                    </p>
                </ToastModal>)}
            <section className="w-full lg:max-h-[500px] border-solid
                 mt-12 flex sm:flex-col sm:max-h-[1000px] lg:flex-row">
                <div className="lg:min-w-1/2 lg:min-h-[inherit] flex flex-col leftHeader
                    justify-center items-center gap-y-3 bg-green-200 text-gray-600
                    sm:min-w-full sm:min-h-[500px]">
                    <p className="font-medium text-4xl">OUR BEST SELLERS</p>
                    <p className="font-medium text-lg">Latest Arrivals</p>
                    <p className="font-medium text-2xl">SHOP NOW</p>
                </div>
                <div className="lg:min-w-1/2 lg:max-h-[inherit] rightHeader z-0 sm:min-w-full
                    ">
                    <img src={heroPhoto} alt=""/>
                </div>
            </section>

            <section className="lg:mt-16 sm:mt-[18%]">
                <h2 className="text-center text-3xl font-medium mb-4 mt-8
                        flex items-center justify-center gap-2">
                    <span className="text-gray-500">
                        LATEST
                    </span> 
                    <p className="">
                        COLLECTIONS
                    </p>
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <p className="w-[70%] text-center m-auto text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem recusandae molestiae.
                </p>
                <div className="mt-10.5 grid lg:gap-y-10 lg:gap-x-3 lg:grid-cols-5
                    sm:grid-cols-2 sm:gap-x-10 sm:gap-y-55 sm:px-10">
                    {latestCollections}
                </div>
            </section>

            <section className="lg:mt-16 sm:mt-[25%]">
                <h2 className="text-center text-3xl font-medium mb-4 mt-8
                    flex items-center justify-center gap-2 scroll">
                        <span className="text-gray-500">
                            BEST
                        </span> 
                        <p className="">SELLERS</p>
                        <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <p className="w-[70%] text-center m-auto text-gray-600 scroll">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem recusandae molestiae.
                </p>
                <div className="mt-10.5 grid lg:gap-y-10 lg:gap-x-3 lg:grid-cols-5
                    sm:grid-cols-2 sm:gap-x-10 sm:gap-y-55 sm:px-10">
                    {bestSellers}
                </div>
            </section>
            <section className="scroll sm:mt-[25%] lg:mt-0">
                <Experience />
            </section>
            <section className="scroll sm:mt">
                <Subscribe />
            </section>
        </>
    )
}