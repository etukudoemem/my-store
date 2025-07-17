import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { app } from "../firebase/firebase.js"


export const storeContext = createContext()

export default function StoreContextProvider ({ children }) {

    const cartStorage = () => {
        let placeHolder = []
        const data = window.localStorage.getItem("MyStoreCart")
        const initialData = JSON.parse(data)
        
        if (initialData === null) {
            return placeHolder
        } else {
            return initialData
        }
        
    }  

    const orderStorage = () => {
        let placeHolder = []
        const data = window.localStorage.getItem("MyStoreOrder")
        const initialData = JSON.parse(data)
        
        if (initialData === null) {
            return placeHolder
        } else {
            return initialData
        }
        
    }  

    const orderDateStorage = () => {
        let placeHolder = []
        const data = window.localStorage.getItem("MyStoreOrderDate")
        const initialData = JSON.parse(data)
        
        if (initialData === null) {
            return placeHolder
        } else {
            return initialData
        }
        
    }  
    
    const initialCartState = cartStorage()

    const initialOrderState = orderStorage()

    const initialOrderDate = orderDateStorage()
    
    const [cartProduct, setCartProduct] = useState(initialCartState)

    const [orderedProduct, setOrderedProduct] = useState(initialOrderState)

    const [orderDate, setOrderDate] = useState(initialOrderDate)

    const [paymentMethod, setPaymentMethod] = useState()

    const [orderPayment, setOrderPayment] = useState("")

    const [search, setSearch] = useState("")

    const [isSearch, setIsSearch] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [modal, setModal] = useState({
        logOut: false,
        noSize: false,
        login: false,
        invalidEmail: false,
        weakPassword: false,
        noNetwork: false,
        wrongDetails: false,
        noCart: false,
        logInToast: false,
        logOutToast: false,
        signUpToast: false,
        orderToast: false
    })

    const navigate = useNavigate()

    const setCartStorage = () => {
        window.localStorage.setItem("MyStoreCart", JSON.stringify(cartProduct))
    }

    const setOrderStorage = () => {
        window.localStorage.setItem("MyStoreOrder", JSON.stringify(orderedProduct))
    }

    const setOrderDateStorage = () => {
        window.localStorage.setItem("MyStoreOrderDate", JSON.stringify(orderDate))
    }

    useEffect(() => {
        setCartStorage()
        setOrderStorage()
        setOrderDateStorage()
    }, [cartProduct, orderedProduct, orderDate])

    function getProductToCart(productId, selectedSize) { 
        if (!selectedSize) {
            setModal({...modal, noSize: true})
            return
        }

        if (!isLogged) {
            setModal({...modal, noCart: true})
            return
        } 
        
        const isInCart = cartProduct.find((product) => 
            product.id === productId && product.size === selectedSize)
        if (isInCart) {
            setCartProduct (
              cartProduct.map((item) => 
                item.id === productId && item.size === selectedSize ? 
                  {...item, quantity: item.quantity + 1 } : item 
             )
          )
          } else {
              setCartProduct([ 
                {id: productId, size: selectedSize, quantity: 1}, ...cartProduct]
              )
          }
              
    }

    function removeProductFromCart (productId, selectedSize) {
        const removedProduct = cartProduct.find((item) => 
            item.id === productId && item.size === selectedSize)
    
        setCartProduct(cartProduct.filter((item) => item !== removedProduct
            ))
    }

    function updateProductQuantity (e, productId, selectedSize) {
        if (e.target.value < 1) {
            removeProductFromCart(productId, selectedSize) 

        } else {
            setCartProduct (
                cartProduct.map((item) => 
                  item.id === productId && item.size === selectedSize ? 
                    {...item, quantity: parseInt(e.target.value) } : item 
               )
            )
        }   
    }

    function getCartQuantity () {

        let cartTotalQuantity = 0
        for (let index = 0; index < cartProduct.length; index++) {
            cartTotalQuantity = cartTotalQuantity + parseInt(cartProduct[index].quantity)
        }
        return cartTotalQuantity
    }

    function getCartTotal () {
        let cartSubTotal = 0
        cartProduct.map((item) => {
            for (let index = 0; index < products.length; index++) {
                if (products[index].id === item.id) {
                    cartSubTotal = cartSubTotal + (products[index].price * item.quantity)
                }   
            }
        })
        return cartSubTotal.toFixed(2)
    }

    function getProductToOrder () {
        setOrderedProduct([...cartProduct, ...orderedProduct])
        setOrderDate(new Date().toDateString())
        navigate("orders")
        setModal({...modal, orderToast: true})
        // if (isLogged) {
        //     navigate("orders")
        // }
        setCartProduct([])           
    }

    const clearOrder = () => {
        setOrderedProduct([])
        setOrderDate("")
    }

    // ********************************************************************************
    // *****************AUTHENTICATION "CONTEXT" BEGINS HERE***************************
    // ********************************************************************************

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const [isLogged, setIsLogged] = useState(false)

    const [noInput, setNoInput] = useState({
        name: false,
        email: false,
        password: false
    })

    const [noLoginInput, setNoLoginInput] = useState({
        email: false,
        password: false
    })
    
    const auth = getAuth(app)

    // const user = auth.currentUser
    // console.log(user?.email)

    const getUserInfo = (e) => {
        const { name } = e.target

        setNoInput({...noInput, [name]: false})

        setNoLoginInput({...noLoginInput, [name]: false})

        setUserInfo((userInfo) => ({...userInfo, [name]: e.target.value}))
    }

    const createUser = async(e) => {
        e.preventDefault()

        if (!userInfo.name) {
            setNoInput({...noInput, name: true})
            return
        }

        // if (userInfo.email) {
        //     setNoInput({...noInput, email: true})
        //     return
        // }

        if (!userInfo.password) {
            setNoInput({...noInput, password: true})
            return
        }
        
        try {
            await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            navigate("/")
            setModal({...modal, signUpToast:true})
            console.log(user)

        } catch (error) {
            if (error.message === "Firebase: Error (auth/network-request-failed).") {
                console.log("NetworkError" + ": " + "Please check your network and try again")
                setModal({...modal, noNetwork:true})
            } else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                console.log("Weak password. \n Password must be at least 6 characters")
                setModal({...modal, weakPassword: true})
            } 
            else if (error.message === "Firebase: Error (auth/missing-email).") {
                console.log("FirebaseError: Missing email")
                setNoInput({...noInput, email: true})
            }

            // if (error.message === "Firebase: Error (auth/invalid-email).") {
            //     setModal({...modal, invalidEmail:true})
            //     console.log("LoginError" + ": " + "PLease enter a valid registered email address" + error.message)
            // } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
            //     console.log("NetworkError" + ": " + "Please check your network and try again")
            //     setModal({...modal, noNetwork:true})
            // } else if (error.message === "Firebase: Error (auth/missing-password).") {
            //     console.log("LoginError" + ": " + "Please enter your password")
            //     setModal({...modal,weak:true})
            // } else if (error.message === "Firebase: Error (auth/invalid-credential).") {
            //     console.log("LoginError" + ": " + "Please enter valid login details")
            //     setModal({...modal, wrongDetails:true})
            // }
            
            else {
                console.error(error)
            }
            console.error(error)
        }
    }

    const logInUser = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            setIsLogged(true)
            navigate("/")
            setModal({...modal, logInToast: true})
            setUserInfo({email: "", password:""})
            setIsLoading(false)
            
        } catch (error) {
            if (!userInfo.email) {
                setNoLoginInput({...noLoginInput, email: true})
                return
            }

            if (!userInfo.password) {
                setNoLoginInput({...noLoginInput, password: true})
                return
            }

            if (error.message === "Firebase: Error (auth/network-request-failed).") {
                console.log("NetworkError" + ": " + "Please check your network and try again")
                setModal({...modal, noNetwork:true})
            
            } else if (error.message === "Firebase: Error (auth/invalid-credential).") {
                console.log("LoginError" + ": " + "Please enter valid login details")
                setModal({...modal, wrongDetails:true})
                setUserInfo({name:"", email:"", password:""})
            } else {
                console.error(error)
            }
            
            // if (error.message === "Firebase: Error (auth/invalid-email).") {
            //     setModal({...modal, invalidEmail:true})
            //     console.log("LoginError" + ": " + "PLease enter a valid registered email address" + error.message)
            // } else if (error.message === "Firebase: Error (auth/missing-password).") {
            //     console.log("LoginError" + ": " + "Please enter your password")
            //     setModal({...modal,weak:true})
            // } else if (error.message === "Firebase: Error (auth/invalid-credential).") {
            //     console.log("LoginError" + ": " + "Please enter valid login details")
            //     setModal({...modal, wrongDetails:true})
            // }
            
        }
    }

    const observeUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogged(true)
                console.log(user.email + "\n" +user.uid)
            } else {
                console.log("no user logged in")
            }
        })
    }

    useEffect(() => {
        observeUser()
    }, [])


    useEffect(() => {
        setTimeout(()=> {
            setModal({...modal, logInToast:false})
        }, 10000)
        // console.log(modal)
    }, [modal.logInToast])

    useEffect(() => {
        setTimeout(()=> {
            setModal({...modal, signUpToast:false})
        }, 10000)
        // console.log(modal)
    }, [modal.signUpToast])

    useEffect(() => {
        setTimeout(()=> {
            setModal({...modal, logOutToast:false})
        }, 10000)
        // console.log(modal)
    }, [modal.logOutToast])

    useEffect(() => {
        setTimeout(()=> {
            setModal({...modal, orderToast:false})
        }, 10000)
        // console.log(modal)
    }, [modal.orderToast])

    // useEffect(() => {
    //     console.log(modal)
    // }, [modal])

    const logOutAttempt = () => {
        setModal({...modal, logOut:true})
    }

    const logOutUser = async() => {
        setIsLoading(true)
        try {
            await signOut(auth)
            setIsLogged(false)
            setCartProduct([])
            setOrderedProduct([])
            setModal({...modal, logOut:false, logOutToast:true})
            setIsLoading(false)

        } catch (error) {
            console.error(error)    
        }
        
    }

    // useEffect(() => {
        
    //     observeUser()
    // }, [user]) 

    
    const contextValues = {
        modal,
        setModal,
        getProductToCart, 
        cartProduct, 
        setCartProduct, 
        products, 
        getCartTotal, 
        removeProductFromCart,
        updateProductQuantity,
        getCartQuantity,
        search,
        setSearch,
        isSearch,
        setIsSearch,
        orderedProduct,
        setOrderedProduct,
        getProductToOrder,
        paymentMethod,
        setPaymentMethod,
        orderDate,
        clearOrder,
        // *********
        // *********
        getUserInfo,
        // user,
        userInfo,
        setUserInfo,
        createUser,
        logInUser,
        observeUser,
        logOutUser,
        isLogged,
        logOutAttempt,
        noInput,
        noLoginInput,
        isLoading,
        setIsLoading,
        showPassword,
        setShowPassword
    }


    return (
        <storeContext.Provider value={contextValues}>
            {children}
        </storeContext.Provider >
    )
}