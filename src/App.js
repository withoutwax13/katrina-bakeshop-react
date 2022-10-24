import {
  Routes,
  Route,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Order from './Pages/Order'
import Payment from './Pages/Payment'
import Cart from "./Pages/Cart";
import Header from './Components/Header';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="order" element={<Order/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
