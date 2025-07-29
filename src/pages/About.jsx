import aboutPhoto from "../assets/about-photo2.jpg"
import { Accordion } from "../components/Accordion"
import { Subscribe } from "../components/Subscribe"

export const About = () => {

    return (
        <>
            <div className="lg:mt-12 sm:mt-30">
                <h1 className="text-center lg:text-2xl sm:text-6xl font-medium sm:mb-20 lg:mb-12
                flex items-center justify-center gap-2">
                <span className="text-gray-500">
                    ABOUT
                </span> 
                <p className=""> US</p>
                <div className="w-12 h-[2.5px] bg-black"></div>
                </h1> 
            </div>
            <section className="flex min-w-full lg:min-h-[450px] sm:min-h-[900px] mb-16 gap-0 
                justify-center lg:flex-row sm:flex-col">
                <div className="lg:w-[500px] sm:w-full max-h-[inherit] leftHeader">
                    <img className="w-[inherit] h-full " src={aboutPhoto} alt="image" />
                </div>
                <div className="lg:w-1/2 sm:w-full max-h-[inherit] flex flex-col rightHeader
                    justify-center text-gray-700 lg:px-10 sm:mt-20 lg:mt-0 lg:text-base sm:text-5xl
                    leading-normal sm:font-light lg:font-normal">
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
                    <h3 className="lg:text-lg sm:text-5xl font-bold text-black lg:text-left
                        text-gray-700 sm:text-center">
                        Our Mission
                    </h3>
                    <br />
                    <p className="sm:w-full">
                        Animi magni dolore et iure non dicta suero asperiores, totam 
                        quasi iste dolores quisilini suscipit quaerat aut, inventore 
                        veritatis yus eveniet error neque mollitia molestiae voluptatum 
                        nihil doloribus eaque quasilian consequuntur minus ipsa! Porro mollitia.
                    </p>
                </div>
            </section>
            <section className="flex flex-col min-w-full">
                <h2 className="flex items-center sm:justify-center lg:justify-sttart lg:text-xl font-medium  
                    lg:mb-10 sm:mb-15 mt-8 gap-2 scroll sm:text-6xl">
                    <span className="text-gray-500">
                        WHY
                    </span> 
                    <p>CHOOSE US</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>  
                <div className="flex sm:flex-col lg:flex-row scroll sm:items-center lg:items-start">
                    <div className="flex flex-col justify-center lg:border-1 border-gray-300 
                        lg:max-w-[420px] sm:max-w-full min-h-[250px] lg:px-16 items-center
                        text-gray-700">
                        <h3 className="font-bold mb-6 scroll lg:text-base sm:text-5xl lg:text-start">
                            Quality Assurance
                        </h3>
                        <p className="scroll lg:text-start lg:text-base sm:text-4xl lg:leading-tight sm:leading-normal sm:w-200 lg:w-auto
                            sm:text-center">
                            We meticulously select and vet each product to ensure it meets
                            our stringent quality standards.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        lg:border-1 border-gray-300 lg:max-w-[420px] min-h-[250px] lg:px-16
                          sm:max-w-full text-gray-700">
                        <h3 className="font-bold mb-6 scroll lg:text-base sm:text-5xl
                            lg:mt-0 sm:mt-3">
                            Convenience
                        </h3>
                        <p className=" scroll lg:text-start lg:text-base sm:text-4xl lg:leading-tight sm:leading-normal sm:w-200 lg:w-auto
                            sm:text-center">
                            With our user-friendly interface and hassle-free ordering process, 
                            shopping has never been easier.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-solid items-center lg:border-1 sm:border-0 border-gray-300 lg:max-w-[420px] min-h-[250px] 
                        lg:px-16 sm:max-w-full text-gray-700 lg:mt-0 sm:mt-10">
                        <h3 className="font-bold mb-6 scroll lg:text-base sm:text-5xl lg:text-start">
                            Exceptional Customer Service
                        </h3>
                        <p className="text-gray-700 scroll lg:text-start lg:text-base sm:text-4xl lg:leading-tight sm:leading-normal
                            sm:w-205 lg:w-auto sm:text-center">
                            Our team of dedicated professionals is here to assist you the way, 
                            ensuring your satisfaction is our top priority.
                        </p>
                    </div>
                </div>  
            </section>
            <section className="lg:mt-20 sm:mt-5 w-full flex flex-col sm:mb-25 lg:mb-0">
                <h2 className="flex items-center lg:text-xl font-medium lg:mb-10 lg:mt-8 gap-2 scroll
                    lg:justify-start sm:justify-center sm:text-5xl sm:mt-35 sm:mb-20 ">
                    <span className="text-gray-500 block">
                        FREQUENTLY
                    </span>  
                    <p className=" ">ASKED QUESTIONS</p> 
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
            <section className="sm:mb-85 lg:mb-0 lg:mt-0 sm:mt-45">
                <Subscribe />
            </section>
        </>
    )
}