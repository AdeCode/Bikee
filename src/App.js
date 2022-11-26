import Layout from "./common/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";
import SME from "./pages/SME";
import PreOrder from "./pages/PreOrder";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
          {/* <Route element={<Layout/>}> */}
            <Route index element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/restaurant' element={<Restaurant/>}></Route>
            <Route path='/sme' element={<SME/>}></Route>
            <Route path='/pre-order' element={<PreOrder/>}></Route>
          {/* </Route> */}
        </Routes>
        <Footer/>
    </Router>
    // <div className="App font-poppings">
    //   <Nav/>
    //   <HomePage/>
    //   <Footer/>
    // </div>
  );
}

export default App;
