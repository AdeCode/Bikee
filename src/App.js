import Routers from "./routes";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Routers/>
        <ToastContainer/>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
