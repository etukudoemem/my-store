import aboutPhoto from "../assets/about-photo2.jpg"
import Line from "../components/Line"
import Subscribe from "../components/Subscribe"

export default function About() {

    return (
        <>
            <Line />
            <h1 className="text-center text-2xl font-medium mb-10 mt-8
                flex items-center justify-center gap-2">
                <span className="text-gray-500">
                        ABOUT
                </span> 
                <p className=""> US</p>
                <div className="w-12 h-[2.5px] bg-black"></div>
            </h1> 
            <section className="flex min-w-full min-h-[450px] mb-16 gap-0 justify-center">
                <div className="w-[500px] max-h-[inherit]">
                    <img className="w-[inherit] h-full " src={aboutPhoto} alt="clothes and shoes" />
                </div>
                <div className="w-1/2 max-h-[inherit] flex flex-col 
                    justify-center text-gray-700 px-10">
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
                <h2 className="flex items-center text-xl font-medium mb-10 mt-8 gap-2">
                    <span className="text-gray-500">
                            WHY
                    </span> 
                    <p>CHOOSE US</p> 
                    <div className="w-12 h-[2.5px] bg-black"></div>
                </h2>  
                <div className="flex">
                    <div className="flex flex-col justify-center border-solid 
                        border-1 border-gray-300 max-w-[420px] min-h-[250px] px-16
                        ">
                        <h3 className="font-bold mb-6">Quality Assurance:</h3>
                        <p className="text-gray-700">
                            We meticulously select and vet each product to ensure it meets
                            our stringent quality standards.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-solid 
                        border-1 border-gray-300 max-w-[420px] min-h-[250px] px-16
                        ">
                        <h3 className="font-bold mb-6">Convenience:</h3>
                        <p className="text-gray-700">
                            With our user-friendly interface and hassle-free ordering process, 
                            shopping has never been easier.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-solid 
                        border-1 border-gray-300 max-w-[420px] min-h-[250px] px-16
                        ">
                        <h3 className="font-bold mb-6">Exceptional Customer Service:</h3>
                        <p className="text-gray-700">
                            Our team of dedicated professionals is here to assist you the way, 
                            ensuring your satisfaction is our top priority.
                        </p>
                    </div>
                    
                </div>  
            </section>
            <Subscribe />
        </>
    )
}