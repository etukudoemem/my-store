// import { createUserWithEmailAndPassword, 
//     getAuth, 
//     onAuthStateChanged, 
//     signInWithEmailAndPassword, 
//     signOut} from "firebase/auth";
// import { createContext, useContext, useEffect, useState } from "react";
// import { app } from "../firebase/firebase"
// import { useNavigate } from "react-router-dom";
// import { cartContext } from "./cartContext";


// export const authContext = createContext()

// export const AuthContextProvider = ({ children }) => {

//     const { setCartProduct, setOrderedProduct } = useContext(cartContext)
    
//     const [userInfo, setUserInfo] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     // const [hasAccount, setHasAccount] = useState(true)

//     const [isLogged, setIsLogged] = useState(false)

    
//     const navigate = useNavigate()

//     const auth = getAuth(app)

//     const user = auth.currentUser

//     const getUserInfo = (e) => {
//         const { name } = e.target
//         setUserInfo((userInfo) => ({...userInfo, [name]: e.target.value}))
//     }

//     const createUser = async(e) => {
//         e.preventDefault()
//         try {
//             await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
//             // if (auth.currentUser) {
//             //     navigate("profile")
//             // } else {
//             //     alert("please enter your details to sign up.")
//             // }

//             navigate("/")
//             console.log(user)
//         } catch (error) {
//             console.error(error)
//         }
        
//     }

//     const logInUser = async() => {
//         try {
//             await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
//             if (!userInfo.email || !userInfo.password) {
//                 alert("please enter valid details.")
//             }

//             setIsLogged(true)
            
//             navigate("/")
            
//         } catch (error) {
//             if (error.message === "Firebase: Error (auth/invalid-email).") {
//                 console.log("FirebaseError" + ": " + "Invalid credentials")
//             } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
//                 console.log("FirebaseError" + ": " + "Network error")
//             } else if (error.message === "Firebase: Error (auth/missing-password).") {
//                 console.log("FirebaseError" + ": " + "Please enter your password")
//             }
            
//             else {
//                 console.error(error)
//             }
//         }
        
//     }

//     const observeUser = () => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setIsLogged(true)
//                 console.log(user.email + "\n" +user.uid)
//             } 
//         })
//     }

//     const logOutUser = async() => {
//         try {
//             await signOut(auth)
//             setIsLogged(false)
//             await navigate("login")
//             alert("user signed out")
            
            
//         } catch (error) {
//             console.error(error)    
//         }
        
//     }

//     useEffect(() => {
        
//         observeUser()
//     }, [user]) 

//     const authValues = {
//         getUserInfo,
//         user,
//         userInfo,
//         setUserInfo,
//         createUser,
//         logInUser,
//         observeUser,
//         logOutUser,
//         isLogged
//     }

//     return (
//         <authContext.Provider value={authValues}>
//             {children}
//         </authContext.Provider>
//     )
// }