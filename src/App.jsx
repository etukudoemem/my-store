import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Product from './pages/Product'


function App() {

    

  return (
    <>
        <NavBar />
        <Routes>
          
            <Route path="/" element={<Home />}/>
            <Route path="collection" element={<Collection />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="admin" element={<Admin />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="product/:productId" element={<Product />}/>
          
        </Routes>
        <Footer />
    </>
  )
}

export default App
