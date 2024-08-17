import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componenets/Home';
import Header from './componenets/Header';
import './styles/app.scss'
import Contact from './componenets/Contact';
import Cart from './componenets/Cart';
import Checkout from './componenets/Checkout';
import ConfirmOrder from './componenets/ConfirmOrder';
import PaymentSuccess from './componenets/PaymentSuccess';
import Login from './componenets/Login';
import Profile from './componenets/Profile';
import Orders from './componenets/Orders';
import OrderDetails from './componenets/OrderDetails';
import Dashboard from './componenets/admin/Dashboard';
import User from './componenets/admin/User';
import Ordersad from './componenets/admin/Ordersad';
import About from './componenets/About';
import PageNotFound from './componenets/PageNotFound';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/confirmorder' element={<ConfirmOrder />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route path='/login' element={<Login />} />
      <Route path='/me' element={<Profile />} />
      <Route path='/myorder' element={<Orders />} />
      <Route path='/order/:id' element={<OrderDetails />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/users' element={<User />} />
      <Route path='/admin/orders' element={<Ordersad />} />
      <Route path='/about' element={<About />} />


      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App