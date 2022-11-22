import Layout from "./common/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    // <Router>
    //   <Routes>
    //       <Route element={<Layout/>}>
    //         <Route index element={<HomePage/>}></Route>
    //         <Route path='/' element={<HomePage/>}></Route>
    //         <Route path='/service' element={<Service/>}></Route>
    //       </Route>
    //     </Routes>
    // </Router>
    <div className="App font-poppings">
      <Nav/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
