import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurant from "./pages/Restaurant";
import SME from "./pages/SME";
import PreOrder from "./pages/PreOrder";
import HomePage from './pages/HomePage';
import Service from "./pages/Service";
import SignIn from "./pages/auth/SignIn";
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
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp';
import Products from './pages/admin/Products';
import Product from './pages/admin/Product';
import EditProduct from './pages/admin/EditProduct';
import OrderCart from './pages/OrderCart';
import OrderHistory from './components/@shared/OrderHistory';
import ProtectedRoute from './components/@shared/ProtectedRoute';
import MeForm from './components/MeForm';
import ResetPassword from './pages/auth/ResetPassword';
import ForgotPassword from './pages/auth/ForgotPassword';
import UserProfile from './pages/UserProfile';
import OtpInput from './pages/auth/OtpInput';
import MuiModal from './components/@shared/MuiModal';
import Users from './pages/admin/Users';
import OrderConfirmation from './pages/OrderConfirmation';
import PreOrderPolicy from './pages/PreOrderPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payments from './pages/admin/Payments';

function Routers() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Routes>
            <Route path='/' element={<HomeLayout/>}>
              <Route index element={<HomePage />} />
              <Route path='service' element={<Service/>}></Route>
              <Route path='restaurant' element={<Restaurant/>}></Route>
              <Route path='privacy-policy' element={<PrivacyPolicy/>}></Route>
              <Route path='sme' element={<SME/>}></Route>
              <Route path='pre-order' element={<PreOrder/>}></Route>
              <Route path='pre-order-policy' element={<PreOrderPolicy/>}></Route>
              <Route path='summary' element={<OrderCart/>}></Route>
              <Route path='checkout' element={<Checkout/>}></Route>
              <Route path='order-summary' element={
                <ProtectedRoute>
                  <OrderSummary/>
                </ProtectedRoute>
                }></Route>
              <Route path='profile' element={
                <ProtectedRoute>
                  <UserProfile/>
                </ProtectedRoute>
                }></Route>
              <Route path='order-confirmation' element={<OrderConfirmation/>}></Route>
              <Route path='order-history' element={<OrderHistory/>}></Route>
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
            <Route path="muimodal" element={<MuiModal />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="password-reset" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="verify-token" element={<OtpInput />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/meform" element={<MeForm />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={
              <ProtectedRoute><Main /></ProtectedRoute>} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:productId" element={<Product />} />
              <Route path="product/:productId/edit" element={<EditProduct />} />
              <Route path="users" element={<Users />} />
              <Route path="payments" element={<Payments />} />
            </Route>
        </Routes>
        </ThemeProvider>
    </Router>
  )
}

export default Routers