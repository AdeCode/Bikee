import Layout from "./common/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";
import SME from "./pages/SME";
import PreOrder from "./pages/PreOrder";
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


function App() {
  return (
    <Router>
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
            <Route path="/admin-dashboard" element={
              <ThemeProvider theme={theme}>
                <Dashboard />
              </ThemeProvider>
              } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
