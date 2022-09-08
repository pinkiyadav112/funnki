import { Routes, Route } from 'react-router-dom';
import Shop from '../components/shop';
import Home from '../page/Home';
import Footer from "../components/footer";
import Headar from "../components/headar";
import Checkout from '../components/checkOut';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AddProduct from '../components/addProduct';
export default function Router() {
    return (
        <>
            <div className="bg">
                <Headar />
            </div>
            <br />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element ={<Login />} />
                <Route path='/addproduct' element ={<AddProduct />} />
                <Route path='/signup' element ={<Signup />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </>
    )
}