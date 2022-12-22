import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurant from "./pages/Restaurant";
import SME from "./pages/SME";
import PreOrder from "./pages/PreOrder";
import HomePage from './pages/HomePage';
import Service from "./pages/Service";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import OrderCheckout from "./pages/OrderCheckout";
import ShippingAddress from "./pages/ShippingAddress";
import Payment from "./pages/Payment";
import OrderLayout from "./components/@shared/OrderLayout";
import HomeLayout from "./common/HomeLayout";
import BlackLayout from "./common/BlackLayout";
import NewHome from "./pages/NewHome";
import NotFound from "./components/@shared/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./components/@theme/theme";
import Main from "./pages/admin/Main";
import AddProduct from "./pages/admin/AddProduct";
import Orders from "./pages/admin/Orders";
import Login from '../src/pages/Login'
import SignUp from './pages/auth/SignUp';
import Products from './pages/admin/Products';


function Routers() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Routes>
            <Route path='/' element={<HomeLayout/>}>
              <Route index element={<HomePage />} />
              <Route path='service' element={<Service/>}></Route>
              <Route path='restaurant' element={<Restaurant/>}></Route>
              <Route path='sme' element={<SME/>}></Route>
              <Route path='pre-order' element={<PreOrder/>}></Route>
              <Route path='checkout' element={<Checkout/>}></Route>
              <Route path='order-summary' element={<OrderSummary/>}></Route>
            </Route>
            <Route path='/order-checkout' element={<OrderLayout/>}>
              <Route index element={<OrderSummary />} />
              <Route path="shipping-address" element={<ShippingAddress />} />
              <Route path="payment" element={<Payment />} />
              <Route path="summary" element={<Payment />} />
            </Route>
            <Route path='/bike-sharing' element={<BlackLayout/>}>
              <Route index element={<NewHome />} />
            </Route>
            {/* <Route path='/admin' element={ 
              <ThemeProvider theme={theme}>
                <Dashboard />
              </ThemeProvider>}
            >
              <Route index element={<Main />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route> */}
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/admin' element={<Dashboard />}>
              <Route index element={<Main />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
            </Route>
        </Routes>
        </ThemeProvider>
    </Router>
  )
}

export default Routers