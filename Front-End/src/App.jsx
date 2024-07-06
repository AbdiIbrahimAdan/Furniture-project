
import './App.css'
import Header from './Components/Header/Header';
import Home from './page/Home/Hero/Hero'
import About from './page/About/About';
import Shop from './page/Shop/Shop';
import New from './page/New Arrival/NewArrival';
import Contact from './page/Contact/Contact';
import Login from './page/Login/Login';
import Signup from './page/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart, {CartProvider} from './page/Cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {
 
  return (
    <>
     <BrowserRouter>
     <CartProvider>
      <Header/>
      
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path='/about us' element={<About/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/new arrival' element={<New arrival/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
     
      <Route path='/cart' element={<Cart/>} />
      
      </Routes>
      </CartProvider>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
