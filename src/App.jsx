import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Collection } from './pages/Collection'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Admin } from './pages/Admin'
import { Layout } from './pages/Layout'
import { Profile } from './pages/Profile'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Product } from './pages/Product'
import { PlaceOrder } from './pages/PlaceOrder'
import { Order } from './pages/Order'
import { CartLayout } from './pages/CartLayout'
import { AuthLayout } from './pages/AuthLayout'


function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="collection" element={<Collection />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="admin" element={<Admin />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="cart" element={<CartLayout />}>
                    <Route index element={<Cart />}/>
                    <Route path="place-order" element={<PlaceOrder /> }/>
                </Route>
                <Route path="login" elementnt={<AuthLayout />}>
                    <Route index element={<Login />}/>
                    <Route path="signup" element={<SignUp />}/>
                </Route>
                <Route path="product/:productId" element={<Product />}/>
                <Route path="orders" element={<Order />}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
