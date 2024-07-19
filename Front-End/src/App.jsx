import './App.css';
import Header from './Components/Header/Header';
import Home from './page/Home/Home';
import About from './page/About/About';
import Shop from './page/Shop/Shop';
import NewArrival from './page/New Arrival/NewArrival';
import Contact from './page/Contact/Contact';
import Login from './page/Login/Login';
import Signup from './page/Signup/Signup';
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart, { CartProvider } from './page/Cart/Cart';
import Footer from './Components/Footer/Footer';
import AdminDashboard from './Components/AdminDashboard';
import Profile from './page/Profile/Profile';
import useAuth from './hooks/useAuth'; 


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <InnerApp />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function InnerApp() {
  const { user, } = useAuth();
  const isAdmin = user?.email === 'abdish88@gmail.com' && user?.password === '1234567';

  return (
    <>
      <Header isAdmin={isAdmin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about us' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path='/new arrival' element={<ProtectedRoute><NewArrival /></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin/*' element={<AdminDashboard /> }/>
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
