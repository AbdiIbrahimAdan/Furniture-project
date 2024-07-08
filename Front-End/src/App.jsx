
import './App.css'
import Header from './Components/Header/Header';
import Home from './page/Home/Home'
import About from './page/About/About';
import Shop from './page/Shop/Shop';
import New from './page/New Arrival/NewArrival';
import Contact from './page/Contact/Contact';
import Login from './page/Login/Login';
import Signup from './page/Signup/Signup';
import { AuthProvider } from './context/AuthContext';
import  ProtectedRoute from './Components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart, {CartProvider} from './page/Cart/Cart';
import Footer from './Components/Footer/Footer';


function App() {
 
  return (
    <>
   
     <BrowserRouter>
     <AuthProvider>
     <CartProvider>
      <Header/>
      
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path='/about us' element={<ProtectedRoute><About/> </ProtectedRoute>} />
      <Route path='/shop' element={<ProtectedRoute><Shop/></ProtectedRoute>} />
      <Route path='/new arrival' element={<ProtectedRoute><New arrival/></ProtectedRoute>} />
      <Route path='/contact' element={<ProtectedRoute><Contact/> </ProtectedRoute>} />
      <Route path='/login' element={<Login/> } />
      <Route path='/signup' element={<Signup/> } />
     
      <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      
      </Routes>
      
      </CartProvider>
     <Footer/>
     </AuthProvider>
     </BrowserRouter>
    </>
  )
}

export default App
