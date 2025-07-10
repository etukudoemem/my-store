export const Header = ({ children }) => {

    return (
        <>
            <div className="flex flex-col items-center
                    judtify-center">
                <h1 className="text-3xl font-medium mb-4"> 
                    {children}
                </h1>
                <p className="w-[70%] text-center text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem recusandae molestiae.
                </p>
            </div>
        </>
    )
}