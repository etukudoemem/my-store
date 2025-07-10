import aboutPhoto from "../assets/about-photo2.jpg"
import { Accordion } from "../components/Accordion"
import { Subscribe } from "../components/Subscribe"

export const About = () => {

    return (
        <>
            <h1 className="text-center text-2xl font-medium mb-10 mt-8
                flex items-center justify-center gap-2">
                <span className="text-gray-500">
                    ABOUT
                </span> 
                <p className=""> US</p>
                <div className="w-12 h-[2.5px] bg-black"></div>
            </h1> 
            <section className="flex min-w-full lg:min-h-[450px] sm:min-h-[900px] mb-16 gap-0 
                justify-center lg:flex-row sm:flex-col">
                <div className="lg:w-[500px] sm:w-full max-h-[inherit] leftHeader">
                    <img className="w-[inherit] h-full " src={aboutPhoto} alt="clothes and shoes" />
                </div>
                <div className="lg:w-1/2 sm:w-full max-h-[inherit] flex flex-col rightHeader
                    justify-center text-gray-700 lg:px-10 sm:mt-10 lg:mt-0">
                    <p> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Optio sequi perspiciatis expedita quam magni tenetur, 
                        quos officia neque, voluptates placeat corporis tempora 
                        assumenda eum sed. Natus neque nemo optio quasi.
                    </p>
                    <br />
                    <p>
                        Voluptate aut, placeat voluptates odit mollitia laboriosam ea 
                        autem aperiam harum omnis reiciendis sit et! At fuga, odit 
                        voluptate natus.
                    </p> 
                    <br />
                    <h3 className="text-lg font-bold text-black">Our Mission</h3>
                    <br />
                    <p>
                        Animi magni dolore et iure non dicta asperiores, totam 
                        quasi iste dolores suscipit quaerat aut, inventore 
                        veritatis eveniet error neque mollitia molestiae voluptatum 
                        nihil doloribus eaque consequuntur minus ipsa! Porro.
                    </p>
                </div>
            </section>
            <section className="flex flex-col min-w-full">
                <h2 className="flex items-center sm:justify-center lg:justify-start text-xl font-medium  
                    mb-10 mt-8 gap-2 scroll">
                    <span className="text-gray-500">
                        WHY
                    </span> 
                    <p>CHOOSE US</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>  
                <div className="flex sm:flex-col lg:flex-row scroll sm:items-center lg:items-start">
                    <div className="flex flex-col justify-center lg:border-1 border-gray-300 
                        max-w-[420px] min-h-[250px] lg:px-16 sm:border-0 sm:items-center lg:items-start
                        sm:border-b-1 sm:border-gray-300 ">
                        <h3 className="font-bold mb-6 scroll">
                            Quality Assurance:
                        </h3>
                        <p className="text-gray-700 scroll sm:text-center lg:text-start">
                            We meticulously select and vet each product to ensure it meets
                            our stringent quality standards.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center sm:items-center lg:items-start 
                        lg:border-1 sm:border-0 border-gray-300 max-w-[420px] min-h-[250px] lg:px-16
                        sm:border-b-1 sm:border-gray-300">
                        <h3 className="font-bold mb-6 scroll">
                            Convenience:
                        </h3>
                        <p className="text-gray-700 scroll sm:text-center lg:text-start">
                            With our user-friendly interface and hassle-free ordering process, 
                            shopping has never been easier.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-solid sm:items-center 
                        lg:items-start lg:border-1 sm:border-0 border-gray-300 max-w-[420px] min-h-[250px] 
                        lg:px-16 ">
                        <h3 className="font-bold mb-6 scroll">
                            Exceptional Customer Service:
                        </h3>
                        <p className="text-gray-700 scroll sm:text-center lg:text-start">
                            Our team of dedicated professionals is here to assist you the way, 
                            ensuring your satisfaction is our top priority.
                        </p>
                    </div>
                </div>  
            </section>
            <section className="lg:mt-20 sm:mt-5 w-full flex flex-col sm:mb-25 lg:mb-0">
                <h2 className="flex items-center text-xl font-medium mb-10 mt-8 gap-2 scroll
                    sm:justify-center lg:justify-start">
                    <span className="text-gray-500">
                        FREQUENTLY
                    </span> 
                    <p>ASKED QUESTIONS</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>
                <Accordion 
                    title= {"How long does delivery take?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />
                <Accordion 
                    title= {"What is our return policy?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />
                <Accordion 
                    title= {"Are our products of high quality?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />
                <Accordion 
                    title= {"Do we deliver world wide?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />
                <Accordion 
                    title= {"Are we available 24/7?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />
                <Accordion 
                    title= {"Do we offer discounts?"}
                    content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis sequi deleniti, doloremque rem itaque modi accusamus animi rerum ea inventore molestias harum sint, vel quae obcaecati neque nisi facilis.
                            At sint aut ea officiis alias est illum atque temporibus sapiente, aliquid velit quam facere doloribus iure reprehenderit ab assumenda sed modi in nihil explicabo tempora culpa amet ipsa. Laborum?
                            Tempore accusamus deleniti excepturi voluptatem neque aliquid, nisi natus molestias pariatur nam aut sed! Error voluptatum, impedit necessitatibus itaque quae explicabo, aspernatur, nemo obcaecati sequi quidem eligendi mollitia assumenda. Alias.`} 
                />    
            </section>
            <section className="sm:mb-20 lg:mb-0">
                <Subscribe />
            </section>
        </>
    )
}